# 🍽️ Menu App

![Menu App Screenshot](/public/Menu-screenshot.png)

> Een moderne, responsieve menu-applicatie gebouwd met React en TypeScript. Ontdek heerlijke gerechten georganiseerd per categorie met een intuïtief filtersysteem voor een naadloze gebruikerservaring.

## 📋 Inhoudsopgave

- [Kenmerken](#kenmerken)
- [Gebruikte Technologieën](#gebruikte-technologieën)
- [Projectstructuur](#projectstructuur)
- [Principes](#principes)
- [Installatie](#installatie)
- [Gebruik](#gebruik)
- [Beschikbare Scripts](#beschikbare-scripts)
- [Bijdragen](#bijdragen)
- [Licentie](#licentie)

## ✨ Kenmerken

- **🍴 Gecategoriseerde Menu-items**: Blader eenvoudig door items georganiseerd per categorie, zoals _ontbijt_, _lunch_, _shakes_, etc.
- **🔍 Interactief Filteren**: Klik op categorieknoppen om alleen relevante menu-items weer te geven – snel en eenvoudig!
- **📱 Responsief Ontwerp**: Geoptimaliseerd voor zowel desktop als mobiele apparaten, voor een geweldige ervaring overal.
- **🔧 TypeScript Ondersteuning**: Volledig getypt voor een betere ontwikkelervaring en minder runtime-fouten.
- **⚡ Snelle Build met Vite**: Gebruikmakend van Vite voor snelle ontwikkeling en geoptimaliseerde productie-builds.
- **🧠 React Compiler**: Automatische memoization van componenten en hooks via `babel-plugin-react-compiler`.
- **🪝 Git Hooks met Husky**: Pre-commit hook die automatisch lint uitvoert bij elke commit.

## 🛠️ Gebruikte Technologieën

| Technologie                  | Versie  | Beschrijving                                                                       |
| ---------------------------- | ------- | ---------------------------------------------------------------------------------- |
| **React**                    | 19.x    | Een JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces.               |
| **TypeScript**               | 6.x     | Een getypeerde superset van JavaScript die compileert naar gewone JavaScript.       |
| **Vite**                     | 8.x     | Een snelle build-tool en ontwikkelserver.                                           |
| **ESLint**                   | 10.x    | Linting met flat config (`eslint.config.js`).                                       |
| **React Compiler**           | 1.0     | Automatische memoization via `babel-plugin-react-compiler`.                         |
| **Husky**                    | 9.x     | Git hooks voor geautomatiseerde pre-commit linting.                                 |

## 📁 Projectstructuur

```
menu/
├── .github/workflows/pr.yml     # GitHub Actions PR workflow
├── .husky/pre-commit             # Pre-commit lint hook
├── public/                       # Statische bestanden (afbeeldingen)
├── src/
│   ├── components/
│   │   ├── index.ts              # Barrel export voor alle componenten
│   │   ├── Categories/
│   │   │   ├── index.ts
│   │   │   └── Categories.tsx    # Categorie filterknoppen
│   │   ├── Menu/
│   │   │   ├── index.ts
│   │   │   └── Menu.tsx          # Menu item lijst
│   │   ├── MenuItemCard/
│   │   │   ├── index.ts
│   │   │   └── MenuItemCard.tsx  # Individueel menu item kaartje
│   │   └── MenuTitle/
│   │       ├── index.ts
│   │       └── MenuTitle.tsx     # Titel sectie met decoratie
│   ├── data/
│   │   └── index.ts              # Menu data, categorieën, constanten
│   ├── types/
│   │   └── index.ts              # Gedeelde TypeScript types
│   ├── App.tsx                   # Hoofdcomponent
│   ├── main.tsx                  # App entry point
│   ├── index.css                 # Globale stijlen
│   └── vite-env.d.ts             # Vite type declaraties
├── eslint.config.js              # ESLint flat config
├── vite.config.ts                # Vite configuratie
├── tsconfig.json                 # TypeScript configuratie
└── package.json                  # Project metadata en scripts
```

## 🎯 Principes

Dit project past de volgende principes toe:

- **DRY (Don't Repeat Yourself)**: Gedeelde types, herbruikbare componenten, afgeleide data.
- **SSOT (Single Source of Truth)**: Eén centrale bron voor data, types en constanten:
  - `MenuItem` type gedefinieerd in `src/types/index.ts`
  - `CATEGORY_ALL` constante in `src/data/index.ts`
  - Categorieën worden afgeleid uit `menuData`
  - CSS variabelen voor consistente styling (`--max-width`, `--clr-gold`, etc.)
- **Co-located Types**: Component-specifieke types wonen naast hun component.
- **Barrel Exports**: Elke component map heeft een `index.ts` voor schone imports.

## 🚀 Installatie

Volg deze eenvoudige stappen om de app lokaal te draaien:

1. **Kloon de repository**:

   ```bash
   git clone https://github.com/HamedSadim1/menu.git
   ```

2. **Navigeer naar de projectmap**:

   ```bash
   cd menu
   ```

3. **Installeer afhankelijkheden** (Husky wordt automatisch ingesteld via `prepare` script):
   ```bash
   npm install
   ```

## 🎯 Gebruik

1. **Start de ontwikkelserver**:

   ```bash
   npm run dev
   ```

2. **Open je browser** en ga naar `http://localhost:5173` (of de poort gespecificeerd door Vite).

3. **Blader en filter**: Ontdek de menu-items en gebruik de categorieknoppen om de weergave aan te passen.

## 📜 Beschikbare Scripts

| Script             | Beschrijving                                           |
| ------------------ | ------------------------------------------------------ |
| `npm run dev`      | Start de ontwikkelserver.                              |
| `npm run build`    | TypeScript check + Vite productie-build.               |
| `npm run lint`     | Voert ESLint uit om codeproblemen te controleren.      |
| `npm run preview`  | Bekijkt de productie-build lokaal.                     |
| `npm run prepare`  | Stelt Husky git hooks in (automatisch bij `install`).  |

## ⚙️ CI/CD

- **GitHub Actions PR Workflow** (`.github/workflows/pr.yml`): Voert automatisch lint, typecheck en build uit bij elke pull request naar `main`.
- **Husky Pre-commit Hook**: Voert `npm run lint` uit voor elke commit.

## 🤝 Bijdragen

Bijdragen zijn van harte welkom! Hier is hoe je kunt helpen:

1. Fork de repository.
2. Maak een nieuwe branch voor je functie of bugfix.
3. Maak je wijzigingen en commit ze.
4. Push naar je fork en dien een pull request in.

## 📄 Licentie

Dit project is gelicentieerd onder de **MIT Licentie**. Zie het [LICENSE](LICENSE) bestand voor meer details.
