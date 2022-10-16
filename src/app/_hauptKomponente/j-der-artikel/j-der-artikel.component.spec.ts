import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JDerArtikelComponent } from './j-der-artikel.component';

describe('JDerArtikelComponent', () => {
  let component: JDerArtikelComponent;
  let fixture: ComponentFixture<JDerArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JDerArtikelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JDerArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
