import * as styles from './Ground.css';
import Image from 'next/image';

const Ground = () => {
    return (
        <div className={styles.ground}>
            <Image 
                src="https://newneek.co/_next/image?url=https%3A%2F%2Fd2phebdq64jyfk.cloudfront.net%2Fmedia%2Fimage%2Fchannel%2Fthumbnail%2F%25E1%2584%2580%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25AE%25E1%2586%25AB%25E1%2584%2583%25E1%2585%25B3_%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2591%25E1%2585%25B5%25E1%2586%25AF__%25E1%2584%2582%25E1%2585%25A5_%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2580%25E1%2585%25A5_%25E1%2584%2587%25E1%2585%25AA%25E1%2586%25BB%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25B7__%25E1%2584%258B%25E1%2585%25A5%25E1%2584%2584%25E1%2585%25A2%25E1%2586%25BB%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25B7_.jpg&w=256&q=75"
                alt='뿌듯해 저장소'
                width={72}
                height={72}
                className={styles.thumbnail}
            />
            <div className={styles.content}>
                <strong className={styles.title}>뿌듯해 저장소</strong>
                <p className={styles.des}>오늘 하루 뿌듯한 날은 언제엿나요?</p>
                <div>
                    <span>1명</span>
                    <span>사회/이슈</span>
                </div>
            </div>
        </div>
    )
}

export default Ground;