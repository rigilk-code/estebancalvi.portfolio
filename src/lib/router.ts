export const getRouterBaseName = (url?: string) => {
  const resolvedUrl = url ?? (typeof window === "undefined" ? "" : window.location.href);

  if (!resolvedUrl) {
    return "";
  }

  const { hostname, pathname } = new URL(resolvedUrl);

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "";
  }

  const segments = pathname.split("/").filter(Boolean);
  const repoIndex = segments.indexOf("estebancalvi.portfolio");

  if (repoIndex === -1) {
    return "";
  }

  return `/${segments.slice(0, repoIndex + 1).join("/")}`;
};

export const buildAppHref = (path: string) => {
  const normalizedPath = path === "/" ? "" : path;
  const basePath = getRouterBaseName();
  const route = normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`;

  return `${basePath}/#${route}`;
};
