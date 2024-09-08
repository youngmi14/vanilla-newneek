import { CommentProp } from "@/model/svg";
import { root } from '@/styles/globalTheme.css';

const Comment = ({
  width,
  height,
  checked
}: CommentProp) => {
  
  const style = {
    width: width ? width : '24px',
    height: height ? height : '24px',
    color: checked ? '#ff0000' : `${root.color.svg.unchecked}`,
  }

  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d="M9.94756 19.0904L9.75061 18.9477L9.50736 18.9477L4.79985 18.9479C3.22579 18.948 1.94971 17.672 1.94971 16.0979L1.94974 4.80007C1.94974 3.22606 3.22573 1.95007 4.79974 1.95007L19.1997 1.95008C20.7737 1.95008 22.0497 3.22607 22.0497 4.80008L22.0497 16.0979C22.0497 17.672 20.7736 18.948 19.1995 18.9479L16.271 18.9477L15.5209 18.9476V19.6977V22.2482C15.5209 22.6157 15.1043 22.8282 14.8068 22.6126L9.94756 19.0904Z" 
        strokeWidth="1.5">
      </path>
    </svg>
  );
}

export default Comment;