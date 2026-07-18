# Examen B3 — Reverse Engineering UI

## Contexte

Vous recevez une **vidéo de démonstration** montrant une interface fonctionnelle.
Votre mission : **reproduire cette interface à l'identique**, comportements compris
(clavier, souris, états de chargement, cas limites).

> 🎥 **Vidéo de la maquette :** [`Screencast From 2026-07-02 16-58-30.mp4`](<./Screencast From 2026-07-02 16-58-30.mp4>) (à la racine du repo)

Il n'y a **aucune UI de départ** dans ce projet, c'est volontaire. Vous partez d'une
page vide et vous construisez tout : structure, composants, hooks, styles.

## Installation

Prérequis : [bun](https://bun.sh) (>= 1.3) et Node.js >= 20.

```bash
bun install
bun dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).

## Règles impératives

1. **Fichiers interdits de modification** — toute modification entraîne `0` à la partie technique :
   - `biome.json`
   - `tsconfig.json`
   - `next.config.ts`
   - `src/lib/mock-api.ts`
   - `package.json` (vous pouvez ajouter des dépendances **uniquement** si elles sont justifiées dans votre rendu, mais aucune librairie de composants tout faits : pas de `cmdk`, `sonner`, `react-toastify`, `react-select`, `downshift`, `headlessui`, `radix`, etc.)
2. **Toute donnée affichée doit provenir de `src/lib/mock-api.ts`** : navigation, hero,
   compétences, portfolio, reviews, CTA, FAQ et footer ont chacun leur fonction `get*`.
   Aucun texte de la maquette ne doit être écrit en dur dans vos composants.
   Le délai réseau simulé (300 à 800 ms) fait partie de l'exercice : gérez vos états de
   chargement et vos race conditions.
3. **`bun run validate` doit passer sans aucune erreur** au moment du rendu.
   C'est la première commande lancée à la correction. Si elle échoue, la note technique est plafonnée.
4. Le code, les commits et les noms de variables sont en anglais ; les textes visibles à l'écran suivent la maquette.
5. Commits réguliers et atomiques : l'historique git fait partie de l'évaluation.

## Commandes

| Commande            | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| `bun dev`           | Serveur de développement                                           |
| `bun run build`     | Build de production                                                |
| `bun run check`     | Lint + format avec correction automatique                          |
| `bun run lint`      | Lint strict sans écriture (mode CI)                                |
| `bun run format`    | Formatage seul                                                     |
| `bun run typecheck` | Vérification TypeScript (`tsc --noEmit`)                           |
| `bun run validate`  | **Commande de correction** : lint strict + typecheck + build       |

## Ce qui est évalué

- **Fidélité à la maquette** : visuel, animations, et surtout les comportements
  (raccourcis clavier, focus, survol, fermeture, cas limites montrés dans la vidéo).
- **Découpage** : composants courts et ciblés, logique extraite dans des **custom hooks**
  réutilisables (`src/hooks/`). Un composant monolithique de 300 lignes est éliminatoire.
- **Cycle de vie** : cleanup functions systématiques dans les `useEffect`
  (timers, listeners, abort). Aucune fuite mémoire, aucune stale closure.
- **Gestion du DOM** : usage pertinent de `useRef` (focus, scroll), `createPortal` si nécessaire.
- **Asynchrone** : états de chargement visibles, annulation ou ignorance des réponses
  obsolètes (race conditions avec la mock API).
- **Immutabilité** : aucun état muté directement.
- **Qualité** : `bun run validate` au vert, historique git propre.

## Structure

```
src/
├── app/          # App Router (layout, page, styles globaux)
├── components/   # Vos composants — à vous de structurer
├── hooks/        # Vos custom hooks — on s'attend à en trouver ici
└── lib/
    └── mock-api.ts   # Mock API obligatoire — NE PAS MODIFIER
```

## À propos du linter

La configuration Biome + TypeScript de ce projet est volontairement **très stricte** :
dépendances de hooks exhaustives, pas de `any`, pas de `console.log`, pas d'assertion
non-null, complexité cognitive limitée, variables et imports inutilisés interdits,
accès aux index de tableaux vérifiés (`noUncheckedIndexedAccess`)…

Du code généré sans être compris ne passera pas `bun run validate`.
Lisez les messages d'erreur : ils vous indiquent presque toujours la correction propre.
