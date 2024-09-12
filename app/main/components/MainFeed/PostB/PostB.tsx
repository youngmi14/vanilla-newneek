import * as styles from './PostB.css';
import Post from '../Post/Post';
import ViewMore from '@/components/ViewMore/ViewMore';
import { PostData } from '@/model/api/feed-web';

export default function PostB({
  link, title, posts
}: PostData) {
  return (
    <div className={styles.PostB}>
      <div className={styles.PostBFlex}>
        <div className={styles.title}>
          <strong className={styles.strong}>{title}</strong>
          <ViewMore link={link} />
        </div>
        <div className={styles.postSection}>
          <div className={styles.postScroll}>
          <div className={styles.postWrap}>
            {posts.map(post => 
              <Post key={post.id} {...post} />
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}