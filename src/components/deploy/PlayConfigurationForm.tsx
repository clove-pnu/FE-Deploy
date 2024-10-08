import { useEffect, useState } from 'react';
import Label from '../common/Label';
import Input from '../common/Input';
import Button from '../common/Button';
import AddEventDate from './AddEventDate';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { getEvent } from '../../apis/event';
import styles from '../styles/PlayConfigurationForm.module.css';
import { getTemplateList } from '../../apis/template';
import { Template } from '../../utils/type';
import { updateService } from '../../apis/deploy';

interface PlayConfigurationFormProps {
  namespace: string;
}

export default function PlayConfigurationForm({ namespace }: PlayConfigurationFormProps) {
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [cast, setCast] = useState('');
  const [eventDate, setEventDate] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState<string>('');
  const [bookingEndDate, setBookingEndDate] = useState<string>('');
  const [description, setDescription] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [templateList, setTemplateList] = useState<Template[]>([]);

  useEffect(() => {
    fetchWithHandler(() => getEvent(namespace), {
      onSuccess: (response) => {
        setData(response.data[0]);
        setName(response.data[0].name);
        setCast(response.data[0].cast);
        setEventDate([...response.data[0].eventTime]);
        setBookingStartDate(response.data[0].bookingStartDate);
        setBookingEndDate(response.data[0].bookingEndDate);
        setDescription(response.data[0].description.text.join('\n'));
      },
      onError: () => {},
    });

    fetchWithHandler(() => getTemplateList(), {
      onSuccess: (response) => {
        setTemplateList(response.data);
      },
      onError: () => {},
    });
  }, []);

  const updateTemplate = async () => {
    if (selectedTemplate === '') {
      return;
    }

    fetchWithHandler(() => updateService({
      namespace,
      templateName: selectedTemplate,
    }), {
      onSuccess: (response) => {
        console.log(response);
      },
      onError: () => {},
    });
  };

  const handleDelete = () => {

  };

  return (
    <form className={styles.container}>
      <select
        onChange={(e) => setSelectedTemplate(e.target.value)}
        value={selectedTemplate}
      >
        <option
          key=""
          value=""
        >
          템플릿을 선택하세요
        </option>
        {templateList.map(([templateName, templateInfo]) => (
          <option
            key={templateName}
            value={templateInfo.nickname}
          >
            {templateInfo.nickname}
          </option>
        ))}
      </select>
      <img
        src={data?.image}
        alt="공연 썸네일"
        className={styles.thumbnailImage}
      />
      <Label name="공연 제목">
        <Input
          type="text"
          name="공연 제목"
          value={name}
          setValue={setName}
        />
      </Label>
      <div className={styles.category}>
        <div className={styles.categoryName}>공연 식별자</div>
        <div className={styles.disabled}>{namespace}</div>
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
        <div className={styles.disabled}>{data?.venue}</div>
      </div>
      <div className={styles.category}>
        <div className={styles.categoryName}>좌석 별 가격</div>
        <ul className={styles.priceList}>
          {data?.seatsAndPrices && data?.seatsAndPrices.map(({
            id, section, price,
          }) => (
            <li
              key={id}
              className={styles.disabled}
            >
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
      <Button>공연 수정하기</Button>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={handleDelete}
      >
        공연 삭제하기
      </button>
    </form>
  );
}
