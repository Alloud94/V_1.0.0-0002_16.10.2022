import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateArtikelComponent } from './generate-artikel.component';

describe('GenerateArtikelComponent', () => {
  let component: GenerateArtikelComponent;
  let fixture: ComponentFixture<GenerateArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateArtikelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
