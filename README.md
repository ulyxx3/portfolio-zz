# ULYXX3 — Portfolio BUT MMI 1

Site portfolio futuriste minimaliste réalisé en HTML, CSS et JavaScript/PHP.

---

## 📁 Structure du projet

```
Portfolio-zz/
├── index.html          ← Page d'accueil (point d'entrée)
├── pages/
│   ├── projets.html    ← Liste de tous les projets GitHub
│   ├── videos.html     ← Créations vidéo et animations
│   └── contact.html    ← Formulaire de contact + réseaux
├── php/
│   └── traitement.php  ← Traitement serveur du formulaire (PHP)
├── assets/
│   ├── css/
│   │   └── style.css   ← Feuille de style (design system complet)
│   └── js/
│       └── script.js   ← JavaScript (injection données, filtres, formulaire)
└── README.md
```

---

## 🚀 Lancer le site en local

### Option 1 — Juste HTML/CSS/JS (sans formulaire PHP)

Ouvrir `index.html` directement dans un navigateur.  
Les pages statiques fonctionnent, mais la soumission du formulaire vers `traitement.php` nécessite un serveur.

### Option 2 — Avec PHP (formulaire fonctionnel)

**Installer PHP :**
```bash
sudo apt update && sudo apt install php
```

**Lancer le serveur PHP intégré depuis la racine du projet :**
```bash
php -S localhost:8080
```

Puis ouvrir : http://localhost:8080

> ⚠️ La fonction `mail()` PHP ne fonctionne pas en local sans configuration SMTP.  
> Sur un hébergement web (OVH, Infomaniak, o2switch...), elle fonctionne directement.

### Option 3 — Hébergement sur serveur mutualisé

Uploader tous les fichiers via FTP sur un hébergement qui supporte PHP (cPanel, Plesk...).  
Le formulaire envoie un email via `mail()` à l'adresse configurée dans `php/traitement.php`.

---

## ✏️ Personnaliser

- **Email de contact** : modifier `$destinataire` dans `php/traitement.php`
- **Projets** : modifier le tableau `var projets = [...]` dans `assets/js/script.js`
- **Réseaux sociaux** : modifier le tableau `var socials = [...]` dans `assets/js/script.js`
- **Couleurs** : modifier les variables CSS dans `assets/css/style.css` (section `:root`)

---

## 🛠 Technologies

- HTML5 sémantique
- CSS3 (variables, grid, flexbox, animations)
- JavaScript ES5 (boucles, tableaux, fonctions, DOM)
- PHP (variables, tableaux associatifs, `$_POST`, `if/else`, `foreach`, `mail()`)
