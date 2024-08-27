import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import PlayDetail from '../components/deploy/PlayDetail';
import { DeployedPlayDetail } from '../utils/type';

const mockdata: DeployedPlayDetail = {
  pid: 0,
  thumbnailUrl: '',
  title: '공연 제목',
  deployDate: new Date(2024, 6, 27),
  bookingStartDate: new Date(2024, 6, 31),
  bookingEndDate: new Date(2024, 7, 5),
  status: '예매 중',
};

export default function PlayDetailPage() {
  const { pid } = useParams();
  return (
    <main>
      <CategoryTitle>공연 상세 정보</CategoryTitle>
      <OwnerTab
        pid={Number(pid)}
        current="PlayDetail"
      />
      <PlayDetail
        pid={mockdata.pid}
        thumbnailUrl={mockdata.thumbnailUrl}
        title={mockdata.title}
        deployDate={mockdata.deployDate}
        bookingStartDate={mockdata.bookingStartDate}
        bookingEndDate={mockdata.bookingEndDate}
        status={mockdata.status}
      />
    </main>
  );
}
