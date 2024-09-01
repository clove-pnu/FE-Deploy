import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateForm from '../components/deploy/TemplateForm';
import { concertTemplate } from '../utils/template';
import CategoryTitle from '../components/common/CategoryTitle';

export default function TemplatePage() {
  const [selectedTemplateType, setSelectedTemplateType] = useState<string>(concertTemplate.type);
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    navigate(`./${selectedTemplateType}`);
  };

  return (
    <main>
      <CategoryTitle>공연 배포</CategoryTitle>
      <TemplateForm
        selectedTemplateType={selectedTemplateType}
        setSelectedTemplateType={setSelectedTemplateType}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
