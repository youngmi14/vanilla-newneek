import * as styles from './Cup.css';
import Link from 'next/link';
import Bookmark from '@/public/svg/Bookmark';
import Heart from '@/public/svg/Heart';
import { ItemType } from '@/model/api/common';
import Tag from '@/components/Tag/Tag';

function Cup(item: ItemType) {
  return (
    <Link href={`/@${item.handle}/article/${item.id}`} className={styles.cup}>
      { item.tag && <Tag tag={item.tag} /> }
      <div>
        <div className={styles.contentWrap}>
          <p className={styles.title}>{item.title}</p>
        </div>
        <div className={styles.contentWrap}>
          <p className={styles.content}>{item.content}</p>
        </div>
      </div>
      <div className={styles.interaction}>
        <div className={styles.heartWrap}>
          <Heart
            checked={false} 
            width={'16px'}
            height={'16px'}
          />
          <span className={styles.iconText}>{item.likes}</span>
          </div>
        <div className={styles.bookmarkWrap}>
          <Bookmark
            checked={false} 
            width={'16px'}
            height={'16px'}
          />
          <span className={styles.iconText}>{item.save}</span>
        </div>
      </div>
    </Link>
  )
}

export default Cup;