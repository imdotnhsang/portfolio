export class UMedia {
  static appendDomain = (domain: string, key: string) => {
    // regex remove last slash
    const domainWithoutLastSlash = domain.replace(/\/$/, '');

    // regex remove first slash
    const keyWithoutFirstSlash = key.replace(/^\//, '');

    return `${domainWithoutLastSlash}/${keyWithoutFirstSlash}`;
  };
}
