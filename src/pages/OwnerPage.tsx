import DeployedPlayList from '../components/deploy/DeployedPlayList';
import LinkButton from '../components/common/LinkButton';

export default function OwnerPage() {
  return (
    <main>
      <div>
        <h1 className="py-4 text-center text-3xl font-bold">공연 관리</h1>
        <DeployedPlayList deployedPlays={[
          {
            pid: 0,
            thumbnailUrl: '',
            title: '테스트 공연',
            playType: '콘서트',
            bookedSeatCount: 300,
            totalSeatCount: 1500,
            status: '예매 중',
            deployDate: new Date(2024, 7, 1),
          },
          {
            pid: 1,
            thumbnailUrl: '',
            title: '제목이 조금 긴 공연',
            playType: '콘서트',
            bookedSeatCount: 2800,
            totalSeatCount: 3000,
            status: '예매 중',
            deployDate: new Date(2024, 6, 22),
          },
        ]}
        />
        <div className="flex justify-end">
          <LinkButton to="./deploy">
            새 공연 배포하기
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
