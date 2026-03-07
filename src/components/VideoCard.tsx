import Link from 'next/link';
import { getVideoById } from '@/lib/data';
import { youTubeThumbnailUrl } from '@/lib/youtube';
import { VideoTags } from './VideoTags';
import styles from '@styles/common.module.scss';

interface VideoCardProps {
  videoId: string;
  isHomePage?: boolean;
}

export function VideoCard({ videoId, isHomePage = false }: VideoCardProps) {
  const video = getVideoById(videoId);

  if (!video) {
    console.error(`Missing video for ${videoId}`);
    return null;
  }

  const layout = isHomePage ? styles.list : 'card';
  const title = video.lessonName || video.title;

  return (
    <div className={layout}>
      <div>
        <Link href={`/videos/${videoId}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={youTubeThumbnailUrl(videoId, 'sddefault')}
            alt={title}
            className="img-fluid"
          />
        </Link>
      </div>
      <div className="card-body bg-light">
        <h5 className="card-title">
          <Link href={`/videos/${videoId}`} className="link-dark">
            {title}
          </Link>
        </h5>
        <p className="card-text">{video.description}</p>
        <VideoTags tags={video.tags} />
      </div>
    </div>
  );
}
