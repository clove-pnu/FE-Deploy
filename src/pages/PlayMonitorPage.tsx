import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import DashboardWrapper from '../remotes/DashboardWrapper';

export default function PlayMonitorPage() {
  const { playName } = useParams();
  return (
    <main>
      <OwnerTab
        playName={playName}
        current="PlayMonitor"
      />
      <CategoryTitle>예매 현황 모니터링</CategoryTitle>
      <DashboardWrapper
        title="CPU 사용량"
        pid={0}
      />
    </main>
  );
}
