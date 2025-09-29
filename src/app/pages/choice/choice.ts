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
    const rules: Record<string, string> = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper',
    };

    if (!this.userChoice) {
      this.router.navigate(['/playground']);
    }

    if (this.userChoice === this.houseChoice) {
      this.results = 'Drew';
    } else if (rules[this.userChoice!] === this.houseChoice) {
      this.results = 'Win';
      this.scoreService.setScore(1);
    } else {
      this.results = 'Lose';
      this.scoreHouseService.setScore(1);
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
