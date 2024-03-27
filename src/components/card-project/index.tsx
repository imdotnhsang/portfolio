import Image from 'next/image';
import { memo, type FC } from 'react';
import { Button, TechnologyIcon } from '..';

interface ICardProjectProps {
  coverKey: string;
  description: string;
  title: string;
}

export const CardProject: FC<ICardProjectProps> = memo(function CardProject({
  title = '',
  coverKey = '',
  description = ''
}) {
  return (
    <div className='relative overflow-hidden rounded-4 border border-line bg-black-strong'>
      <div className='absolute right-4.5 top-4.5 z-1'>
        <TechnologyIcon />
      </div>
      <div className='relative aspect-[370/146]'>
        <Image
          src={coverKey}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt={title}
        />
      </div>
      <div className='border-t border-t-line px-6 py-4'>
        <p className='mb-5 text-lg text-gray-secondary'>{description}</p>
        <Button variant='primary' color='black'>
          view-project
        </Button>
      </div>
    </div>
  );
});
