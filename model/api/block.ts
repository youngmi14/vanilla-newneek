// block api

// 공통 필드를 가진 기본 타입 정의
type BaseType = {
  type: string;
  data: { id: number }[] | { id: number };
}

// 공통 아티클 타입 정의
type BaseArticleType = BaseType & {
  data: {
    dtPublished: string;
    reads: number;
    title: string;
  }[];
}

// type: quiz
type QuizType = BaseType & {
  data: { id: number };
}

// type: article-news
type ArticleNewsType = BaseArticleType;

// type: article-trending
type ArticleTrendingType = BaseArticleType & {
  data: {
    user: string;
    userHandle: string;
  }[];
}

// type: series
type SeriesType = BaseArticleType & {
  articles: number;
  thumbnail: string;
  title: string;
  user: string;
}

// type: channel
type ChannelType = BaseType & {
  data: {
    description: string;
    members: number;
    name: string;
    thumbnail: string;
    topic: string;
  }[];
}

// type: banner
type BannerType = BaseType & {
  data: {
    linkImage: string;
    linkImageAlt: string;
    linkImageSmall: string;
    linkLabel: null | string;
    linkUrl: string;
    title: string;
    type: number;
  }[]
}

export type BlockData = {
  tag: string;
  entities: (QuizType|ArticleNewsType|ArticleTrendingType|SeriesType|ChannelType|BannerType)[];
}