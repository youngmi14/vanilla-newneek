import StartNewNeek from '../StartNewNeek/StartNewNeek';
import Feed from '../Feed/Feed';
import SideBlocks from '../SideBlocks/SideBlocks';
import * as styles from './Main.css';

function Main() {
  return (
    <main className={styles.main}>
      <StartNewNeek />
      <Feed />
      <SideBlocks />
    </main>
  )
}

export default Main;
