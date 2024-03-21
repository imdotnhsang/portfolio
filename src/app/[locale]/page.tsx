import { useTranslations } from 'next-intl';

const App = () => {
  const t = useTranslations('app');

  return (
    <div className='border-1 border-cyan size-10 bg-purple'>
      app page {t('title')}
    </div>
  );
};

export default App;
