import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPasswortComponent } from './b-passwort.component';

describe('BPasswortComponent', () => {
  let component: BPasswortComponent;
  let fixture: ComponentFixture<BPasswortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPasswortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BPasswortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
