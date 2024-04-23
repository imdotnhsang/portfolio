'use client';

import { Monitor, MoonStars, SunDim } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useParams } from 'next/navigation';
import { memo, useCallback, useMemo, useTransition } from 'react';

import type { FC } from 'react';

import {
  IconFlagUk24,
  IconFlagVn24,
  IconLogoDark36,
  IconLogoLight36
} from '@/assets';
import { InternalLink } from '@/components';
import { useIsClient, useLocale } from '@/hooks';
import { routesConfig } from '@/routes';
import { cn, usePathname, useRouter } from '@/services';

import type { TBasicTheme, TPhosphorIcon } from '@/types';

type TTheme = TBasicTheme | 'system';

const THEME_ICON: {
  [key in TTheme | 'system']: TPhosphorIcon;
} = {
  light: MoonStars,
  dark: SunDim,
  system: Monitor
};

export const Header: FC = memo(function Header() {
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const pathname = usePathname();
  const isClient = useIsClient();
  const { systemTheme, theme, setTheme } = useTheme();

  const [isPending, startTransition] = useTransition();

  const currTheme = useMemo(() => {
    if (theme === 'system') {
      return systemTheme;
    }

    return theme || 'light';
  }, [systemTheme, theme]);

  const { ThemeIcon, Logo, nextTheme } = useMemo(() => {
    const LogoByTheme = {
      light: IconLogoLight36,
      dark: IconLogoDark36
    };
    const oppositeTheme = {
      light: 'dark',
      dark: 'system',
      system: 'light'
    };

    const nextTheme = oppositeTheme[theme as TTheme];
    const ThemeIcon = THEME_ICON[theme as TTheme];

    return {
      ThemeIcon,
      Logo: LogoByTheme[currTheme as TBasicTheme],
      nextTheme
    };
  }, [currTheme, theme]);

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
            'transition-300 focus-shadow relative size-9 rounded-full border border-line-strong hover:border-line-bold',
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
        <button
          className={cn(
            'transition-300 center focus-shadow size-9 rounded-full border',
            {
              'border-gray-1100 bg-gray-900 hover:border-gray-1200 hover:bg-gray-1100':
                currTheme === 'light' && isClient,
              'border-gray-500 bg-gray-300 hover:border-gray-600 hover:bg-gray-400':
                currTheme === 'dark' && isClient
            }
          )}
          onClick={() => setTheme(nextTheme)}
        >
          <ThemeIcon
            weight='fill'
            size={24}
            className={cn({
              'text-gray-200': currTheme === 'light' && isClient,
              'text-gray-900': currTheme === 'dark' && isClient
            })}
          />
        </button>
      </div>
    </div>
  );
});
