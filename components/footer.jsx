import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faFacebookF,
    faTwitter,
    fab,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@fortawesome/fontawesome-svg-core/styles.css';

import css from '@styles/footer.module.scss';
import { CURRENT_YEAR, YEAR_CREATED } from '@constants/date';

library.add(fab, faFacebookF, faTwitter);

export function Footer() {
    return (
        <footer className="border-top py-5 mt-3">
            <div className="container d-flex align-items-center justify-content-between">
                <div>
                    &copy; Awe and Reverence {YEAR_CREATED}
                    {YEAR_CREATED != CURRENT_YEAR ? ` - ${CURRENT_YEAR}` : ''}
                </div>
                <div className="d-flex">
                    <a
                        href="https://www.facebook.com/AweAndReverence"
                        title="Awe & Reverence on Facebook"
                        target="_blank"
                        className="link-light"
                    >
                        <div className={css.facebook}>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </div>
                    </a>
                    <a
                        href="https://twitter.com/aweandreverence"
                        title="Awe & Reverence on Twitter"
                        target="_blank"
                        className="link-light"
                    >
                        <div className={css.twitter}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
}
