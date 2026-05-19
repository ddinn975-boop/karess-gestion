import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureAdd } from './facture-add';

describe('FactureAdd', () => {
  let component: FactureAdd;
  let fixture: ComponentFixture<FactureAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(FactureAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
