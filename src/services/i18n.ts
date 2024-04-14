import { IntlErrorCode } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'vi'];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale)) {
    return notFound();
  }

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
    onError: (error) => {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        console.error('Missing i18n msg:', error);
      } else {
        console.error('Exception i18n error: ', error);
      }
    },
    getMessageFallback: ({ namespace, key, error }) => {
      const path = [namespace, key].filter((part) => part != null).join('.');

      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return path + ' is not yet i18n translated';
      } else {
        return 'Exception i18n error: ' + path;
      }
    }
  };
});
