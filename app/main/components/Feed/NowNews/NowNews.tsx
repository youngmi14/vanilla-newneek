import * as styles from './NowNews.css';
import Link from 'next/link';
import Post from '../Post/Post';
import ArrowR from '@/public/svg/ArrowR';

// 지금 뜨는 뉴스
function NowNews() {
  return (
    <div className={styles.nowNews}>
      <div className={styles.nowNewsFlex}>
        <div className={styles.title}>
          <strong className={styles.strong}>지금 뜨는 뉴스</strong>
          <Link className={styles.seemore} href="/posts?tab=news">
            <span>더 보기</span>
            <span>
              <ArrowR width={'1rem'} height={'1rem'} />
            </span>
          </Link>
        </div>
        <div className={styles.postSection}>
          <div className={styles.postScroll}>
            <PostList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NowNews;

function PostList() {
  const data = [
    1,
    2,
    3,
    4
  ];

  return (
    <div className={styles.postWrap}>
        {data.map((post, idx) => 
          <Post key={idx} />
      )}
    </div>
  )
}