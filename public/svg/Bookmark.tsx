import { BookmarkProp } from "@/model/svg";
import { root } from '@/styles/globalTheme.css';

const Bookmark = ({
    width,
    height,
    checked
}: BookmarkProp) => {    
    
    const style = {
        width: width ? width : '24px',
        height: height ? height : '24px',
        color: checked ? root.color.primary.orange_900 : root.color.grayscale.gray_400,
        fill: checked ? "currentColor" : "none"
    }

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={style}
        >
            <path d="M18.75 3H6C5.17157 3 4.5 3.67157 4.5 4.5V21.75L12.375 17.6738L20.25 21.75V4.5C20.25 3.67157 19.5784 3 18.75 3Z" 
                strokeWidth="1.5" 
                strokeLinejoin="round">
            </path>
        </svg>
    )
}

export default Bookmark;