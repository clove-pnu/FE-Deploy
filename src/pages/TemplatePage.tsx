import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateForm from '../components/deploy/TemplateForm';
import CategoryTitle from '../components/common/CategoryTitle';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { getTemplateList } from '../apis/template';
import { Template } from '../utils/type';

export default function TemplatePage() {
  const [selectedTemplateType, setSelectedTemplateType] = useState<string>();
  const [templateList, setTemplateList] = useState<Template[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWithHandler(() => getTemplateList(), {
      onSuccess: (response) => {
        setTemplateList(response.data);
      },
      onError: () => {},
    });
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    navigate(`./${selectedTemplateType}`);
  };

  return (
    <main>
      <CategoryTitle>공연 배포</CategoryTitle>
      <TemplateForm
        templateList={templateList}
        selectedTemplateType={selectedTemplateType}
        setSelectedTemplateType={setSelectedTemplateType}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
