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
            <h3 className="my-5">
                {title}: {entry}
            </h3>
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
