import React from 'react';

export default class VideoCardTags extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const app = this.props.app;

        const video = this.props.video;
        return (
            <div className="d-flex flex-wrap">
                {video.tags.map((tag) => (
                    <h6>
                        <a
                            href
                            onClick={(e) => {
                                e.preventDefault();
                                app.selectTag.bind(app)(tag);
                            }}
                        >
                            <span className="badge bg-secondary me-1">
                                {tag}
                            </span>
                        </a>
                    </h6>
                ))}
            </div>
        );
    }
}
