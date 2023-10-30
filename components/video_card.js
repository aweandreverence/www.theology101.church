import React from 'react';
import THEOLOGY101_DATA from '../data/theology101.json';
import THEOLOGY101_OEMBED from '../data/theology101_oembed.json';
import VideoCardTags from './video_card_tags';

export default class VideoCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const app = this.props.app;

        const video = THEOLOGY101_DATA.lookups.video_id[this.props.videoId];
        const oembed = THEOLOGY101_OEMBED[video.videoId];
        const style = {
            width: '18rem',
            height: '390px',
            display: 'inline-block',
            margin: '5px',
        };

        return (
            <div className="card" style={style}>
                <div
                    className="bg-dark text-center"
                    dangerouslySetInnerHTML={{ __html: oembed }}
                ></div>
                <div className="card-body bg-light overflow-y-scroll">
                    <h5 className="card-title">
                        <a
                            href
                            onClick={(e) => {
                                e.preventDefault();
                                app.selectLesson.bind(app)(video.videoId);
                            }}
                        >
                            {video.lessonName || video.title}
                        </a>
                    </h5>
                    <p className="card-text">{video.description}</p>
                    <VideoCardTags video={video} app={app} />
                </div>
            </div>
        );
    }
}
