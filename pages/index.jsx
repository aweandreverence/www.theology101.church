import React from 'react';

import css from '@styles/common.module.scss';
import { Header } from '@components/header';
import THEOLOGY101_DATA from '@data/theology101.json';
import { VideoCard } from '@components/video_card';
import Head from 'next/head';

export default function Home() {
    function buildList(key, lookup) {
        return THEOLOGY101_DATA[key]
            .filter((entry) => entry in THEOLOGY101_DATA.lookups[lookup])
            .map((entry) => ({
                name: entry,
                count: THEOLOGY101_DATA.lookups[lookup][entry].length,
            }));
    }

    const topics = React.useMemo(() => buildList('topics', 'topic'), []);

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500&family=Shadows+Into+Light&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <div className={css.hero}>
                <h1>Theology101.church</h1>
            </div>
            <div className={css.welcome}>
                <div className="">
                    {topics.map((topic, index) => (
                        <>
                            <h3 className="mt-5" key={index}>
                                {topic.name}
                            </h3>
                            <hr />
                            <div className={css.videoList}>
                                {THEOLOGY101_DATA.lookups['topic'][
                                    topic.name
                                ].map((videoId) => (
                                    <VideoCard videoId={videoId} />
                                ))}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
