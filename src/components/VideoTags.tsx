import Link from 'next/link';
import { toSlug } from '@/lib/seo';

interface VideoTagsProps {
  tags: string[];
}

export function VideoTags({ tags }: VideoTagsProps) {
  return (
    <div className="d-flex flex-wrap">
      {tags.map((tag) => (
        <h6 key={tag}>
          <Link href={`/tags/${toSlug(tag)}`}>
            <span className="badge bg-secondary ms-1 text-light">
              {tag}
            </span>
          </Link>
        </h6>
      ))}
    </div>
  );
}
