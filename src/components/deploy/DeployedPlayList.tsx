import { DeployedPlay } from '../../utils/type';
import DeployedPlayCard from './DeployedPlayCard';

interface DeployedPlayListProps {
  deployedPlays: DeployedPlay[];
}

export default function DeployedPlayList({ deployedPlays }: DeployedPlayListProps) {
  return (
    <ul>
      {deployedPlays.map(({
        pid,
        thumbnailUrl,
        title,
        playType,
        bookedSeatCount,
        totalSeatCount,
        status,
        deployDate,
      }) => (
        <li key={pid}>
          <DeployedPlayCard
            pid={pid}
            thumbnailUrl={thumbnailUrl}
            title={title}
            playType={playType}
            bookedSeatCount={bookedSeatCount}
            totalSeatCount={totalSeatCount}
            status={status}
            deployDate={deployDate}
          />
        </li>
      ))}
    </ul>
  );
}
