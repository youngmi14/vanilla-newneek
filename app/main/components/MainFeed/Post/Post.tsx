import * as styles from './Post.css';
import { PostType } from '@/model/api/common';
import Link from 'next/link';
import MiniHeart from '@/public/svg/MiniHeart';
import Comment from '@/public/svg/Comment';
import Image from 'next/image';
import { timeDifference } from '@/lib/util';
import Badge from '@/public/svg/Badge';

function Post(post: PostType) {
  return (
    <Link href={`/@tabletalk/post/${post.id}`} className={styles.post}>
      <div>
        <div className={styles.title}>
          <div className={styles.authorWrap}>
            <Image
              src={post.user.photo}
              alt={post.user.name}
              className={styles.img}
              width={28}
              height={28}
            />
            <div className={styles.author}>
              <span className={styles.name}>{post.user.name}</span>
              <span>
                <Badge type={post.user.badge} />
              </span>
            </div>
          </div>
          <time className={styles.time}>{timeDifference(post.createdAt)}</time>
        </div>
        <p className={styles.content}>{post.text}</p>
      </div>
      <div className={styles.interaction}>
        <div className={styles.iconWrap}>
          <span className={styles.heartWrap}>
            <MiniHeart 
              width={'12px'}
              height={'12px'}
            />
          </span>
          <span className={styles.iconText}>
            {post.stamps.all.count}
          </span>
        </div>
        <div className={styles.iconWrap}>
          <Comment
            width={'16px'}
            height={'16px'}
          />
          {post.childrenCount}
        </div>
      </div>
    </Link>
  )
}

export default Post;