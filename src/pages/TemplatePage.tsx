import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateForm from '../components/deploy/TemplateForm';
import { concertTemplate } from '../utils/template';

export default function TemplatePage() {
  const [selectedTemplateType, setSelectedTemplateType] = useState<string>(concertTemplate.type);
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    navigate(`./${selectedTemplateType}`);
  };

  return (
    <main>
      <div>
        <h1 className="py-4 text-center text-3xl font-bold">공연 배포</h1>
        <TemplateForm
          selectedTemplateType={selectedTemplateType}
          setSelectedTemplateType={setSelectedTemplateType}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}
