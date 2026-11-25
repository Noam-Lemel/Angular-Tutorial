import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntrance } from './user-entrance';

describe('UserEntrance', () => {
  let component: UserEntrance;
  let fixture: ComponentFixture<UserEntrance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEntrance],
    }).compileComponents();

    fixture = TestBed.createComponent(UserEntrance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
