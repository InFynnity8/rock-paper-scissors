import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playground } from './playground';
import { Router } from '@angular/router';

describe('Playground', () => {
  let component: Playground;
  let fixture: ComponentFixture<Playground>;
  let mockRouter: { navigate: jest.Mock };

  beforeEach(async () => {
    mockRouter = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [Playground],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();

    fixture = TestBed.createComponent(Playground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Handle choice function works properly', () => {
    const spy = jest.spyOn(component, 'handleChoice');
    component.handleChoice('rock');
    expect(spy).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenLastCalledWith(['/choice'])
  });
});
