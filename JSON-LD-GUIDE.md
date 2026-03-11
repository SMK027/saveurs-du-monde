# Guide d'implémentation JSON-LD pour Saveurs du Monde

## 📋 Sommaire
- [Introduction](#introduction)
- [Structure du fichier schema.json](#structure)
- [Schémas implémentés](#schémas)
- [Comment mettre à jour les schémas](#mise-à-jour)
- [Validation et test](#validation)

---

## Introduction

Le fichier `schema.json` centralise tous les schémas structurés basés sur **schema.org** pour votre site de recettes. Ces schémas :
- **Améliorent le SEO** : Google utilise les données structurées pour enrichir les résultats de recherche
- **Augmentent la visibilité** : Rich snippets affichent les notes, temps de cuisson, ingrédients dans les SERP
- **Facilitent le partage social** : Les informations structurées sont mieux comprises par les réseaux sociaux

---

## Structure du fichier schema.json

Le fichier utilise la structure **@graph** qui permet de déclarer plusieurs schémas interconnectés :

```json
{
  "@context": "https://schema.org",
  "@graph": [
    // ... schémas individuels
  ]
}
```

### Avantages de la structure @graph :
- Réference croisée entre schémas (`@id` et références)
- Évite la duplication d'informations (ex: Organization référencée dans plusieurs schémas)
- Gestion centralisée de toutes les métadonnées

---

## Schémas implémentés

### 1. **Organization** (Données sur l'organisation)
**Localisation** : `schema.json` (réutilisable par tous les schémas)

**Finality** :
- Identifie votre entreprise/site auprès de Google
- Affiche le logo, contact, adresse dans le Knowledge Panel Google
- Lie les réseaux sociaux à votre site

**Données incluses** :
```json
{
  "@type": "Organization",
  "name": "Saveurs du Monde",
  "url": "https://saveursdumonde.leofranz.fr/",
  "logo": { /* image structurée */ },
  "email": "contact@saveursdumonde.leofranz.fr",
  "sameAs": ["Facebook", "Instagram", "YouTube"]
}
```

---

### 2. **WebSite** (Informations du site web)
**Localisation** : `index.html` (inline) + `schema.json`

**Finality** :
- Indique à Google la présence d'un moteur de recherche sur le site
- Génère un Search Box pour le site dans Google Search Console
- Améliore la navigation du site dans les résultats

**Données incluses** :
```json
{
  "@type": "WebSite",
  "name": "Saveurs du Monde",
  "url": "https://saveursdumonde.leofranz.fr/",
  "inLanguage": "fr-FR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "...pages/recettes.html?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

### 3. **Recipe** (Recette individuelle)
**Localisation** : `pages/recette.html` (dynamique via JavaScript)

**Finality** :
- Affiche les informations de recette directement dans Google
- Inclut image, temps de cuisson, notes d'utilisateurs
- Génère des rich cards "Recette" dans les résultats

**Exemple** (généré dynamiquement) :
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
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "142"
  },
  "recipeIngredient": ["..."],
  "recipeInstructions": [/* HowToStep */]
}
```

---

### 4. **BreadcrumbList** (Fil d'Ariane)
**Localisation** : `schema.json`

**Finality** :
- Affiche le chemin de navigation dans les résultats Google
- Améliore l'UX et le CTR (taux de clic)

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

---

### 5. **CollectionPage** (Page de collection de recettes)
**Localisation** : `pages/recettes.html` (référencé dans schema.json)

**Finality** :
- Indique que la page est une collection d'éléments
- Aide Google à indexer les recettes

**Données incluses** :
```json
{
  "@type": "CollectionPage",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [/* recettes */]
  }
}
```

---

### 6. **FAQPage** (Page de FAQ)
**Localisation** : `schema.json`

**Finality** :
- Affiche les réponses aux FAQ directement dans les résultats
- Génère une section spéciale "Questions fréquemment posées" dans Google

**Exemple** :
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "...",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

---

### 7. **AboutPage & ContactPage**
**Localisation** : `schema.json`

**Finality** :
- Identifie les pages About et Contact
- Améliore le crawl Google

---

### 8. **AggregateOffer** (Offres groupées)
**Localisation** : `schema.json`

**Finality** :
- Affiche les offres du site (ici : accès gratuit aux recettes)
- Utile pour les sites de e-commerce ou d'accès

---

## Comment mettre à jour les schémas

### 📝 Pour ajouter une nouvelle recette (dynamique)

Le fichier `pages/recette.html` contient déjà la logique pour générer automatiquement le schéma Recipe :

```javascript
upsertJsonLd('recipeJsonLd', {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  'name': recipe.titre,
  'image': [recipe.image],
  // ... autres champs
});
```

**Aucune modification du schema.json n'est nécessaire** - le schéma est généré à partir de la variable `RECIPES` dans `js/script.js`.

### 🔄 Pour mettre à jour les données de l'organisation

Modifiez le bloc `Organization` dans `schema.json` :

```json
{
  "@type": "Organization",
  "name": "Votre nom",
  "email": "votre@email.com",
  "sameAs": ["..."]
}
```

### ❓ Pour ajouter une question FAQ

Ajoutez un nouvel objet dans le tableau `mainEntity` de `FAQPage` :

```json
{
  "@type": "Question",
  "name": "Votre question?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Votre réponse..."
  }
}
```

---

## Validation et test

### ✅ **Valider le JSON-LD**

1. **Google Rich Results Test** :
   - 🔗 https://search.google.com/test/rich-results
   - Collez votre URL pour vérifier que Google détecte les rich snippets

2. **Schema.org Validator** :
   - 🔗 https://validator.schema.org/
   - Validez la syntaxe JSON-LD

3. **Structured Data Testing Tool** :
   - 🔗 https://developers.google.com/search/docs/advanced/structured-data
   - Testez chaque page individuellement

### 🧪 **Test local**

```bash
# Vérifier que le JSON-LD est valide
curl -s http://127.0.0.1:40059/schema.json | python3 -m json.tool
```

### 📊 **Suivi dans Google Search Console**

1. Accédez à Google Search Console
2. Allez à "Amélioration du contenu" → "Rich results"
3. Vérifiez que vos recettes et FAQ sont détectées

---

## 🚀 Impact SEO attendu

| Schéma | Impact |
|--------|--------|
| **Recipe** | Rich snippets (note, temps, ingrédients) dans Google |
| **FAQPage** | Résumés des FAQ affichés dans SERP |
| **Organization** | Knowledge Panel Google avec infos entreprise |
| **WebSite + SearchAction** | Search Box dans les résultats Google |
| **BreadcrumbList** | Fil d'Ariane dans les résultats |

---

## 📁 Fichiers affectés

- ✅ `schema.json` (nouveau) - Schémas centralisés
- ✅ `index.html` - Référence vers schema.json
- ✅ `pages/recettes.html` - Référence vers schema.json
- ✅ `pages/about.html` - Référence vers schema.json
- ✅ `pages/contact.html` - Référence vers schema.json
- ✅ `pages/categories.html` - Référence vers schema.json
- ℹ️ `pages/recette.html` - Schémas dynamiques (déjà en place)

---

## 💡 Bonnes pratiques

✔️ **Faire** :
- Maintenir `schema.json` à jour avec les infos réelles
- Valider régulièrement avec Google Rich Results Test
- Ajouter des notes d'utilisateurs aux recettes (améliore le CTR)
- Utiliser des images haute résolution dans les schémas

❌ **À éviter** :
- Inclure des données inexactes
- Dupliquer les schémas sur plusieurs pages
- Utiliser des champs non valides selon schema.org
- Oublier de tester après chaque modification

---

## 📞 Support

Pour plus d'informations :
- 📚 Documentation officielle : https://schema.org
- 🔍 Google Search Central : https://developers.google.com/search
- 🛠️ Structured Data Markup Helper : https://www.google.com/webmasters/markup-helper/

