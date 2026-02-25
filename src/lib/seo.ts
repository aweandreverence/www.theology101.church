import slugify from 'slugify';
import { THEOLOGY101_DATA } from './data';

export const GOOGLE_ANALYTICS_TRACKING_ID = 'UA-8680690-4';
export const SITE_TITLE = 'Theology101.church';
export const SITE_DESCRIPTION =
  'Learn theology through video lessons on topics like salvation, the Trinity, angels, end times, and more.';

/**
 * Convert a name to a URL-safe slug
 */
export function toSlug(name: string): string {
  return slugify(name, {
    lower: true,
    remove: /[*+~.()'"!:@?]/g,
  });
}

/**
 * Build page title with site name suffix
 */
export function buildTitle(title: string): string {
  return `${title} | ${SITE_TITLE}`;
}

/**
 * Generate slug-to-name mappings for topics
 */
export function getTopicSlugMap(): Record<string, string> {
  return THEOLOGY101_DATA.topics.reduce(
    (acc, topic) => ({
      ...acc,
      [toSlug(topic)]: topic,
    }),
    {} as Record<string, string>
  );
}

/**
 * Generate slug-to-name mappings for tags
 */
export function getTagSlugMap(): Record<string, string> {
  return THEOLOGY101_DATA.tags.reduce(
    (acc, tag) => ({
      ...acc,
      [toSlug(tag)]: tag,
    }),
    {} as Record<string, string>
  );
}

/**
 * Generate name-to-slug mappings for topics
 */
export function getTopicNameToSlug(): Record<string, string> {
  return THEOLOGY101_DATA.topics.reduce(
    (acc, topic) => ({
      ...acc,
      [topic]: toSlug(topic),
    }),
    {} as Record<string, string>
  );
}

/**
 * Generate name-to-slug mappings for tags
 */
export function getTagNameToSlug(): Record<string, string> {
  return THEOLOGY101_DATA.tags.reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: toSlug(tag),
    }),
    {} as Record<string, string>
  );
}
