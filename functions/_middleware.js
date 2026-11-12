// Une seule adresse officielle pour le site : https://atelierfayeauto.com
// Cloudflare Pages exécute cette fonction avant de servir les pages statiques.
//
// 1. www.atelierfayeauto.com          -> redirection 301 vers atelierfayeauto.com
// 2. <projet>.pages.dev (production)  -> redirection 301 vers atelierfayeauto.com
// 3. <branche>.<projet>.pages.dev     -> aperçu d'une pull request : on l'affiche,
//    mais avec l'en-tête « noindex » pour que Google ne l'indexe jamais.
const OFFICIAL_HOST = 'atelierfayeauto.com';

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname;

  if (host === `www.${OFFICIAL_HOST}`) {
    url.hostname = OFFICIAL_HOST;
    return Response.redirect(url.toString(), 301);
  }

  if (host.endsWith('.pages.dev')) {
    // « projet.pages.dev » compte 3 parties, « branche.projet.pages.dev » en compte 4.
    const isPreview = host.split('.').length > 3;
    if (!isPreview) {
      url.hostname = OFFICIAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
    const response = await context.next();
    const preview = new Response(response.body, response);
    preview.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return preview;
  }

  return context.next();
}
