import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/router';

import '@fortawesome/fontawesome-svg-core/styles.css';

import { Footer } from '@components/footer';
import { Header } from '@components/header';
import styles from 'styles/common.module.scss';

import {
    GOOGLE_ANALYTICS_TRACKING_ID,
    SITE_TITLE,
    SLUGS_BY_NAME,
} from '@constants/seo.js';

import THEOLOGY101_DATA from '@data/theology101.json';

function getFirstVideoIdForTags(tag) {
    const videoForTag = Object.values(THEOLOGY101_DATA.lookups.video_id).find(
        (video) => video.tags && video.tags.includes(tag)
    );
    return videoForTag ? videoForTag.videoId : null;
}

function getFirstVideoIdForTopics(topic) {
    const videoForTopic = Object.values(THEOLOGY101_DATA.lookups.video_id).find(
        (video) => video.topic === topic
    );
    return videoForTopic ? videoForTopic.videoId : null;
}

function buildThumbnail(title, setThumbnailUrls) {
    const fetchThumbnails = async () => {
        const thumbnailForSidebar = THEOLOGY101_DATA.lookups.video_id;
        const data =
            title == 'Topics'
                ? THEOLOGY101_DATA.lookups.topic
                : THEOLOGY101_DATA.lookups.tag;

        Object.keys(data).forEach(async (key) => {
            const videoId =
                title === 'Topics'
                    ? getFirstVideoIdForTopics(key)
                    : getFirstVideoIdForTags(key);

            if (videoId) {
                setThumbnailUrls((prevUrls) => ({
                    ...prevUrls,
                    [key]: thumbnailForSidebar[videoId].thumbnail,
                }));
            }
        });
    };
    fetchThumbnails();
}

function SidebarList({ title, entries, url }) {
    const [thumbnailUrls, setThumbnailUrls] = React.useState({});
    React.useEffect(() => {
        buildThumbnail(title, setThumbnailUrls);
    }, [title]);

    return (
        <div>
            <h5 className="mt-4">{title}</h5>
            <ul className="list-unstyled">
                {entries.map(({ name, count }) => (
                    <li key={name} className={styles.list}>
                        <Link href={`/${url}/${SLUGS_BY_NAME[url][name]}`}>
                            <a className="link-secondary text-decoration-none d-flex align-items-center flex-shrink-0">
                                <img
                                    className="w-25"
                                    src={thumbnailUrls[name]}
                                />
                                <span className="ms-2 d-flex flex-direction-column">
                                    <p>{name}</p> <p>({count})</p>
                                </span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function buildList(key, lookup) {
    return THEOLOGY101_DATA[key]
        .filter((entry) => entry in THEOLOGY101_DATA.lookups[lookup])
        .map((entry) => ({
            name: entry,
            count: THEOLOGY101_DATA.lookups[lookup][entry].length,
        }));
}

export function BaseLayout({ children }) {
    const router = useRouter();
    const path = router.pathname;

    const topics = React.useMemo(() => buildList('topics', 'topic'), []);

    const tags = React.useMemo(() => buildList('tags', 'tag'), []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                <title>{SITE_TITLE}</title>

                <link
                    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                    crossOrigin="anonymous"
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_TRACKING_ID}`}
            />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GOOGLE_ANALYTICS_TRACKING_ID}');
                `}
            </Script>
            <div className="vh-100 d-flex flex-column">
                <Header />
                <main className="flex-grow-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-8">{children}</div>
                            <div className="col-lg-3 col-md-4">
                                <div className="bg-light text-dark w-100 p-3">
                                    <SidebarList
                                        title="Topics"
                                        url="topics"
                                        entries={topics}
                                    />
                                    <SidebarList
                                        title="Tags"
                                        url="tags"
                                        entries={tags}
                                    />
                                </div>
                                <a
                                    href="https://theology101ak.thinkific.com/courses/howtostudythebible?ref=6431a0"
                                    target="_blank"
                                >
                                    <img className="img-fluid" src="/ad.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
