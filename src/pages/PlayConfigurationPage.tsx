import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import PlayConfigurationForm from '../components/deploy/PlayConfigurationForm';

export default function PlayConfigurationPage() {
  const { pid } = useParams();

  return (
    <main>
      <CategoryTitle>공연 수정</CategoryTitle>
      <OwnerTab
        pid={Number(pid)}
        current="PlayConfiguration"
      />
      <PlayConfigurationForm playName="name1" />
    </main>
  );
}
