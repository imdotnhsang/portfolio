'use client';

import { GitBranch, Star } from '@phosphor-icons/react';
import { memo } from 'react';

import type { FC } from 'react';

import { ExternalLink } from '@/components';
import { withErrorBoundary } from '@/hocs';

export const ForkAndStarRepo: FC = withErrorBoundary(
  memo(function ForkAndStarRepo() {
    return (
      <div className='flex items-center gap-5'>
        <ExternalLink
          className='text-base-rps middle gap-1.5'
          href='https://github.com/imdotnhsang/portfolio'
        >
          <Star weight='fill' className='size-4' /> Star
        </ExternalLink>
        <ExternalLink
          className='text-base-rps middle gap-1.5'
          href='https://github.com/imdotnhsang/portfolio/fork'
        >
          <GitBranch weight='fill' className='size-4' /> Fork
        </ExternalLink>
      </div>
    );
  })
);
