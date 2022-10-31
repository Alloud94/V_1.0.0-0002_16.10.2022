import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsprechpartnerComponent } from './ansprechpartner.component';

describe('AnsprechpartnerComponent', () => {
  let component: AnsprechpartnerComponent;
  let fixture: ComponentFixture<AnsprechpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsprechpartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnsprechpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
