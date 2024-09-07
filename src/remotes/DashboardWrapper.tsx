import {
  Component, lazy, Suspense,
} from 'react';

interface Props {
  title: string;
  pid: number;
}

interface State {
  hasError: boolean;
}

const Dashboard = lazy(() => import('monitor/Dashboard'));

class DashboardWrapper extends Component<Props, State> {
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

    const { title, pid } = this.props;

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard
          title={title}
          pid={pid}
        />
      </Suspense>
    );
  }
}

export default DashboardWrapper;
