import StartNewNeek from '../StartNewNeek/StartNewNeek';
import MainFeed from '../MainFeed/MainFeed';
import SideBlocks from '../SideBlocks/SideBlocks';
import * as styles from './Main.css';

function Main() {
  return (
    <main className={styles.main}>
      <StartNewNeek />
      <MainFeed />
      <SideBlocks />
    </main>
  )
}

export default Main;
