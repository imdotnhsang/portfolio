export class URouter {
  static getRouteName = (pathname: string) => {
    const routeName = pathname.replace(/^\//, '').replace(/\/$/, '');

    return routeName;
  };
}
