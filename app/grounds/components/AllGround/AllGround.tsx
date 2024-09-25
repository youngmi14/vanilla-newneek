import * as styles from './AllGround.css';
import Ground from '../Ground/Ground';

const AllGround = () => {
    return (
        <section className={styles.allGround}>
            <div>
                <h2 className={styles.title}>전체 그라운드</h2>
                <p className={styles.des}>관심있는 주제의 그라운드에 참여하고, 뉴니커와 함께 지식을 나눠요.</p>
            </div>
            <div className={styles.groundList}>
                <Ground />
                <Ground />
                <Ground />
            </div>
        </section>
    )
}

export default AllGround;
