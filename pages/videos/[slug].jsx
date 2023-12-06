import { useRouter } from 'next/router';

import Custom404 from '@pages/404';

import THEOLOGY101_DATA from '@data/theology101.json';
import { VideoTags } from '@components/video_tags';

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
            <h3 className="my-5">{video.lessonName || video.title}</h3>
            <div className="ratio ratio-16x9">
                <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
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
