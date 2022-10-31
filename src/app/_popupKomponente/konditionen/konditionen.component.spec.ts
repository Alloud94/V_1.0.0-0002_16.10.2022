import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonditionenComponent } from './konditionen.component';

describe('KonditionenComponent', () => {
  let component: KonditionenComponent;
  let fixture: ComponentFixture<KonditionenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonditionenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonditionenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
