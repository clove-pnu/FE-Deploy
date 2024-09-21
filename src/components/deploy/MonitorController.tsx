import { useState } from 'react';
import MonitorWrapper from '../../remotes/MonitorWrapper';

interface MonitorControllerProps {
  namespace: string;
}

export default function MonitorController({ namespace }: MonitorControllerProps) {
  const [enableSlices, setEnableSlices] = useState<boolean>(false);

  return (
    <div>
      <MonitorWrapper
        namespace={namespace}
        enableSlices={enableSlices}
      />
    </div>
  );
}
