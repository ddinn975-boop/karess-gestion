export interface DevisItem {
  designation: string;
  unite: string;
  quantite: number;
  prixUnitaire: number;
  montantHt?: number;
}

export interface DevisSection {
  titre: string;
  items: DevisItem[];
}

export interface Devis {
  id?: number;
  numeroOffre: string;
  clientNom: string;
  objet: string;
  dateDevis: string;
  sections: DevisSection[];
  totalGeneralHt?: number;
}