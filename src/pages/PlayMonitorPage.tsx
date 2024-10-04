import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import PlayMonitorWrapper from '../remotes/PlayMonitorWrapper';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { getEvent } from '../apis/event';

export default function PlayMonitorPage() {
  document.title = '예매 현황 모니터링 | Clove 티켓';

  const { namespace } = useParams();
  const [seatData, setSeatData] = useState(null);

  useEffect(() => {
    fetchWithHandler(() => getEvent(namespace), {
      onSuccess: (response) => {
        setSeatData(response.data[0].seatsAndPrices);
      },
      onError: () => {},
    });
  }, [namespace]);

  return (
    <main>
      <OwnerTab
        namespace={namespace}
        current="PlayMonitor"
      />
      <CategoryTitle>예매 현황 모니터링</CategoryTitle>
      {seatData ? (
        <PlayMonitorWrapper
          namespace={namespace}
          seatData={seatData}
        />
      ) : (
        <div>
          예매 현황을 불러오지 못했습니다.
        </div>
      )}
    </main>
  );
}
