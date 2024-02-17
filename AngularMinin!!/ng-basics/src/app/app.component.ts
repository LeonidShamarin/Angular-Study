import { Component } from '@angular/core';
export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  toggle = true;

  cards: Card[] = [
    { title: 'This is Card 1', text: 'This is card number 1' },
    { title: 'This is card2', text: 'This is card number 2' },
    { title: 'Last card!', text: 'This is card number 3' },
  ];
  title = 'ng-basics';
  toggleCards() {
    this.toggle = !this.toggle;
  }
}
