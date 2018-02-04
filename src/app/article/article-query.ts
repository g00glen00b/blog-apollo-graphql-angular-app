import gql from 'graphql-tag';

export const AllArticlesQuery = gql`query AllArticles {
  articles {
    id
    title
    author {
      id
      username
    }
  }
}`;

export const ArticleDetailQuery = gql`query Article($articleId: Int!) {
  article(id: $articleId) {
    id
    title
    text
    author {
      id
      username
      bio
    }
    comments {
      id
      text
      author {
        id
        username
      }
    }
  }
}`;
