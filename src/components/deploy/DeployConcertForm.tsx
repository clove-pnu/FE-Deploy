import { useState } from 'react';
import styles from '../styles/DeployConcertForm.module.css';
import Label from '../common/Label';
import Input from '../common/Input';
import Button from '../common/Button';
import UploadThumbnailImage from './UploadThumbnailImage';
import UploadDescriptionImage from './UploadDescriptionImage';
import AddEventDate from './AddEventDate';
import VenueAndPrice from './VenueAndPrice';

export default function DeployConcertForm() {
  const [thumbnailImage, setThumbnailImage] = useState<Blob>(null);
  const [title, setTitle] = useState('');
  const [cast, setCast] = useState('');
  const [venue, setVenue] = useState<string>('');
  const [price, setPrice] = useState<Map<string, string>>(new Map());
  const [eventDate, setEventDate] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState<string>('');
  const [bookingEndDate, setBookingEndDate] = useState<string>('');
  const [description, setDescription] = useState('');
  const [descriptionImage, setDesctiptionImage] = useState<Blob[]>([]);

  const [venueSection, setVenueSection] = useState(['R', 'S', 'A']);

  const handleDeploy = () => {

  };

  return (
    <form className={styles.container}>
      <UploadThumbnailImage
        setImage={setThumbnailImage}
      />
      <Label name="공연 제목">
        <Input
          type="text"
          name="공연 제목"
          value={title}
          setValue={setTitle}
        />
      </Label>
      <Label name="출연진">
        <Input
          type="text"
          name="출연진"
          value={cast}
          setValue={setCast}
        />
      </Label>
      <VenueAndPrice
        venue={venue}
        setVenue={setVenue}
        venueSection={venueSection}
        price={price}
        setPrice={setPrice}
      />
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
      <UploadDescriptionImage
        setImage={setDesctiptionImage}
      />
      <Button onClick={handleDeploy}>배포하기</Button>
    </form>
  );
}
