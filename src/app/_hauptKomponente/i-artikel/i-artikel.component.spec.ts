import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IArtikelComponent } from './i-artikel.component';

describe('IArtikelComponent', () => {
  let component: IArtikelComponent;
  let fixture: ComponentFixture<IArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IArtikelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
