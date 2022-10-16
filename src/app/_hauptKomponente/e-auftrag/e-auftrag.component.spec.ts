import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAuftragComponent } from './e-auftrag.component';

describe('EAuftragComponent', () => {
  let component: EAuftragComponent;
  let fixture: ComponentFixture<EAuftragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EAuftragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EAuftragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
