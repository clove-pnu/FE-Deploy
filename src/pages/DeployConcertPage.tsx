import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import DeployConcertForm from '../components/deploy/DeployConcertForm';

export default function DeployConcertPage() {
  document.title = '공연 배포 | Clove 티켓';

  const { templateName } = useParams();

  return (
    <main>
      <CategoryTitle>공연 배포</CategoryTitle>
      <DeployConcertForm templateName={templateName} />
    </main>
  );
}
