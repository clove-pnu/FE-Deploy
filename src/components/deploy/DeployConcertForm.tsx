import { useEffect, useState } from 'react';
import styles from '../styles/DeployConcertForm.module.css';
import Label from '../common/Label';
import Input from '../common/Input';
import Button from '../common/Button';
import UploadThumbnailImage from './UploadThumbnailImage';
import UploadDescriptionImage from './UploadDescriptionImage';
import AddEventDate from './AddEventDate';
import VenueAndPrice from './VenueAndPrice';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { deployEvent } from '../../apis/event';
import { getJson } from '../../apis/json';

export default function DeployConcertForm() {
  const [thumbnailImage, setThumbnailImage] = useState<Blob>(null);
  const [title, setTitle] = useState('');
  const [namespace, setNamespace] = useState('');
  const [cast, setCast] = useState('');
  const [venue, setVenue] = useState<string>('');
  const [price, setPrice] = useState<Map<string, string>>(new Map());
  const [eventDate, setEventDate] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState<string>('');
  const [bookingEndDate, setBookingEndDate] = useState<string>('');
  const [description, setDescription] = useState('');
  const [descriptionImage, setDesctiptionImage] = useState<Blob>(null);

  const [venueSection, setVenueSection] = useState(['R', 'S', 'A']);
  const [jsonFile, setJsonFile] = useState<Blob>(null);

  useEffect(() => {
    fetchWithHandler(() => getJson(), {
      onSuccess: (response) => {
        const blob = new Blob([JSON.stringify(response.data)], { type: 'application/json' });
        setJsonFile(blob);
      },
      onError: () => {},
    });
  }, []);

  const handleDeploy = () => {
    if (!(title
      && namespace
      && cast
      && venue
      && eventDate.length > 0
      && bookingStartDate
      && bookingEndDate)) {
      alert('모든 필드를 입력하세요.');
      return;
    }

    const formData = new FormData();

    const seatsAndPriceData = Array.from(price).map(([section, sectionPrice]) => ({
      section,
      price: Number(sectionPrice),
      count: 100,
    }));

    const eventData = {
      name: title,
      cast,
      venue,
      startDate: eventDate[0].split(' ')[0],
      endDate: eventDate[eventDate.length - 1].split(' ')[0],
      bookingStartDate,
      bookingEndDate,
      eventTime: eventDate,
      description: {
        text: description.split('\n'),
      },
      seatsAndPrices: seatsAndPriceData,
    };

    const thumbnailImageData = thumbnailImage;
    const jsonData = jsonFile;
    const descriptionImageData = descriptionImage;

    formData.append('event', new Blob([JSON.stringify(eventData)], { type: 'application/json' }), 'venue.json');
    formData.append('image', thumbnailImageData, 'thumbnail.gif');
    formData.append('jsonFileUrl', jsonData, 'data.json');
    formData.append('descriptionImage', descriptionImageData, 'description.gif');

    fetchWithHandler(() => deployEvent(formData), {
      onSuccess: (response) => {
        alert('공연 등록이 완료되었습니다.');
        console.log(response);
      },
      onError: (error) => {
        alert('공연 등록이 실패했습니다.');
        console.error(error);
      },
    });
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
      <Label name="공연 식별자">
        <Input
          type="text"
          name="공연 식별자"
          value={namespace}
          setValue={setNamespace}
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
