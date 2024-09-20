import { EntityType } from '@/model/api/feed-web';
import PostB from '../PostB/PostB';
import NewnewCup from '../NewnewCup/NewnewCup';
import Article from '../Article/Article';
import Divider from '../Divider/Divider';
import ArticleA from '../ArticleA/ArticleA';
import * as styles from './Feed.css';

interface FeedProps {
  data: EntityType[];
}

const Feed: React.FC<FeedProps> =({ data }) => {

  return (
    <div className={styles.articleWrap}>
      {data.map((feed, idx) => {
          switch (feed.type) {
            case 'post-b':
              return <PostB
                key={`post-b-${feed.id || idx}-${idx}`}
                data={feed.data}
              />
            case 'newnewcup':
              return <NewnewCup
                key={`newnewcup-${feed.id || idx}-${idx}`}
                data={feed.data}
              />
            case 'article':
              return <Article
                key={`article-${feed.id || idx}-${idx}`}
                data={feed.data}
              />
            case 'article-a':
              return <ArticleA
                key={`article-a-${feed.id || idx}-${idx}`}
                data={feed.data}
              />
            case 'divider':
              return <Divider key="divider" />
            default:
              return null;
          }
        })
      }
    </div>
  )
}

export default Feed;