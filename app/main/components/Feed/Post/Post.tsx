import * as styles from './Post.css';
import nowNews from '@/mock/nowNews';
import { PostT } from '@/model/article';
import Link from 'next/link';
import Heart from '@/public/svg/Heart';
import Comment from '@/public/svg/Comment';

function Post() {
  return (
    <Link href={'/@tabletalk/post/54635'} className={styles.post}>
      <div>
        <div className={styles.title}>
          <div className={styles.authorWrap}>
            <span>이미지</span>
            <div className={styles.author}>
              <span className={styles.name}>테이블토크 이름길어지면 블라블라</span>
              <span></span>
            </div>
          </div>
          <time className={styles.time}>한 시간 전</time>
        </div>
        <p className={styles.content}>정부가 청약 월 납입인정한도 상향을 10월로 미뤘어요. 💸📅지난달 정부는 청약 월 납입인정한도를 10만 원에서 25만 원으로 상향하는 내용을 담은 개정안을 입법예고했는데요. 이르면 이달 중 시행할 예정이었지만, “이미 납입 중인 사람들한테 불공평해!” 라는 형평성 논란이 일자 다음달(10월) 1일 시행을 목표로 계획을 변경한 것. 🔗 https://www.newsis.com/view/NISX20240903_0002874070 </p>
      </div>
      <div className={styles.interaction}>
        <div>
          <span>
            <Heart 
              checked={true}
            />
          </span>
          <span>1</span>
        </div>
        <div>
          <Comment />
          <span>3</span>
        </div>
      </div>
    </Link>
  )
}

export default Post;