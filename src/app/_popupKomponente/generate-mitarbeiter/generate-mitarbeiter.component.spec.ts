import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMitarbeiterComponent } from './generate-mitarbeiter.component';

describe('GenerateMitarbeiterComponent', () => {
  let component: GenerateMitarbeiterComponent;
  let fixture: ComponentFixture<GenerateMitarbeiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateMitarbeiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateMitarbeiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
