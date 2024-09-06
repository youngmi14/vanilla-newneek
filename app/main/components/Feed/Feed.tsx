import * as styles from './Feed.css';
import NowNews from './NowNews/NowNews';
import NewnewCup from './NewnewCup/NewnewCup';
import Article from './Article/Article';

function Center() {
  return (
    <div className={styles.feed}>
      <div className={styles.header}>
        <div className={styles.relativeDiv}>
          <div className={styles.borderDiv}>
            <div className={styles.buttonWrap}>
              <button className={styles.button}>추천</button>
              <button className={styles.button}>아티클</button>
              <button className={styles.button}>포스트</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.articleWrap}>
        {/* 지금 뜨는 뉴스 */}
        <NowNews />
        {/* 뉴뉴컵 참여작 */}
        <NewnewCup />
        {/* 뉴닉 아티클 */}
        {/* 추천 포스트 */}
        {/* 추천 아티클 */}
        <Article />
      </div>
      <div className={styles.bottomMargin}></div>
    </div>
  )
}

export default Center;

