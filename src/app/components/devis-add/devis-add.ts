import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DevisService } from '../../services/devis';

@Component({
  selector: 'app-devis-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './devis-add.html',
  styleUrls: ['./devis-add.css']
})
export class DevisAddComponent implements OnInit {
  devisForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private devisService: DevisService) {}

  ngOnInit(): void {
    this.devisForm = this.fb.group({
      numeroOffre: ['', Validators.required],
      clientNom: ['', Validators.required],
      objet: ['', Validators.required],
      dateDevis: [new Date().toISOString().substring(0, 10)],
      sections: this.fb.array([]) 
    });
  }

  get sections() {
    return this.devisForm.get('sections') as FormArray;
  }

  getItemsControls(sectionIndex: number) {
    return (this.sections.at(sectionIndex).get('items') as FormArray).controls;
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      console.log("Fichier sélectionné:", this.selectedFile?.name);
    }
  }

  addSection() {
    const section = this.fb.group({
      titre: ['', Validators.required],
      items: this.fb.array([]) 
    });
    this.sections.push(section);
  }

  addItem(sectionIndex: number) {
    const items = this.sections.at(sectionIndex).get('items') as FormArray;
    items.push(this.fb.group({
      designation: ['', Validators.required],
      unite: ['U'],
      quantite: [1],
      prixUnitaire: [0]
    }));
  }

  removeSection(index: number) { this.sections.removeAt(index); }
  
  removeItem(sIndex: number, iIndex: number) {
    const items = this.sections.at(sIndex).get('items') as FormArray;
    items.removeAt(iIndex);
  }

  onSubmit() {
    if (this.devisForm.invalid) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const formData = new FormData();

    // --- CORRECTION ICI ---
    // On utilise this.devisForm.value au lieu de this.devis
    formData.append('devis', JSON.stringify(this.devisForm.value));

    // On envoie le fichier avec la clé 'file' (doit être identique au @RequestPart Java)
    if (this.selectedFile) {
      formData.append('file', this.selectedFile); 
    }

    this.devisService.saveDevis(formData).subscribe({
      next: (savedDevis: any) => {
        console.log('Succès !', savedDevis);
        // On lance l'impression automatiquement après le succès
        this.imprimer(savedDevis.id);
      },
      error: (err) => {
        console.error('Erreur lors de la sauvegarde', err);
        alert("Erreur lors de l'enregistrement");
      }
    });
  }

  imprimer(id: number) {
    this.devisService.downloadDevisPdf(id).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error: (err) => console.error("Erreur lors du téléchargement du PDF", err)
    });
  }
}