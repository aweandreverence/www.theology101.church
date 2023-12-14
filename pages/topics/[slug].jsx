import { staticPathFactory, categoryStaticPropsFactory } from '@utils/static';
import { TopicsTagsPage } from '@components/topics_tags';

export const getStaticPaths = staticPathFactory('topics');

export const getStaticProps = categoryStaticPropsFactory('topics');

export default function Page({ entry, videoIds }) {
    return <TopicsTagsPage title="Topic" entry={entry} videoIds={videoIds} />;
}
