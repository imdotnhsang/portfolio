import { IntlErrorCode } from 'next-intl';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { TPathnames, routesConfig } from '@/routes';

export const LOCALES = ['en', 'vi'] as const;

export type TLocale = (typeof LOCALES)[number];

export const intlPathnamesConfig = Object.fromEntries(
  Object.values(routesConfig).map((route) => [
    route.pathname.en,
    route.pathname
  ])
) as {
  [key in TPathnames]: {
    en: string;
    vi: string;
  };
};

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!LOCALES.includes(locale as TLocale)) {
    return notFound();
  }

  return {
    messages: (await import(`/public/locales/${locale}.json`)).default,
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

export const intlProps = {
  locales: LOCALES,
  pathnames: intlPathnamesConfig
};

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    ...intlProps,
    localePrefix: undefined
  });
