import Image from 'next/image';
import * as styles from './StartNewNeek.css';

function StartNewNeek () {
  return (
    <aside className={styles.startNewNeek}>
      <div className={styles.startNewNeekWrap}>
        <Image
          src="https://newneek.co/_next/image?url=%2Fimages%2Fsidebar%2Fimg_profile.png&w=64&q=75"
          alt=""
          width={56} 
          height={56}
          className={styles.img}
        />
        <p className={styles.text}>
          세상이 궁금해?
          <br />
          쉽고 재밌는 지식 플랫폼, 뉴닉!
        </p>
        <button className={styles.startBtn}>뉴닉 시작하기</button>
      </div>
    </aside>
  )
}

export default StartNewNeek;