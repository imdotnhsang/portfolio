import { useLocale } from 'next-intl';

const LocalePage = () => {
  const locale = useLocale();

  console.log({ locale });

  return <div className='h-[1920px]'>locale page</div>;
};

export default LocalePage;
