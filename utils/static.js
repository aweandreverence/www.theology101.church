import THEOLOGY101_DATA from '@data/theology101.json';
import { NAMES_BY_SLUG } from '@constants/seo';

export function staticPathFactory(key) {
    const obj = key == 'video_id' ? THEOLOGY101_DATA.lookups : NAMES_BY_SLUG;
    return async () => ({
        paths: Object.keys(obj[key]).map((slug) => ({
            params: { slug },
        })),
        fallback: false,
    });
}

export function categoryStaticPropsFactory(category) {
    return async ({ params: { slug } }) => {
        const entry = NAMES_BY_SLUG[category][slug];

        return entry ? {
            props: {
                entry,
                videoIds: THEOLOGY101_DATA.lookups.tag[entry] || [],
            },
        } : { notFound: true };
    };
}
