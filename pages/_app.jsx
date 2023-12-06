import { BaseLayout } from '@components/layouts/base';
import '@styles/globals.scss';

function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return <BaseLayout>{getLayout(<Component {...pageProps} />)}</BaseLayout>;
}

export default App;
