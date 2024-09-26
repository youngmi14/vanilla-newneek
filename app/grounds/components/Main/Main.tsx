import * as styles from './Main.css';
import PopularGroundPost from '../PopularGroundPost/PopularGroundPost';
import AllGround from '../AllGround/AllGround';

function Main () {
  return (
    <main className={styles.main}>
      {/* <StartNewNeek /> */}
      <div className={styles.mainFeed}>
        <div className={styles.mainFeedWrap}>
          <PopularGroundPost />
          <AllGround />
        </div>
      </div>
      {/* <SideMenu /> */}
    </main>
  )
}

export default Main;