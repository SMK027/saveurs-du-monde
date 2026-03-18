# 🔍 Guide complet : Optimisation SEO du site Saveurs du Monde

## 📑 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Balises Meta essentielles](#balises-meta-essentielles)
3. [Données structurées (JSON-LD)](#données-structurées)
4. [Réseaux sociaux (OG & Twitter)](#réseaux-sociaux)
5. [Fichiers robots.txt et sitemap.xml](#fichiers-robots-et-sitemap)
6. [Optimisation technique](#optimisation-technique)
7. [Optimisation par page](#optimisation-par-page)
8. [Validation et suivi](#validation-et-suivi)

---

## Vue d'ensemble

Le site **Saveurs du Monde** a été optimisé pour les moteurs de recherche selon les meilleures pratiques de Google et schema.org. Les améliorations couvrent :

- ✅ **Métadonnées complètes** : Title, description, robots
- ✅ **Données structurées** : 8 schémas JSON-LD (recipe, organization, FAQ, etc.)
- ✅ **Rich snippets** : Affichage enrichi dans les résultats Google
- ✅ **Performance web** : Preconnect, dns-prefetch, lazy loading, scripts defer
- ✅ **Médias progressifs** : images SD au premier rendu puis HD au clic
- ✅ **Embeds tiers optimisés** : vidéo YouTube chargée uniquement au clic
- ✅ **Compression serveur** : Brotli + gzip via `.htaccess`
- ✅ **Partage social** : Open Graph et Twitter Cards
- ✅ **Gestion du crawl** : robots.txt et sitemap.xml
- ✅ **Accessibilité** : Landmarks HTML5, heading hierarchy

---

## Balises Meta essentielles

### 1. Title Tag (`<title>`)

**Emplacement** : Dans le `<head>` de chaque page

**Structure recommandée** :
```html
<title>Mot-clé principal | Saveurs du Monde</title>
```

**Exemples par page** :

| Page | Title Tag |
|------|-----------|
| Accueil | `Saveurs du Monde \| Recettes du monde faciles et gourmandes` |
| Recettes | `Recettes du monde \| Saveurs du Monde` |
| À propos | `A propos \| Saveurs du Monde` |
| Contact | `Contact \| Saveurs du Monde` |
| Catégories | `Categories de recettes \| Saveurs du Monde` |
| Détail recette | `[Nom recette] – Saveurs du Monde` (dynamique) |

**Impact SEO** :
- 🎯 Affiche en bleu dans Google (clic = visite)
- 📊 Facteur de ranking important
- 👥 Influence le CTR (taux de clic) : chaque % d'amélioration = +10/50 visites

**Bonnes pratiques** :
- ✔️ 50-60 caractères max (affichage complet dans Google)
- ✔️ Mot-clé principal au début
- ✔️ Unique pour chaque page
- ❌ Pas plus d'une balise title par page

---

### 2. Meta Description (`<meta name="description">`)

**Emplacement** : Dans le `<head>` de chaque page

**Format** :
```html
<meta name="description" content="Description en 150-160 caractères..." />
```

**Exemples** :

**Index.html** :
```
Découvrez des recettes du monde faciles, rapides et savoureuses: 
cuisine francaise, italienne, asiatique, mexicaine et americaine.
```

**Pages/recettes.html** :
```
Consultez toutes nos recettes du monde: entrees, plats, desserts 
et boissons avec filtres par cuisine, saison et difficulte.
```

**Impact SEO** :
- 📝 Affiche sous le titre dans Google
- 📈 Améliore le CTR de 2-5%
- 🔍 N'est PAS un facteur de ranking direct, mais influence les clics

**Bonnes pratiques** :
- ✔️ 150-160 caractères (affichage complet)
- ✔️ Contient le mot-clé cible
- ✔️ Inclut un appel à l'action (CTA)
- ✔️ Unique pour chaque page
- ❌ Ne pas dupliquer d'une page à l'autre

---

### 3. Meta Robots (`<meta name="robots">`)

**Emplacement** : Dans le `<head>` de chaque page

**Format** :
```html
<meta name="robots" content="[INDEX|NOINDEX], [FOLLOW|NOFOLLOW]" />
```

**Valeurs utilisées** :

| Contenu | Pages | Raison |
|---------|-------|--------|
| `index, follow` | Toutes les pages principales | Indexées + parcourage des liens |
| `noindex, follow` | Pages de résultats filtrées (*query strings) | Évite le contenu dupliqué |

**Exemple d'utilisation dynamique** :

**pages/recettes.html** (avec filtres) :
```javascript
// Quand des filtres sont appliqués
if (isFiltered) {
  robotsMeta.setAttribute('content', 'noindex, follow');
} else {
  robotsMeta.setAttribute('content', 'index, follow');
}
```

**Impact SEO** :
- 🚫 Évite le contenu dupliqué (pages filtrées)
- 📊 Économise le budget de crawl Google
- 🎯 Améliore la pertinence de l'indexation

---

### 4. Canonical URL (`<link rel="canonical">`)

**Emplacement** : Dans le `<head>` de chaque page

**Format** :
```html
<link rel="canonical" href="https://saveursdumonde.leofranz.fr/pages/[page].html" />
```

**Utilité** :
- 🔗 Indique à Google la version "officielle" d'une page
- 🛡️ Prévient les problèmes de contenu dupliqué
- ✅ Consolidde l'autorité de page

**Implémentation** :

```html
<!-- index.html -->
<link rel="canonical" href="https://saveursdumonde.leofranz.fr/" />

<!-- pages/recettes.html -->
<link rel="canonical" href="https://saveursdumonde.leofranz.fr/pages/recettes.html" />

<!-- pages/recette.html (dynamique) -->
<link id="canonicalLink" rel="canonical" href="https://saveursdumonde.leofranz.fr/pages/recette.html?id=1" />
```

**Bonnes pratiques** :
- ✔️ HTTPS obligatoire
- ✔️ Même domaine (pas de redirection)
- ✔️ URL absolue (pas relative)
- ✔️ Inclure les paramètres importants (?id=)

---

## Données structurées

### JSON-LD via schema.org

Les données structurées permettent à Google de **comprendre le contenu** et d'afficher des **rich snippets** (résultats enrichis).

### 📂 Architecture

**Fichier centralisé** : `schema.json`  
**Références** : Toutes les pages HTML

```html
<link rel="alternate" type="application/ld+json" href="schema.json" />
```

### 🏗️ Schémas implémentés

#### 1. **Organization**

**Fichier** : `schema.json`  
**Raison** : Identifie l'entreprise auprès de Google

**Contient** :
```json
{
  "@type": "Organization",
  "name": "Saveurs du Monde",
  "url": "https://saveursdumonde.leofranz.fr/",
  "logo": { "url": "...", "width": 250, "height": 250 },
  "email": "contact@saveursdumonde.leofranz.fr",
  "address": { "addressLocality": "Paris", "addressCountry": "FR" },
  "sameAs": ["Facebook", "Instagram", "YouTube"]
}
```

**Impact SEO** :
- 📍 Knowledge Panel Google (barre latérale)
- 🔗 Liaison des réseaux sociaux
- 📊 Autorité de domaine améliorée

---

#### 2. **WebSite + SearchAction**

**Fichier** : `index.html` (inline) + `schema.json`  
**Raison** : Ajoute un moteur de recherche aux résultats Google

**Contenu** :
```json
{
  "@type": "WebSite",
  "name": "Saveurs du Monde",
  "url": "https://saveursdumonde.leofranz.fr/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://saveursdumonde.leofranz.fr/pages/recettes.html?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**Impact SEO** :
- 🔍 Search Box visible dans les résultats Google
- ⬆️ Augmente le CTR du site
- 📈 Dirección du trafic vers page pertinente

---

#### 3. **Recipe**

**Fichier** : `pages/recette.html` (généré dynamiquement)  
**Raison** : Rich snippets pour affichage des recettes

**Données affichées dans Google** :
```
🖼️ Image
⭐ Note (rating)
⏱️ Temps de préparation/cuisson
👥 Portions
```

**Exemple JSON** :
```json
{
  "@type": "Recipe",
  "name": "Pâtes à la Carbonara",
  "image": ["https://..."],
  "description": "...",
  "recipeCategory": "Plat Principal",
  "recipeCuisine": "Italienne",
  "recipeYield": "4 portions",
  "prepTime": "PT10M",
  "cookTime": "PT20M",
  "totalTime": "PT30M",
  "aggregateRating": {
    "ratingValue": "4.8",
    "ratingCount": "142"
  },
  "recipeIngredient": ["400g pâtes", "200g lard", ...],
  "recipeInstructions": [
    { "text": "Faire bouillir l'eau..." },
    { "text": "Couper le lard..." }
  ]
}
```

**Impact SEO** :
- 🌟 Rich snippets augmentent le CTR de 20-30%
- 📊 Google Discover : affichage sur mobile
- 🔍 Carousel dans les résultats Google

---

#### 4. **BreadcrumbList**

**Fichier** : `schema.json`  
**Raison** : Fil d'Ariane dans les résultats

**Exemple** :
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Accueil", "item": "https://..." },
    { "position": 2, "name": "Recettes", "item": "https://..." }
  ]
}
```

**Affichage Google** :
```
Accueil > Recettes > Pâtes à la Carbonara
```

**Impact SEO** :
- 🎯 Améliore l'UX dans les résultats
- 📈 CTR amélioré
- 🔗 Liens internes comptabilisés

---

#### 5. **FAQPage**

**Fichier** : `schema.json`  
**Raison** : Affiche les FAQ directement dans Google

**Affichage** :
```
Q: Comment filtrer les recettes?
A: Utilisez les filtres...
```

**JSON** :
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment filtrer les recettes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Utilisez les filtres disponibles..."
      }
    }
  ]
}
```

**Impact SEO** :
- ❓ Répond aux questions directement
- 📊 Augmente le CTR (position 0 des résultats)
- 🎯 Capture des featured snippets

---

#### 6. **CollectionPage + ItemList**

**Fichier** : `schema.json`  
**Raison** : Indexadon de la collection de recettes

```json
{
  "@type": "CollectionPage",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "position": 1, "url": ".../recette.html?id=1" },
      { "position": 2, "url": ".../recette.html?id=2" }
    ]
  }
}
```

---

#### 7. **AboutPage & ContactPage**

**Fichier** : `schema.json`  
**Raison** : Identification claire des pages

```json
{
  "@type": "AboutPage",
  "name": "À propos de Saveurs du Monde",
  "url": "https://saveursdumonde.leofranz.fr/pages/about.html"
}
```

---

#### 8. **AggregateOffer**

**Fichier** : `schema.json`  
**Raison** : Affiche les offres (ici : accès gratuit)

```json
{
  "@type": "AggregateOffer",
  "name": "Accès aux recettes",
  "price": "0",
  "priceCurrency": "EUR",
  "availability": "https://schema.org/InStock"
}
```

---

## Réseaux sociaux

### Open Graph (Facebook, LinkedIn, Pinterest)

**Format** : `<meta property="og:[propriété]" content="..." />`

**Meta tags implémentés** :

```html
<!-- Type de contenu -->
<meta property="og:type" content="website" />

