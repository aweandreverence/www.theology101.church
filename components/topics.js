import React from 'react';
import THEOLOGY101_DATA from '../data/theology101.json';

export default class Topics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const topics = THEOLOGY101_DATA.topics;
        const lookupByTopic = THEOLOGY101_DATA.lookups.topic;

        return (
            <div>
                <h5 className="mt-4">Topics ({topics.length})</h5>
                <br />
                <ul className="mx-0 px-0">
                    {topics
                        .filter((topic) => lookupByTopic[topic])
                        .map((topic) => (
                            <ol className="p-0">
                                <a
                                    href
                                    className="link-light"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.props.selectTopic(topic);
                                    }}
                                    role="button"
                                >
                                    {topic} ({lookupByTopic[topic].length})
                                </a>
                            </ol>
                        ))}
                </ul>
            </div>
        );
    }
}
