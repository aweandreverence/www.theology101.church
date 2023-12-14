import Head from 'next/head';

import { VideoTags } from '@components/video_tags';
import { buildTitle } from '@utils/seo';

import { staticPathFactory } from '@utils/static';
import THEOLOGY101_DATA from '@data/theology101.json';

export const getStaticPaths = staticPathFactory('video_id');

export const getStaticProps = ({ params: { slug } }) => {
    const video = THEOLOGY101_DATA.lookups.video_id[slug];
    return video ? { props: { video } } : { notFound: true };
};

export default function Page({ video }) {
    const title = video.lessonName !== null ? video.lessonName : video.title;

    return (
        <>
            <Head>
                <title>
                    {buildTitle(title)}
                </title>
            </Head>
            <h3 className="my-5">{title}</h3>
            <div className="ratio ratio-16x9">
                <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="my-3">
                <h5>Description</h5>
                <p>{video.description}</p>
                <VideoTags tags={video.tags} />
            </div>
        </>
    );
}
