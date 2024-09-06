import * as styles from './Article.css';
import Link from 'next/link';
import Image from 'next/image';

function Article() {
  return (
    <Link className={styles.article} href={'/'}>
      <article className={styles.articleWrap}>
        <div className={styles.contentDiv}>
          <div className={styles.thum}>
            <Image
              alt="[노동법 A to Z] A. 첫 출근 날 반드시 알아야 하는 OOOOO"
              src='https://newneek.co/_next/image?url=https%3A%2F%2Fd2phebdq64jyfk.cloudfront.net%2Fmedia%2Farticle%2Fc629c41b98ae488f8e48b0c2a34eed71.jpg&w=1080&q=75'
              width={138}
              height={92}
              className={styles.thumImg}
            />
          </div>
          <div className={styles.contentWrap}>
            <div>
              <span className={styles.contentSummary}>노무사가 들려주는 노동법 A to Z</span>
            </div>
            <h2 className={styles.contentTitle}>[노동법 A to Z] A. 첫 출근 날 반드시 알아야 하는 ㅇㅇㅇㅇㅇ</h2>
            <p className={styles.contentDes}>어떤 일이든 첫 시작은 떨리는 법이지만 첫 출근은 유독 그런 것 같아요.뉴니커 분들의 멋진 출발을 응원하며 '첫 출근 날 반드시 알아야 하는 근로계약서'를 소개해드릴게요.근로계약서...</p>
          </div>
        </div>
        <div className={styles.metadata}>
          <div className={styles.metadataDiv}>
            <div className={styles.authWrap}>
              {/* <Image
                
              /> */}
              <div>
                <strong className={styles.author}>겨울에온초코바</strong>
                <span></span>
              </div>
            </div>
            <div className={styles.info}>
              <time>19시간 전</time>
              <span className={styles.dot}>•</span>
              <span>읽음 268</span>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <span className={styles.stat}>
            좋아요
            10
          </span>
          <span className={styles.stat}>
            댓글
            24
          </span>
          <span className={styles.stat}>
            북마크
            2
          </span>
        </div>
      </article>
    </Link>
  )
}

export default Article;