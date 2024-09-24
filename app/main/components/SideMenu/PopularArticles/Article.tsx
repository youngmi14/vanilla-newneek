import * as styles from './PopularArticles.css';

interface ArticleType {
  dtPublished: string;
  id: number;
  reads: number;
  title: string;
  user: string;
  userHandle: string;
}

interface ArticleProps {
  data: ArticleType;
}

const Article: React.FC<ArticleProps & {idx: number}> = ({ data, idx }) => {
  const {
    dtPublished,
    id,
    reads,
    title,
    user,
    userHandle
  } = data;
  
  return (
    <li className={styles.article}>
      <span className={styles.number}>{idx}</span>
      <div className={styles.content}>
        <p className={styles.articleTitle}>{title}</p>
        <div className={styles.infoWrap}>
          <span>{user}</span>
          <span>•</span>
          <span>읽음 {reads}</span>
        </div>
      </div>
    </li>
  )
}

export default Article;