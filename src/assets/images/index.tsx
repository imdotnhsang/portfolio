import Image from 'next/image';
import { omit } from 'ramda';

import type { ImageProps } from 'next/image';

import { UFile } from '@/utils';

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

export const ImageKofiLogo = _genImg('im-kofi-logo.webp', {
  fill: true,
  sizes: '(max-width: 768px) 100vw, 100vw'
});
export const ImageMomoQr = _genImg('im-momo-qr.webp', {
  fill: true,
  sizes: '(max-width: 768px) 100vw, 100vw'
});
