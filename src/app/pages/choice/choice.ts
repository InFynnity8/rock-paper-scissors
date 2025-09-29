import { AfterViewChecked, Component, inject, OnInit } from '@angular/core';
import { ChoiceService } from '../../services/choice/choice';
import { Scores } from '../../services/score/scores';
import { Router } from '@angular/router';
import { ScoresHouse } from '../../services/scoresHouse/scores-house';

@Component({
  selector: 'app-choice',
  imports: [],
  templateUrl: './choice.html',
  styleUrl: './choice.scss',
})
export class Choice implements OnInit, AfterViewChecked {
  choiceService = inject(ChoiceService);
  scoreService = inject(Scores);
  scoreHouseService = inject(ScoresHouse);
  router = inject(Router);
  userChoice = this.choiceService.getChoice().choiceValue;
  selector: number = Math.floor((Math.random() * 10) % 3);
  possibleChoices = ['rock', 'paper', 'scissors'];
  houseChoice = '';
  results = '';

  playAgain() {
    this.router.navigate(['/playground']);
  }

  handleWinner() {
    if (this.userChoice === this.houseChoice) {
      this.results = 'Drew';
    } else if (this.userChoice === 'paper' && this.houseChoice === 'rock') {
      this.results = 'Win';
      this.scoreService.setScore(1);
    } else if (this.userChoice === 'paper' && this.houseChoice === 'scissors') {
      this.results = 'Lose';
      this.scoreHouseService.setScore(1);
    } else if (this.userChoice === 'rock' && this.houseChoice === 'scissors') {
      this.results = 'Win';
      this.scoreService.setScore(1);
    } else if (this.userChoice === 'rock' && this.houseChoice === 'paper') {
      this.results = 'Lose';
      this.scoreHouseService.setScore(1);
    } else if (this.userChoice === 'scissors' && this.houseChoice === 'paper') {
      this.results = 'Win';
      this.scoreService.setScore(1);
    } else if (this.userChoice === 'scissors' && this.houseChoice === 'rock') {
      this.results = 'Lose';
      this.scoreHouseService.setScore(1);
    } else { 
      this.router.navigate(['/playground'])
    }  
  }

  ngAfterViewChecked(): void {
     if (this.scoreHouseService.scoreHouse() === 10) {
      this.scoreHouseService.clearScore();
      this.scoreService.clearScore();
      alert('Game Over! 😒');
      this.playAgain();
      return;
    }
    if (this.scoreService.score() === 10) {
      this.scoreHouseService.clearScore();
      this.scoreService.clearScore();
      alert('You Won an iPhone 20! 🎉🎊🎊🎉🥳');
      this.playAgain();
      return;
    }
  }

  ngOnInit() {
  
    setTimeout(() => {
      this.houseChoice = this.possibleChoices[this.selector];
      this.handleWinner();
    }, 1000);
  }
}
