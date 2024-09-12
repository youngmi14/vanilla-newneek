import { BaseType, ItemType, PostType, ArticleType } from './common';

// newnewcup
type NewnewcupT = BaseType & {
  data: {
    link: string;
    title: string;
    items: ItemType[]
  }
};

// article-a
type ArticleAT = BaseType & {
  data: {
    link: string;
    title: string;
    articles: ArticleType[]
  }
};

// divider
type DividerT = BaseType & {
  data: {
    desc: string;
    title: string;
  }
};

// article
type ArticleT = BaseType & {
  data: ArticleType;
};

// post-b
export interface PostData {
  link: string;
  title: string;
  posts: PostType[];
}
export type PostBT = {
  id: null | number;
  type: string;
  data: PostData;
};

export type EntityType = PostBT | NewnewcupT | ArticleAT | DividerT | ArticleT;

export type FeedData = {
  entities: EntityType[];
  cursor: null;
};
