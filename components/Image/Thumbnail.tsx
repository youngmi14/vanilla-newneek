import Image from "next/image";
import * as styles from './Image.css';

interface ThumbnailProps {
  src: string | undefined | null;
  width: number;
  height: number;
  alt: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt, width, height }) => {

  if (!src) {
    return <></>
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={styles.thumImg}
    />
  )

}

export default Thumbnail;