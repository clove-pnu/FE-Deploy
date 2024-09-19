import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import PlayConfigurationForm from '../components/deploy/PlayConfigurationForm';

export default function PlayConfigurationPage() {
  const { playName } = useParams();

  return (
    <main>
      <CategoryTitle>공연 수정</CategoryTitle>
      <OwnerTab
        playName={playName}
        current="PlayConfiguration"
      />
      <PlayConfigurationForm playName={playName} />
    </main>
  );
}
