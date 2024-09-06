import Image from 'next/image';
import * as styles from './NewnewCup.css';

export default function NewnewCup() {
  return (
    <div className={styles.newnewCup}>
      <Image
        src="https://d2phebdq64jyfk.cloudfront.net/media/image/banner/%E1%84%82%E1%85%B2%E1%84%82%E1%85%B5%E1%86%A8%E1%84%83%E1%85%A1%E1%86%BA%E1%84%8F%E1%85%A9_%E1%84%82%E1%85%B2%E1%84%82%E1%85%B2%E1%84%8F%E1%85%A5%E1%86%B8_%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B3%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.gif"
        alt=""
        className={styles.img}
        width={238}
        height={78}
        />
    </div>
  )
}