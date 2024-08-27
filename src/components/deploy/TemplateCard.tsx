import { Template } from '../../utils/type';
import styles from '../styles/TemplateCard.module.css';

interface TemplateCardProps extends Template {
  selectedTemplateType: string;
  setSelectedTemplateType: React.Dispatch<React.SetStateAction<string>>;
}

export default function TemplateCard({
  selectedTemplateType,
  setSelectedTemplateType,
  name,
  type,
  description,
}: TemplateCardProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    setSelectedTemplateType(type);
  };

  return (
    <label
      className={styles.labelContainer}
      style={{ borderColor: `${type === selectedTemplateType ? 'var(--color-blue)' : 'var(--color-lightblue)'}` }}
      htmlFor={type}
    >
      <input
        type="radio"
        name="template"
        id={type}
        value={type}
        checked={type === selectedTemplateType}
        onChange={handleChange}
      />
      <div className={styles.label}>
        <div className={styles.name}>{name}</div>
        <div>{description}</div>
      </div>
    </label>
  );
}
