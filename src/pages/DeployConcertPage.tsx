import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import DeployConcertForm from '../components/deploy/DeployConcertForm';

export default function DeployConcertPage() {
  const { templateName } = useParams();
  return (
    <main>
      <CategoryTitle>공연 배포</CategoryTitle>
      <DeployConcertForm templateName={templateName} />
    </main>
  );
}
