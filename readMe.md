![Screenshot d'un aperçu du site](./images/screen.png)

# One Page Artisan – Squelette de site vitrine

## 🧩 Introduction

Ce projet est un squelette de site **one page** destiné aux artisans et petits commerçants qui souhaitent une présence en ligne simple, rapide à mettre en place et sans budget conséquent.

L'idée est claire : offrir une vitrine professionnelle et moderne, sans superflu. Une seule page, l'essentiel bien présenté, livrable en quelques jours. Ce repository sert de base adaptable pour différents corps de métier — boulanger, plombier, électricien, menuisier, coiffeur, etc. — et peut être facilement personnalisé pour correspondre à l'identité visuelle de chaque client.

> 💡 **Pour qui ?** Ce type de site s'adresse aux artisans qui démarrent leur activité, qui n'ont pas encore de site, ou qui souhaitent simplement être trouvables en ligne sans investir dans une solution complexe et coûteuse.

## ✅ Ce que contient le squelette

- **Header** avec logo, nom de l'entreprise et navigation anchor
- **Bannière** hero avec slogan personnalisable
- **Section "À propos"** / présentation de la boutique en cards
- **Carousel** de mise en valeur des produits ou réalisations
- **Horaires** et informations pratiques
- **Carte Google Maps** intégrée
- **Contact** (téléphone, formulaire)
- **Footer** avec liens réseaux sociaux
- **Menu burger** responsive pour mobile
- **Bouton retour en haut** animé

## 🛠️ Choix techniques

Le projet repose sur des technologies volontairement simples, légères et sans dépendances complexes — idéales pour un projet livrable rapidement et facile à maintenir dans le temps.

| Technologie | Rôle |
|---|---|
| HTML / CSS | Structure et style, sans framework lourd |
| JavaScript vanilla | Menu burger responsive, validation de formulaire, cookie banner |
| Bootstrap 5 | Carousel, mise en page responsive rapide |
| Google Fonts | Typographie soignée (Playfair Display + Lato) |

Pas de framework JS, pas de bundler, pas de build step. Le projet s'ouvre directement dans un navigateur — ce qui facilite aussi la prise en main par le client si besoin.

## 🎨 Personnalisation

Ce squelette est conçu pour être modifié rapidement. Les principaux points d'adaptation :

- **Couleurs** : variables dans `style.css` (palette brun/crème remplaçable en quelques lignes)
- **Contenu** : textes, horaires, adresse directement dans `index.html`
- **Images** : remplacer les fichiers dans `/images/` en conservant les noms ou en mettant à jour les sources
- **Sections** : chaque `<section>` est indépendante et peut être ajoutée, retirée ou réordonnée

## 🚀 Démarrer le projet
```bash
git clone https://github.com/Krisdevo/onepage_boulangerie.git
```

Une fois cloné, ouvrez simplement `index.html` dans votre navigateur. Aucune installation requise.

## 📄 Licence

Projet libre d'utilisation et de modification.