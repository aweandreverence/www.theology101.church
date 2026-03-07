import { getTopics, THEOLOGY101_DATA } from '@/lib/data';
import { VideoCard } from '@/components/VideoCard';
import styles from '@styles/common.module.scss';

export default function HomePage() {
  const topics = getTopics();

  return (
    <>
      <div className={styles.hero}>
        <h1>Theology101.church</h1>
      </div>
      <div className={styles.welcome}>
        <div>
          {topics.map((topic, index) => (
            <div key={index}>
              <h3 className="mt-5">{topic.name}</h3>
              <hr />
              <div className={styles.videoList}>
                {THEOLOGY101_DATA.lookups.topic[topic.name]?.map((videoId) => (
                  <VideoCard key={videoId} videoId={videoId} isHomePage />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
