'use client';

import { memo } from 'react';

import type { FC } from 'react';

import { UnderConstruction } from '@/components';
import { withErrorBoundary } from '@/hocs';

export const ProjectsTemplate: FC = withErrorBoundary(
  memo(function ProjectsTemplate() {
    return <UnderConstruction />;
  })
);
