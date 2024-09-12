import { generateUniqueId } from '@/lib/util';
import { EntityType, FeedData } from '@/model/api/feed-web';
import PostB from '../PostB/PostB';
import NewnewCup from '../NewnewCup/NewnewCup';
import Article from '../Article/Article';
import Divider from '../Divider/Divider';
import ArticleA from '../ArticleA/ArticleA';
import * as styles from './Feed.css';

export default function Feed({
  entities
}: FeedData) {
  console.log('피드데이터 : ', entities)
  return (
    <div className={styles.articleWrap}>
      {entities.map((feed) =>
        <FeedBlock key={generateUniqueId()} {...feed} />
      )}
    </div>
  )
}

// 데이터 type따라 컴포넌트 생성
function FeedBlock({
  type,
  data
}: EntityType) {

  return (
    <>
      {type === 'post-b' && <PostB {...data} />}
      {type === 'newnewcup' && <NewnewCup />}
      {type === 'article-a' && <ArticleA />}
      {type === 'article' && <Article />}
      {type === 'divider' && <Divider />}
    </>
  )
}