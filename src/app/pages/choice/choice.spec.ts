import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Choice } from './choice';
import { Router } from '@angular/router';

describe('Choice', () => {
  let component: Choice;
  let fixture: ComponentFixture<Choice>;
  let mockRouter: { navigate: jest.Mock };

  beforeEach(async () => {
    mockRouter = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [Choice],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();

    fixture = TestBed.createComponent(Choice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('PlayAgain function should route to /playground', () => {
    const spy = jest.spyOn(component, 'playAgain');

    component.playAgain();
    expect(spy).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/playground']);
  });

  it('StartGame function works properly', () => {
    const mockScoreService = {
      score: jest.fn(() => {
        return 0;
      }),
    };
    const mockScoreHouseService = {
      scoreHouse: jest.fn(() => {
        return 0;
      }),
    };

    const spy = jest.spyOn(component, 'startGame');
    component.startGame();
    expect(spy).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/playground']);
    expect(mockScoreService.score()).toBe(0);
    expect(mockScoreHouseService.scoreHouse()).toBe(0);
  });

  it('Handle winner correctly', () => {
    const spy = jest.spyOn(component, 'handleWinner');
    component.handleWinner();
    expect(spy).toHaveBeenCalled();
  });

  it('Check for draw in the game', () => {
    component.userChoice = 'rock';
    component.houseChoice = 'rock';
    component.handleWinner();
    expect(component.results).toBe('Drew');
  });

  it('Check for a Win in the game', () => {
    component.userChoice = 'paper';
    component.houseChoice = 'rock';
    component.handleWinner();
    expect(component.results).toBe('Win');
  });

  it('Check for a Lose in the game', () => {
    component.userChoice = 'scissors';
    component.houseChoice = 'rock';
    component.handleWinner();
    expect(component.results).toBe('Lose');
  });

  it('check  ngAfterViewChecked lifecyle was called', () => {
    const spy = jest.spyOn(component, 'ngAfterViewChecked');
    component.ngAfterViewChecked();
    expect(spy).toHaveBeenCalled();
  });
});
