import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelForm } from './ngmodel-form';

describe('NgmodelForm', () => {
  let component: NgmodelForm;
  let fixture: ComponentFixture<NgmodelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgmodelForm],
    }).compileComponents();

    fixture = TestBed.createComponent(NgmodelForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
