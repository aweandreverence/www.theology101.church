import React from 'react';
import THEOLOGY101_DATA from '@data/theology101.json';
import VideoCard from '@components/video_card';

export default class VideoListing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const app = this.props.app;

        const topic = this.props.topic;
        const tag = this.props.tag;
        const heading = topic ? 'Topic' : 'Tag';
        const title = topic || tag;

        const videoIds =
            (topic
                ? THEOLOGY101_DATA.lookups.topic[topic]
                : THEOLOGY101_DATA.lookups.tag[tag]) || [];

        return (
            <div>
                <h3>
                    {heading}: {title}
                </h3>
                <div className="d-flex p-2 flex-wrap mt-4">
                    {videoIds.map((videoId) => (
                        <VideoCard key={videoId} videoId={videoId} app={app} />
                    ))}
                </div>
            </div>
        );
    }
}
