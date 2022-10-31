import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JahresabschlussComponent } from './jahresabschluss.component';

describe('JahresabschlussComponent', () => {
  let component: JahresabschlussComponent;
  let fixture: ComponentFixture<JahresabschlussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JahresabschlussComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JahresabschlussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
