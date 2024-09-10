import { MetaType, UserType, StampType } from './common';

interface BaseType {
  type: string;
  id: number | null;
}
interface ItemType {
  comment: string;
  handle: string;
  id: number;
  likes: number;
  save: number;
  tag: string;
  title: string;
}

// newnewcup
type Newnewcup = BaseType & {
  data: {
    link: string;
    title: string;
    items: ItemType[]
  }
}

// article-a
type ArticlesT = {
  contentPlain: string;
  dtPublished: string;
  id: number;
  state: string;
  title: string;
  meta: MetaType;
}
type ArticleA = BaseType & {
  data: {
    link: string;
    title: string;
    articles: ArticlesT[]
  }
}

// divider
type Divider = BaseType & {
  data: {
    desc: string;
    title: string;
  }
}

// article
type Article = BaseType & {
  data: {
    contentPlain: string;
    dtPublished: string;
    id: number;
    meta: MetaType
    state: string;
    title: string;
  }
}

// post-b
type PostType = {
  article: null;
  channel: null;
  childrenCount: number;
  content: null;
  createdAt: number;
  editedAt: null;
  id: number;
  level: number;
  media: [];
  mentions: null;
  parentId: null;
  pinCount: number;
  pinId: null;
  readCount: null;
  stamps: StampType;
  text: string;
  treeId: number;
  user: UserType;
}
type PostB = BaseType & {
  data: {
    link: string;
    title: string;
    posts: PostType[]
  }
}

export type FeedData = {
  cursor: null;
  entities: (PostB|Newnewcup|ArticleA|Divider|Article)[];
}
