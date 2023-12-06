import React from 'react';
import { useRouter } from 'next/router';

import { NAMES_BY_SLUG } from '@constants/seo';
import THEOLOGY101_DATA from '@data/theology101.json';
import { VideoCard } from '@components/video_card';
import Custom404 from '@pages/404';

export function TopicsTagsPage({ title, type, lookup }) {
    const {
        query: { slug },
    } = useRouter();

    const entry = NAMES_BY_SLUG[type][slug];
    if (!entry) {
        return <Custom404 />;
    }

    const videoIds = THEOLOGY101_DATA.lookups[lookup][entry] || [];

    return (
        <>
            <h3>
                {title}: {entry}
            </h3>
            <div className="d-flex p-2 flex-wrap mt-4">
                {videoIds.map((videoId) => (
                    <VideoCard key={videoId} videoId={videoId} />
                ))}
            </div>
        </>
    );
}
