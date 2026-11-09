import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3 } from './route3';

describe('Route3', () => {
  let component: Route3;
  let fixture: ComponentFixture<Route3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Route3],
    }).compileComponents();

    fixture = TestBed.createComponent(Route3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
