import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html'
})
export class ArticleOverviewComponent implements OnInit {
  articles: Article[];

  constructor(private service: ArticleService) { }

  ngOnInit() {
    this.service.findAll().subscribe(result => this.articles = result.articles);
  }

}
