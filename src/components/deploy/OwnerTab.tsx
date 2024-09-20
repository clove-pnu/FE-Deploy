import { Link } from 'react-router-dom';
import styles from '../styles/OwnerTab.module.css';

interface OwnerTabProps {
  playName: string;
  current: 'PlayDetail' | 'PlayMonitor' | 'ServerMonitor' | 'PlayConfiguration';
}

export default function OwnerTab({
  playName,
  current,
}: OwnerTabProps) {
  return (
    <div className={styles.container}>
      <Link
        className={`${styles.tab} ${current === 'PlayDetail' && styles.current}`}
        to={`/owner/playDetail/${playName}`}
      >
        공연 상세 정보
      </Link>
      <Link
        className={`${styles.tab} ${current === 'PlayMonitor' && styles.current}`}
        to={`/owner/playMonitor/${playName}`}
      >
        예매 현황 모니터링
      </Link>
      <Link
        className={`${styles.tab} ${current === 'ServerMonitor' && styles.current}`}
        to={`/owner/serverMonitor/${playName}`}
      >
        공연 서버 모니터링
      </Link>
      <Link
        className={`${styles.tab} ${current === 'PlayConfiguration' && styles.current}`}
        to={`/owner/playConfiguration/${playName}`}
      >
        공연 수정
      </Link>
    </div>
  );
}
