import { useTranslations } from 'next-intl';

const AboutPage = () => {
  const t = useTranslations('footer');

  console.log(t('designBy'));

  return <div>about page</div>;
};

export default AboutPage;
