import {
  AfterViewChecked,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
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
  gameOver = signal<boolean>(false);

  playAgain() {
    this.router.navigate(['/playground']);
  }
  startGame() {
    this.router.navigate(['/playground']);
    this.scoreHouseService.clearScore();
    this.scoreService.clearScore();
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
      this.gameOver.set(true);
      return;
    }
    if (this.scoreService.score() === 10) {
      this.gameOver.set(true);
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
