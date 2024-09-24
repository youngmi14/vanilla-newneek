import * as styles from './ArticleNews.css';
import Image from 'next/image';
import { ArticleNewsDataType } from '@/model/api/block';

interface ArticleNewsProps {
  data: ArticleNewsDataType[];
}

const ArticleNews: React.FC<ArticleNewsProps> = ({ data }) => {
  const currentNews = data && data.length > 0 ? data[0] : null;

  if (!currentNews) return null;

  return (
    <div className={styles.articleNews}>
      <div className={styles.titleWrap}>
        <Image
          alt="1분 뉴스"
          src='https://newneek.co/_next/image?url=%2Fimages%2Fsidebar%2Fico_one_minute.png&w=1920&q=75'
          width='20'
          height='20'
        />
        <span className={styles.title}>1분 뉴스</span>
      </div>
      <div>
        <p className={styles.tag}>{currentNews.title}</p>
      </div>
    </div>
  )
}

export default ArticleNews;