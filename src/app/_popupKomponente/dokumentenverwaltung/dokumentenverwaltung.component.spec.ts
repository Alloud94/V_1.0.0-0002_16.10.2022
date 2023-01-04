import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumentenverwaltungComponent } from './dokumentenverwaltung.component';

describe('DokumentenverwaltungComponent', () => {
  let component: DokumentenverwaltungComponent;
  let fixture: ComponentFixture<DokumentenverwaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DokumentenverwaltungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DokumentenverwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
