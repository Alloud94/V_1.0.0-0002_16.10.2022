import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilensteinComponent } from './meilenstein.component';

describe('MeilensteinComponent', () => {
  let component: MeilensteinComponent;
  let fixture: ComponentFixture<MeilensteinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilensteinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeilensteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
