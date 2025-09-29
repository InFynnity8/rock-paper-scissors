import { Component, inject } from '@angular/core';
import { ChoiceService } from '../../services/choice/choice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  imports: [],
  templateUrl: './playground.html',
  styleUrl: './playground.scss',
})
export class Playground {
  choiceService = inject(ChoiceService);
  router = inject(Router);  

  handleChoice(userChoice: 'rock' | 'paper' | 'scissors') {
    this.choiceService.setChoice({ choiceValue: userChoice });
    this.router.navigate(['/choice']);
  }
}
