import StartNewNeek from '../StartNewNeek/StartNewNeek';
import MainFeed from '../MainFeed/MainFeed';
import SideMenu from '../SideMenu/SideMenu';
import * as styles from './Main.css';

function Main() {
  return (
    <main className={styles.main}>
      <StartNewNeek />
      <MainFeed />
      <SideMenu />
    </main>
  )
}

export default Main;
