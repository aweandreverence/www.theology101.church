import THEOLOGY101_DATA from '@data/theology101.json';
import { toSlug } from '@utils/seo';

export const GOOGLE_ANALYTICS_TRACKING_ID = 'UA-8680690-4';

export const SITE_TITLE = 'theology101.church';

export const SLUGS_BY_NAME = {
    topics: THEOLOGY101_DATA.topics.reduce(
        (entries, entry) => ({ ...entries, [entry]: toSlug(entry) }),
        {}
    ),
    tags: THEOLOGY101_DATA.tags.reduce(
        (entries, entry) => ({ ...entries, [entry]: toSlug(entry) }),
        {}
    ),
};

export const NAMES_BY_SLUG = {
    topics: Object.keys(SLUGS_BY_NAME.topics).reduce(
        (entries, entry) => ({
            ...entries,
            [SLUGS_BY_NAME.topics[entry]]: entry,
        }),
        {}
    ),
    tags: Object.keys(SLUGS_BY_NAME.tags).reduce(
        (entries, entry) => ({
            ...entries,
            [SLUGS_BY_NAME.tags[entry]]: entry,
        }),
        {}
    ),
};
