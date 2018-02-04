import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AllArticlesQueryResponse } from './all-articles-query-response';
import { AllArticlesQuery, ArticleDetailQuery } from './article-query';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ArticleDetailQueryResponse } from './article-detail-query-response';

@Injectable()
export class ArticleService {

  constructor(private apollo: Apollo) { }

  findAll(): Observable<AllArticlesQueryResponse> {
    return this.apollo
      .query<AllArticlesQueryResponse>({ query: AllArticlesQuery })
      .map(result => result.data);
  }

  findOne(id: number): Observable<ArticleDetailQueryResponse> {
    return this.apollo
      .query<ArticleDetailQueryResponse>({ query: ArticleDetailQuery, variables: { articleId: id } })
      .map(result => result.data);
  }
}
