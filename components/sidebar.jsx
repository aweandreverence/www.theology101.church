import React from 'react';

import Link from 'next/link';
import { SLUGS_BY_NAME } from '@constants/seo.js';
import styles from '@styles/common.module.scss';
import { youTubeThumbnailUrl } from '@utils/youtube';
import THEOLOGY101_DATA from '@data/theology101.json';

function getFirstVideoIdForTags(tag) {
    const videoForTag = Object.values(THEOLOGY101_DATA.lookups.video_id).find(
        (video) => video.tags && video.tags.includes(tag)
    );
    return videoForTag ? videoForTag.videoId : null;
}

function getFirstVideoIdForTopics(topic) {
    const videoForTopic = Object.values(THEOLOGY101_DATA.lookups.video_id).find(
        (video) => video.topic === topic
    );
    return videoForTopic ? videoForTopic.videoId : null;
}

function buildThumbnail(title, setThumbnailUrls) {
    const fetchThumbnails = async () => {
        const thumbnailForSidebar = THEOLOGY101_DATA.lookups.video_id;
        const data =
            title == 'Topics'
                ? THEOLOGY101_DATA.lookups.topic
                : THEOLOGY101_DATA.lookups.tag;

        Object.keys(data).forEach(async (key) => {
            const videoId =
                title === 'Topics'
                    ? getFirstVideoIdForTopics(key)
                    : getFirstVideoIdForTags(key);

            if (videoId) {
                setThumbnailUrls((prevUrls) => ({
                    ...prevUrls,
                    [key]: youTubeThumbnailUrl(videoId),
                }));
            }
        });
    };
    fetchThumbnails();
}

export function SidebarList({ title, entries, url }) {
    const [thumbnailUrls, setThumbnailUrls] = React.useState({});
    React.useEffect(() => {
        buildThumbnail(title, setThumbnailUrls);
    }, [title]);

    return (
        <div>
            <h5 className="mt-4">{title}</h5>
            <ul className="list-unstyled">
                {entries.map(({ name, count }) => (
                    <li key={name} className={styles.list}>
                        <Link href={`/${url}/${SLUGS_BY_NAME[url][name]}`}>
                            <a className="link-secondary text-decoration-none d-flex align-items-center flex-shrink-0">
                                <img
                                    className="w-25"
                                    src={thumbnailUrls[name]}
                                />
                                <span className="ms-2 w-75 d-flex position-relative">
                                    <p
                                        className="text-truncate w-75"
                                        title={name}
                                    >
                                        {name}
                                    </p>
                                    <p className="ms-2 position-absolute end-0">
                                        ({count})
                                    </p>
                                </span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
