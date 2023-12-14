import Link from 'next/link';

import { toSlug } from '@utils/seo';

export function VideoTags({ tags }) {
    return (
        <div className="d-flex flex-wrap">
            {tags.map((tag, index) => (
                <h6 key={index}>
                    <Link href={`/tags/${toSlug(tag)}`}>
                        <span className="badge bg-secondary ms-1 text-light mr-1">
                            {tag}
                        </span>
                    </Link>
                </h6>
            ))}
        </div>
    );
}
