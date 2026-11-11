import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2Child2 } from './route2-child2';

describe('Route2Child2', () => {
  let component: Route2Child2;
  let fixture: ComponentFixture<Route2Child2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Route2Child2],
    }).compileComponents();

    fixture = TestBed.createComponent(Route2Child2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
