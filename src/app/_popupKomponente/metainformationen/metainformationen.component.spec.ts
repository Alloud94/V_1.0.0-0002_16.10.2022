import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetainformationenComponent } from './metainformationen.component';

describe('MetainformationenComponent', () => {
  let component: MetainformationenComponent;
  let fixture: ComponentFixture<MetainformationenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetainformationenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetainformationenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
