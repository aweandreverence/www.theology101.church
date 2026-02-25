import { getTopics, getTags } from '@/lib/data';
import { SidebarList } from './SidebarList';

export function Sidebar() {
  const topics = getTopics();
  const tags = getTags();

  return (
    <>
      <div className="bg-light text-dark w-100 p-3">
        <SidebarList title="Topics" url="topics" entries={topics} />
        <SidebarList title="Tags" url="tags" entries={tags} />
      </div>
      <a
        href="https://theology101ak.thinkific.com/courses/howtostudythebible?ref=6431a0"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="img-fluid" src="/ad.png" alt="How to Study the Bible" />
      </a>
    </>
  );
}
