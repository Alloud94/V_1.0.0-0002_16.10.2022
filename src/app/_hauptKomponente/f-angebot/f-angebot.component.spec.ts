import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAngebotComponent } from './f-angebot.component';

describe('FAngebotComponent', () => {
  let component: FAngebotComponent;
  let fixture: ComponentFixture<FAngebotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAngebotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAngebotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
