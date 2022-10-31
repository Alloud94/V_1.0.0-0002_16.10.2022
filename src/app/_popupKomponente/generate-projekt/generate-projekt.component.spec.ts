import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateProjektComponent } from './generate-projekt.component';

describe('GenerateProjektComponent', () => {
  let component: GenerateProjektComponent;
  let fixture: ComponentFixture<GenerateProjektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateProjektComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
