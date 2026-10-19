import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingRelearning } from './data-binding-relearning';

describe('DataBindingRelearning', () => {
  let component: DataBindingRelearning;
  let fixture: ComponentFixture<DataBindingRelearning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingRelearning],
    }).compileComponents();

    fixture = TestBed.createComponent(DataBindingRelearning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
