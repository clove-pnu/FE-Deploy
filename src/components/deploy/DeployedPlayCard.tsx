import { Link } from 'react-router-dom';
import { DeployedPlay } from '../../utils/type';
import styles from '../styles/DeployedPlayCard.module.css';

export default function DeployedPlayCard({
  pid,
  thumbnailUrl,
  title,
  playType,
  bookedSeatCount,
  totalSeatCount,
  status,
  deployDate,
}: DeployedPlay) {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={thumbnailUrl} alt={`${title} 썸네일`} />
      <div className={styles.content}>
        <div className={styles.left}>
          <Link to={`./playDetail/${pid}`}>
            <h2 className={styles.title}>{title}</h2>
          </Link>
          <div className={styles.playType}>{playType}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.seat}>
            <span>예매 좌석 수</span>
            <span className={styles.bold}>{bookedSeatCount}</span>
            <span>/</span>
            <span>전체 좌석 수</span>
            <span className={styles.bold}>{totalSeatCount}</span>
          </div>
          <div className={styles.bold}>{status}</div>
          <div className={styles.date}>{deployDate.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}
