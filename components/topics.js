import THEOLOGY101_DATA from '../data/theology101.json';
import css from '../styles/common.module.scss'


export default function Topics() {
    const topics = THEOLOGY101_DATA.topics;
    const lookupByTopic = THEOLOGY101_DATA.lookups.topic;

    return (
        <div className={css.topics}>
            <h5>Topics ({topics.length})</h5>
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
                            >
                                {topic} ({lookupByTopic[topic].length})
                            </a>
                        </ol>
                    ))}
            </ul>
        </div>
    );
}
