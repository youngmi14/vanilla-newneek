import Link from 'next/link';
import { ArticleType } from '@/model/api/articles';
import { timeDifference } from '@/lib/util';
import Badge from '@/public/svg/Badge';
import UserPhoto from '@/components/Image/UserPhoto';
import Thumbnail from '@/components/Image/Thumbnail';
import Heart from '@/public/svg/Heart';
import Bookmark from '@/public/svg/Bookmark';
import Comment from '@/public/svg/Comment';
import * as styles from './Article.css';

interface ArticleProps {
  data: ArticleType;
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  const {title, contentPlain, meta, dtPublished } = data;

  return (
    <Link className={styles.article} href={'/'}>
      <article className={styles.articleWrap}>
        <div className={styles.contentDiv}>
          <div className={styles.thum}>
            <Thumbnail
              src={meta.thumbnail?.url}
              alt={title}
              width={138}
              height={92}
            />
          </div>
          <div className={styles.contentWrap}>
            <div>
              <span className={styles.contentSummary}>{meta.series.title}</span>
            </div>
            <h2 className={styles.contentTitle}>{title}</h2>
            <p className={styles.contentDes}>{contentPlain}</p>
          </div>
        </div>
        <div className={styles.metadata}>
          <div className={styles.metadataDiv}>
            <div className={styles.authWrap}>
              <UserPhoto
                src={meta.user.photo || undefined}
                alt={meta.user.name}
                width={28}
                height={28}
              />
              <div className={styles.author}>
                <strong className={styles.authorName}>{meta.user.name}</strong>
                <span>
                  <Badge type={meta.user.badge} />
                </span>
              </div>
            </div>
            <div className={styles.info}>
              <time>{timeDifference(dtPublished)}</time>
              <span className={styles.dot}>•</span>
              <span>읽음 {meta.countReads}</span>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <span className={styles.stat}>
            <Heart 
              checked={meta.isLiked} 
              width={'18px'}
              height={'18px'}
            />
            {meta.countLikes}
          </span>
          <span className={styles.stat}>
            <Comment 
              width={'18px'}
              height={'18px'}
            />
            {meta.countComments}
          </span>
          <span className={styles.stat}>
            <Bookmark 
              checked={meta.isSaved} 
              width={'18px'}
              height={'18px'}
            />
            {meta.countSaves}
          </span>
        </div>
      </article>
    </Link>
  )
}

export default Article;