import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'vi'];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale)) {
    return notFound();
  }

  return {
    messages: (await import(`../locales/${locale}.json`)).default
  };
});
