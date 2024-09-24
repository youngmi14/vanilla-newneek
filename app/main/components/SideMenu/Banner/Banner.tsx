import Image from 'next/image';
import * as styles from './Banner.css';
import Link from 'next/link';
import { BannerDataType } from '@/model/api/block';

interface BannerProps {
  data: BannerDataType[];
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  const currentBanner = data && data.length > 0 ? data[0] : null;
  if (!currentBanner) return null;
  
  return (
    <Link href={currentBanner.linkUrl} className={styles.introduce}>
      <Image
        id={`${currentBanner.id}`}
        src={currentBanner.linkImage}
        alt={currentBanner.linkImageAlt}
        className={styles.img}
        width={238}
        height={78}
        />
    </Link>
  )
}

export default Banner;