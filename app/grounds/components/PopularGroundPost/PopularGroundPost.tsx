import * as styles from './PopularGroundPost.css';
import ViewMore from '@/components/ViewMore/ViewMore';

const PopularGroundPost = () => {

  const POPULARGROUND_INFO = {
    title: "그라운드 인기 포스트",
    link: ""
  }

  return (
    <section className={styles.popularGroundPost}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>{POPULARGROUND_INFO.title}</h2>
        <ViewMore link={POPULARGROUND_INFO.link} />
      </div>
      <div>포스트리스트</div>  
    </section>
  )
}

export default PopularGroundPost;