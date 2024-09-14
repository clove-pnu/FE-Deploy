import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import PlayDetail from '../components/deploy/PlayDetail';

export default function PlayDetailPage() {
  const { pid } = useParams();
  return (
    <main>
      <CategoryTitle>공연 상세 정보</CategoryTitle>
      <OwnerTab
        pid={Number(pid)}
        current="PlayDetail"
      />
      <PlayDetail playName="name1" />
    </main>
  );
}
