'use client';

import { useTheme } from 'next-themes';
import { useParams } from 'next/navigation';
import { memo, useCallback, useMemo, useTransition } from 'react';

import type { FC } from 'react';

import { IconFlagUk24, IconFlagVn24, IconLogoLight36 } from '@/assets';
import { routesConfig } from '@/routes';
import { cn, usePathname, useRouter } from '@/services';

import { InternalLink } from '@/components';
import { useLocale } from '@/hooks';
import type { IObject } from '@/interfaces';
import type { TSvgComp } from '@/types';
import { useTranslations } from 'next-intl';

const LogoConfig: IObject<TSvgComp> = {
  light: IconLogoLight36,
  dark: IconLogoLight36
};

const Logo: FC = memo(function Logo() {
  const { theme } = useTheme();

  const Icon: TSvgComp = useMemo(() => {
    if (!theme) {
      return IconLogoLight36;
    }

    return LogoConfig[theme];
  }, [theme]);

  return <Icon />;
});

export const Header: FC = memo(function Header() {
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const handleToggleLocale = useCallback(() => {
    const oppositeLocale = {
      en: 'vi',
      vi: 'en'
    };

    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      router.replace({ pathname, params }, { locale: oppositeLocale[locale] });
    });
  }, [locale, params, pathname, router]);

  return (
    <div className='container flex w-full items-center justify-between py-5'>
      <div className='flex items-center gap-16'>
        <InternalLink href={routesConfig.home.pathname.en}>
          <Logo />
        </InternalLink>
        <div className='flex h-12.5 items-center gap-16 rounded-full border border-line-strong px-8'>
          {Object.entries(routesConfig)
            .filter(([, route]) => route.pathname.en !== '/')
            .map(([key, route]) => (
              <InternalLink
                key={key}
                href={route.pathname.en}
                className='font-mono font-bold'
              >
                {t(`page.${key}.title`)}
              </InternalLink>
            ))}
        </div>
      </div>
      <div className='flex gap-2.5'>
        <button
          className={cn(
            'transition-300 relative size-9 rounded-full border border-line-subtle hover:border-line-strong',
            {
              'cursor-not-allowed': isPending
            }
          )}
          disabled={isPending}
          onClick={handleToggleLocale}
        >
          <IconFlagVn24
            className={cn('transform-center transition-300', {
              'opacity-100': locale === 'en',
              'opacity-0': locale !== 'en'
            })}
          />
          <IconFlagUk24
            className={cn('transform-center transition-300', {
              'opacity-100': locale === 'vi',
              'opacity-0': locale !== 'vi'
            })}
          />
        </button>
      </div>
    </div>
  );
});
