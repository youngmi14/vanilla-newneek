import Link from 'next/link';
import { PostType } from '@/model/api/common';
import { timeDifference } from '@/lib/util';
import MiniHeart from '@/public/svg/MiniHeart';
import Comment from '@/public/svg/Comment';
import Badge from '@/public/svg/Badge';
import UserPhoto from '@/components/Image/UserPhoto';
import * as styles from './Post.css';

interface PostProps {
  data: PostType;
}
const Post: React.FC<PostProps> = ({ data }) => {
  const { id, user, stamps, text, childrenCount, createdAt } = data;

  return (
    <Link href={`/@tabletalk/post/${id}`} className={styles.post}>
      <div>
        <div className={styles.title}>
          <div className={styles.authorWrap}>
            <UserPhoto
              src={user.photo}
              alt={user.name}
              width={28}
              height={28}
            />
            <div className={styles.author}>
              <span className={styles.name}>{user.name}</span>
              <span>
                <Badge type={user.badge} />
              </span>
            </div>
          </div>
          <time className={styles.time}>{timeDifference(createdAt)}</time>
        </div>
        <p className={styles.content}>{text}</p>
      </div>
      <div className={styles.interaction}>
        {stamps.all.count > 0 && 
          <div className={styles.iconWrap}>
            <span className={styles.heartWrap}>
              <MiniHeart 
                width={'12px'}
                height={'12px'}
                />
            </span>
            <span className={styles.iconText}>
              {stamps.all.count}
            </span>
          </div>
        }
        <div className={styles.iconWrap}>
          <Comment
            width={'16px'}
            height={'16px'}
          />
          {childrenCount}
        </div>
      </div>
    </Link>
  )
}

export default Post;