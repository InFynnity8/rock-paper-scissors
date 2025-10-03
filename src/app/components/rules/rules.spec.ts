import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rules } from './rules';

describe('Rules', () => {
  let component: Rules;
  let fixture: ComponentFixture<Rules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rules],
    }).compileComponents();

    fixture = TestBed.createComponent(Rules);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Initial value for toggleRuleValue should be false', () => {
    expect(component.toggleRuleValue).toBe(false);
  });

  it('should call toggleRule and update the value', () => {
    const spy = jest.spyOn(component, 'toggleRule');

    component.toggleRule();
    expect(spy).toHaveBeenCalled();
    expect(component.toggleRuleValue).toBe(true);
  });
});
