import DeployedPlayList from '../components/deploy/DeployedPlayList';
import LinkButton from '../components/common/LinkButton';
import CategoryTitle from '../components/common/CategoryTitle';
import styles from './styles/OwnerPage.module.css';

export default function OwnerPage() {
  return (
    <main>
      <div>
        <CategoryTitle>공연 관리</CategoryTitle>
        <DeployedPlayList deployedPlays={[
          {
            pid: 0,
            thumbnailUrl: '',
            title: '테스트 공연 1',
            playType: '콘서트',
            bookedSeatCount: 300,
            totalSeatCount: 1500,
            status: '예매 중',
            deployDate: new Date(2024, 7, 1),
          },
          {
            pid: 1,
            thumbnailUrl: '',
            title: '테스트 공연 2',
            playType: '콘서트',
            bookedSeatCount: 2800,
            totalSeatCount: 3000,
            status: '예매 중',
            deployDate: new Date(2024, 6, 22),
          },
        ]}
        />
        <div className={styles.buttonContainer}>
          <LinkButton to="./deploy">
            새 공연 배포하기
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
