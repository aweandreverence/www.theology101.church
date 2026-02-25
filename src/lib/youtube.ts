export type YouTubeThumbnailQuality =
  | 'default'
  | 'hqdefault'
  | 'mqdefault'
  | 'sddefault'
  | 'maxresdefault';

/**
 * Generate YouTube thumbnail URL
 */
export function youTubeThumbnailUrl(
  videoId: string,
  quality: YouTubeThumbnailQuality = 'default'
): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

/**
 * Generate YouTube video URL
 */
export function youTubeVideoUrl(videoId: string): string {
  return `https://youtube.com/watch?v=${videoId}`;
}

/**
 * Generate YouTube embed URL
 */
export function youTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}
