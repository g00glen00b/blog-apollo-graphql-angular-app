import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsCardComponent } from './comments-card/comments-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [CommentsCardComponent],
  declarations: [CommentsCardComponent]
})
export class CommentModule { }
