import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { ApolloConfigModule } from './apollo-config/apollo-config.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ArticleModule } from './article/article.module';
import { ProfileModule } from './profile/profile.module';
import { CommentModule } from './comment/comment.module';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/articles'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ApolloConfigModule,
    ArticleModule,
    ProfileModule,
    CommentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
