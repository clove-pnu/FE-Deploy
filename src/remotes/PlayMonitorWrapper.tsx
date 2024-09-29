import {
  Component, lazy, Suspense,
} from 'react';
import Loading from '../components/common/Loading';

interface Props {
  totalSeatCount: number;
  reservedSeatCount: number;
  sectionData: {
    section: string;
    data: number;
  }[];
  dateData: [string, number][];
}

interface State {
  hasError: boolean;
}

const PlayMonitor = lazy(() => import('monitor/PlayMonitor'));

class PlayMonitorWrapper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div>
          오류가 발생했습니다. 잠시 후 시도해주세요.
        </div>
      );
    }

    const {
      totalSeatCount,
      reservedSeatCount,
      sectionData,
      dateData,
    } = this.props;

    return (
      <Suspense fallback={<Loading />}>
        <PlayMonitor
          totalSeatCount={totalSeatCount}
          reservedSeatCount={reservedSeatCount}
          sectionData={sectionData}
          dateData={dateData}
        />
      </Suspense>
    );
  }
}

export default PlayMonitorWrapper;
