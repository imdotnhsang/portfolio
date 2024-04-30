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
import {
  useBoolean,
  useEventListener,
  useIsClient,
  useLocale,
  useMatchScreen
} from '@/hooks';
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

interface IAppearanceProps {}

const Appearance: FC<IAppearanceProps> = memo(function Appearance() {
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const isClient = useIsClient();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isUnderMd = useMatchScreen('md', 'max');

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

  const { ThemeIcon, nextTheme } = useMemo(() => {
    let ThemeIcon: TPhosphorIcon = Monitor;
    let nextTheme: TTheme = 'light';

    if (!isClient) {
      return {
        ThemeIcon,
        nextTheme
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
      nextTheme
    };
  }, [isClient, theme]);

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
    <div className='flex gap-2.5'>
      <button
        className={cn(
          'transition-300 focus-shadow relative size-10 rounded-full border border-line-strong bg-color-secondary hover:border-line-bold md:size-9',
          {
            'cursor-not-allowed': isPending
          }
        )}
        disabled={isPending}
        onClick={handleToggleLocale}
      >
        <IconFlagVn24
          className={cn(
            'transform-center transition-300 scale-[1.125] md:scale-100',
            {
              'opacity-100': isLangEn,
              'opacity-0': isLangVi
            }
          )}
        />
        <IconFlagUk24
          className={cn(
            'transform-center transition-300 scale-[1.125] md:scale-100',
            {
              'opacity-100': isLangVi,
              'opacity-0': isLangEn
            }
          )}
        />
      </button>
      <button
        className='transition-300 center focus-shadow size-10 rounded-full border border-gray-1100 bg-gray-900 hover:border-gray-1200 hover:bg-gray-1100 dark:border-gray-500 dark:bg-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-400 md:size-9'
        onClick={() => setTheme(nextTheme)}
      >
        {ThemeIcon && (
          <ThemeIcon
            weight='fill'
            size={isUnderMd ? 27 : 24}
            className={cn({
              'text-gray-200': isLightTheme,
              'text-gray-900': isDarkTheme
            })}
          />
        )}
      </button>{' '}
    </div>
  );
});

