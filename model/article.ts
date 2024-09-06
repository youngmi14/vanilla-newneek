export type ArticleT = {
  number: number;
  title: string;
  author: string;
  view: number;
}

// 포스트
export type PostT = {
  time: string;
  heart: number;
  comment: number;
  content: string;
}

export interface NowNewsT extends PostT {}

// 뉴뉴컵
export type NewnewCupT = {
  title: string;
  des: string;
  heart: number;
  bookmark: number;
  tag?: string;
}

export type NewneekArticleT = {
  title: string;
  summary: string;
  content: string;
  author: string;
  time: string;
  view: number;
  heart: number;
  comment: string;
  bookmark: number;
  thum: string;
}