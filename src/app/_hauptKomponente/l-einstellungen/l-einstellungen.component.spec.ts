import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LEinstellungenComponent } from './l-einstellungen.component';

describe('LEinstellungenComponent', () => {
  let component: LEinstellungenComponent;
  let fixture: ComponentFixture<LEinstellungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LEinstellungenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LEinstellungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
