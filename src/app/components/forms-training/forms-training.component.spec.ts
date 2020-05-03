import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTrainingComponent } from './forms-training.component';

describe('FormsTrainingComponent', () => {
  let component: FormsTrainingComponent;
  let fixture: ComponentFixture<FormsTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
