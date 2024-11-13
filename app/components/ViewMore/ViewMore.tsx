import * as styles from './ViewMore.css';
import Link from 'next/link';
import ArrowR from '@/public/svg/ArrowR';

interface ViewMoreProps {
  link: string;
}

export default function ViewMore({ link }: ViewMoreProps) {
  return (
    <Link className={styles.viewMore} href={link}>
      <span>더 보기</span>
      <span>
        <ArrowR width={'1rem'} height={'1rem'} />
      </span>
    </Link>
  )
}
