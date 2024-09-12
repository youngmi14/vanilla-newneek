import * as styles from './NewnewCup.css';
import Link from 'next/link';
import Cup from '../Cup/Cup';
import ArrowR from '@/public/svg/ArrowR';

function NewnewCup() {
  return (
    <div className={styles.newnewCup}>
      <div className={styles.newcupFlex}>
        <div className={styles.title}>
          <strong className={styles.strong}>뉴뉴컵 참여작</strong>
          <Link className={styles.seemore} href="/posts?tab=news">
            <span>더 보기</span>
            <span>
              <ArrowR width={'1rem'} height={'1rem'} />
            </span>
          </Link>
        </div>
        <div className={styles.cupSection}>
          <div className={styles.cupScroll}>
            <CupList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewnewCup;

function CupList() {
  const data = [
    1,
    2,
    3,
    4
  ];

  return (
    <div className={styles.cupWrap}>
        {data.map((post, idx) => 
          <Cup key={idx} />
      )}
    </div>
  )
}