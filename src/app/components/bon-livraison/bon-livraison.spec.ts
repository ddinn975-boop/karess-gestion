import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonLivraison } from './bon-livraison';

describe('BonLivraison', () => {
  let component: BonLivraison;
  let fixture: ComponentFixture<BonLivraison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonLivraison],
    }).compileComponents();

    fixture = TestBed.createComponent(BonLivraison);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
