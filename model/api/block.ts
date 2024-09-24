// block api

export interface ArticleNewsDataType {
  dtPublished: string;
  id: number;
  reads: number;
  title: string;
}
export interface ArticleNewsType {
  type: 'article-news';
  data: ArticleNewsDataType[];
}

export interface ArticleTrendingDataType {
  dtPublished: string;
  id: number;
  reads: number;
  title: string;
  user: string;
  userHandle: string;
}
export interface ArticleTrendingType {
  type: 'article-trending';
  data: ArticleTrendingDataType[]
}

export interface SeriesType {
  type: 'series';
  data: {
    articles: number;
    id: number;
    thumbnail: string;
    title: string;
    user: string;
  }[]
}

export interface ChannelType {
  type: 'channel';
  data: {
    description: string;
    id: number;
    members: number;
    name: string;
    thumbnail: string;
    topic: string;
  }[]
}
export interface BannerDataType {
  id: number;
  linkImage: string;
  linkImageAlt: string;
  linkImageSmall: string;
  linkLabel: string | null;
  linkUrl: string;
  title: string;
  type: number;
}
export interface BannerType {
  type: 'banner';
  data: BannerDataType[]
}

export interface PizzaDataType {
  endDt: string;
  formId: string;
  startDt: string;
  surveyDescription: string;
  surveyTitle: string;
}
export interface PizzaType {
  type: 'pizza';
  data: PizzaDataType;
}

// 데이터 아이템 타입 정의
export type DataItem =
  ArticleNewsType |
  ArticleTrendingType |
  BannerType |
  SeriesType |
  ChannelType |
  PizzaType;
