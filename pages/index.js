import React from 'react';
import Page from '@components/base_page';
import Tags from '@components/tags';
import Topics from '@components/topics';
import VideoListing from '@components/video_listing';
import WelcomeScreen from '@components/welcome_screen';
import VideoLesson from '@components/video_lesson';
import css from '@styles/common.module.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTopic: null,
            activeTag: null,
            activeLesson: null,
        };
    }

    componentDidMount() {
    }

    selectTopic(topic) {
        this.setState({
            activeTopic: topic,
            activeTag: null,
            activeLesson: null,
        });
        history.pushState({}, '', `/topics/${topic}`);
    }

    selectTag(tag) {
        this.setState({
            activeTopic: null,
            activeTag: tag,
            activeLesson: null,
        });
        history.pushState({}, '', `/tags/${tag}`);
    }

    selectLesson(videoId) {
        this.setState({
            activeLesson: videoId,
        });
        history.pushState({}, '', `/lessons/${videoId}`);
    }

    render() {
        const content = this.state.activeLesson ? (
            <VideoLesson videoId={this.state.activeLesson} app={this} />
        ) : this.state.activeTopic || this.state.activeTag ? (
            <VideoListing
                topic={this.state.activeTopic}
                tag={this.state.activeTag}
                app={this}
            />
        ) : (
            <WelcomeScreen />
        );

        return (
            <Page>
                <div className="row w-100">
                    <div className="col-10">{content}</div>
                    <div className="col-2">
                        <div className='bg-secondary text-light'>
                            <Topics selectTopic={this.selectTopic.bind(this)} />
                            <Tags selectTag={this.selectTag.bind(this)} />
                        </div>
                        <a href='https://theology101ak.thinkific.com/courses/howtostudythebible?ref=6431a0' target='_blank'>
                            <img className={css.adImg} src='/ad.png' />
                        </a>
                    </div>
                </div>
            </Page>
        );
    }
}
