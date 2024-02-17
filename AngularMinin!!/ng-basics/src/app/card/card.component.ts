import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

//!Якщо все прописувати в одному файлі
// @Component({
//   selector: 'app-card',
//   template: `
//     <div class="card">
//       <h2>Card component</h2>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//     </div>
//   `,
//   styles: [
//     `
//       .card {
//         padding: 0.5rem 1rem;
//         border: 1px dashed #ccc;
//         margin-bottom: 1rem;
//       }
//       h2 {
//         margin-bottom: 0.5rem;
//       }
//     `,
//   ],
// })
export class CardComponent implements OnInit {
  @Input()
  card!: Card;
  @Input() index!: number;
  title = 'My Card Title';
  text = 'My sample text';

  cardDate: Date = new Date();
  textColor: string = '';

  disabled = false;
  ngOnInit(): void {}
  changeTitle() {
    this.card.title = 'Title has been changed!';
  }
  // inputHandler(value:any) {
  //   // const value = event.target.value;
  //   this.title = value;
  // }
}
