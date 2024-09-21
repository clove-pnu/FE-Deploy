import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import MonitorController from '../components/deploy/MonitorController';

export default function ServerMonitorPage() {
  const { playName } = useParams();
  return (
    <main>
      <OwnerTab
        playName={playName}
        current="ServerMonitor"
      />
      <CategoryTitle>공연 서버 모니터링</CategoryTitle>
      <MonitorController namespace="default" />
    </main>
  );
}
