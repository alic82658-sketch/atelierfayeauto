# Atelier Faye Auto — contexte projet

- Site **Astro**, hébergé sur **GitHub Codespaces**, dev sur le port 4321.
- Je travaille **dans le terminal** (commandes bash/python), **CSS pur** dans `src/styles/global.css`.
- Garage automobile familial à **Dakar** (quartier Colobane, mais NE PAS surcharger le SEO avec « Colobane » — cibler Dakar).
- Modèle : diagnostic via **WhatsApp** (numéro réel : 221774797157). Le client envoie une photo/vidéo de sa panne.

## Fait à ce jour
- Page d'accueil `src/pages/index.astro` : hero plein écran, nav (Problèmes/Entretien/Services/Conseils + CTA), grille de pannes, sections entretien/services/conseils.
- 3 articles SEO dans `src/pages/conseils/` : voyant-moteur-allume, voiture-ne-demarre-pas, quand-faire-vidange-dakar.
  - Chacun : photo .webp en-tête, contenu instructif, FAQ en accordéon (balise <details>), schémas Article + FAQPage.
- Typo : Inter (texte) + Space Grotesk (titres). Logo en header transparent.

## Principes
- Contenu **utile d'abord**, mot-clé en second (pas de keyword stuffing).
- **Jamais de prix inventé** ni de fait non vérifié (marques, etc.).
- Reste sur du CSS pur, pas de framework.

## À faire éventuellement
- FAQ générale sur l'accueil ; page liste /conseils ; 2 articles climat (chaleur/poussière, hivernage).
