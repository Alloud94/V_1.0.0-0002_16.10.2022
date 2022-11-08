import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragAbschliessenComponent } from './auftrag-abschliessen.component';

describe('AuftragAbschliessenComponent', () => {
  let component: AuftragAbschliessenComponent;
  let fixture: ComponentFixture<AuftragAbschliessenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuftragAbschliessenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuftragAbschliessenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
