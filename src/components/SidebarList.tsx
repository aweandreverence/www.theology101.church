'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { SidebarEntry } from '@/lib/types';
import { getFirstVideoIdForTopic, getFirstVideoIdForTag } from '@/lib/data';
import { getTopicNameToSlug, getTagNameToSlug } from '@/lib/seo';
import { youTubeThumbnailUrl } from '@/lib/youtube';
import styles from '@styles/common.module.scss';

interface SidebarListProps {
  title: 'Topics' | 'Tags';
  url: 'topics' | 'tags';
  entries: SidebarEntry[];
}

export function SidebarList({ title, url, entries }: SidebarListProps) {
  const [thumbnailUrls, setThumbnailUrls] = useState<Record<string, string>>({});
  const slugsByName = url === 'topics' ? getTopicNameToSlug() : getTagNameToSlug();

  useEffect(() => {
    const urls: Record<string, string> = {};
    entries.forEach((entry) => {
      const videoId =
        title === 'Topics'
          ? getFirstVideoIdForTopic(entry.name)
          : getFirstVideoIdForTag(entry.name);
      if (videoId) {
        urls[entry.name] = youTubeThumbnailUrl(videoId);
      }
    });
    setThumbnailUrls(urls);
  }, [title, entries]);

  return (
    <div>
      <h5 className="mt-4">{title}</h5>
      <ul className="list-unstyled">
        {entries.map(({ name, count }) => (
          <li key={name} className={styles.sidebarList}>
            <Link
              href={`/${url}/${slugsByName[name]}`}
              className="link-secondary text-decoration-none d-flex align-items-center flex-shrink-0"
            >
              {thumbnailUrls[name] && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img className="w-25" src={thumbnailUrls[name]} alt={name} />
              )}
              <span className="ms-2 w-75 d-flex position-relative">
                <span className="text-truncate w-75" title={name}>
                  {name}
                </span>
                <span className="ms-2 position-absolute end-0">({count})</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
