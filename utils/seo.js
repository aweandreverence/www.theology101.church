import slugify from 'slugify';

export function toSlug(name) {
    return slugify(name, {
        lower: true,
        remove: /[*+~.()'"!:@?]/g,
    });
}
