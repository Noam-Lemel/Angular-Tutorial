import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2Child1 } from './route2-child1';

describe('Route2Child1', () => {
  let component: Route2Child1;
  let fixture: ComponentFixture<Route2Child1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Route2Child1],
    }).compileComponents();

    fixture = TestBed.createComponent(Route2Child1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
