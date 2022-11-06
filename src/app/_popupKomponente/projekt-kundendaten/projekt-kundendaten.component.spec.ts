import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektKundendatenComponent } from './projekt-kundendaten.component';

describe('ProjektKundendatenComponent', () => {
  let component: ProjektKundendatenComponent;
  let fixture: ComponentFixture<ProjektKundendatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektKundendatenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjektKundendatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
