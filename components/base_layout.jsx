import React from 'react';

import Head from 'next/head';
import Script from 'next/script';

import '@fortawesome/fontawesome-svg-core/styles.css';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

import { GOOGLE_ANALYTICS_TRACKING_ID, SITE_TITLE } from '@constants/seo.js';
import { SidebarList } from '@components/sidebar';

import THEOLOGY101_DATA from '@data/theology101.json';

function buildList(key, lookup) {
    return THEOLOGY101_DATA[key]
        .filter((entry) => entry in THEOLOGY101_DATA.lookups[lookup])
        .map((entry) => ({
            name: entry,
            count: THEOLOGY101_DATA.lookups[lookup][entry].length,
        }));
}

export function BaseLayout({ hideSidebar, children }) {
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500&family=Shadows+Into+Light&display=swap"
                    rel="stylesheet"
                />
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
                            <div
                                className={
                                    hideSidebar ? 'col-12' : 'col-lg-9 col-md-8'
                                }
                            >
                                {children}
                            </div>
                            {!hideSidebar && (
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
                                        <img
                                            className="img-fluid"
                                            src="/ad.png"
                                        />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