<!-- Langue -->
<meta property="og:locale" content="fr_FR" />

<!-- Informations du site -->
<meta property="og:site_name" content="Saveurs du Monde" />

<!-- Titre et description -->
<meta property="og:title" content="Titre enrichi" />
<meta property="og:description" content="Description pour le partage" />

<!-- URL canonique -->
<meta property="og:url" content="https://saveursdumonde.leofranz.fr/" />

<!-- Image (requise pour affichage) -->
<meta property="og:image" content="https://...image.jpg" />
```

**Impact** :
- 📱 Affichage optimisé lors du partage Facebook/LinkedIn
- 🖼️ Image large visible sur le post
- 💬 Augmente les partages sociaux

---

### Twitter Cards

**Format** : `<meta name="twitter:[propriété]" content="..." />`

**Meta tags** :

```html
<!-- Type de carte -->
<meta name="twitter:card" content="summary_large_image" />

<!-- Titre et description -->
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />

<!-- Image (optionnel) -->
<meta name="twitter:image" content="..." />
```

**Types disponibles** :
- `summary` : Petite image + texte
- `summary_large_image` : Grande image + texte (utilisé ici)
- `player` : Pour vidéos

**Impact** :
- 🐦 Affichage optimisé sur Twitter/X
- 📈 Augmente les engagements
- 🎥 Support vidéo/media

---

## Fichiers robots et sitemap

### robots.txt

**Localisation** : `/robots.txt` (racine du domaine)

**Contenu** :
```
User-agent: *
Allow: /

