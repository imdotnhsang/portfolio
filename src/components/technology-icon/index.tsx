import { FC, memo, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { TECHNOLOGY_BG_COLOR, TECHNOLOGY_ICON } from './configs';

interface ITechnologyIconProps {
  key?: keyof typeof TECHNOLOGY_ICON;
}

export const TechnologyIcon: FC<ITechnologyIconProps> = memo(
  function TechnologyIcon({ key = 'reactjs' }) {
    const configs = useMemo(
      () => ({
        Icon: TECHNOLOGY_ICON[key],
        bgColor: TECHNOLOGY_BG_COLOR[key]
      }),
      [key]
    );

    return (
      <div
        className={twMerge(
          'flex size-7 items-center justify-center rounded-0.5',
          configs.bgColor
        )}
      >
        <configs.Icon className='text-black-strong' />
      </div>
    );
  }
);
