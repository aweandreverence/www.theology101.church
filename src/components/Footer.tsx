'use client';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CURRENT_YEAR, YEAR_CREATED } from '@/constants/date';

library.add(fab, faFacebookF, faTwitter);

export function Footer() {
  const yearRange =
    YEAR_CREATED !== CURRENT_YEAR
      ? `${YEAR_CREATED} – ${CURRENT_YEAR}`
      : String(YEAR_CREATED);

  return (
    <footer className="t101-footer mt-auto">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="t101-footer-copy">
          &copy; Awe and Reverence {yearRange}
        </div>
        <div className="d-flex gap-3">
          <a
            href="https://www.facebook.com/AweAndReverence"
            title="Awe &amp; Reverence on Facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" />
          </a>
          <a
            href="https://twitter.com/aweandreverence"
            title="Awe &amp; Reverence on Twitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
