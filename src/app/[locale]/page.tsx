import { useTranslations } from 'next-intl';

const App = () => {
  const t = useTranslations('app');

  return <div>app page {t('title')}</div>;
};

export default App;
