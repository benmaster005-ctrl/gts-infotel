# GTS-Infotel - Portail Web d'Entreprise

Application web moderne, réactive et maintenable développée en **React 18** avec **Tailwind CSS** et **Vite**, fidèlement inspirée de la maquette d'architecture télécom pour **GTS-Infotel** (Opérateur Télécom à Valeur Ajoutée - VAS, titulaire de la Licence Catégorie 1 au Cameroun).

---

## 📸 Correspondance avec la Maquette Visily

Le site retranscrit avec fidélité chaque section de la maquette originale :

1. **En-tête & Navigation (`Navbar.jsx`)**
   - Logo GTS-Infotel avec badge officiel "Opérateur Télécom VAS".
   - Liens de navigation avec défilement fluide (`smooth scroll`).
   - Bouton d'action principal *"Demander un devis"*.
   - Menu mobile fluide et accessible.

2. **Section Hero (`Hero.jsx`)**
   - Fond stylisé inspiré de la fibre optique et du routage IP (lignes lumineuses SVG & lueurs néon).
   - Accroche forte : *"Votre entreprise mérite une identité téléphonique professionnelle."*
   - Double bouton CTA : *"Demander une démo"* (Orange) et *"Découvrir nos solutions"* (Ghost).
   - Points de réassurance rapides (déploiement 24-48h, 0 investissement matériel, support 24/7).

3. **Piliers de Valeur (`Benefits.jsx`)**
   - Titre : *"Un numéro professionnel, ce n'est pas qu'un numéro."*
   - 3 cartes avec pastilles colorées pastel et icônes :
     - **Confiance & Crédibilité** (badge rose)
     - **Proximité & Disponibilité** (badge ambré)
     - **Communication Centralisée** (badge bleu)

4. **Focus Produit GTSnetwork (`ProductSpotlight.jsx`)**
   - Titre : *"Un numéro PRO. Plusieurs possibilités."*
   - Liste des fonctionnalités clés en 2 colonnes avec puces de validation orange.
   - Bouton *"En savoir plus sur GTSnetwork"*.
   - Illustration interactive du Cloud Télécom et du smartphone avec simulation d'appel.

5. **Grille des Solutions (`Solutions.jsx`)**
   - Titre : *"Des solutions pensées pour les communications professionnelles"*.
   - 6 cartes agencées en grille 3x2 :
     1. Standard Vocal Virtuel (Cloud IP-PBX)
     2. GTSnetwork (Application Mobile & Télétravail)
     3. SVI & Centre de Contacts (Files d'attente intelligentes)
     4. Trunk SIP & Intégration 3CX (Interconnexion VoIP)
     5. SMS Pro & VAS Solutions (A2P, SMS en masse, OTP)
     6. **Carte d'Appel à l'action Orange standout** : *"Prêt à transformer vos communications ? / Prendre contact"*
   - Fenêtre modale de détails techniques au clic sur *"Détails"*.

6. **Pourquoi Choisir GTS (`WhyChooseUs.jsx`)**
   - Section foncée bleu nuit (*Midnight Navy*) de la maquette.
   - Titre : *"Pourquoi choisir GTS-Infotel ?"*.
   - 4 métriques clés :
     - **20+** Ans d'expertise
     - **Pionnier** Télécom VAS
     - **CAMTEL** Partenaire Réseau
     - **Cat. 1** Licence Officielle ART

7. **Processus d'Intégration (`OnboardingSteps.jsx`)**
   - Titre : *"Commencez simplement"*.
   - Visuel gauche : Tableau de bord d'audit télécom interactif.
   - Colonne droite : Les 3 étapes numérotées (**01** Consultation & Audit, **02** Configuration & Test, **03** Lancement & Support).
   - Bouton *"Demander votre audit gratuit"*.

8. **Foire Aux Questions (`FAQ.jsx`)**
   - Accordéon interactif avec barre de recherche en temps réel pour filtrer les questions télécoms.

9. **Newsletter & Veille (`Newsletter.jsx`)**
   - Formulaire d'abonnement avec accusé de réception instantané.

10. **Pied de Page (`Footer.jsx`)**
    - Coordonnées officielles à Douala (Cameroun), liens de navigation, réseaux sociaux et mentions réglementaires ART.

11. **Modale Interactive de Devis (`QuoteModal.jsx`)**
    - Déclenchée par tous les boutons d'action du site.
    - Sélection de solution, dimensionnement du nombre de postes, et écran de confirmation interactif.

---

## 🗂️ Structure du Projet

```text
Gts-Infotel/
├── index.html                 # Point d'entrée HTML avec Google Fonts & Meta SEO
├── vite.config.js             # Configuration Vite
├── tailwind.config.js         # Configuration Tailwind CSS (palette officielle GTS)
├── postcss.config.js          # Configuration PostCSS
├── package.json               # Dépendances & scripts npm
├── src/
│   ├── main.jsx               # Point de montage React
│   ├── App.jsx                # Composant racine assemblant toutes les sections
│   ├── index.css              # Styles globaux & directives Tailwind
│   ├── data/
│   │   └── telecomData.js     # Données centralisées et documentées (faciles à modifier)
│   └── components/
│       ├── Navbar.jsx         # Navigation responsive
│       ├── Hero.jsx           # Section d'accroche avec effets lumineux
│       ├── Benefits.jsx       # 3 piliers d'avantages
│       ├── ProductSpotlight.jsx # Présentation de GTSnetwork
│       ├── Solutions.jsx      # Grille des 6 solutions télécoms
│       ├── WhyChooseUs.jsx    # Section sombre d'expertise & métriques
│       ├── OnboardingSteps.jsx # 3 étapes de déploiement & maquette dashboard
│       ├── FAQ.jsx            # Questions fréquentes avec filtre
│       ├── Newsletter.jsx     # Formulaire newsletter
│       ├── Footer.jsx         # Pied de page 4 colonnes
│       └── QuoteModal.jsx     # Fenêtre modale de demande de devis
```

---

## 🚀 Démarrage Rapide

### Prérequis
- [Node.js](https://nodejs.org) (v18+ ou v24 LTS installé)
- `npm`

### Installation & Lancement en mode Développement
```bash
# Se placer dans le dossier du projet
cd c:\Users\User\Desktop\Gts-Infotel

# Lancer le serveur de développement avec rechargement à chaud
npm run dev
```

L'application sera accessible instantanément sur : `http://localhost:3000` (ou le port indiqué par Vite).

### Compilation pour la Production
```bash
# Générer le bundle de production optimisé
npm run build

# Prévisualiser le résultat compilé localement
npm run preview
```

---

## 💡 Principes de Conception & Maintenabilité

- **Code Documenté** : Chaque composant et fonction est annoté avec des blocs JSDoc explicites.
- **Séparation des Données et de la Vue** : Tous les textes, listes de solutions et contacts sont centralisés dans [`src/data/telecomData.js`](src/data/telecomData.js), ce qui permet à une équipe marketing de mettre à jour le contenu sans toucher au code JSX.
- **Design Réactif & Mobile First** : Entièrement fluide du smartphone aux écrans ultra-larges.
- **Accessibilité (A11y)** : Contrastes vérifiés, boutons avec étiquettes ARIA, navigation clavier prise en charge.
