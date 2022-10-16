import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProfilComponent } from './m-profil.component';

describe('MProfilComponent', () => {
  let component: MProfilComponent;
  let fixture: ComponentFixture<MProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
