export const routes = Object.freeze({
  home: {
    pathname: {
      en: '/' as const,
      vi: '/'
    }
  },
  about: {
    pathname: {
      en: '/about' as const,
      vi: '/gioi-thieu'
    }
  },
  projects: {
    pathname: {
      en: '/projects' as const,
      vi: '/du-an'
    }
  },
  blog: {
    pathname: {
      en: '/blog' as const,
      vi: '/bai-viet'
    }
  }
});

export const pathnames = Object.freeze(
  Object.values(routes).map((route) => route.pathname.en)
);

export type TPathnames = (typeof pathnames)[number];
