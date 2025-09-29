import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoBar } from "./components/info-bar/info-bar";
import { Rules } from "./components/rules/rules";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InfoBar, Rules],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rock-paper-scissors');
}
