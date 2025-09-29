import { Component, inject, OnInit } from '@angular/core';
import { Scores } from '../../services/score/scores';
import { ScoresHouse } from '../../services/scoresHouse/scores-house';

@Component({
  selector: 'app-info-bar',
  imports: [],
  templateUrl: './info-bar.html',
  styleUrl: './info-bar.scss',
})
export class InfoBar {
  scoresHouseServices = inject(ScoresHouse);
  scoreService = inject(Scores);

}
