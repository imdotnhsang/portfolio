'use client';

import { GitBranch, Star } from '@phosphor-icons/react';
import { memo } from 'react';

import type { FC } from 'react';

import { ExternalLink } from '@/components';
import { CEnv } from '@/constants';
import { withErrorBoundary } from '@/hocs';

export const ForkAndStarRepo: FC = withErrorBoundary(
  memo(function ForkAndStarRepo() {
    return (
      <div className='flex items-center gap-5'>
        <ExternalLink
          className='text-base-rps middle gap-1.5'
          href={CEnv.STAR_REPO_URL}
        >
          <Star weight='fill' className='size-4' /> Star
        </ExternalLink>
        <ExternalLink
          className='text-base-rps middle gap-1.5'
          href={CEnv.FORK_REPO_URL}
        >
          <GitBranch weight='fill' className='size-4' /> Fork
        </ExternalLink>
      </div>
    );
  })
);
