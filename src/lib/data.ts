import type { Theology101Data, SidebarEntry } from './types';
import theology101Data from '@data/theology101.json';

// Type assertion for the JSON data
export const THEOLOGY101_DATA = theology101Data as Theology101Data;

/**
 * Build a list of entries with their video counts
 */
export function buildList(
  key: 'topics' | 'tags',
  lookup: 'topic' | 'tag'
): SidebarEntry[] {
  return THEOLOGY101_DATA[key]
    .filter((entry) => entry in THEOLOGY101_DATA.lookups[lookup])
    .map((entry) => ({
      name: entry,
      count: THEOLOGY101_DATA.lookups[lookup][entry].length,
    }));
}

/**
 * Get all topics with video counts
 */
export function getTopics(): SidebarEntry[] {
  return buildList('topics', 'topic');
}

/**
 * Get all tags with video counts
 */
export function getTags(): SidebarEntry[] {
  return buildList('tags', 'tag');
}

/**
 * Get video by ID
 */
export function getVideoById(videoId: string) {
  return THEOLOGY101_DATA.lookups.video_id[videoId] || null;
}

/**
 * Get videos by topic
 */
export function getVideosByTopic(topic: string): string[] {
  return THEOLOGY101_DATA.lookups.topic[topic] || [];
}

/**
 * Get videos by tag
 */
export function getVideosByTag(tag: string): string[] {
  return THEOLOGY101_DATA.lookups.tag[tag] || [];
}

/**
 * Get first video ID for a topic (for thumbnails)
 */
export function getFirstVideoIdForTopic(topic: string): string | null {
  const video = Object.values(THEOLOGY101_DATA.lookups.video_id).find(
    (v) => v.topic === topic
  );
  return video ? video.videoId : null;
}

/**
 * Get first video ID for a tag (for thumbnails)
 */
export function getFirstVideoIdForTag(tag: string): string | null {
  const video = Object.values(THEOLOGY101_DATA.lookups.video_id).find(
    (v) => v.tags && v.tags.includes(tag)
  );
  return video ? video.videoId : null;
}

/**
 * Get all video IDs
 */
export function getAllVideoIds(): string[] {
  return Object.keys(THEOLOGY101_DATA.lookups.video_id);
}
