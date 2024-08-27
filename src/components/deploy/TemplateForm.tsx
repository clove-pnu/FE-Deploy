import { concertTemplate, exhibitionTemplate, sportsTemplate } from '../../utils/template';
import Button from '../common/Button';
import TemplateCard from './TemplateCard';
import styles from '../styles/TemplateForm.module.css';

interface TemplateOptionProps {
  selectedTemplateType: string;
  setSelectedTemplateType: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>
}

export default function TemplateForm({
  selectedTemplateType,
  setSelectedTemplateType,
  handleSubmit,
}: TemplateOptionProps) {
  return (
    <form
      className={styles.conatiner}
      onSubmit={handleSubmit}
    >
      <div className={styles.cardList}>
        <div>
          <TemplateCard
            name={concertTemplate.name}
            type={concertTemplate.type}
            description={concertTemplate.description}
            selectedTemplateType={selectedTemplateType}
            setSelectedTemplateType={setSelectedTemplateType}
          />
        </div>
        <div>
          <TemplateCard
            name={sportsTemplate.name}
            type={sportsTemplate.type}
            description={sportsTemplate.description}
            selectedTemplateType={selectedTemplateType}
            setSelectedTemplateType={setSelectedTemplateType}
          />
        </div>
        <div>
          <TemplateCard
            name={exhibitionTemplate.name}
            type={exhibitionTemplate.type}
            description={exhibitionTemplate.description}
            selectedTemplateType={selectedTemplateType}
            setSelectedTemplateType={setSelectedTemplateType}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button type="submit">
          다음
        </Button>
      </div>
    </form>
  );
}
