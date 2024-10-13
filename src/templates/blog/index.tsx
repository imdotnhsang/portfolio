'use client';

import { memo } from 'react';

import type { FC } from 'react';

import { UnderConstruction } from '@/components';
import { withErrorBoundary } from '@/hocs';

export const BlogTemplate: FC = withErrorBoundary(
  memo(function BlogTemplate() {
    return <UnderConstruction />;
  })
);
