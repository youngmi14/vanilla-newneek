import * as styles from './PostB.css';
import Post from '../Post/Post';
import ViewMore from '@/components/ViewMore/ViewMore';
import { PostData } from '@/model/api/feed-web';

interface PostBProps {
  data: PostData;
}

const PostB:React.FC<PostBProps> = ({ data }) => {
  const { link, title, posts } = data;

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
              <Post key={post.id} data={post} />
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostB;