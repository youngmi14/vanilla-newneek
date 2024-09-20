import Article from '../Article/Article';
import ViewMore from '@/components/ViewMore/ViewMore';
import { ArticleAData } from '@/model/api/feed-web';
import * as styles from './ArticleA.css';

interface ArticleAProps {
  data: ArticleAData
}

const ArticleA: React.FC<ArticleAProps> = ({ data }) => {
  const { title, link, articles } = data;

  return (
    <div className={styles.articleA}>
      <div className={styles.articleWrap}>
        <div className={styles.titleWrap}>
          <strong className={styles.title}>{title}</strong>
          <ViewMore link={link} />
        </div>
        
        {articles.map((article) => 
          <Article key={article.id} data={article} />
        )}
      </div>
    </div>
  );
} 

export default ArticleA;