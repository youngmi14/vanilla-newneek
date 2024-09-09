import { MiniHeartProp } from "@/model/svg";
import { root } from '@/styles/globalTheme.css';

const MiniHeart = ({
  width,
  height
}: MiniHeartProp) => {

  const style = {
    width: width ? width : '24px',
    height: height ? height : '24px',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      color={root.color.primary.orange_900}
      style={style}
    >
      <path
        d="M12.0004 20.4C11.8741 20.4007 11.7488 20.3758 11.6319 20.3266C11.5149 20.2774 11.4086 20.205 11.3189 20.1134L3.86068 12.4247C2.92515 11.4514 2.40039 10.1374 2.40039 8.76812C2.40039 7.39881 2.92515 6.08481 3.86068 5.11155C4.80352 4.14356 6.0807 3.59998 7.4122 3.59998C8.74371 3.59998 10.0209 4.14356 10.9637 5.11155L12.0004 6.17887L13.0371 5.11155C13.9799 4.14356 15.2571 3.59998 16.5886 3.59998C17.9201 3.59998 19.1973 4.14356 20.1401 5.11155C21.0756 6.08481 21.6004 7.39881 21.6004 8.76812C21.6004 10.1374 21.0756 11.4514 20.1401 12.4247L12.6819 20.1134C12.5922 20.205 12.4858 20.2774 12.3689 20.3266C12.2519 20.3758 12.1267 20.4007 12.0004 20.4Z"
        strokeWidth="1.5"
        strokeLinejoin="round">
    </path>
    </svg>
  )
}

export default MiniHeart;