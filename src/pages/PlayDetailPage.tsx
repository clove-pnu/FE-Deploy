import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import PlayDetail from '../components/deploy/PlayDetail';

export default function PlayDetailPage() {
  const { playName } = useParams();
  return (
    <main>
      <CategoryTitle>공연 상세 정보</CategoryTitle>
      <OwnerTab
        playName={playName}
        current="PlayDetail"
      />
      <PlayDetail playName={playName} />
    </main>
  );
}
