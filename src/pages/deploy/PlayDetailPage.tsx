import CategoryTitle from '../../components/common/CategoryTitle';
import OwnerTab from '../../components/deploy/OwnerTab';
import PlayDetail from '../../components/deploy/PlayDetail';
import { DeployedPlayDetail } from '../../utils/type';

const mockdata: DeployedPlayDetail = {
  pid: 0,
  thumbnailUrl: '',
  title: '공연 제목',
  deployDate: new Date(2024, 6, 27),
  bookingStartDate: new Date(2024, 6, 31),
  bookingEndDate: new Date(2024, 7, 5),
  status: '예매 중',
  bookedSeatCount: 11000,
  totalSeatCount: 20000,
};

export default function PlayDetailPage() {
  return (
    <main>
      <PlayDetail
        pid={mockdata.pid}
        thumbnailUrl={mockdata.thumbnailUrl}
        title={mockdata.title}
        deployDate={mockdata.deployDate}
        bookingStartDate={mockdata.bookingStartDate}
        bookingEndDate={mockdata.bookingEndDate}
        status={mockdata.status}
        bookedSeatCount={mockdata.bookedSeatCount}
        totalSeatCount={mockdata.totalSeatCount}
      />
    </main>
  );
}
