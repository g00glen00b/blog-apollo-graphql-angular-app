import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments-card',
  templateUrl: './comments-card.component.html'
})
export class CommentsCardComponent {
  @Input()
  comments: Comment[];

  constructor() { }
}
