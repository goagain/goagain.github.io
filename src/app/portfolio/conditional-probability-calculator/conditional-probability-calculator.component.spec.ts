import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalProbabilityCalculatorComponent } from './conditional-probability-calculator.component';

describe('ConditionalProbabilityCalculatorComponent', () => {
  let component: ConditionalProbabilityCalculatorComponent;
  let fixture: ComponentFixture<ConditionalProbabilityCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalProbabilityCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalProbabilityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
