import { MetaType } from './common';

// article api reponse 타입

export interface ArticleType {
  contentPlain: string;
  dtPublished: string;
  id: number;
  meta: MetaType;
  state: string;
  title: string;
}

export type Articles = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ArticleType[]
}
