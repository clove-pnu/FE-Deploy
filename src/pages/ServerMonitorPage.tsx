import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import DashboardWrapper from '../remotes/DashboardWrapper';
import styles from './styles/ServerMonitorPage.module.css';

export default function ServerMonitorPage() {
  const { pid } = useParams();
  return (
    <main>
      <CategoryTitle>공연 서버 모니터링</CategoryTitle>
      <OwnerTab
        pid={Number(pid)}
        current="ServerMonitor"
      />
      <DashboardWrapper
        title="CPU 사용량"
        pid={Number(pid)}
      />
    </main>
  );
}
