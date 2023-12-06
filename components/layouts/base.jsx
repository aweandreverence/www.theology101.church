import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/router';

import '@fortawesome/fontawesome-svg-core/styles.css';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

import {
    GOOGLE_ANALYTICS_TRACKING_ID,
    SITE_TITLE,
    SLUGS_BY_NAME,
} from '@constants/seo.js';

import THEOLOGY101_DATA from '@data/theology101.json';

function SidebarList({ title, entries, url }) {
    return (
        <div>
            <h5 className="mt-4">{title}</h5>
            <ul className="list-unstyled">
                {entries.map(({ name, count }) => (
                    <li key={name}>
                        <Link href={`/${url}/${SLUGS_BY_NAME[url][name]}`}>
                            <a className="link-light">
                                {name} ({count})
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
                                <div className="bg-secondary text-light w-100 p-3">
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
