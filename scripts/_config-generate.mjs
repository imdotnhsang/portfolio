/**
 * @params {string} relativePath
 * @params {number} deep (1 | 2)
 * @params {string} type ('*' | 'default-as')
 * @params {string} ext ('ts' | 'tsx')
 */
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
