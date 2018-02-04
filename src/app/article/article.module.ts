import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ArticleOverviewComponent } from './article-overview/article-overview.component';
import { ArticleCardComponent } from './article-overview/article-card/article-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleService } from './article.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ProfileModule } from '../profile/profile.module';
import { CommentModule } from '../comment/comment.module';

const routes: Routes = [
  {path: 'articles', component: ArticleOverviewComponent},
  {path: 'article/:id', component: ArticleDetailComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ClarityModule, ProfileModule, CommentModule],
  providers: [ArticleService],
  declarations: [ArticleOverviewComponent, ArticleCardComponent, ArticleDetailComponent]
})
export class ArticleModule { }
