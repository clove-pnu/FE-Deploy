import { useEffect, useState } from 'react';
import styles from '../styles/PlayDetail.module.css';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { getEvent } from '../../apis/event';
import { NumberToMoney } from '../../utils/convert';

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
      <div className={styles.detailContainer}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>공연 이름</div>
          <div>{playName}</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>출연진</div>
            <div>{data?.cast}</div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>공연 장소</div>
            <div>{data?.venue}</div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>공연 기간</div>
            <div>
              {data?.startDate}
              {' '}
              ~
              {' '}
              {data?.endDate}
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>회차 정보</div>
            <ul>
              {data?.eventTime.map((evt, index) => (
                <li
                  key={evt.toString()}
                  className={styles.list}
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
        <div className={styles.wrapper}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>좌석 별 가격 정보</div>
            <ul>
              {data?.seatsAndPrices.map(({ id: sectionId, section, price }) => (
                <li
                  key={sectionId}
                  className={styles.list}
                >
                  {section}
                  {' '}
                  구역:
                  {' '}
                  {NumberToMoney(price)}
                  {' '}
                  원
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>예매 기간</div>
            <div>
              {data?.bookingStartDate}
              {' '}
              ~
              {' '}
              {data?.bookingEndDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
