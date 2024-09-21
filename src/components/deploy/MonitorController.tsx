import { useState } from 'react';
import MonitorWrapper from '../../remotes/MonitorWrapper';
import Toggle from '../common/Toggle';

interface MonitorControllerProps {
  namespace: string;
}

export default function MonitorController({ namespace }: MonitorControllerProps) {
  const [enableSlices, setEnableSlices] = useState<boolean>(false);

  return (
    <div>
      <Toggle
        label="Enable slices"
        value={enableSlices}
        setValue={setEnableSlices}
      />
      <MonitorWrapper
        namespace={namespace}
        enableSlices={enableSlices}
      />
    </div>
  );
}
