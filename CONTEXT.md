# Atelier Faye Auto : contexte projet

- Site **Astro**, hébergé sur **GitHub Codespaces**, dev sur le port 4321. Déployé sur Cloudflare Pages à chaque push sur `main`.
- Je travaille **dans le terminal** (commandes bash/python), **CSS pur** dans `src/styles/global.css`.
- Garage automobile familial à **Dakar** (quartier Colobane, mais NE PAS surcharger le SEO avec « Colobane » : cibler Dakar).
- Modèle : diagnostic via **WhatsApp** (numéro réel : 221774797157, même numéro pour les appels). Le client envoie une photo ou une vidéo de sa panne.
- Adresse officielle du site : `https://atelierfayeauto.com` (sans www). `functions/_middleware.js` redirige www et pages.dev vers cette adresse.

## Fait à ce jour
- Page d'accueil `src/pages/index.astro` : hero plein écran, nav, grille de pannes, sections entretien, services, avis, conseils, questions fréquentes, adresse.
- 6 articles dans `src/pages/conseils/` + page liste `/conseils/`. Chacun : photo .webp, contenu instructif, FAQ en accordéon (`<details>`), schémas BlogPosting + FAQPage + fil d'Ariane.
- 4 pages service dans `src/pages/services/` (novembre 2026) : diagnostic, vidange et entretien, climatisation, freins. Chacune : résumé « L'essentiel », signes, déroulé, cas réel tiré des avis Google, mot de Matta, FAQ, bouton WhatsApp et bouton d'appel.
- `src/data/garage.js` : nom, téléphone, adresse, horaires et données structurées du garage. **Si une coordonnée change, on corrige ici.**
- Page `404.astro`, `public/llms.txt` (résumé du garage pour les IA), `public/_headers` (cache).
- Typo : Inter (texte) + Space Grotesk (titres). Logo en header transparent.

## Principes
- Contenu **utile d'abord**, mot-clé en second (pas de bourrage).
- **Jamais de prix inventé** ni de fait non vérifié (marques, cas clients, statistiques).
- Jamais de tirets longs ni de demi-cadratins, jamais de « & ».
- Images : pas de visages, image principale en paysage 16:9, format WebP.
- Reste sur du CSS pur, pas de framework. Lire les fichiers existants avant d'écrire.
- Ne jamais modifier `astro.config.mjs` avec `sed`.

## À faire
- Climatisation et freins : ajouter une vraie photo d'atelier et un cas réel détaillé dès que Matta les fournit (repères en commentaire dans les deux pages).
- Faire relire par Matta les blocs « Le mot de Matta Faye » des quatre pages service.
- Cinquième page service possible : batterie et démarrage (déjà des affichages dans la Search Console).
- 2 articles climat (chaleur et poussière, hivernage) envisagés.
