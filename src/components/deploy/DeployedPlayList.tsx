import { DeployedPlay } from '../../utils/type';
import DeployedPlayCard from './DeployedPlayCard';

interface DeployedPlayListProps {
  deployedPlays: DeployedPlay[];
}

export default function DeployedPlayList({ deployedPlays }: DeployedPlayListProps) {
  return (
    <ul>
      {deployedPlays.map(({
        id,
        image,
        name,
        bookingStartDate,
        bookingEndDate,
      }) => (
        <li key={id}>
          <DeployedPlayCard
            id={id}
            image={image}
            name={name}
            bookingStartDate={bookingStartDate}
            bookingEndDate={bookingEndDate}
            status="예매중"
          />
        </li>
      ))}
    </ul>
  );
}
