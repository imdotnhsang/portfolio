import { useTranslations } from 'next-intl';

const LocalePage = () => {
  const t = useTranslations();

  return <div className='h-[1920px]'>locale page {t('footer.designBy')}</div>;
};

export default LocalePage;
