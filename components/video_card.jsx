import React from 'react';
import Link from 'next/link';

import { VideoTags } from './video_tags';

import THEOLOGY101_DATA from '@data/theology101.json';

export function VideoCard({ videoId }) {
    const video = THEOLOGY101_DATA.lookups.video_id[videoId];
    if (!video) {
        throw new Error(`Missing video for ${videoId}`);
    }

    return (
        <div className="card">
            <div>
                <Link href={`/videos/${videoId}`}>
                    <a>
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
                            alt=""
                            className="img-fluid"
                        />
                    </a>
                </Link>
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">
                    <Link href={`/videos/${videoId}`}>
                        <a className="link-dark">
                            {video.lessonName || video.title}
                        </a>
                    </Link>
                </h5>
                <p className="card-text">{video.description}</p>
                <VideoTags tags={video.tags} />
            </div>
        </div>
    );
}
