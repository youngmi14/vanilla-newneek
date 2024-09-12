import * as styles from './NewnewCup.css';
import Cup from '../Cup/Cup';
import ViewMore from '@/components/ViewMore/ViewMore';
import { CupData } from '@/model/api/feed-web';

function NewnewCup({
  link, title, items
}: CupData) {
  console.log('items: ', items)
  return (
    <div className={styles.newnewCup}>
      <div className={styles.newcupFlex}>
        <div className={styles.title}>
          <strong className={styles.strong}>{title}</strong>
          <ViewMore link={link} />
        </div>
        <div className={styles.cupSection}>
          <div className={styles.cupScroll}>
          <div className={styles.cupWrap}>
              {items.map(item => 
                <Cup key={item.id} {...item} />
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewnewCup;