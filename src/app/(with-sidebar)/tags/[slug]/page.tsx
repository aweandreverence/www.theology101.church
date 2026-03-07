import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVideosByTag, THEOLOGY101_DATA } from '@/lib/data';
import { buildTitle, getTagSlugMap, toSlug } from '@/lib/seo';
import { VideoCard } from '@/components/VideoCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return THEOLOGY101_DATA.tags.map((tag) => ({
    slug: toSlug(tag),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugMap = getTagSlugMap();
  const tagName = slugMap[slug];

  if (!tagName) return { title: 'Tag Not Found' };

  return {
    title: buildTitle(`${tagName} - Tag`),
    description: `Watch theology lessons tagged with ${tagName}`,
  };
}

export default async function TagPage({ params }: PageProps) {
  const { slug } = await params;
  const slugMap = getTagSlugMap();
  const tagName = slugMap[slug];

  if (!tagName) {
    notFound();
  }

  const videoIds = getVideosByTag(tagName);

  return (
    <>
      <h3 className="my-5">Tag: {tagName}</h3>
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
