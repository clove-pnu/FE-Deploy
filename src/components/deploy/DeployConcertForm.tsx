import { useState } from 'react';
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
import { Image } from '../../utils/type';
import { venueData } from '../../data/venue';
import { createNamespace } from '../../apis/deploy';
import { sleep } from '../../utils/delay';
import Loading from '../common/Loading';

interface DeployConcertFormProps {
  templateName: string;
}

export default function DeployConcertForm({ templateName }: DeployConcertFormProps) {
  const [thumbnailImage, setThumbnailImage] = useState<Image>(null);
  const [title, setTitle] = useState('');
  const [namespace, setNamespace] = useState('');
  const [cast, setCast] = useState('');
  const [venue, setVenue] = useState<string>('');
  const [priceMap, setPriceMap] = useState<Map<string, {
    price: number;
    count: number;
  }>>(new Map());
  const [eventDate, setEventDate] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState<string>('');
  const [bookingEndDate, setBookingEndDate] = useState<string>('');
  const [description, setDescription] = useState('');
  const [descriptionImage, setDesctiptionImage] = useState<Image>(null);
  const [isDeploying, setIsDeploying] = useState<boolean>(false);

  const handleDeploy = async () => {
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

    setIsDeploying(true);
    let flag = false;

    await fetchWithHandler(() => createNamespace({
      namespace,
      templateName,
    }), {
      onSuccess: () => {
        flag = true;
      },
      onError: (error) => {
        console.error(error);
      },
    });

    if (flag) {
      await sleep(60000);

      const formData = new FormData();
      // const currentVenueSections = venueData.find((v) => v.name === venue).sections;

      const seatsAndPriceData = Array.from(priceMap).map(([section, { price, count }]) => ({
        section,
        price,
        count,
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

      formData.append('event', new Blob([JSON.stringify(eventData)], { type: 'application/json' }), 'venue.json');
      formData.append('image', thumbnailImage.data, `thumbnail.${thumbnailImage.ext}`);
      formData.append('descriptionImage', descriptionImage.data, `description.${descriptionImage.ext}`);

      await fetchWithHandler(() => deployEvent({
        data: formData,
        namespace,
      }), {
        onSuccess: () => {
          alert('공연 등록이 완료되었습니다.');

          window.location.href = process.env.NODE_ENV === 'production'
            ? 'http://cse.ticketclove.com/page/main/owner'
            : 'http://localhost:3000/page/main/owner';
        },
        onError: (error) => {
          alert('공연 등록이 실패했습니다.');
          console.error(error);
        },
      });
    } else {
      alert('공연 등록이 실패했습니다.');
    }

    setIsDeploying(false);
  };

  return (
    <form className={styles.container}>
      <UploadThumbnailImage setImage={setThumbnailImage} />
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
        selectedVenue={venue}
        setSelectedVenue={setVenue}
        venues={venueData}
        priceMap={priceMap}
        setPriceMap={setPriceMap}
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
      <UploadDescriptionImage setImage={setDesctiptionImage} />
      {isDeploying
        ? (
          <div>
            <div>공연 배포 중입니다.</div>
            <div>최대 3분까지 소요될 수 있습니다.</div>
            <Loading />
          </div>
        )
        : (
          <Button
            onClick={handleDeploy}
          >
            배포하기
          </Button>
        )}
    </form>
  );
}
