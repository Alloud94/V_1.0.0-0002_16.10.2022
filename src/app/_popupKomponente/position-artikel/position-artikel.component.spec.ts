import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionArtikelComponent } from './position-artikel.component';

describe('PositionArtikelComponent', () => {
  let component: PositionArtikelComponent;
  let fixture: ComponentFixture<PositionArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionArtikelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
