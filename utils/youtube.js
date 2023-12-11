// Enum
const YtThumbnailQuality = {
    default: 'default',
    hq: 'hqdefault',
    mq: 'mqdefault',
    sq: 'sqdefault',
    max: 'maxresdefault',
};

function youTubeThumbnailUrl(videoId, quality = YtThumbnailQuality.default) {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

youTubeThumbnailUrl.qualities = YtThumbnailQuality;

function youTubeVideoUrl(videoId) {
    return `https://youtube.com/watch?v=${videoId}`;
}

export { youTubeThumbnailUrl, youTubeVideoUrl };
