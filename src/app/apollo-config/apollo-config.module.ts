import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  imports: [
    CommonModule,
    HttpLinkModule,
    ApolloModule
  ],
  declarations: []
})
export class ApolloConfigModule {

  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({ link: httpLink.create({uri: 'http://localhost:8080/graphql' }), cache: new InMemoryCache() });
  }
}
