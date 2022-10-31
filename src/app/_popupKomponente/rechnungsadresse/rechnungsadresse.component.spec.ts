import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungsadresseComponent } from './rechnungsadresse.component';

describe('RechnungsadresseComponent', () => {
  let component: RechnungsadresseComponent;
  let fixture: ComponentFixture<RechnungsadresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechnungsadresseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechnungsadresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
