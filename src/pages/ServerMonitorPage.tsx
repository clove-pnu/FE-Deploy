import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import MonitorController from '../components/deploy/MonitorController';

export default function ServerMonitorPage() {
  const { namespace } = useParams();
  return (
    <main>
      <OwnerTab
        namespace={namespace}
        current="ServerMonitor"
      />
      <CategoryTitle>공연 서버 모니터링</CategoryTitle>
      <MonitorController namespace={namespace} />
    </main>
  );
}
