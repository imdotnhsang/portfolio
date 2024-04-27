import { useLocale as _useLocale } from 'next-intl';

import { TLocale } from '@/services';

export const useLocale = (): TLocale => {
  const locale = _useLocale() as TLocale;

  return locale;
};
