# 💻 Portfolio OS – Remi Verstraete

Un portfolio interactif développé avec **Angular** qui simule un **système d’exploitation de bureau**.  
Chaque application/icône correspond à une fonctionnalité (CV, calendrier, paramètres, etc.), et s’ouvre dans une fenêtre flottante comme dans un vrai OS.

---

## 🚀 Fonctionnalités

- Bureau interactif avec icônes et fenêtres
- Système de gestion de fenêtres (déplacement, redimensionnement, fermeture)
- Menu Démarrer, barre des tâches et barre supérieure
- Écran de connexion simulé
- Applications intégrées :
  - **CV** (en cours d’implémentation, avec données issues du PDF)
  - **Calendrier**
  - **Paramètres rapides (Wi-Fi, volume, etc.)**
  - … et autres modules personnalisables

---

## 🛠️ Stack technique

- **Framework** : Angular 20+
- **Langage** : TypeScript
- **Style** : SCSS
- **Gestion de dépendances** : npm
- **Organisation** :
  - `src/app/desktop/` → bureau principal
  - `src/app/desktop-icon/` → composant icône
  - `src/app/window/` → gestion des fenêtres
  - `src/app/...` → applications (CV, calendrier, etc.)
  - `src/assets/` → ressources statiques (icônes, données JSON, etc.)

---

## 📦 Installation & utilisation

### 1. Cloner le repo

```bash
git clone https://github.com/remi-verstraete-pro/portfolio-os.git
cd portfolio-os
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer l’application

```bash
ng serve
```
