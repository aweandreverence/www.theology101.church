import Head from 'next/head';
import { useRouter } from 'next/router';

import { CommonCSS } from '../components/css/common';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { CommonJS } from '../components/js/common';
import { NonBlockingJS } from '../components/js/nonblocking';

import { PAGE_TITLES, SITE_TITLE } from '../constants/seo.js';

import '@fortawesome/fontawesome-svg-core/styles.css';
import css from '../styles/common.module.scss';

export default function Page({ children }) {
    const router = useRouter();
    const path = router.pathname;
    return (
        <div className={css.container}>
            <Head>
                <title>
                    {PAGE_TITLES[path]} | {SITE_TITLE}
                </title>

                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                <link
                    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                    crossorigin="anonymous"
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CommonCSS />
            <CommonJS />
            <Header />
            <main className={css.main}>{children}</main>
            <Footer />
            <NonBlockingJS />
        </div>
    );
}
