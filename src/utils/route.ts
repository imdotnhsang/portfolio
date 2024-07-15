export class URoute {
  static getName = (pathname: string) => {
    const routeName = pathname.replace(/^\//, '').replace(/\/$/, '');

    return routeName;
  };
}
