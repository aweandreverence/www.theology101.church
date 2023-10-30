import React from 'react';
import THEOLOGY101_DATA from '../data/theology101.json';

const BASE_URL = '/prototypes/theology101';

export default class Tags extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tags = THEOLOGY101_DATA.tags;
        const lookupByTag = THEOLOGY101_DATA.lookups.tag;

        return (
            <div>
                <h5>Tags ({tags.length})</h5>
                <br />
                <ul className="mx-0 px-0">
                    {tags.map((tag) => (
                        <ol className="p-0">
                            <a
                                href
                                className="link-light"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.selectTag(tag);
                                }}
                                role="button"
                            >
                                {tag} ({lookupByTag[tag].length})
                            </a>
                        </ol>
                    ))}
                </ul>
            </div>
        );
    }
}
