import * as styles from './Feed.css';
import { FeedData } from '@/model/api/feed-web';

type FeedProps = FeedData;

function Feed({
  entities
}: FeedProps) {
  console.log('피드데이터 : ', entities)
  return (
    <div className={styles.articleWrap}>
      {entities.map(feed => <div key={feed.id}>{feed.type}</div>)}
    </div>
  )
}

export default Feed;