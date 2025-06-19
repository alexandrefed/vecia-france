# Guide de Rédaction d'Articles pour Vecia France

## 🚀 Quick Start

Pour créer un nouvel article de blog :

1. Créez un fichier `.md` dans `/src/content/blog/`
2. Nommez-le avec un slug URL-friendly : `mon-article-genial.md`
3. Copiez le template ci-dessous
4. Écrivez votre contenu en Markdown standard

## 📝 Template d'Article

```markdown
---
title: "Titre de Votre Article"
description: "Description courte et accrocheuse (150-160 caractères pour le SEO)"
publishDate: 2025-06-19
author: "Équipe Vecia"
image: "/images/blog/votre-image.jpg"
tags: ["tag1", "tag2", "tag3"]
linkedin:
  title: "🚀 Titre accrocheur pour LinkedIn"
  content: |
    Texte formaté pour LinkedIn avec emojis
    
    Point clé 1️⃣
    Point clé 2️⃣
    
    Question engageante ?
  hashtags: ["automation", "AI", "innovation"]
seo:
  title: "Titre SEO Optimisé | Vecia"
  description: "Description SEO complète (150-160 caractères)"
  keywords: ["mot-clé1", "mot-clé2", "mot-clé3"]
---

Votre contenu commence ici...
```

## 📐 Structure Recommandée

### 1. Introduction (2-3 paragraphes)
- Accrochez le lecteur
- Présentez le problème/contexte
- Annoncez ce que l'article va couvrir

### 2. Corps Principal
- Utilisez des sous-titres clairs (`##` et `###`)
- Paragraphes de 3-5 lignes maximum
- Intégrez des listes à puces pour la lisibilité
- Ajoutez des exemples concrets

### 3. Conclusion
- Résumez les points clés
- Incluez un call-to-action
- Invitez à la discussion

## 🎨 Formatage Markdown

### Titres
```markdown
## Titre de section principale
### Sous-section
#### Détail spécifique
```

### Listes
```markdown
- Point important
- Autre point
  - Sous-point

1. Étape numérotée
2. Deuxième étape
```

### Emphase
```markdown
**Texte en gras** pour l'importance
*Texte en italique* pour l'emphase
`code inline` pour les termes techniques
```

### Citations
```markdown
> Citation inspirante ou point clé à retenir
```

### Code
````markdown
```javascript
// Bloc de code avec coloration syntaxique
const example = "Hello World";
```
````

### Liens
```markdown
[Texte du lien](https://example.com)
```

### Images
```markdown
![Description de l'image](/images/blog/image.jpg)
```

## 🎯 Bonnes Pratiques

### SEO & Lisibilité
1. **Titre principal** : 60 caractères max, incluez le mot-clé principal
2. **Description** : 150-160 caractères, accrocheuse
3. **URL slug** : court, descriptif, sans accents
4. **Mots-clés** : naturellement intégrés, pas de sur-optimisation

### Structure du Contenu
- **Paragraphes courts** : 3-5 lignes maximum
- **Phrases variées** : alternez longueurs
- **Transitions fluides** : liez vos sections
- **Justification automatique** : le CSS s'en charge

### Images
- Format : WebP ou JPEG optimisé
- Taille : 1200x630px pour l'image principale
- Nommage : descriptif-avec-tirets.jpg
- Alt text : toujours en français

### Tags
- 3-5 tags maximum
- Cohérents avec le contenu
- Réutilisez les tags existants
- Lowercase, sans accents

## 🔧 Formatage Automatique

Le système gère automatiquement :
- ✅ Justification du texte
- ✅ Tailles de titres proportionnelles
- ✅ Espacement entre paragraphes
- ✅ Césure automatique (hyphens)
- ✅ Responsive design

**Vous n'avez PAS besoin de :**
- ❌ Ajouter du CSS
- ❌ Forcer des sauts de ligne
- ❌ Gérer l'espacement
- ❌ Formatter manuellement

## 💡 Tips Avancés

### Optimisation LinkedIn
```yaml
linkedin:
  title: "🚀 Accroche forte avec emoji"
  content: |
    Format court et impactant.
    
    ✅ Point 1
    ✅ Point 2
    ✅ Point 3
    
    Question pour engagement ?
    
    👉 Lien en commentaire
```

### Structure d'Article Viral
1. **Hook** : Question ou statistique choc
2. **Promesse** : Ce que le lecteur va apprendre
3. **Story** : Exemple concret/anecdote
4. **Contenu** : Valeur actionnable
5. **CTA** : Action claire à prendre

## 📊 Checklist Avant Publication

- [ ] Titre accrocheur et SEO-friendly
- [ ] Description meta complète
- [ ] Image principale optimisée
- [ ] Tags pertinents ajoutés
- [ ] Contenu relu et corrigé
- [ ] LinkedIn post préparé
- [ ] Liens vérifiés
- [ ] Date de publication correcte

## 🚫 Erreurs à Éviter

1. **Paragraphes trop longs** → Divisez en 3-5 lignes
2. **Jargon technique excessif** → Expliquez simplement
3. **Manque de structure** → Utilisez des sous-titres
4. **Pas de CTA** → Toujours guider le lecteur
5. **Images non optimisées** → Compressez avant upload

## 📈 Exemples de Titres Performants

- "Comment [Résultat] en [Temps] avec [Solution]"
- "[Nombre] Erreurs à Éviter en [Domaine]"
- "Le Guide Complet de [Sujet] pour [Audience]"
- "Pourquoi [Tendance] Va Transformer [Industrie]"
- "[Technologie] vs [Alternative] : Le Verdict Final"

---

**Besoin d'aide ?** Consultez les articles existants dans `/src/content/blog/` pour des exemples concrets.