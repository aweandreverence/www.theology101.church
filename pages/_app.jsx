import React from 'react';
import { useRouter } from 'next/router';
import { BaseLayout } from '@components/base_layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/globals.scss';
import Home from '.';

function App({ Component, pageProps }) {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    const getLayout = Component.getLayout || ((page) => page);

    React.useEffect(() => {
        // Correct way to import bootstrap JS in the client side
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return isHomePage ? (
        <Home />
    ) : (
        <BaseLayout>{getLayout(<Component {...pageProps} />)}</BaseLayout>
    );
}

export default App;
