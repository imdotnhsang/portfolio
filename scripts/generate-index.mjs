import {
  ComponentAssetPrefix,
  DUMP_NAMES,
  EXCLUDED_NAMES,
  GENERATED_INDEX_FOLDERS,
  KEEP_NAMES,
  NOT_FOUND_COMPONENT_ASSET_PREFIX,
  NOTE
} from './_config-generate.mjs';

import fs from 'fs';

const checkEmptyFolder = (relativePath) => {
  const files = fs.readdirSync(relativePath);

  const nonNecessaryFiles = files.filter((fileName) =>
    [...KEEP_NAMES, ...DUMP_NAMES].includes(fileName)
  );

  if (files.length === 0 || nonNecessaryFiles.length > 0) {
    console.log(`Empty folder: ${relativePath}`);

    return true;
  }

  return false;
};

const normalizedFileInfo = (filename) => {
  const [name, ext] = filename.split('.');

  return {
    name,
    ext
  };
};

const formatComponentName = (name) => {
  const prefixKey = name.split('-')[0];

  let prefix = NOT_FOUND_COMPONENT_ASSET_PREFIX;

  const ComponentPrefix = ComponentAssetPrefix[prefixKey];
  if (ComponentPrefix) {
    prefix = ComponentPrefix;
  }

  const removedPrefixKey = name.replace(`${prefixKey}`, '');

  const camelCasedFilename = removedPrefixKey.replaceAll(/-./g, (replacedStr) =>
    replacedStr[1].toUpperCase()
  );

  return `${prefix}${camelCasedFilename}`;
};

const generateExportLine = ({ type, data }) => {
  switch (type) {
    case '*':
      return `export * from './${data.name}';\n`;
    case 'default-as':
      return `export { default as ${formatComponentName(data.name)} } from './${data.filename}';\n`;
    default:
      console.log(`Invalid export type: ${type}`);
      return null;
  }
};

const generateIndexFile = ({ relativePath, deep, type, ext }) => {
  if (checkEmptyFolder(relativePath)) {
    return;
  }

  const foundObjects = fs.readdirSync(relativePath);

  const foundedFolderDirectories = [];
  const exportLines = [];

  foundObjects.forEach((filename) => {
    const stats = fs.statSync(`${relativePath}/${filename}`);

    if (EXCLUDED_NAMES.includes(filename)) {
      return;
    }

    if (stats.isDirectory() && deep === 2) {
      foundedFolderDirectories.push(filename);
    }

    if (
      stats.isDirectory() &&
      checkEmptyFolder(`${relativePath}/${filename}`)
    ) {
      return;
    }

    const { name, ext } = normalizedFileInfo(filename);

    const generatedExportLine = generateExportLine({
      type,
      data: { name, filename, ext }
    });

    if (!generatedExportLine) {
      return;
    }

    exportLines.push(generatedExportLine);
  });

  const content = `${NOTE}${exportLines.join('')}`;
  fs.writeFileSync(`${relativePath}/index.${ext}`, content);
  console.log(`Generated: ${relativePath}`);

  foundedFolderDirectories.forEach((folder) => {
    const folderPath = `${relativePath}/${folder}`;

    generateIndexFile({
      relativePath: folderPath,
      deep: deep - 1,
      type,
      ext
    });
  });
};

GENERATED_INDEX_FOLDERS.forEach((props) => generateIndexFile(props));
