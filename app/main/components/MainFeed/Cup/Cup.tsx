import * as styles from './Cup.css';
import Link from 'next/link';
import Bookmark from '@/public/svg/Bookmark';
import Heart from '@/public/svg/Heart';
import { ItemType } from '@/model/api/common';
import Tag from '@/components/Tag/Tag';

interface CupProps {
  data: ItemType;
}
const Cup: React.FC<CupProps> = ({ data }) => {
  const { handle, id, tag, title, content, likes, save } = data;
  
  return (
    <Link href={`/@${handle}/article/${id}`} className={styles.cup}>
      {tag && <Tag tag={tag}>{tag}</Tag> }
      <div>
        <div className={styles.contentWrap}>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.contentWrap}>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
      <div className={styles.interaction}>
        <div className={styles.heartWrap}>
          <Heart
            checked={false} 
            width={'16px'}
            height={'16px'}
          />
          <span className={styles.iconText}>{likes}</span>
        </div>
        <div className={styles.bookmarkWrap}>
          <Bookmark
            checked={false} 
            width={'16px'}
            height={'16px'}
          />
          <span className={styles.iconText}>{save}</span>
        </div>
      </div>
    </Link>
  )
}

export default Cup;