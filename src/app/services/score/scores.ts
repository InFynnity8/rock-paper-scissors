import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Scores {
  score = signal(0);

  setScore(payload: number) {
    this.score.update(s => s + payload);
  }

  clearScore() {
    this.score.set(0);
  }
}
