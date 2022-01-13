import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditEligibilityComponent } from './credit-eligibility.component';

describe('CreditEligibilityComponent', () => {
  let component: CreditEligibilityComponent;
  let fixture: ComponentFixture<CreditEligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditEligibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
