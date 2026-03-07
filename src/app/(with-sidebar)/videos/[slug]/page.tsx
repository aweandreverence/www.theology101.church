import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVideoById, getAllVideoIds } from '@/lib/data';
import { buildTitle } from '@/lib/seo';
import { youTubeEmbedUrl } from '@/lib/youtube';
import { VideoTags } from '@/components/VideoTags';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const videoIds = getAllVideoIds();
  return videoIds.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoById(slug);
  if (!video) return { title: 'Video Not Found' };

  const title = video.lessonName ?? video.title;
  return {
    title: buildTitle(title),
    description: video.description,
  };
}

export default async function VideoPage({ params }: PageProps) {
  const { slug } = await params;
  const video = getVideoById(slug);

  if (!video) {
    notFound();
  }

  const title = video.lessonName ?? video.title;

  return (
    <>
      <h3 className="my-5">{title}</h3>
      <div className="ratio ratio-16x9">
        <iframe
          src={youTubeEmbedUrl(video.videoId)}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="my-3">
        <h5>Description</h5>
        <p>{video.description}</p>
        <VideoTags tags={video.tags} />
      </div>
    </>
  );
}
