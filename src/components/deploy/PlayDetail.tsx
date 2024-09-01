import { DeployedPlayDetail } from '../../utils/type';
import styles from '../styles/PlayDetail.module.css';

export default function PlayDetail({
  pid,
  thumbnailUrl,
  title,
  deployDate,
  bookingStartDate,
  bookingEndDate,
  status,
}: DeployedPlayDetail) {
  return (
    <div className={styles.container}>
      <img
        className={styles.thumbnail}
        src={thumbnailUrl}
        alt={`${title} 썸네일`}
      />
      <div className={styles.left}>
        <div className={styles.titleDeployDate}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.deployDate}>{deployDate.toLocaleDateString()}</p>
        </div>
        <div className={styles.bookingDate}>
          <p>
            예매 시작일:
            {' '}
            {bookingStartDate.toLocaleDateString()}
          </p>
          <p>
            예매 종료일:
            {' '}
            {bookingEndDate.toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <p>{status}</p>
        <div className="flex w-80 flex-col items-end gap-2">
          {/* <div className="flex w-full flex-row justify-between px-2">
            <p>예매 현황</p>
            <p>
              {NumberToMoney(bookedSeatCount)}
              {' '}
              /
              {' '}
              {NumberToMoney(totalSeatCount)}
            </p>
          </div>
          <ProgressBar
            current={bookedSeatCount}
            total={totalSeatCount}
          /> */}
        </div>
      </div>
    </div>
  );
}
