import * as styles from './Cup.css';
import Link from 'next/link';
import Bookmark from '@/public/svg/Bookmark';
import Heart from '@/public/svg/Heart';
import { ItemType } from '@/model/api/common';
import Tag from '@/components/Tag/Tag';

function Cup(item: ItemType) {
  return (
    <Link href={`/@${item.handle}/article/${item.id}`} className={styles.cup}>
      <Tag tag={item.tag} />
      <div>
        <div>
          <p className={styles.title}>{item.title}</p>
        </div>
        <div className={styles.contentWrap}>
          <p className={styles.content}>{item.content}</p>
        </div>
      </div>
      <div className={styles.interaction}>
        <Heart
          checked={true} 
          width={'16px'}
          height={'16px'}
        />
        {item.likes}
        <Bookmark
          checked={true} 
          width={'16px'}
          height={'16px'}
        />
        {item.save}
      </div>
    </Link>
  )
}

export default Cup;