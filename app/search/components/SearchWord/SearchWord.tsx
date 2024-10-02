import Link from "next/link"
import { root } from '@/styles/globalTheme.css';
import * as styles from './SearchWord.css';
import Close from '@/public/svg/Close';

interface SearchWordProp {
  word: string;
}

const SearchWord:React.FC<SearchWordProp> = ({ word }) => {
  return (
    <Link href={`./search/${word}`}>
      <span className={styles.searchWord}>
        {word}
        <Close
          width="14"
          height="14"
          color={root.color.grayscale.gray_400}
          />
      </span>
    </Link>
  )
}

export default SearchWord;