import {
  Component, lazy, Suspense,
} from 'react';

interface Props {
  namespace: string;
  enableSlices: boolean;
}

interface State {
  hasError: boolean;
}

const Monitor = lazy(() => import('monitor/Monitor'));

class MonitorWrapper extends Component<Props, State> {
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

    const { namespace, enableSlices } = this.props;

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Monitor
          namespace={namespace}
          enableSlices={enableSlices}
        />
      </Suspense>
    );
  }
}

export default MonitorWrapper;
