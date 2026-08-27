// Redirection 301 du domaine technique *.pages.dev vers le domaine officiel.
// Cloudflare Pages execute cette fonction avant de servir les pages statiques.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname.endsWith('.pages.dev')) {
    url.hostname = 'atelierfayeauto.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
