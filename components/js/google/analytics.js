import Safe from 'react-safe';

import Head from 'next/head';
import Script from 'next/script';

export function GoogleAnalytics(props) {
    const gtagJS = `
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', '${props.trackingId}');
`;

    return (
        <>
            <Head>
                <Safe.script>{gtagJS}</Safe.script>
            </Head>
            <Script>
                <script
                        async
                        src={
                            'https://www.googletagmanager.com/gtag/js?id=' +
                            props.trackingId
                        }
                        key="google-analytics"
                    >
                    </script>
            </Script>
        </>
    );
}
