import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingExample } from './data-binding-example';

describe('DataBindingExample', () => {
  let component: DataBindingExample;
  let fixture: ComponentFixture<DataBindingExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingExample],
    }).compileComponents();

    fixture = TestBed.createComponent(DataBindingExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
