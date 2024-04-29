export class UFile {
  static removeExt = (filename: string) => {
    return filename.replace(/\.[^/.]+$/, '');
  };
}
