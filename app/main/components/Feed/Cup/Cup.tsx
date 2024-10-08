import * as styles from './Cup.css';
import Link from 'next/link';

function Cup() {
  return (
    <Link href={'/'} className={styles.cup}>
      <span>#나의덕질</span>
      <div>
        <div>
          <p className={styles.title}>🧈 공기로 버터를 만들었다고?</p>
        </div>
        <div className={styles.contentWrap}>
          <p className={styles.content}>안녕하세요! 라이아입니다.이전 아티클에서 마가린의 유래와 마가린, 버터의 차이를 다뤘죠.https://newneek.co/@laia_1025/article/11888?utm_cam</p>
        </div>
      </div>
      <div className={styles.interaction}>
        <div>좋아요</div>
        <div>북마크</div>
      </div>
    </Link>
  )
}

export default Cup;