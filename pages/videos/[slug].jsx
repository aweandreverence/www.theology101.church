import Head from 'next/head';
import { useRouter } from 'next/router';

import Custom404 from '@pages/404';
import { VideoTags } from '@components/video_tags';
import { buildTitle } from '@utils/seo';

import THEOLOGY101_DATA from '@data/theology101.json';

export default function Page() {
    const {
        query: { slug },
    } = useRouter();

    const video = THEOLOGY101_DATA.lookups.video_id[slug];
    if (!video) {
        return <Custom404 />;
    }

    return (
        <>
            <Head>
                <title>
                    {buildTitle(`${video.lessonName || video.title}`)}
                </title>
            </Head>
            <h3 className="my-5">{video.lessonName || video.title}</h3>
            <div className="ratio ratio-16x9">
                <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
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
