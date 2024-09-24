import { useParams } from 'react-router-dom';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import PlayMonitorWrapper from '../remotes/PlayMonitorWrapper';

export default function PlayMonitorPage() {
  const { playName } = useParams();

  return (
    <main>
      <OwnerTab
        playName={playName}
        current="PlayMonitor"
      />
      <CategoryTitle>예매 현황 모니터링</CategoryTitle>
      <PlayMonitorWrapper
        totalSeatCount={1000}
        reservedSeatCount={750}
        sectionData={[
          {
            section: 'R',
            data: 100,
          },
          {
            section: 'S',
            data: 250,
          },
          {
            section: 'A',
            data: 400,
          },
        ]}
        dateData={[
          ['2024-01-01', 100],
          ['2024-01-02', 130],
          ['2024-01-03', 280],
          ['2024-01-04', 480],
          ['2024-01-05', 550],
          ['2024-01-06', 690],
          ['2024-01-07', 750],
        ]}
      />
    </main>
  );
}
