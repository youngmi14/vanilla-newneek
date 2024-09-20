import Image from "next/image";
import * as styles from './Image.css';

interface UserPhotoProps {
  src: string | undefined;
  width: number;
  height: number;
  alt: string;
}

const UserPhoto: React.FC<UserPhotoProps> = ({ src, alt, width, height }) => {
  const imgSrc = src || "https://newneek.co/_next/image?url=%2Fimages%2Fimg_default_profile_v2.png&w=32&q=75";
  const altVal = alt || "homeandnest";

  return (
    <Image
      src={imgSrc}
      alt={altVal}
      width={width}
      height={height}
      className={styles.authThum}
    />
  )

}

export default UserPhoto;