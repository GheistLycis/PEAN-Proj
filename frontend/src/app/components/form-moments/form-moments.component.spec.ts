import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMomentsComponent } from './form-moments.component';

describe('FormMomentsComponent', () => {
  let component: FormMomentsComponent;
  let fixture: ComponentFixture<FormMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMomentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
