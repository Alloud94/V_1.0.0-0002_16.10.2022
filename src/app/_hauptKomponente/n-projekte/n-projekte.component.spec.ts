import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NProjekteComponent } from './n-projekte.component';

describe('NProjekteComponent', () => {
  let component: NProjekteComponent;
  let fixture: ComponentFixture<NProjekteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NProjekteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NProjekteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
