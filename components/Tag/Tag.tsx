import * as styles from './Tag.css';
import { TagType } from '@/model/api/common';

interface TagProps {
    tag: TagType;
}

export default function Tag ({tag}: TagProps
) {

    const style = {};
    return(
        <span className={styles.tag}>
            #{tag}
        </span>
    )
}