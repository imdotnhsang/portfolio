'use client';

import { memo } from 'react';

import type { FC } from 'react';

import { UnderConstruction } from '@/components';
import { withErrorBoundary } from '@/hocs';

export const AboutTemplate: FC = withErrorBoundary(
  memo(function AboutTemplate() {
    return <UnderConstruction />;
  })
);