# Evite l'indexation des pages de filtres
Disallow: /pages/recettes.html?*

Sitemap: https://saveursdumonde.leofranz.fr/sitemap.xml
```

**Utilité** :
- 🚫 Bloque les pages filtrées (contenu dupliqué)
- 📍 Indique la localisation du sitemap
- ⚡ Économise le budget de crawl Google

**Bonnes pratiques** :
- ✔️ Toujours `Allow: /` avant les `Disallow`
- ✔️ Blquer les query strings qui créent du dupliquant
- ✔️ Inclure le sitemap.xml
- ✔️ Une seule règle `User-agent: *`

---

### sitemap.xml

**Localisation** : `/sitemap.xml`

**Format** :
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>URL de la page</loc>
    <lastmod>2026-03-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Contenu du sitemap Saveurs du Monde** :

| URL | Priorité | Fréquence | Raison |
|-----|----------|-----------|---------|
| `/` | 1.0 | weekly | Accueil - importance maximale |
| `/pages/recettes.html` | 0.9 | daily | Listing - changements fréquents |
| `/pages/categories.html` | 0.8 | weekly | Navigation |
| `/pages/about.html` | 0.6 | monthly | Page statique |
| `/pages/contact.html` | 0.6 | monthly | Page statique |
| `/pages/recette.html?id=1..25` | 0.7 | monthly | 25 recettes statiques |

**Utilité** :
- 🗺️ Indique à Google toutes les pages à indexer
- ⚡ Accélère l'indexation
- 📊 Montre la fréquence de mise à jour
- 🎯 Indique l'importance relative (priorité)

**Bonnes pratiques** :
- ✔️ Max 50,000 URLs par sitemap
- ✔️ Max 50 MB par fichier
- ✔️ Inclure toutes les pages importantes
- ✔️ Mettre à jour `lastmod` régulièrement
- ✔️ Certifier dans Google Search Console

---

## Optimisation technique

### 1. Performance Web

**Preconnect et DNS Prefetch** (index.html) :

```html
<!-- Pré-connexion à CDN d'images -->
<link rel="preconnect" href="https://images.unsplash.com" />

