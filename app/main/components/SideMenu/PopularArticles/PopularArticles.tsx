import * as styles from './PopularArticles.css';
import Article from './Article';
import { ArticleT } from '@/model/article';
import { ArticleTrendingType } from '@/model/api/block';

// data는 엄청 많은데, 그중 상위 5개만 가져와야 함
const data: ArticleT[] = [
  {
    number: 1,
    title: '너, 이래도 우주에 가고 싶니?',
    author: '우주애호박',
    view: 97
  },
  {
    number: 2,
    title: '설치하라는 거 다 했는데, 외않되?',
    author: '삼백',
    view: 70
  },
  {
    number: 3,
    title: '케이팝 덕후가 사랑하는 감성',
    author: '쑨디',
    view: 630
  },
  {
    number: 4,
    title: '자동차 문화를 이끄는 가장 Hype한',
    author: '디깅빌보',
    view: 61
  },
]

interface PopularArticlesProps {
  data: ArticleTrendingType;
}

const PopularArticles: React.FC<PopularArticlesProps> = ({ data: articleData }) => {
  const { data } = articleData;
  console.log('[인기있는 아티클] ==> ', data);

  return (
    <div className={styles.popularArticles}>
      <h2 className={styles.title}>지금 인기있는 아티클 🔥</h2>
      <ul className={styles.ul}>
        {data.map((article, idx) => (
          <Article data={article} key={idx} idx={idx+1} />
        ))}
      </ul>
    </div>
  )
}

export default PopularArticles;
