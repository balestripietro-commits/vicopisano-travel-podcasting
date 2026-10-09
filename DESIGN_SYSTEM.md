# Travel Podcasting Design System - Phases 1-5

Status: active runtime foundation; implementation audit recorded 2026-10-09 in `PLAYBOOK_SITI_COMUNALI.md`. `design-system.css` and `theme-vicopisano.css` are loaded before `style.css` in production. The live page uses the core tokens and component classes introduced through Phases 1-5; `style.css` remains the integration layer for Leaflet, layout and legacy selectors. The separation is not yet clean: the core stylesheet still carries Vicopisano-like fallback colors and `--vico-*` aliases.

## 01 Vision
Travel Podcasting is a mobile-first cultural audio guide system for places, routes, museums, villages, and local territories. The interface must feel editorial, civic, warm, and reliable while staying practical for visitors walking outdoors with one hand on a phone.

The design system balances expressive identity with operational clarity. It uses Material 3 Expressive as the main interaction language and Spectrum 2 as a reference for clarity, density, states, and accessibility discipline.

## 02 Product architecture
The architecture is split into two layers:

- Travel Podcasting Design System: reusable product foundation shared by future projects such as Vicopisano, Calci, Bientina, and other territories.
- Territory Theme: local visual identity, palette, imagery, crest, editorial tone, and legacy exceptions for each implementation.

Naming rules:

- CSS tokens use `--tp-*`.
- Reusable component names use `TP*`.
- Territory-specific aliases may exist only as migration helpers and must not become the core API.
- Avoid new `Vico*` components in the core design system.

## 03 Design principles
Mobile/on-location first. Every control must be reachable, readable, and usable while moving outdoors.

Map as anchor. The map remains the core spatial object, not a decorative element.

Audio without friction. The player should always be visible, predictable, and not cover key content.

Editorial warmth. Serif typography, warm surfaces, and civic colors support cultural storytelling.

Precise interaction. Buttons, chips, player controls, map controls, and help overlays must have clear states and predictable z-index behavior.

Progressive richness. Animation should clarify state changes, not distract.

## 04 Brand architecture
The brand structure is:

- Product brand: Travel Podcasting.
- Territory owner/theme: Comune di Vicopisano and future municipalities.
- Local content identity: route title, mascot, stop imagery, language content, local palette.

No definitive product logo is imposed in Phase 1. The system supports a crest or partner mark where useful.

## 05 Color system
The core color system follows Material 3 roles with additional audio/map needs. Required roles:

- `--tp-color-primary`
- `--tp-color-on-primary`
- `--tp-color-primary-container`
- `--tp-color-on-primary-container`
- `--tp-color-secondary`
- `--tp-color-on-secondary`
- `--tp-color-secondary-container`
- `--tp-color-tertiary`
- `--tp-color-accent`
- `--tp-color-surface`
- `--tp-color-surface-dim`
- `--tp-color-surface-bright`
- `--tp-color-surface-container-lowest`
- `--tp-color-surface-container-low`
- `--tp-color-surface-container`
- `--tp-color-surface-container-high`
- `--tp-color-surface-container-highest`
- `--tp-color-on-surface`
- `--tp-color-on-surface-variant`
- `--tp-color-outline`
- `--tp-color-outline-variant`
- `--tp-color-success`
- `--tp-color-warning`
- `--tp-color-error`

Vicopisano keeps the current deep green as primary. Crest blue is reserved for secondary/accent/selected signals. Gold/yellow is used for highlights, progress, focus accents, and microinteractions. Red is used sparingly for errors or civic emphasis. Warm cream remains the canvas.

Dark surfaces are allowed for audio players and full-screen player contexts. This is not a full dark mode.

## 06 Typography
Typography is semantic, not page-specific.

Core families:

- `--tp-font-ui`: Roboto Flex direction for controls, buttons, chips, player UI, labels, map controls, language selector, durations, statuses, and system text.
- `--tp-font-editorial`: open serif direction for storytelling, hero lines, stop titles, route headings, and long cultural copy. Georgia fallback is acceptable.

Scale is mobile-first:

