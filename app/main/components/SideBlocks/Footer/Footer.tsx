import * as styles from './Footer.css';


export default function Footer() {
  const items = [
    '뉴닉', '뉴스레터 구독', '채용', '제휴', '서비스 이용약관', '개인정보처리방침', '앱 다운로드', '고객센터', '브랜드 인식 조사'
  ];

  return (
    <footer>
      <nav className={styles.nav}>
        <strong className={styles.co}>ⓒ NEWNEEK Co., Ltd.</strong>
        <ul className={styles.ul}>
          {items.map((item, idx) => (
            <li 
              key={idx} 
              className={idx === items.length - 1 ? `${styles.lastLi}` : styles.li}
            >
            {item}
          </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
