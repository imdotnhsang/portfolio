import { useTranslations } from 'next-intl';

const App = () => {
  const t = useTranslations('app');

  return (
    <div className='bg-blue-500 rounded px-4 py-2 text-base text-white'>
      app page {t('title')}
    </div>
  );
};

export default App;
