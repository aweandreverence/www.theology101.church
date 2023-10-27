import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@fortawesome/fontawesome-svg-core/styles.css';
import css from '../styles/footer.module.scss';

library.add(fab, faFacebookF, faTwitter);

export function Footer({ children }) {
    const CURRENT_YEAR = new Date().getFullYear();
    return (
        <div className={css.footer}>
            <a>© Awe and Reverence Inc 2017 - 2023</a>
            <a>Made with Love in Silicon Valley, California · S.D.G.</a>
            <div className='text-start'>
                <a>Awe and Reverence Network</a>
                <div className={css.networks}>
                    <a>Awe and Reverence</a>
                    <a>Awesome.Bible</a>
                    <a>Maskil</a>
                </div>
            </div>
        </div>
    );
}
