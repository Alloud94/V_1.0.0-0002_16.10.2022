import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruppenComponent } from './gruppen.component';

describe('GruppenComponent', () => {
  let component: GruppenComponent;
  let fixture: ComponentFixture<GruppenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruppenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruppenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
