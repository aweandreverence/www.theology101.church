import { staticPathFactory, categoryStaticPropsFactory } from '@utils/static';
import { TopicsTagsPage } from '@components/topics_tags';

export const getStaticPaths = staticPathFactory('tags');

export const getStaticProps = categoryStaticPropsFactory('tags');

export default function Page({ entry, videoIds }) {
    return <TopicsTagsPage title="Tag" entry={entry} videoIds={videoIds} />;
}
