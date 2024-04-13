import { UFile } from '@/utils';
import Image from 'next/image';

import type { ImageProps } from 'next/image';
import { omit } from 'ramda';

const _genImg = (
  filename: string,
  others?: Omit<ImageProps, 'src' | 'alt'> & { alt?: string }
) => {
  const Comp = (props: Omit<ImageProps, 'src' | 'alt'> & { alt?: string }) => (
    <Image
      alt={props?.alt || UFile.removeExt(filename)}
      src={`/images/${filename}`}
      {...omit(['alt'], props)}
      {...others}
    />
  );

  return Comp;
};

export const ImageKofi24 = _genImg('im-kofi-24.webp', { fill: true });
export const ImageQrMomo = _genImg('im-qr-momo.webp', { fill: true });
