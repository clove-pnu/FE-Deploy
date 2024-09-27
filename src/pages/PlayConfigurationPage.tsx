import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import PlayConfigurationForm from '../components/deploy/PlayConfigurationForm';

export default function PlayConfigurationPage() {
  const { namespace } = useParams();

  return (
    <main>
      <OwnerTab
        namespace={namespace}
        current="PlayConfiguration"
      />
      <CategoryTitle>공연 수정</CategoryTitle>
      <PlayConfigurationForm namespace={namespace} />
    </main>
  );
}
