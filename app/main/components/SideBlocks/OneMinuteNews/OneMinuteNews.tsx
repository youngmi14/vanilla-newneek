import * as styles from './OneMinuteNews.css';
import Image from 'next/image';

export default function OneMinuteNews() {
  return (
    <div className={styles.oneMinuteNews}>
      <div className={styles.titleWrap}>
        <Image
          alt="1분 뉴스"
          src='https://newneek.co/_next/image?url=%2Fimages%2Fsidebar%2Fico_one_minute.png&w=1920&q=75'
          width='20'
          height='20'
        />
        <span className={styles.title}>1분 뉴스</span>
      </div>
      <div>
        <p className={styles.tag}>#당대표회담 #태풍산산 #폭염특보해제</p>
      </div>
    </div>
  )
}