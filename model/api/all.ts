import { PostType } from './common';

// 포스트 api
interface PageType {
  cursor: null;
  size: number;
  count: number;
}
export type AllType = {
  items: {
    id: number;
    posts: PostType[];
  }[],
  page: PageType;
}