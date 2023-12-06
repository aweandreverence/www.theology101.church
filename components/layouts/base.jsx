import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { CommonCSS } from '@components/css/common';
import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { CommonJS } from '@components/js/common';
import { NonBlockingJS } from '@components/js/nonblocking';

import { PAGE_TITLES, SITE_TITLE, SLUGS_BY_NAME } from '@constants/seo.js';
import THEOLOGY101_DATA from '@data/theology101.json';

import Link from 'next/link';

function SidebarList({ title, entries, url }) {
    return (
        <div>
            <h5 className="mt-4">{title}</h5>
            <ul className="list-unstyled">
                {entries.map(({ name, count }) => (
                    <li key={name}>
                        <Link href={`/${url}/${SLUGS_BY_NAME[url][name]}`}>
                            {`${name} (${count})`}
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
                <title>
                    {path in PAGE_TITLES && `${PAGE_TITLES[path]} | `}
                    {SITE_TITLE}
                </title>

                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                <link
                    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                    crossOrigin="anonymous"
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CommonCSS />
            <CommonJS />
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
            <NonBlockingJS />
        </>
    );
}
