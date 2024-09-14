import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import DashboardWrapper from '../remotes/DashboardWrapper';

export default function PlayMonitorPage() {
  const { pid } = useParams();
  return (
    <main>
      <CategoryTitle>예매 현황 모니터링</CategoryTitle>
      <OwnerTab
        pid={Number(pid)}
        current="PlayMonitor"
      />
      <DashboardWrapper
        title="CPU 사용량"
        pid={Number(pid)}
      />
    </main>
  );
}
