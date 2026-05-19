import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisAdd } from './devis-add';

describe('DevisAdd', () => {
  let component: DevisAdd;
  let fixture: ComponentFixture<DevisAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevisAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(DevisAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