<!-- Pré-résolution DNS -->
<link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
```

**Impact** :
- ⚡ Réduit la latence de connexion
- 🚀 Améliore le Core Web Vitals (PageSpeed)
- 📊 Améliore le ranking Google (vitesse = facteur SEO)

---

### 2. Structure HTML5 Sémantique

**Landmarks utilisés** :

```html
<body>
  <header id="siteHeader">...</header>
  
  <main>
    <!-- Contenu principal -->
    <section class="hero">...</section>
    <section class="featured-recipes">...</section>
  </main>
  
  <footer id="siteFooter">...</footer>
</body>
```

**Bénéfices** :
- 📖 Meilleure compréhension par Google
- ♿ Accessibilité améliorée (lecteurs d'écran)
- 🎯 Core Web Vitals améliorés
- 📊 Ranking SEO augmenté

---

### 3. Heading Hierarchy (H1, H2, H3)

**Structure recommandée** :

```html
<h1>Saveurs du Monde</h1>
<!-- Une seule H1 par page -->

<section>
  <h2>Recettes en vedette</h2>
  
  <article>
    <h3>Pâtes à la Carbonara</h3>
    ...
  </article>
</section>
```

**Importance** :
- 🎯 Google utilise les headings pour comprendre la structure
- 📑 Améliore le CTR (titres clairs dans les résultats)
- ♿ Accessibilité pour les utilisateurs malvoyants

---

### 4. Meta Charset et Viewport

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**Utilité** :
- 🌍 UTF-8 : support international (accents, caractères spéciaux)
- 📱 Viewport : responsive design (mobile-friendly)
- 📊 Mobile-friendly = facteur de ranking Google

---

### 5. Chargement différé des scripts (`defer`)

Les scripts applicatifs sont chargés en mode différé pour éviter le blocage du rendu initial.

**Principe appliqué** :
- scripts externes en `defer`
- initialisation des scripts inline via `DOMContentLoaded` ou fonction dédiée
- conservation de l'ordre d'exécution sans bloquer le parsing HTML

**Fichiers concernés** :
- `index.html`
- `pages/about.html`
- `pages/categories.html`
- `pages/contact.html`
- `pages/recettes.html`
- `pages/recette.html`

**Impact** :
- ⚡ First Paint plus rapide
- 🧭 Navigation plus fluide sur mobile
- 📉 Réduction du temps de blocage JavaScript

---

### 6. Chargement progressif des images (SD → HD au clic)

Pour réduire le poids du premier rendu, certaines images sont affichées en basse définition puis remplacées en HD uniquement au clic utilisateur.

**Mécanisme** :
- image initiale légère dans `src` ou `data-bg`
- source HD dans `data-hd-src` (images) ou `data-bg-hd` (backgrounds)
- préchargement HD avant remplacement visuel

**Implémentation technique** :
- helper global : `initClickToHdMedia()` dans `js/components.js`
- classes d'état : `.progressive-media`, `.progressive-bg`, `.hd-loaded`

**Impact** :
- 📉 baisse du poids transféré au chargement initial
- 📱 meilleure performance sur réseaux mobiles
- 👤 qualité maximale conservée à la demande

---

### 7. Lazy loading des backgrounds

Les images de fond critiques non visibles immédiatement sont chargées à l'approche du viewport via `IntersectionObserver`.

**Mécanisme** :
- attribut `data-bg` pour la source
- activation progressive via `initLazyBackgrounds()` dans `js/components.js`

**Impact** :
- ⚡ moins de requêtes au premier rendu
- 🧠 priorité réseau mieux répartie

---

### 8. Embeds tiers à la demande (YouTube)

La page détail recette utilise désormais un placeholder vidéo (thumbnail) et ne crée l'`iframe` YouTube qu'au clic.

**Bénéfices** :
- 📉 moins de scripts tiers au chargement initial
- 🧹 réduction du bruit console au premier rendu (cookies/permissions)
- 🚀 meilleure interactivité initiale

---

### 9. Compression serveur via `.htaccess`

Compression HTTP activée côté Apache avec fallback robuste.

**Configuration mise en place** :
- Brotli prioritaire (`mod_brotli`) si disponible
- gzip fallback (`mod_deflate`)
- header `Vary: Accept-Encoding`
- exclusion des fichiers déjà compressés/binaire (images, vidéos, archives, PDF)

**Impact** :
- 📦 HTML/CSS/JS/JSON plus légers en transit
- ⏱️ réduction du temps de téléchargement
- 📈 amélioration potentielle des Core Web Vitals

---

## Optimisation par page

### 📄 index.html (Accueil)

| Élément | Implémentation |
|---------|-----------------|
| **Title** | Saveurs du Monde \| Recettes du monde faciles et gourmandes |
| **Meta Description** | Découvrez des recettes du monde faciles... |
| **Meta Robots** | index, follow |
| **Canonical** | https://saveursdumonde.leofranz.fr/ |
| **OG Tags** | Tous les OG (type, title, description, url) |
| **Twitter Card** | summary_large_image |
| **JSON-LD** | WebSite + SearchAction, Organization |
| **H1** | Saveurs du Monde |
| **Structures** | Organisation, moteur de recherche |

**Contenu clé** :
- ✅ Héro avec call-to-action
- ✅ 3 recettes en vedette avec liens
- ✅ Cartes recettes en image SD puis HD au clic
- ✅ Grille de catégories
- ✅ Moteur de recherche visible

---

### 🍽️ pages/recettes.html (Listing recettes)

| Élément | Implémentation |
|---------|---|
| **Title** | Recettes du monde \| Saveurs du Monde |
| **Meta Description** | Consultez toutes nos recettes du monde... |
| **Meta Robots** | index, follow (noindex si filtres) |
| **Canonical** | https://saveursdumonde.leofranz.fr/pages/recettes.html |
| **JSON-LD** | CollectionPage, ItemList, BreadcrumbList |
| **H1** | Toutes les recettes du monde |
| **Filtres** | Catégorie, cuisine, difficulté, temps, saison |

**SEO des filtres** :
- ✅ URL : `?search=` et `?categorie=`
- ✅ `robots: noindex` automatiquement appliqué si filtrés
- ✅ Page propre `robots: index` pour indexation
- ✅ Évite le contenu dupliqué

**Optimisation médias listing** :
- ✅ Cartes rendues en JS avec image basse définition initiale
- ✅ Passage en HD au clic sur l'image uniquement
- ✅ Comportement modal conservé sur clic carte

---

### 🍝 pages/recette.html (Détail recette)

| Élément | Implémentation |
|---------|---|
| **Title** | [Nom recette] – Saveurs du Monde (dynamique) |
| **Meta Description** | [Description générée automatiquement] |
| **Meta Robots** | index, follow |
| **Canonical** | https://.../recette.html?id=X |
| **OG Image** | Image de la recette |
| **JSON-LD** | Recipe (complet avec étapes, ingrédients) |
| **H1** | [Titre recette] |

**Contenu affiché** :
- 🖼️ Héro avec image
- 📋 Liste d'ingrédients avec prix
- 👨‍🍳 Étapes de préparation
- ⏱️ Temps, portions, difficulté
- ⭐ Allergènes
- 🎥 Vidéo chargée à la demande (placeholder → iframe au clic)
- 📥 Bouton imprimer/PDF
- 💰 Simulateur de prix

---

### ℹ️ pages/about.html, pages/contact.html, pages/categories.html

**Même pattern** :
- ✅ Title optimisé
- ✅ Meta description unique
- ✅ Canonical URL
- ✅ OG + Twitter tags
- ✅ Lien vers schema.json
- ✅ Bonne structure H1/H2

**Spécificités récentes** :
- `pages/categories.html` : backgrounds SD au premier rendu puis HD au clic
- `pages/about.html` : images et avatars en SD puis HD au clic

---

## Validation et suivi

### 🧪 Outils de validation

#### 1. **Google Rich Results Test**
- 🔗 https://search.google.com/test/rich-results
- ✅ Valide les schémas JSON-LD
- 📊 Affiche les rich snippets détectés
- ⏱️ Temps de crawl et warnings

**Étapes** :
1. Copiez l'URL du site
2. Collez dans l'outil
3. Attendez la validité
4. Vérifiez les detected items

---

#### 2. **Schema.org Validator**
- 🔗 https://validator.schema.org/
- ✅ Valide la syntaxe JSON-LD
- 📋 Détail des erreurs
- 🎯 Suggestions de correction

---

#### 3. **Google Search Console**
- 🔗 https://search.google.com/search-console/
- 📊 Indexation status
- ⚠️ Erreurs de crawling
- 🔍 Rich Results détectés
- 📈 Performance (CTR, impressions)

**Actions** :
1. Ajouter le domaine
2. Vérifier ownership
3. Soumettre sitemap.xml
4. Vérifier robots.txt
5. Consulter "Rich results" pour les recettes

---

#### 4. **Lighthouse (Chrome DevTools)**
- 🔗 F12 > Lighthouse
- 📱 Performance, SEO, accessibilité
- 🎯 Score 0-100
- 💡 Recommandations

**SEO checks** :
- ✅ Mobile-friendly
- ✅ Meta tags présentes
- ✅ Viewport configuré
- ✅ Crawlable
- ✅ Pas d'erreurs bloquantes JS

---

### 📈 Indicateurs à suivre

| Métrique | Outil | Cible |
|----------|-------|--------|
| **Impressions** | GSC | +0% (baseline) |
| **Clics** | GSC | +20-30% (rich snippets) |
| **CTR** | GSC | 4-6% (normal : 2-3%) |
| **Ranking** | GSC | Top 10 |
| **Core Web Vitals** | PSI / Lighthouse | >90 |
| **Indexation** | GSC | 100% des URLs |
| **Rich Results** | GSC | Actifs pour recettes |

---

### 🔄 Mise à jour régulière

**Mensuel** :
- ✅ Revalidate rich results
- ✅ Check Search Console errors
- ✅ Update lastmod in sitemap.xml

**Trimestriel** :
- ✅ Add new recipes to sitemap
- ✅ Update ratings/reviews
- ✅ Add new FAQ items

**Annuel** :
- ✅ Full SEO audit
- ✅ Competitor analysis
- ✅ Update meta descriptions

---

## 📋 Checklist d'implémentation

### ✅ Complété

- [x] Title tags optimisés
- [x] Meta descriptions
- [x] Meta robots (noindex sur filtres)
- [x] Canonical URLs
- [x] Open Graph tags complètes
- [x] Twitter Cards
- [x] robots.txt avec Disallow query strings
- [x] sitemap.xml avec 31 URLs
- [x] JSON-LD Organization
- [x] JSON-LD WebSite + SearchAction
- [x] JSON-LD Recipe (dynamique)
- [x] JSON-LD BreadcrumbList
- [x] JSON-LD FAQPage
- [x] JSON-LD AboutPage / ContactPage
- [x] HTML5 Landmarks
- [x] Heading hierarchy (H1/H2/H3)
- [x] Preconnect + DNS prefetch
- [x] Scripts externes en defer
- [x] Lazy loading des backgrounds via IntersectionObserver
- [x] Images progressives SD → HD au clic
- [x] Placeholder vidéo YouTube + chargement iframe au clic
- [x] Compression Apache Brotli + gzip (`.htaccess`)
- [x] Charset UTF-8
- [x] Viewport meta
- [x] Schema.json centralisé

### 🎯 À considérer (optionnel)

- [ ] AmpHTML version (pour Google Discover)
- [ ] Video sitemap (si vidéos)
- [ ] Image sitemap (prochainement)
- [ ] Structured reviews (notes utilisateurs)
- [ ] Event schema (événements culinaires)
- [ ] Local schema (si local business)

---

## 📚 Ressources utiles

### Documentation officielle
- 📖 Schema.org : https://schema.org
- 🔍 Google Search Central : https://developers.google.com/search
- 📱 Mobile-Friendly Test : https://search.google.com/test/mobile-friendly
- 🎯 Google SEO Starter Guide : https://developers.google.com/search/docs/beginner/seo-starter-guide

### Guides avancés
- 📊 Core Web Vitals : https://web.dev/vitals/
- ⚡ PageSpeed Insights : https://pagespeed.web.dev/
- 🎓 Google Analytics 4 : https://analytics.google.com

---

## 🎉 Impact SEO attendu

Après implémentation complète :

| Métrique | Avant | Après | Augmentation |
|----------|-------|--------|--------------|
| **CTR moyen** | 2-3% | 4-6% | +100% |
| **Rich Results** | 0 | Actif | ✅ Actif |
| **Knowledge Panel** | Non | Oui | ✅ Présent |
| **Impressions** | Baseline | +0-10% | Varié |
| **Ranking** | > position 10 | Position 5-8 | Amélioré |
| **Core Web Vitals** | 60-70 | 90+ | +30-40 pts |

---

**Dernière mise à jour** : 18 mars 2026  
**Version** : 1.1  
**Auteur** : Saveurs du Monde SEO Team

