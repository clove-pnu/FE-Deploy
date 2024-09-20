import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import DashboardWrapper from '../remotes/DashboardWrapper';

export default function ServerMonitorPage() {
  const { playName } = useParams();
  return (
    <main>
      <OwnerTab
        playName={playName}
        current="ServerMonitor"
      />
      <CategoryTitle>공연 서버 모니터링</CategoryTitle>
      <DashboardWrapper
        title="CPU 사용량"
        pid={0}
      />
    </main>
  );
}
