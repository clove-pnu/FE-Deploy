import { useEffect, useState } from 'react';
import styles from '../styles/PlayDetail.module.css';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { getEvent } from '../../apis/event';

interface PlayDetailProps {
  playName: string;
}

export default function PlayDetail({ playName }: PlayDetailProps) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchWithHandler(() => getEvent(playName), {
      onSuccess: (response) => {
        setData(response.data);
      },
      onError: () => {},
    });
  }, [playName]);

  if (!data) {
    return (
      <div>
        잘못된 접근입니다.
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.thumbnail}
        src={data?.image}
        alt={`${playName} 썸네일`}
      />
      <div className={styles.contentContainer}>
        <div className={styles.left}>
          <div className={styles.titleDate}>
            <h1 className={styles.title}>{playName}</h1>
            <div className={styles.date}>
              <p>
                {data?.startDate}
                {' '}
                ~
                {' '}
                {data?.endDate}
              </p>
            </div>
          </div>
          <div className={styles.venueCast}>
            <p>{data?.venue}</p>
            <p>
              출연진:
              {' '}
              {data?.cast}
            </p>
          </div>
          <div>
            <div className={styles.eventTimeTitle}>회차정보</div>
            <ul>
              {data?.eventTime.map((evt, index) => (
                <li
                  key={evt.toString()}
                  className={styles.eventTime}
                >
                  {index + 1}
                  회차:
                  {' '}
                  {evt}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.middle}>
          <div>
            <div className={styles.priceTitle}>좌석 별 가격</div>
            <ul>
              {data?.seatsAndPrices.map(({ id: sectionId, section, price }) => (
                <li
                  key={sectionId}
                  className={styles.price}
                >
                  {section}
                  {' '}
                  구역:
                  {' '}
                  {price}
                  {' '}
                  원
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.status}>
            예매 중
          </div>
          <div className={styles.bookingDate}>
            <p>
              예매 시작일:
              {' '}
              {data?.bookingStartDate}
            </p>
            <p>
              예매 종료일:
              {' '}
              {data?.bookingEndDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
