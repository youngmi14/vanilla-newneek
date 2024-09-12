// 공통 타입
export interface BaseType {
  type: string;
  id: number | null;
};
export type TagType = "나의AI" | "나의덕질" | "나의지구" | null;
export interface ItemType {
  content: string | null;
  handle: string;
  id: number;
  likes: number;
  save: number;
  tag: TagType;
  title: string;
};
interface ThumbnailType {
  altText: string | null;
  id: number;
  url: string;
}
export type BadgeType = 'seed' | 'verified' | 'planet';
export interface UserType {
  badge: BadgeType;
  bio: string;
  followIdByMe?: null | number;
  handle: string;
  name: string;
  photo: string;
  userId: string;
}
interface SeriesType {
  canRating: boolean;
  description: string;
  id: number;
  title: string;
}
export interface MetaType {
  countComments: number;
  countLikes: number;
  countReads: number;
  countRootings: number;
  countSaves: number;
  cursor: number;
  isLiked: boolean;
  isSaved: boolean;
  series: SeriesType;
  thumbnail: ThumbnailType;
  user: UserType;
  state: string;
  title: string;
}

// 지금은 all 을 StampType에서만 쓰지만, 다른곳에서도 쓴다면 all타입 생성
export interface StampType {
  all: {
    count: number;
    items: {
      count?: number;
      type?: number;
    }[]
  }
  my: [];
  text?: string;
  treeId?: number;
}
export interface PostType {
  article: null;
  channel: null;
  childrenCount: number;
  content: null;
  createdAt: string;
  editedAt: null;
  id: number;
  level: number;
  media: [];
  mentions: null;
  parentId: null | number;
  pinCount: number;
  pinId: null;
  readCount: null;
  stamps: StampType;
  text: string;
  treeId: number;
  user: UserType;
}
export interface ArticleType {
  contentPlain: string;
  dtPublished: string;
  id: number;
  meta: MetaType;
  state: string;
  title: StampType;
}