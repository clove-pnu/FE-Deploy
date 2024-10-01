import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CategoryTitle from '../components/common/CategoryTitle';
import OwnerTab from '../components/deploy/OwnerTab';
import PlayMonitorWrapper from '../remotes/PlayMonitorWrapper';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { getEvent } from '../apis/event';
import { getPlayMonitorData } from '../apis/ticket';

export default function PlayMonitorPage() {
  const { namespace } = useParams();
  const [eventName, setEventName] = useState<string>(null);
  const [seatData, setSeatData] = useState(null);
  const [data, setData] = useState(null);
  const [recentDates, setRecentDates] = useState<string[]>([]);
  const [dateData, setDateData] = useState<[string, number][]>([]);

  useEffect(() => {
    const now = new Date(Date.now());
    now.setDate(now.getDate() + 1);

    const recentDateArray = [...new Array(7)].map(() => {
      now.setDate(now.getDate() - 1);

      const monthString = now.getMonth() + 1;
      const dateString = now.getDate();

      return `${now.getFullYear()}-${monthString < 10 ? `0${monthString}` : monthString}-${dateString < 10 ? `0${dateString}` : dateString}`;
    }).reverse();

    setRecentDates(recentDateArray);
  }, []);

  useEffect(() => {
    fetchWithHandler(() => getEvent(namespace), {
      onSuccess: (response) => {
        setSeatData(response.data[0].seatsAndPrices);
        setEventName(response.data[0].name);
      },
      onError: () => {},
    });
  }, []);

  useEffect(() => {
    if (eventName) {
      fetchWithHandler(() => getPlayMonitorData(), {
        onSuccess: (response) => {
          const dataResult = response.data.tickets.filter((d) => d.eventName === eventName);

          let acc = 0;
          const dateDataResult: [string, number][] = recentDates.map((currentDate) => {
            const cur = dataResult.filter((d) => d.purchaseDate === currentDate).length;
            const count = acc + cur;
            acc += cur;

            return [
              currentDate,
              count,
            ];
          });

          setData(dataResult);
          setDateData(dateDataResult);
        },
        onError: () => {},
      });
    }
  }, [eventName]);

  return (
    <main>
      <OwnerTab
        namespace={namespace}
        current="PlayMonitor"
      />
      <CategoryTitle>예매 현황 모니터링</CategoryTitle>
      {data && seatData ? (
        <PlayMonitorWrapper
          totalSeatCount={seatData.reduce((acc, cur) => acc + cur.count, 0)}
          reservedSeatCount={data.length}
          sectionData={seatData.map((currentSection) => ({
            section: currentSection.section,
            data: data.filter((d) => d.section === currentSection.section).length,
          }))}
          dateData={dateData}
        />
      ) : (
        <div>
          예매 현황을 불러오지 못했습니다.
        </div>
      )}
    </main>
  );
}
