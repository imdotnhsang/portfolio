export const EXPORT_TYPES = ['*', 'default-as'];

export const KEEP_NAMES = ['.gitkeep'];
export const DUMP_NAMES = ['.DS_Store'];
export const EXCLUDED_NAMES = [
  ...KEEP_NAMES,
  ...DUMP_NAMES,
  'index.ts',
  'index.tsx',
  '.test.ts',
  '.test.tsx',
  '__tests__',
  '.scss',
  '.stories.tsx'
];

export const NOT_FOUND_COMPONENT_ASSET_PREFIX = 'Other';
export const ComponentAssetPrefix = {
  i: 'Icon',
  lt: 'AmtData'
};

export const NOTE = `// This file is auto-generated by run "npm run up-to-date:index"; DO NOT EDIT.\n`;

export const GENERATED_INDEX_FOLDERS = [
  { relativePath: 'src/assets', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/assets/svgs', deep: 1, type: 'default-as', ext: 'ts' },
  {
    relativePath: 'src/assets/lotties',
    deep: 1,
    type: 'default-as',
    ext: 'ts'
  },
  { relativePath: 'src/components', deep: 2, type: '*', ext: 'ts' },
  { relativePath: 'src/configs', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/constants', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/contexts', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/helpers', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/hocs', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/hooks', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/interfaces', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/layouts', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/organisms', deep: 2, type: '*', ext: 'ts' },
  { relativePath: 'src/services', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/templates', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/theme', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/types', deep: 1, type: '*', ext: 'ts' },
  { relativePath: 'src/utils', deep: 1, type: '*', ext: 'ts' }
];
