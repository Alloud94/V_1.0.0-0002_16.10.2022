import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahlungskonditionenComponent } from './zahlungskonditionen.component';

describe('ZahlungskonditionenComponent', () => {
  let component: ZahlungskonditionenComponent;
  let fixture: ComponentFixture<ZahlungskonditionenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahlungskonditionenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZahlungskonditionenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
