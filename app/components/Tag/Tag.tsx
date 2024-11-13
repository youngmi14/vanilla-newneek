import * as styles from './Tag.css';
import { TagType } from '@/model/api/common';

interface TagProps {
    tag: TagType;
    children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ tag, children}) => {
    let tagColor: "orange" | "purple" | "green";
    
    switch (tag) {
        case "나의AI":
            tagColor = "orange"
            break;
        case "나의덕질":
            tagColor = "purple"
            break;
        case "나의지구":
            tagColor = "green"
            break;
        default:
            tagColor = "orange";
    }

    return (
        <span className={styles.tagVariants[tagColor]}>#{children}</span>
    )}

export default Tag;