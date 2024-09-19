import { useEffect, useState } from 'react';
import DeployedPlayList from '../components/deploy/DeployedPlayList';
import LinkButton from '../components/common/LinkButton';
import CategoryTitle from '../components/common/CategoryTitle';
import styles from './styles/OwnerPage.module.css';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { getEventList } from '../apis/event';

export default function OwnerPage() {
  const [deployedPlayList, setDeployedPlayList] = useState([]);

  useEffect(() => {
    fetchWithHandler(() => getEventList(), {
      onSuccess: (response) => {
        setDeployedPlayList([...response.data]);
      },
      onError: () => {

      },
    });
  }, []);

  return (
    <main>
      <div>
        <CategoryTitle>공연 관리</CategoryTitle>
        <DeployedPlayList deployedPlays={deployedPlayList} />
        <div className={styles.buttonContainer}>
          <LinkButton to="./deploy">
            새 공연 배포하기
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
