import Image from 'next/image';
import * as styles from './Pizza.css';
import { PizzaDataType } from '@/model/api/block';

interface PizzaProps {
  data: PizzaDataType;
}

const Pizza: React.FC<PizzaProps> = ({ data: pizzaData }) => {
  const { surveyTitle, startDt, endDt } = pizzaData;
  console.log("피자제목------------->", surveyTitle)
  return (
    <div className={styles.pizza}>
      <Image
        src='https://newneek.co/images/sidebar/img_logo_pizza.svg'
        alt='Pizza Station'
        width={132}
        height={20}
        className={styles.pizzaStaton}
      />
      <strong className={styles.title}>{ surveyTitle }</strong>
      <span className={styles.period}>{"기간 "}{ formatDate(startDt) }{" ~" }{ formatDate(endDt) }</span>
      <button>설문 참여하기</button>
    </div>
  )
}

export default Pizza;

function formatDate(date: string): string {
  const dateObj = new Date(date);

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;

  return `${month}월 ${day}일`;
}