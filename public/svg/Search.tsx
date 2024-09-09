import { SearchProp } from "@/model/svg";
import { root } from '@/styles/globalTheme.css';

const Search = ({
  width,
  height,
  header
}: SearchProp) => {

  const style = {
    width: width ? width : '24px',
    height: height ? height : '24px',
    color: header ? root.color.base.white : root.color.grayscale.gray_400
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      style={style}
      >
      <circle
        cx="11"
        cy="10.7156"
        r="6.33206"
        strokeWidth="2"></circle>
      <line
        x1="15.7194"
        y1="15.6702"
        x2="20.2792"
        y2="20.23"
        strokeWidth="2"
        strokeLinecap="round"></line>
    </svg>
  );
};

export default Search;