- Display: large route/hero statements.
- Headline: section headings such as route blocks and platform headings.
- Title: stop cards, player title, dialog title.
- Body: instructions, descriptions, transcript text.
- Label: chips, controls, captions, statuses.

Line length must stay readable. Long editorial copy should not become overly wide on desktop.

## 07 Spacing
Spacing tokens are based on a 4px grid:

- `--tp-space-1: 4px`
- `--tp-space-2: 8px`
- `--tp-space-3: 12px`
- `--tp-space-4: 16px`
- `--tp-space-5: 24px`
- `--tp-space-6: 32px`
- `--tp-space-7: 48px`
- `--tp-space-8: 64px`
- `--tp-space-9: 96px`

Use larger vertical rhythm around route sections and tighter spacing inside player controls.

## 08 Shape
Shape tokens:

- `--tp-radius-xs: 8px`
- `--tp-radius-sm: 12px`
- `--tp-radius-md: 18px`
- `--tp-radius-lg: 24px`
- `--tp-radius-xl: 34px`
- `--tp-radius-xxl: 48px`
- `--tp-radius-full: 999px`
- `--tp-shape-stop-selected: 32px 32px 32px 14px`
- `--tp-shape-stop-selected-leading: 32px 0 0 14px`

Use expressive rounded shapes for player and map controls, but keep compact controls readable. `TPStopCard` uses `--tp-shape-stop-selected` only for the selected state, alongside its border and tonal cue.

## 09 Elevation
Elevation levels:

- Level 0: flat surface.
- Level 1: subtle card separation.
- Level 2: active cards, chips, controls.
- Level 3: player, map panels, dialogs.
- Level 4: modal/full-screen overlays.

Elevation should combine shadow and surface color, not shadow alone.

## 10 Motion
Motion tokens:

- `--tp-motion-instant: 100ms`
- `--tp-motion-fast: 180ms`
- `--tp-motion-standard: 280ms`
- `--tp-motion-expressive: 420ms`
- `--tp-motion-hero: 560ms`

Easing tokens:

- `--tp-ease-standard`
- `--tp-ease-emphasized`
- `--tp-ease-decelerate`
- `--tp-ease-accelerate`

Motion rules:

- Buttons compress slightly on press.
- Language chips pulse only on selected change.
- Player sheet opens with a short expressive reveal and closes faster.
- Map markers may bounce/glow only when selected.
- Text translations can fade/slide briefly.
- Respect `prefers-reduced-motion`.

## 11 Interaction states
Every interactive component must define:

- default
- hover
- focus-visible
- pressed
- selected
- disabled
- loading

Focus must be visible and not depend only on color. Pressed states should use transform, shadow, or tonal change.

## 12 Touch targets
Minimum target: 44px.

Recommended target: 48-56px.

Primary expressive controls: 56-64px.

Icon-only controls must include accessible names. Map controls and player controls must be large enough for outdoor mobile use.

## 13 Iconography
Direction: Material Symbols Rounded.

Functional controls use Material Symbols Rounded in production and in the playground. Textual marks, platform logos and social identifiers remain textual where a Material symbol would not convey the intended brand or meaning.

## 14 Accessibility
Accessibility requirements:

- Contrast check for text, chips, player, map controls, and overlays.
- Visible keyboard focus on all controls.
- 44px minimum touch target.
- Reduced motion support.
- ARIA labels for icon-only buttons.
- Keyboard operation for language, player, help, map controls, and dialogs.
- Text sizing remains readable on mobile.
- Audio controls expose clear state.
- Language selector announces selected language.

Accessibility debt / migration notes:

- Verify all current icon-only buttons in the live app have labels.
- Recheck z-index and pointer-events for Leaflet layers, player, help overlays, and full-screen player.
- Check transcript accordion semantics.
- Check audio error messages with screen readers.

## 15 Component vocabulary
Core component vocabulary:

- `TPButton`
- `TPIconButton`
- `TPChip`
- `TPCard`
- `TPStopCard`
- `TPMapMarker`
- `TPMapControl`
- `TPAudioControl`
- `TPMiniPlayer`
- `TPPlayerSheet`
- `TPDialog`
- `TPToast`

