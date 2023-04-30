export default function useApp() {
    const ctxApp = {
      pathname: location.pathname,
      pathCompleto: location.pathname.split("/"),
      href: location.href,
      document: document,
    };
    return ctxApp;
  }