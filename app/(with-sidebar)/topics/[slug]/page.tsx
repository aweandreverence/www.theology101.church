import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVideosByTopic, THEOLOGY101_DATA } from '@/lib/data';
import { buildTitle, getTopicSlugMap, toSlug } from '@/lib/seo';
import { VideoCard } from '@/components/VideoCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return THEOLOGY101_DATA.topics.map((topic) => ({
    slug: toSlug(topic),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugMap = getTopicSlugMap();
  const topicName = slugMap[slug];

  if (!topicName) return { title: 'Topic Not Found' };

  return {
    title: buildTitle(`${topicName} - Topic`),
    description: `Watch theology lessons about ${topicName}`,
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const slugMap = getTopicSlugMap();
  const topicName = slugMap[slug];

  if (!topicName) {
    notFound();
  }

  const videoIds = getVideosByTopic(topicName);

  return (
    <>
      <h3 className="my-5">Topic: {topicName}</h3>
      <div className="row">
        {videoIds.map((videoId) => (
          <div className="col-lg-4 mb-5" key={videoId}>
            <VideoCard videoId={videoId} />
          </div>
        ))}
      </div>
    </>
  );
}
