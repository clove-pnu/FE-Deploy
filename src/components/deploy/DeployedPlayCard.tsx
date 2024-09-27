import { Link } from 'react-router-dom';
import { DeployedPlay } from '../../utils/type';
import styles from '../styles/DeployedPlayCard.module.css';

export default function DeployedPlayCard({
  id,
  namespace,
  image,
  name,
  status,
  bookingStartDate,
  bookingEndDate,
}: DeployedPlay) {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailContainer}>
        <img
          src={image}
          alt={`${name} 썸네일`}
          className={styles.thumbnail}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <Link to={`./playDetail/${namespace}`}>
            <h2 className={styles.title}>{name}</h2>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.bookingDate}>
            <div>예매 기간</div>
            <div>
              <span>{bookingStartDate}</span>
              <span>~</span>
              <span>{bookingEndDate}</span>
            </div>
          </div>
          {/* <div className={styles.seat}>
            <span>예매 좌석 수</span>
            <span className={styles.bold}>{bookedSeatCount}</span>
            <span>/</span>
            <span>전체 좌석 수</span>
            <span className={styles.bold}>{totalSeatCount}</span>
          </div> */}
          <div className={styles.bold}>{status}</div>
          {/* <div className={styles.date}>{deployDate.toLocaleDateString()}</div> */}
        </div>
      </div>
    </div>
  );
}
