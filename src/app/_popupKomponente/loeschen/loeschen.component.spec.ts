import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoeschenComponent } from './loeschen.component';

describe('LoeschenComponent', () => {
  let component: LoeschenComponent;
  let fixture: ComponentFixture<LoeschenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoeschenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoeschenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
