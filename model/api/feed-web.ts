import { BaseType, ItemType, PostType, ArticleType } from './common';

// newnewcup
export type CupData = {
  link: string;
  title: string;
  items: ItemType[]
}
type NewnewcupT = BaseType & {
  type: 'newnewcup'
  data: CupData;
};

// article-a
export type ArticleAData = {
  link: string;
  title: string;
  articles: ArticleType[]
}
type ArticleAT = BaseType & {
  type: 'article';
  data: ArticleAData;
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
  type: 'post-b';
  data: PostData;
};

export type EntityType = PostBT | NewnewcupT | ArticleAT | DividerT | ArticleT;