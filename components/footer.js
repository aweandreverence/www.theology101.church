import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faFacebookF,
    faTwitter,
    fab,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@fortawesome/fontawesome-svg-core/styles.css';
import css from '../styles/footer.module.scss';

library.add(fab, faFacebookF, faTwitter);

export function Footer({ children }) {
    const CURRENT_YEAR = new Date().getFullYear();
    const YEAR_CREATED = "2020"

    return (
        <>
            <footer className={css.footer}>
                <div className={css.socialmedia}>
                    <div className={css.facebook}>
                        <a
                            href="https://www.facebook.com/AweAndReverence"
                            title="Awe & Reverence on Facebook"
                            target="_blank"
                        >
                            <div className={css.icon}>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </div>
                        </a>
                    </div>
                    <div className={css.twitter}>
                        <a
                            href="https://twitter.com/aweandreverence"
                            title="Awe & Reverence on Twitter"
                            target="_blank"
                        >
                            <div className={css.icon}>
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </div>
                        </a>
                    </div>
                </div>
                <div className={css.copyright}>
                    <p>&copy; Awe and Reverence {YEAR_CREATED} - {CURRENT_YEAR}</p>
                </div>
            </footer>
        </>
    );
}
