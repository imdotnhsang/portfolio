'use client';

import { Monitor, MoonStars, SunDim } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useParams } from 'next/navigation';
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition
} from 'react';

import type { FC } from 'react';

import {
  IconFlagUk24,
  IconFlagVn24,
  IconLogoDark36,
  IconLogoLight36
} from '@/assets';
import { InternalLink } from '@/components';
import { CCore } from '@/constants';
import { useEventListener, useIsClient, useLocale } from '@/hooks';
import { routesConfig } from '@/routes';
import { cn, usePathname, useRouter } from '@/services';

import { IObject } from '@/interfaces';
import type { TBasicTheme, TPhosphorIcon } from '@/types';

type TTheme = TBasicTheme | 'system';

const THEME_ICON: {
  [key in TTheme | 'system']: TPhosphorIcon;
} = {
  light: MoonStars,
  dark: SunDim,
  system: Monitor
};

const HEADER_HEIGHT = 90;

export const Header: FC = memo(function Header() {
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const pathname = usePathname();
  const isClient = useIsClient();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const { isLightTheme, isDarkTheme, isLangEn, isLangVi } = useMemo(
    () => ({
      isLightTheme: resolvedTheme === 'light' && isClient,
      isDarkTheme: resolvedTheme === 'dark' && isClient,
      isLangVi: locale === 'vi',
      isLangEn: locale === 'en'
    }),
    [isClient, locale, resolvedTheme]
  );

  const [isPending, startTransition] = useTransition();
  const [scrollOverMenu, setScrollOverMenu] = useState(false);

  const { ThemeIcon, nextTheme, Logo } = useMemo(() => {
    let ThemeIcon: TPhosphorIcon = Monitor;
    let nextTheme: TTheme = 'light';

    if (!isClient) {
      return {
        ThemeIcon,
        nextTheme,
        Logo: IconLogoLight36
      };
    }

    const oppositeTheme: IObject<TTheme> = {
      light: 'dark',
      dark: 'system',
      system: 'light'
    };

    nextTheme = oppositeTheme[theme as TTheme];
    ThemeIcon = THEME_ICON[theme as TTheme];

    return {
      ThemeIcon,
      nextTheme,
      Logo: isLightTheme
        ? IconLogoLight36
        : isDarkTheme
          ? IconLogoDark36
          : IconLogoLight36
    };
  }, [isClient, isDarkTheme, isLightTheme, theme]);

  const handleScroll = useCallback(() => {
    if (CCore.IS_SERVER) {
      return;
    }

    setScrollOverMenu(window.scrollY > HEADER_HEIGHT / 2);
  }, []);

  useEffect(() => {
    handleScroll();

    return () => {};
  }, [handleScroll]);

  useEventListener('scroll', () => {
    handleScroll();
  });

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
    <div className='sticky top-0 bg-color-secondary'>
      <div className='container'>
        <div
          className={cn(
            'relative flex items-center justify-between py-5 transition-[padding] duration-300',
            { 'pl-10 pr-4': scrollOverMenu }
          )}
        >
          <div className='flex items-center gap-16'>
            <InternalLink
              className={cn('relative z-1 ', {
                'h-7.5 w-[27px]': scrollOverMenu
              })}
              href={routesConfig.home.pathname.en}
            >
              {Logo && (
                <Logo
                  className={cn('transition-300', {
                    'scale-100': !scrollOverMenu,
                    '-ml-1 -mt-1 scale-75': scrollOverMenu
                  })}
                />
              )}
            </InternalLink>
            <div
              className={cn('h-12.5 transition-[padding] duration-300', {
                'relative px-8': !scrollOverMenu
              })}
            >
              <div
                className={cn('absolute left-0 w-full rounded-full border', {
                  'top-0 h-12.5 border-line-strong': !scrollOverMenu,
                  'dark:shadow-d-md top-3.5 h-15.5 border-line-subtle shadow-md':
                    scrollOverMenu
                })}
              />
              <div className='relative z-1 flex h-full items-center gap-16'>
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
          </div>
          <div className='z-1 flex gap-2.5'>
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
                  'opacity-100': isLangEn,
                  'opacity-0': isLangVi
                })}
              />
              <IconFlagUk24
                className={cn('transform-center transition-300', {
                  'opacity-100': isLangVi,
                  'opacity-0': isLangEn
                })}
              />
            </button>
            <button
              className={cn(
                'transition-300 center focus-shadow size-9 rounded-full border',
                {
                  'border-gray-1100 bg-gray-900 hover:border-gray-1200 hover:bg-gray-1100':
                    isLightTheme,
                  'border-gray-500 bg-gray-300 hover:border-gray-600 hover:bg-gray-400':
                    isDarkTheme
                }
              )}
              onClick={() => setTheme(nextTheme)}
            >
              {ThemeIcon && (
                <ThemeIcon
                  weight='fill'
                  size={24}
                  className={cn({
                    'text-gray-200': isLightTheme,
                    'text-gray-900': isDarkTheme
                  })}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
