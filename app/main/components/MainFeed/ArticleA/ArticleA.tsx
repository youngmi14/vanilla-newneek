import Link from 'next/link';
import Article from '../Article/Article';
import ArrowR from '@/public/svg/ArrowR';
import * as styles from './ArticleA.css';

export default function ArticleA() {
  return (
    <div className={styles.articleA}>
      <div className={styles.articleWrap}>
        <div className={styles.titleWrap}>
          <strong className={styles.title}>뉴닉 아티클</strong>
          <Link className={styles.seemore} href="/posts?tab=news">
            <span>더 보기</span>
            <span>
              <ArrowR width={'1rem'} height={'1rem'} />
            </span>
          </Link>
        </div>
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
} 
