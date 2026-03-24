import { getTopics, THEOLOGY101_DATA } from '@/lib/data';
import { VideoCard } from '@/components/VideoCard';
import styles from '@styles/common.module.scss';

export default function HomePage() {
  const topics = getTopics();

  return (
    <>
      <div className={styles.hero}>
        <h1>Theology 101</h1>
        <p className={styles.heroSubtitle}>
          Grounded teaching for growing believers — exploring the deep truths of
          Scripture with clarity and reverence.
        </p>
      </div>
      <div className={styles.welcome}>
        {topics.map((topic, index) => (
          <section key={index} className={styles.topicSection}>
            <h3 className={styles.topicHeading}>{topic.name}</h3>
            <hr className={styles.topicDivider} />
            <div className={styles.videoList}>
              {THEOLOGY101_DATA.lookups.topic[topic.name]?.map((videoId) => (
                <VideoCard key={videoId} videoId={videoId} isHomePage />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
