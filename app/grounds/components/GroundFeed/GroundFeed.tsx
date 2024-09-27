import * as styles from './GroundFeed.css';
import PopularGroundPost from '../PopularGroundPost/PopularGroundPost';
import AllGround from '../AllGround/AllGround';

function GroundFeed () {
  return (
    <div className={styles.mainFeed}>
      <div className={styles.mainFeedWrap}>
        <PopularGroundPost />
        <AllGround />
      </div>
    </div>
  )
}

export default GroundFeed;