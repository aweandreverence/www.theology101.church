import React from 'react';

import { BaseLayout } from '@components/base_layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/globals.scss';

function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);

    React.useEffect(() => {
        // Correct way to import bootstrap JS in the client side
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return <BaseLayout>{getLayout(<Component {...pageProps} />)}</BaseLayout>;
}

export default App;