These components are CSS and semantic contracts, not a JavaScript framework. `TPChip`, `TPIconButton`, `TPStopCard`, `TPMapMarker`, `TPMapControl`, `TPAudioControl`, `TPMiniPlayer` and `TPPlayerSheet` are active in the Vicopisano runtime.

## 16 Responsive/adaptive strategy
Primary breakpoints are behavior-based, not device-brand based.

- 360px: narrow mobile, one-column, compact controls.
- 390px: common mobile target.
- 430px: large mobile target.
- Tablet: two-column opportunities only when touch remains comfortable.
- Desktop: wider map, editorial layout, player remains stable.

Mobile is the primary experience. Desktop should feel expanded, not merely stretched.

## 17 Theme architecture
Recommended future cascade:

1. `design-system.css` for core tokens and reusable component primitives.
2. `theme-vicopisano.css` for territory token overrides and local identity.
3. `style.css` for current app-specific legacy styles during migration.

The design system can later be shared across territories by adding new theme files, for example `theme-calci.css`.

## 18 Vicopisano Theme
Vicopisano theme direction:

- Primary: current deep green.
- Secondary/accent: crest blue for selected or institutional emphasis.
- Highlight: gold/yellow for progress, quotes, player progress, and guided moments.
- Surface: warm cream and soft containers.
- Error/red: rare and functional.
- Imagery: civic, historical, route-specific.
- Mascot: optional narrative layer, not required for all future territories.

## 19 Legacy exceptions
Product visual rule — purple stop identifier.

The purple numbered marker is the Travel Podcasting tertiary identifier for route stops. Vicopisano green, crest blue and gold provide territorial context, selected state layers and progress accents. The route itself uses Vicopisano green so it remains subordinate to the markers.

Legacy aliases may exist to bridge current CSS, but new system code should use `--tp-*` tokens and `TP*` component language.

## 20 Audio component contract
`TPPlayerSheet` and `TPMiniPlayer` share one `<audio>` element. Audio hierarchy is `seek -> -10 / primary Play-Pause / +10 -> repeat secondary`: the centered transport trio is one functional group, Play/Pause uses the expressive tertiary/gold shape, and repeat stays smaller and visually separate. Tap feedback is bounded: primary Play/Pause expands while lateral controls settle; a skip control expands only when invoked. The sheet uses a continuous Material 3 seek slider with active/inactive track, visible thumb, 44px touch target and keyboard focus state; its track becomes thicker only on hover, focus or drag. The mini-player shows only a non-draggable progress bar without a thumb.

The photo is the default player artwork. The mascot appears only through the explicit photo/mascot switch; Rhubarb, breathing, lip-sync and play/pause/end reactions remain contained in the manual mascot mode.

Language selection follows one shared pattern: onboarding exposes the full set of named language options because language is the primary task; runtime uses a compact current-language control that opens the available choices. Flags are decorative, while the language name provides the accessible label.

## 21 Map component contract
`TPMapMarker` is a compact, high-contrast Leaflet `divIcon` with a readable route number. Selected stop cards and markers share a clear selected state; selecting a card centers the map without opening a popup, while tapping a marker selects the stop and opens the player directly.

`TPMapControl` provides manual geolocation and Explore mode with Material Symbols Rounded and 48px-or-larger outdoor touch targets. Explore mode keeps Leaflet and OpenStreetMap intact, leaves the mini-player accessible, and exposes only a compact contextual stop surface.

## 22 Delivered phases
1. Phase 1: core tokens, Vicopisano theme, component vocabulary, playground and documentation.
2. Phase 2: production cascade, `TPChip`, `TPIconButton`, `TPStopCard`, Typography Lab and selected stop styling.
3. Phase 3: mobile-first audio experience with shared `<audio>`, `TPMiniPlayer`, `TPPlayerSheet`, Media Session, language control, transcript, completion and persistence states.
4. Phase 4: Leaflet composition, `TPMapMarker`, `TPMapControl`, route hierarchy, selected marker/card synchronization, Explore mode and desktop split view.
5. Phase 5: cleanup and alignment of iconography, compact mobile home language control, design-system audio contract, accessibility and regression documentation.
