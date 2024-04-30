export class URouter {
  static getRouteName = (pathname: string) => {
    const routeName = pathname.replace(/^\//, '').replace(/\/$/, '');

    return routeName;
  };

  static toAbsoluteURL = (url: string) => {
    return new URL(url, window.location.origin).href;
  };

  static isSameHostName = (currentUrl: string, newUrl: string): boolean => {
    const current = new URL(URouter.toAbsoluteURL(currentUrl));
    const next = new URL(URouter.toAbsoluteURL(newUrl));

    return (
      current.hostname.replace(/^www\./, '') ===
      next.hostname.replace(/^www\./, '')
    );
  };

  static isAnchorOfCurrentUrl = (
    currentUrl: string,
    newUrl: string
  ): boolean => {
    const currentUrlObj = new URL(currentUrl);
    const newUrlObj = new URL(newUrl);

    if (
      currentUrlObj.hostname === newUrlObj.hostname &&
      currentUrlObj.pathname === newUrlObj.pathname &&
      currentUrlObj.search === newUrlObj.search
    ) {
      const currentHash = currentUrlObj.hash;
      const newHash = newUrlObj.hash;

      return (
        currentHash !== newHash &&
        currentUrlObj.href.replace(currentHash, '') ===
          newUrlObj.href.replace(newHash, '')
      );
    }
    return false;
  };

  static isHashAnchor = (currentUrl: string, newUrl: string): boolean => {
    const current = new URL(this.toAbsoluteURL(currentUrl));
    const next = new URL(this.toAbsoluteURL(newUrl));

    return current.href.split('#')[0] === next.href.split('#')[0];
  };

  static findClosestAnchor = (
    elm: HTMLElement | null
  ): HTMLAnchorElement | null => {
    while (elm && elm.tagName.toLowerCase() !== 'a') {
      elm = elm.parentElement;
    }

    return elm as HTMLAnchorElement;
  };
}
