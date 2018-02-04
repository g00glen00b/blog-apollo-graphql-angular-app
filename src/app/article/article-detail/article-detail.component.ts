import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(private route: ActivatedRoute, private service: ArticleService) { }

  ngOnInit() {
    this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .map(articleId => parseInt(articleId, 10))
      .switchMap(articleId => this.service.findOne(articleId))
      .subscribe(response => this.article = response.article);
  }

}
