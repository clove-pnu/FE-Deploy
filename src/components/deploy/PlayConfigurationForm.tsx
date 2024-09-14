import { useEffect, useState } from 'react';
import Label from '../common/Label';
import Input from '../common/Input';
import Button from '../common/Button';
import UploadDescriptionImage from './UploadDescriptionImage';
import AddEventDate from './AddEventDate';
import VenueAndPrice from './VenueAndPrice';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { getEvent } from '../../apis/event';
import styles from '../styles/PlayConfigurationForm.module.css';

interface PlayConfigurationFormProps {
  playName: string;
}

export default function PlayConfigurationForm({ playName }: PlayConfigurationFormProps) {
  const [data, setData] = useState(null);
  const [cast, setCast] = useState('');
  const [eventDate, setEventDate] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState<string>('');
  const [bookingEndDate, setBookingEndDate] = useState<string>('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchWithHandler(() => getEvent(playName), {
      onSuccess: (response) => {
        setData(response.data);
        setCast(response.data.cast);
        setEventDate([response.data.eventTime]);
        setBookingStartDate(response.data.bookingStartDate);
        setBookingEndDate(response.data.bookingEndDate);
        setDescription(response.data.description.text);
      },
      onError: () => {

      },
    });
  }, []);

  return (
    <form className={styles.container}>
      <img
        src={data?.image}
        alt="공연 썸네일"
        className={styles.thumbnailImage}
      />
      <div className={styles.category}>
        <div className={styles.categoryName}>공연 제목</div>
        <div>{data?.name}</div>
      </div>
      <Label name="출연진">
        <Input
          type="text"
          name="출연진"
          value={cast}
          setValue={setCast}
        />
      </Label>
      <div className={styles.category}>
        <div className={styles.categoryName}>공연 장소</div>
        <div>{data?.venue}</div>
      </div>
      <div className={styles.category}>
        <div className={styles.categoryName}>좌석 별 가격</div>
        <ul className={styles.priceList}>
          {data?.seatsAndPrices && data?.seatsAndPrices.map(({
            id, section, price,
          }) => (
            <li key={id}>
              {section}
              {' '}
              구역:
              {' '}
              {price}
            </li>
          ))}
        </ul>
      </div>
      <AddEventDate
        eventDate={eventDate}
        setEventDate={setEventDate}
      />
      <Label name="공연 예매 기간">
        <input
          type="date"
          value={bookingStartDate}
          onChange={(e) => setBookingStartDate(e.target.value)}
          max={bookingEndDate}
        />
        부터
        <input
          type="date"
          value={bookingEndDate}
          onChange={(e) => setBookingEndDate(e.target.value)}
          min={bookingStartDate}
        />
        까지
      </Label>
      <Label name="공연 설명">
        <Input
          type="textbox"
          name="공연 설명"
          value={description}
          setValue={setDescription}
        />
      </Label>
      <img
        src={data?.description.image}
        alt="공연 설명 첨부 이미지"
        className={styles.descriptionImage}
      />
      <Button>배포하기</Button>
    </form>
  );
}
