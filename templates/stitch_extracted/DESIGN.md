# Design System Specification

## 1. Overview & Creative North Star: "The Global Kinetic"
This design system is built upon the concept of **"The Global Kinetic"**—a visual language that balances high-energy activism with editorial precision. We move away from the static, "boxed-in" nature of traditional corporate layouts. Instead, we embrace a high-contrast rhythm that alternates between "Air" (expansive light sections) and "Depth" (immersive dark voids). 

By utilizing intentional asymmetry, overlapping typography, and atmospheric "glow" states, we create a signature experience that feels premium, urgent, and intentional. This is not a website; it is a digital manifesto.

---

## 2. Color & Atmospheric Theory
Our palette is a high-tension dialogue between extreme light and total dark, punctuated by a "Radiant Orange" that signals action.

### The Foundation
- **Primary (Action):** `#ad2c00` (Main) | `#d83900` (Container)
- **Tertiary (CTA):** `#00694c` (Main) | `#008561` (Container) | `#3edfaa` (CTA Bright)
- **Surface Light:** `#faf9f8` (Background) | `#f4f3f2` (Surface Low)
- **Surface Dark:** `#000000` (Absolute Black)

### The "No-Line" Rule
Explicitly prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background shifts. 
- **In Light Sections:** Use `surface-container-low` (`#f4f3f2`) to define areas against the `background` (`#faf9f8`).
- **In Dark Sections:** Use "Orange Glow" (Radial gradients: `primary` at 5% opacity, 500px radius) to define spatial depth rather than lines.

### Signature Textures & Glass
- **Light Sections:** Implement a subtle `dot-pattern` using `#d5ccc4` at 15% opacity.
- **Dark Sections:** Floating elements must use **Glassmorphism**.
    - *Recipe:* Background `surface_variant` at 10% opacity + `backdrop-blur (20px)`.
- **The Shimmer:** Main CTAs utilize a diagonal `linear-gradient` (45deg) moving from `tertiary` to `tertiary_fixed_dim`, creating a metallic, high-end "shimmer" effect.

---

## 3. Typography: Editorial Authority
We use a high-contrast scale to ensure a clear hierarchy that feels like a modern broadsheet.

- **Display (Epilogue, Extra-Bold):** Used for "Big Truths." 3.5rem size with `-0.04em` letter spacing. This font choice is authoritative and unapologetic.
- **Headline (Epilogue, Extra-Bold):** For section starters. Uppercase is permitted for short punchy headlines.
- **Body (Manrope, Medium):** For narrative. Manrope provides a "clean," technical feel that balances the heavy display type.
- **Labels (Manrope, Bold):** Always uppercase with `0.1em` letter spacing for a premium, navigational feel.

---

## 4. Elevation & Tonal Layering
We reject standard drop shadows in favor of **Tonal Stacking**.

### The Layering Principle
Depth is achieved by "stacking" surface tiers. 
- **Level 0:** `surface` (The base)
- **Level 1:** `surface-container-low` (Subtle inset areas)
- **Level 2:** `surface-container-highest` (Prominent cards)

### Ambient Shadows
When a "float" is necessary (e.g., a primary card in a light section):
- **Shadow:** `0 20px 40px -10px rgba(93, 64, 56, 0.08)`
- Use a tinted shadow (`on-surface-variant` color) instead of pure black to maintain a sophisticated, natural light feel.

### The "Ghost Border"
If accessibility requires a container boundary, use the `outline-variant` (`#e7bdb2`) at **15% opacity**. It should be felt, not seen.

---

## 5. Signature Components

### The "Momentum" Button (Primary CTA)
- **Shape:** `rounded-full`
- **Typography:** `label-md`, Uppercase, Bold.
- **Surface:** Gradient from `#2DD4A0` to `#008561`.
- **Motion:** Subtle `shimmer` animation (moving highlight) on hover + `scale: 1.02`.

### High-Contrast Cards
- **Light Mode:** `rounded-2xl`, `surface-container-lowest` background, `shadow-sm`. No borders.
- **Dark Mode (Glass):** `rounded-2xl`, `rgba(255, 255, 255, 0.05)` fill, `backdrop-blur-xl`, `border: 1px solid rgba(255, 255, 255, 0.1)`.

### Lists & Dividers
- **Strict Rule:** No horizontal rules (`<hr>`).
- **Separation:** Use `spacing-8` (2rem) or a background shift to `surface-container-low`.

---

## 6. Motion & Interaction (Framer Motion)
Animation is not an afterthought; it is the "Kinetic" soul of the system.

- **AnimateOnScroll:** 
  - `initial: { opacity: 0, y: 20 }`
  - `whileInView: { opacity: 1, y: 0 }`
  - `transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }` (Custom Quartic Ease)
- **Section Transitions:** As the user scrolls from a Light section to a Dark section, use a CSS `background-color` transition of `0.5s` to create a "lights dimmed" immersive effect.

---

## 7. Do's and Don'ts

### Do
- Use **asymmetric padding** (e.g., more top padding than bottom) to create an editorial, "un-templated" feel.
- Overlap elements. Let a high-scale Display heading bleed into the section below it.
- Use the **Dot Pattern** exclusively on `background` light sections to add "paper" texture.

### Don't
- **Never** use pure grey for shadows; always use a tint of the brand's `on-surface` color.
- **Never** use `rounded-md` or `rounded-lg`. Stick to the extremes: `rounded-2xl` for cards and `rounded-full` for interactive elements.
- **Avoid** centering all text. Use left-aligned "ragged right" typography for a sophisticated editorial look.

---

## 8. Layout: The Breathable Container
- **Max-Width:** `max-w-5xl` (narrative) to `max-w-6xl` (galleries).
- **Gutter:** `px-6` on mobile, `px-12` on desktop.
- **Mobile-First:** Ensure the "Orange Glow" in dark sections does not interfere with text readability on small screens—reduce glow intensity to 3% on mobile.