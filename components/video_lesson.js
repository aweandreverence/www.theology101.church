import React from 'react';
import THEOLOGY101_DATA from '../data/theology101.json';
import THEOLOGY101_OEMBED from '../data/theology101_oembed.json';
import VideoCardTags from '../components/video_card_tags';

export default class VideoLesson extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const app = this.props.app;

        const video = THEOLOGY101_DATA.lookups.video_id[this.props.videoId];
        const rawOembed = THEOLOGY101_OEMBED[video.videoId];

        const iframeContainerStyle = {
            position: 'relative',
            width: '100%',
            height: '0px',
            paddingBottom: '56.25%',
        };

        const iframeInlineStyle =
            'style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"';

        const oembed = rawOembed
            .replace(/width="\d+"/, '')
            .replace(/height="\d+"/, iframeInlineStyle);

        return (
            <div>
                <h4>{video.lessonName || video.title}</h4>
                <div
                    className="bg-dark text-center"
                    style={iframeContainerStyle}
                    dangerouslySetInnerHTML={{ __html: oembed }}
                ></div>
                <p>{video.description}</p>
                <VideoCardTags video={video} app={app} />
            </div>
        );
    }
}
