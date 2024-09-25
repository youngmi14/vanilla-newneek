import * as styles from './MainFeed.css';
import PopularGroundPost from '../PopularGroundPost/PopularGroundPost';
import AllGround from '../AllGround/AllGround';

function MainFeed () {
  return (
    <div className={styles.mainFeed}>
      <div className={styles.mainFeedWrap}>
        <PopularGroundPost />
        <AllGround />
      </div>
    </div>
  )
}

export default MainFeed;