import { Link } from 'react-router-dom';
import styles from '../styles/OwnerTab.module.css';

interface OwnerTabProps {
  pid: number;
  current: 'PlayDetail' | 'PlayMonitor' | 'ServerMonitor' | 'PlayConfiguration';
}

export default function OwnerTab({
  pid,
  current,
}: OwnerTabProps) {
  return (
    <div className={styles.container}>
      <Link
        className={styles.tab}
        style={{ borderBottom: `${current === 'PlayDetail' ? '2px solid black' : ''}` }}
        to={`/owner/playDetail/${pid}`}
      >
        공연 정보
      </Link>
      <Link
        className={styles.tab}
        style={{ borderBottom: `${current === 'PlayMonitor' ? '2px solid black' : ''}` }}
        to={`/owner/playMonitor/${pid}`}
      >
        예매 현황 모니터링
      </Link>
      <Link
        className={styles.tab}
        style={{ borderBottom: `${current === 'ServerMonitor' ? '2px solid black' : ''}` }}
        to={`/owner/serverMonitor/${pid}`}
      >
        공연 서버 모니터링
      </Link>
      <Link
        className={styles.tab}
        style={{ borderBottom: `${current === 'PlayConfiguration' ? '2px solid black' : ''}` }}
        to={`/owner/playConfiguration/${pid}`}
      >
        공연 설정
      </Link>
    </div>
  );
}
