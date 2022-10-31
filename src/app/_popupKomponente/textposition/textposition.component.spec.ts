import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextpositionComponent } from './textposition.component';

describe('TextpositionComponent', () => {
  let component: TextpositionComponent;
  let fixture: ComponentFixture<TextpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextpositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
