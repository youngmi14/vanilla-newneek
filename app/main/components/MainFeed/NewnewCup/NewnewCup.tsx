import * as styles from './NewnewCup.css';
import Cup from '../Cup/Cup';
import ViewMore from '@/components/ViewMore/ViewMore';
import { CupData } from '@/model/api/feed-web';

interface NewnewcupProps {
  data: CupData;
}
const NewnewCup: React.FC<NewnewcupProps> = ({ data }) => {
  const { title, link, items } = data;
  // console.log('NewnewCup: ', data)

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
            {items?.length > 0 ? (
              items.map((item) => <Cup key={item.id} data={item} />)
            ) : (
              <p>no cup</p> // 아이템이 없을 때 표시할 내용
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewnewCup;