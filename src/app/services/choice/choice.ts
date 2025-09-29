import { Injectable, signal } from '@angular/core';

interface ChoiceType {
  choiceValue: 'rock' | 'paper' | 'scissors' | null;
}

@Injectable({
  providedIn: 'root',
})
export class ChoiceService {
  userChoice = signal<ChoiceType>({ choiceValue: null })

  getChoice() {
    return this.userChoice()
  }

  setChoice(newChoice: ChoiceType): void {
    this.userChoice.set(newChoice);
  }
}
