'use client'

import * as styles from './MainFeed.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FeedData } from '@/model/api/feed-web';
import Feed from './Feed/Feed';


function MainFeed() {
  const [selectedTab, setSelectedTab] = useState<'recommend' | 'article' | 'post'>('recommend');

  const { data: data, isLoading, error } = useQuery({
    queryKey: ['feed'],
    queryFn: async () => (await fetch('https://api.newneek.co/product/v1/home/feed-web')).json()
  })

  let feed;

  if (isLoading) {
    feed = (
      <div>로딩 중...</div>
    )
  }
  if (error) {
    feed = (
      <div>에러</div>
    )
  }
  if (data) {
    feed = (
      <Feed {...data} />
    )
  }

  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <div className={styles.relativeDiv}>
          <div className={styles.borderDiv}>
            <div className={styles.buttonWrap}>
              <button
                className={selectedTab === "recommend" ? styles.buttonSelected : styles.button}
                onClick={() => setSelectedTab('recommend')}
              >추천</button>
              <button
                className={selectedTab === "article" ? styles.buttonSelected : styles.button}
                onClick={() => setSelectedTab('article')}
              >아티클</button>
              <button
                className={selectedTab === "post" ? styles.buttonSelected : styles.button}
                onClick={() => setSelectedTab('post')}
              >포스트</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.articleWrap}>
        {feed}
      </div>
      <div className={styles.bottomMargin}></div>
    </div>
  )
}

export default MainFeed;
