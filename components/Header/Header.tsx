import * as styles from './Header.css';
import Search from '@/public/svg/Search';
import Bell from '@/public/svg/Bell';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navWrap}>
        <ul className={styles.navMenu}>
          <li>NEWNEEK</li>
          <li>홈</li>
          <li>시리즈</li>
          <li>그라운드</li>
          <li>아엠뉴</li>
        </ul>
        <ul></ul>
        <ul className={styles.navUser}>
          <li><Search/></li>
          <li><Bell/></li>
          <li>로그인</li>
        </ul>
      </div>
    </header>
  )
}
