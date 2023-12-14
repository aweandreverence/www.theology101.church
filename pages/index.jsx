import React from 'react';

import css from '@styles/common.module.scss';
import { Header } from '@components/header';
import THEOLOGY101_DATA from '@data/theology101.json';
import { VideoCard } from '@components/video_card';

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
