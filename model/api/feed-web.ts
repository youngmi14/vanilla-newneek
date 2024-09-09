import { title } from './../../app/main/components/SideBlocks/PopularArticles/PopularArticles.css';
// feed-web api
interface FeedPost {
  article: string | null;
  content: string | null;
  id: number;
  level: number;
  text: string
}

interface FeedPostData {
  link: string;
  title: string;
  posts: FeedPost[];
}

interface FeedEntity {
  id: number;
  type: string;
  data: FeedPostData;
}

//------------------------------------
interface BaseType {
  type: string;
  id: number | null;
}

interface Thumbnail {
  altText: null | string;
  id: number;
  url: string;
}
interface Items {
  comment: string;
  handle: string;
  id: number;
  likes: number;
  save: number;
  tag: string;
  title: string;
}
interface Meta {
  countComments: number;
  countLikes: number;
  countReads: number;
  countRootings: number;
  countSaves: number;
  cursor: number;
  isLiked: boolean;
  isSaved: boolean;
}
interface Series {
  canRating: boolean;
  description: string;
  id: number;
  title: string;
}
interface User {
  badge: string;
  bio: string;
  handle: string;
  name: string;
  photo: string;
  userId: string;
}


// post-b
type PostB = BaseType & {
  data: {
    link: string;
    title: string;
    items: Items[]
  }[]
}

// newnewcup
type Newnewcup = BaseType & {
  data: {
    link: string;
    title: string;
    items: Items[]
  }
}

// article-a
type ArticlesT = {
  contentPlain: string;
  dtPublished: string;
  id: number;
  state: string;
  title: string;
  meta: Meta;
  series: Series;
  thumbnail: Thumbnail
  user: User;
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
    state: string;
    title: string;
    meta: Meta & {
      state: string;
      title: string;
      series: Series;
      thumbnail: Thumbnail
      user: User;
    }
  }
}

type PostB = BaseType & {
  data: {
    link: string;
    title: string;
    posts: {
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
      text: string;
      treeId: number;
      stamps: {
        text: string;
        treeId: number;
        my: [];
        all: {
          count: number;
          items: [];
        }
      }
      user: {
        badge: string;
        bio: string;
        followIdByMe: number | null;
        handle: string;
        name: string;
        photo: string;
        userId: string;
      }
    }[]
  }
}






export type FeedData = {
  cursor: null;
  entities: (PostB|Newnewcup|ArticleA|Divider|Article)[];
}