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
        className={styles.tab}
        style={{ borderBottom: `${current === 'PlayDetail' ? '2px solid black' : ''}` }}
        to={`/owner/playDetail/${playName}`}
      >
        공연 상세 정보
      </Link>
      <Link
        className={styles.tab}
        style={{ borderBottom: `${current === 'PlayMonitor' ? '2px solid black' : ''}` }}
        to={`/owner/playMonitor/${playName}`}
      >
        예매 현황 모니터링
      </Link>
      <Link
        className={styles.tab}
        style={{ borderBottom: `${current === 'ServerMonitor' ? '2px solid black' : ''}` }}
        to={`/owner/serverMonitor/${playName}`}
      >
        공연 서버 모니터링
      </Link>
      <Link
        className={styles.tab}
        style={{ borderBottom: `${current === 'PlayConfiguration' ? '2px solid black' : ''}` }}
        to={`/owner/playConfiguration/${playName}`}
      >
        공연 수정
      </Link>
    </div>
  );
}
