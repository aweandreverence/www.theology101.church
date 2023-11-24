
const getYouTubeThumbnail = async (videoId, key, setStateFunction) => {
    try {
        const apiUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.thumbnail_url) {
            setStateFunction((prevState) => ({
                thumbnailUrls: {
                  ...prevState.thumbnailUrls,
                  [key]: data.thumbnail_url,
                },
            }));
        } else {
            console.error('Thumbnail not found:', key);
            return null
        }
    } catch (error) {
        console.error('Error fetching YouTube video details:', error);
        return null;
    }
};

export default getYouTubeThumbnail;
