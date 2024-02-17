import { Component } from '@angular/core';

@Component({
  selector: 'app-card-test',
  templateUrl: './card-test.component.html',
  styleUrl: './card-test.component.css'
})
export class CardTestComponent {
  title = 'My Card Title';
  text = 'My sample text';
  disabled = false;
  number = 42;
  array = [1, 1, 2, 3, 5, 8, 13];
  obj = { name: 'Alex', info: { age: 25, job: 'Frontend' } };
  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl =
        'https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256';
      this.disabled = true;
    }, 3000);
  }
  imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  getInfo(): string {
    return 'This is my info';
  }
}
