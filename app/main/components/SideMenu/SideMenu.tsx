'use client'

import * as styles from './SideMenu.css';
import ArticleNews from './ArticleNews/ArticleNews';
import PopularArticles from './PopularArticles/PopularArticles';
import Banner from './Banner/Banner';
import Pizza from './Pizza/Pizza';
import Footer from './Footer/Footer';
import { useQuery } from '@tanstack/react-query';
import {
  DataItem,
  ArticleNewsType,
  ArticleTrendingType,
  SeriesType,
  ChannelType,
  BannerType,
  PizzaType
} from '@/model/api/block';

// 타입 가드 함수들
const isTypeArticleNews = (item: DataItem): item is ArticleNewsType => {
  return item.type === 'article-news';
};
const isTypeArticleTrending = (item: DataItem): item is ArticleTrendingType => {
  return !!item && item.type === 'article-trending';
};
const isTypeSeries = (item: DataItem): item is SeriesType => {
  return item.type === 'series';
};
const isTypeChannel = (item: DataItem): item is ChannelType => {
  return item.type === 'channel';
};
const isTypeBanner = (item: DataItem): item is BannerType => {
  return item.type === 'banner';
};
const isPizza = (item: DataItem): item is PizzaType => {
  return item.type === 'pizza';
}

const SideBlock: React.FC<{ item: DataItem }> = ({ item }) => {
  if (isTypeArticleNews(item)) {
    return <ArticleNews data={item.data} />;
  } else if (isTypeArticleTrending(item)) {
    return <PopularArticles data={item} />;
  } else if (isTypeBanner(item)) {
    return <Banner data={item.data} />;
  } else if (isPizza(item)) {
    return <Pizza data={item.data} />;
  }
  return null;
}

const SideBlocks = () => {
  const { data: data, isLoading, error } = useQuery({
    queryKey: ['block'],
    queryFn: async () => (await fetch('https://api.newneek.co/product/v1/home/blocks')).json()
  })

  if (isLoading) {
    return <div>로딩 중...</div>
  }
  if (error) {
    return <div>에러</div>
  }

  return (
    <aside className={styles.sideBlocks}>
      <div className={styles.sideBlocksWrap}>
        {data.entities.map((item:DataItem, idx: number) => 
          <SideBlock key={idx} item={item} />
        )}
        <Footer />
      </div>
    </aside>
  )
}

export default SideBlocks;
