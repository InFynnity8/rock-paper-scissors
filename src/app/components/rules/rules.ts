import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  imports: [],
  templateUrl: './rules.html',
  styleUrl: './rules.scss',
})
export class Rules {
  toggleRuleValue = false;
  toggleRule() {
    this.toggleRuleValue = !this.toggleRuleValue;
  }
}
