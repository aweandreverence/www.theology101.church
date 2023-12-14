import React from 'react';

import { VideoCard } from '@components/video_card';
import Head from 'next/head';
import { buildTitle } from '@utils/seo';

export function TopicsTagsPage({ title, entry, videoIds }) {
    return (
        <>
            <Head>
                <title>{buildTitle(`${entry} - ${title}`)}</title>
            </Head>
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
