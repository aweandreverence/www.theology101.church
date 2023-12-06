import { SITE_TITLE } from '@constants/seo';
import slugify from 'slugify';

export function buildTitle(title) {
    return `${title} | ${SITE_TITLE}`;
}

export function toSlug(name) {
    return slugify(name, {
        lower: true,
        remove: /[*+~.()'"!:@?]/g,
    });
}
