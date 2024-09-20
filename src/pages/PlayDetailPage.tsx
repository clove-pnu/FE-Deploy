import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import PlayDetail from '../components/deploy/PlayDetail';

export default function PlayDetailPage() {
  const { playName } = useParams();
  return (
    <main>
      <OwnerTab
        playName={playName}
        current="PlayDetail"
      />
      <CategoryTitle>공연 상세 정보</CategoryTitle>
      <PlayDetail playName={playName} />
    </main>
  );
}
