# Images Needed for Lazmi Portfolio

Place all images in the `public/images/` folder.
Once added, swap each placeholder in the component noted below.

---

## 1. Hero Avatar (inline in heading)

| Field       | Value                                      |
|-------------|--------------------------------------------|
| **File**    | `public/images/lazmi-avatar.jpg`           |
| **Used in** | `src/components/HeroQuickLinks.tsx`        |
| **Size**    | Square, at least **200 × 200 px**          |
| **Notes**   | Displayed as a small circle inline inside the hero heading ("Hello! 🖼 I'm Lazmi"). Should be a clear headshot on a plain or soft background. |

**Code swap** — replace the pink placeholder span:
```tsx
// Before (placeholder):
<span className="inline-block align-middle mx-2 rounded-full bg-pink-200 border-2 border-pink-300" ... />

// After (real photo):
import Image from "next/image";
<Image
  src="/images/lazmi-avatar.jpg"
  alt="Lazmi Chowdhury"
  width={80}
  height={80}
  className="inline-block align-middle mx-2 rounded-full object-cover border-2 border-pink-300"
  style={{ width: "clamp(3rem,7vw,5rem)", height: "clamp(3rem,7vw,5rem)" }}
/>
```

---

## 2. About / Capabilities Section Photo

| Field       | Value                                          |
|-------------|------------------------------------------------|
| **File**    | `public/images/lazmi-photo.jpg`                |
| **Used in** | `src/components/Capabilities.tsx`              |
| **Size**    | Portrait, at least **600 × 800 px**            |
| **Notes**   | Shown inside the yellow 4-lobe organic blob on the left side of the "Hey! That's me." section. Full or 3/4 body shot works best. The subject should be positioned centre-left of the frame so the face is visible above the spinning badge. |

**Code swap** — replace the placeholder div inside `<YellowBlob>`:
```tsx
// Before (placeholder):
<div className="w-full h-full bg-[#f5ca38] flex items-end justify-center">
  {/* placeholder content */}
</div>

// After (real photo):
import Image from "next/image";
<Image
  src="/images/lazmi-photo.jpg"
  alt="Lazmi Chowdhury"
  fill
  className="object-cover object-top"
  priority
/>
```

---

## 3. Project Previews — Selected Works

Each project card in the "Selected Works" section currently shows a coloured
placeholder. Replace each with a real project screenshot or mockup.

| # | Field       | Value                                                  |
|---|-------------|--------------------------------------------------------|
| 1 | **File**    | `public/images/project-nova-studio.jpg`                |
|   | **Used in** | `src/components/SelectedWorks.tsx` — project id `1`    |
|   | **Size**    | Landscape, at least **1200 × 700 px** (16:9)           |
|   | **Notes**   | Brand identity / logo showcase for Nova Studio         |
| 2 | **File**    | `public/images/project-ember-co.jpg`                   |
|   | **Used in** | `src/components/SelectedWorks.tsx` — project id `2`    |
|   | **Size**    | Landscape, at least **1200 × 700 px** (16:9)           |
|   | **Notes**   | E-commerce redesign screens for Ember Co.              |
| 3 | **File**    | `public/images/project-pulse-analytics.jpg`            |
|   | **Used in** | `src/components/SelectedWorks.tsx` — project id `3`    |
|   | **Size**    | Landscape, at least **1200 × 700 px** (16:9)           |
|   | **Notes**   | Dashboard UI screens for Pulse Analytics               |

**Code swap** — in `src/lib/data.ts` add an `image` path per project, then in `SelectedWorks.tsx` swap the coloured placeholder div:
```tsx
// Before:
<div className={`${project.color} rounded-r-[2rem] ...`}>
  {/* placeholder */}
</div>

// After:
<div className="relative rounded-r-[2rem] overflow-hidden min-h-[280px] lg:min-h-full">
  <Image
    src={project.image}           // e.g. "/images/project-nova-studio.jpg"
    alt={project.title}
    fill
    className="object-cover"
  />
</div>
```

---

## Summary Checklist

- [ ] `public/images/lazmi-avatar.jpg` — square headshot for hero
- [ ] `public/images/lazmi-photo.jpg` — portrait for capabilities blob
- [ ] `public/images/project-nova-studio.jpg` — project 1 mockup
- [ ] `public/images/project-ember-co.jpg` — project 2 mockup
- [ ] `public/images/project-pulse-analytics.jpg` — project 3 mockup
