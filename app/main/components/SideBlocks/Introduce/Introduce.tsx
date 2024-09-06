import Image from 'next/image';
import * as styles from './Introduce.css';


export default function Introduce() {
  return (
    <div className={styles.introduce}>
      <Image
        src="https://d2phebdq64jyfk.cloudfront.net/media/image/banner/banner-new-home.gif"
        alt="뉴닉이 궁금해?"
        className={styles.img}
        width={238}
        height={78}
        />
    </div>
  )
}
