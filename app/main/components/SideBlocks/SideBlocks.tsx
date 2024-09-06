import * as styles from './SideBlocks.css';
import Introduce from './Introduce/Introduce';
import OneMinuteNews from './OneMinuteNews/OneMinuteNews';
import NewnewCup from './NewnewCup/NewnewCup';
import PopularArticles from './PopularArticles/PopularArticles';
import Footer from './Footer/Footer';

function SideBlocks() {
  return (
    <aside className={styles.sideBlocks}>
      <div className={styles.sideBlocksWrap}>
        <Introduce />
        <NewnewCup />
        <OneMinuteNews />
        <PopularArticles />
        <Footer />
      </div>
    </aside>
  )
}

export default SideBlocks;
