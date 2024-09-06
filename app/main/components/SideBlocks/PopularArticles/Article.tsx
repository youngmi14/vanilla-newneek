import * as styles from './PopularArticles.css';
import { ArticleT } from '@/model/article';

// props를 위한 interface 생성
interface ArticleProps {
  data: ArticleT
}

function Article({ data }: ArticleProps) {
  const { number, title, author, view } = data;
    
  return (
    <div className={styles.article}>
      <span className={styles.number}>{number}</span>
      <div className={styles.content}>
        <p className={styles.articleTitle}>{title}</p>
        <div className={styles.infoWrap}>
          <span>{author}</span>
          <span>•</span>
          <span>읽음 {view}</span>
        </div>
      </div>
    </div>
  )
}

export default Article;