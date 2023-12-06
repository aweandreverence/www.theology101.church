import Link from 'next/link';

import { NAV_LINKS } from '@constants/nav_links';
import { SITE_TITLE } from '@constants/seo';

// TODO: Improve the styling on this component
export function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link href="/">
                    <a class="navbar-brand">{SITE_TITLE}</a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        {NAV_LINKS.map((entry) => (
                            <li className="nav-item">
                                <a class="nav-link" href={entry.url}>
                                    {entry.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