export const Header: FC = memo(function Header() {
  const t = useTranslations();
  const isClient = useIsClient();
  const { resolvedTheme } = useTheme();
  const isUnderMd = useMatchScreen('md', 'max');

  const [scrollOverMenu, setScrollOverMenu] = useState(false);
  const {
    value: openMenu,
    toggle: onToggleMenu,
    setFalse: onHideMenu
  } = useBoolean(false);

  const Logo = useMemo(() => {
    if (!isClient) {
      return IconLogoLight36;
    }

    const logoByTheme = {
      light: IconLogoLight36,
      dark: IconLogoDark36
    };

    return logoByTheme[resolvedTheme as TBasicTheme];
  }, [isClient, resolvedTheme]);

  const handleScroll = useCallback(() => {
    if (isUnderMd) {
      return;
    }

    setScrollOverMenu(window.scrollY > HEADER_HEIGHT / 2);
  }, [isUnderMd]);

  useEffect(() => {
    /**
     * * When the page is refreshed and the scroll position is not at the top
     * ! This is a workaround for the issue that the `scroll` event is not triggered. DO NOT REMOVE THIS.
     */
    handleScroll();
  }, [handleScroll]);

  useEventListener('scroll', () => {
    handleScroll();
  });

  const handleToggleMenu = useCallback(() => {
    onToggleMenu();

    if (!openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [onToggleMenu, openMenu]);

  const handleCloseMenu = useCallback(() => {
    if (!isUnderMd) {
      return;
    }

    onHideMenu();
    document.body.style.overflow = 'auto';
  }, [isUnderMd, onHideMenu]);

  useEventListener('resize', () => {
    /**
     * * Close the menu when the screen size is greater than `md`
     * ! This is a workaround for the issue that the menu is not closed when the screen size is greater than `md`. DO NOT REMOVE THIS.
     */
    if (!isUnderMd && openMenu) {
      handleCloseMenu();
    }
  });

  return (
    <div className='dark:shadow-d-lg sticky top-0 z-2 bg-color-secondary shadow-lg md:bg-transparent md:shadow-none'>
      <div className='container'>
        <div className='absolute left-0 top-0 hidden h-19 w-full bg-[linear-gradient(to_top,rgba(255,255,255,0)_0%,rgba(255,255,255,0.92)_50%)] dark:bg-[linear-gradient(to_top,rgba(40,42,45,0)_0%,rgba(40,42,45,0.92)_50%)] md:block' />
        <div
          className={cn(
            'relative flex items-center justify-between py-4 transition-[padding] duration-300 md:pt-5',
            {
              'rounded-b-full md:pb-1.5 md:pl-10 md:pr-4': scrollOverMenu,
              'mb:pb-5': !scrollOverMenu
            }
          )}
        >
          <div className='flex items-center gap-16'>
            <InternalLink
              className={cn('relative z-2 h-7.5 w-[27px] md:h-auto md:w-auto', {
                'md:h-7.5 md:w-[27px]': scrollOverMenu
              })}
              href={routesConfig.home.pathname.en}
              onClick={handleCloseMenu}
            >
              {Logo && (
                <Logo
                  className={cn(
                    'transition-300 -ml-1 -mt-1 scale-75 md:ml-0 md:mt-0',
                    {
                      'md:scale-100': !scrollOverMenu,
                      'md:-ml-1 md:-mt-1 md:scale-75': scrollOverMenu
                    }
                  )}
                />
              )}
            </InternalLink>

            <div
              className={cn(
                'transition-300 absolute -left-4 top-0 w-[calc(100%+32px)] rounded-full bg-color-secondary transition-[padding] duration-300 md:static md:left-0 md:h-12.5 md:w-auto',
                {
                  'md:relative md:px-8': !scrollOverMenu,
                  'translate-y-0 md:transform-none': openMenu,
                  '-translate-y-[calc(100%+25vh)] md:transform-none': !openMenu
                }
              )}
            >
              <div
                className={cn(
                  'absolute left-0 top-0 z-1 h-screen w-full bg-black/10 backdrop-blur-xl md:block md:rounded-full md:border md:bg-color-secondary md:backdrop-blur-none',
                  {
                    'md:top-0 md:h-12.5 md:border-line-strong': !scrollOverMenu,
                    'md:dark:shadow-d-md shadow-md md:top-3.5 md:h-15.5 md:border-line-subtle':
                      scrollOverMenu
                  }
                )}
                onClick={handleToggleMenu}
              />
              <div
                className={cn(
                  'dark:shadow-d-md relative z-1 flex h-[75vh] flex-col items-center gap-6 bg-color-secondary pt-[102px] shadow-md md:h-full md:flex-row md:gap-16 md:bg-transparent md:pt-0 md:shadow-none'
                )}
              >
                {Object.entries(routesConfig)
                  .filter(([, route]) => route.pathname.en !== '/')
                  .map(([key, route]) => (
                    <InternalLink
                      key={key}
                      href={route.pathname.en}
                      className='font-mono text-2xl font-bold md:text-base'
                      onClick={handleCloseMenu}
                    >
                      {t(`page.${key}.name`)}
                    </InternalLink>
                  ))}

                <div className='absolute bottom-3 right-4 md:hidden'>
                  <Appearance />
                </div>
              </div>
            </div>
          </div>
          <div className='z-1'>
            <button
              className='relative flex size-6 flex-col items-end justify-center gap-1.5 md:hidden'
              onClick={handleToggleMenu}
            >
              <div
                className={cn(
                  'transition-400 h-0.5 w-4 rounded-full bg-gray-900 dark:bg-gray-300',
                  {
                    'absolute top-[11px] w-6 rotate-45': openMenu
                  }
                )}
              />
              <div
                className={cn(
                  'transition-300 h-0.5 w-6 rounded-full bg-gray-900 dark:bg-gray-300',
                  {
                    'opacity-0': openMenu
                  }
                )}
              />
              <div
                className={cn(
                  'transition-400 h-0.5 w-4 rounded-full bg-gray-900 dark:bg-gray-300',
                  {
                    'absolute bottom-[11px] w-6 -rotate-45': openMenu
                  }
                )}
              />
            </button>

            <div className='hidden md:block'>
              <Appearance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
