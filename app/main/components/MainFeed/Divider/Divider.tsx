import * as styles from './Divider.css';

export default function Divider() {
  const data = {
    title: '추천 아티클',
    content: '뉴닉이 선정한 다양한 주제의 지식을 둘러보세요'
  }
  return (
    <div className={styles.divider}>
      <strong className={styles.title}>{data.title}</strong>
      <p className={styles.content}>{data.content}</p>
    </div>
  )
}