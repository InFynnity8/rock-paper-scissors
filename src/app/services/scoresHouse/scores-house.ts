import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoresHouse {
  scoreHouse = signal<number>(0)

  
    setScore(payload: number): void {
      this.scoreHouse.update((x) => x + payload)
    }
  
    clearScore() {
      this.scoreHouse.set(0)
    }
}
