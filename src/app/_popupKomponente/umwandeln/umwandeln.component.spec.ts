import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmwandelnComponent } from './umwandeln.component';

describe('UmwandelnComponent', () => {
  let component: UmwandelnComponent;
  let fixture: ComponentFixture<UmwandelnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmwandelnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmwandelnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
