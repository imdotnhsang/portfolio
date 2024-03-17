export class UMedia {
  static appendDomain = (domain: string, key: string) => {
    const domainWithoutLastSlash = domain.replace(/\/$/, '');
    const keyWithoutFirstSlash = key.replace(/^\//, '');

    return `${domainWithoutLastSlash}/${keyWithoutFirstSlash}`;
  };
}
