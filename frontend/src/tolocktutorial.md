Here’s a clean, reusable **`.locked-content`** CSS class that creates the same “blurred, faded, non-interactive, locked overlay” effect you already used — but portable so you can drop it anywhere.

### ✅ **Locked Content Wrapper + Overlay**

Add this CSS:

```css
/* Wrapper that blurs and disables interactions */
.locked-content {
  position: relative;
  filter: blur(2px);
  opacity: 0.5;
  pointer-events: none; /* prevent interaction */
  user-select: none;
}

/* Overlay with big lock in the center */
.locked-content::after {
  content: "\f512"; /* Ionicons lockClosed equivalent if using custom fonts */
  font-family: "Ionicons";
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.8);
  pointer-events: none;
}
```

### ✅ **If you want to use your actual `<IonIcon>` instead of CSS-generated content**

Use this variant:

```css
.locked-content {
  position: relative;
  opacity: 0.5;
  filter: blur(2px);
  pointer-events: none;
  user-select: none;
}

.locked-content-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}
```

Then wrap your content like:

```jsx
<div className="locked-content">
    <div className="locked-content-overlay">
        <IonIcon icon={lockClosed} className="text-9xl text-white" />
    </div>
</div>
```

### ✅ Tailwind-Only Version (Copy-Paste)

If you prefer a utility class you can reuse easily:

```jsx
<div className="relative opacity-50 blur-sm pointer-events-none select-none locked">
    {/* your content */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
        <IonIcon icon={lockClosed} className="text-9xl text-white" />
    </div>
</div>
```

And optionally define:

```css
.locked {
  position: relative;
}
```

---

If you want, I can also make:

✅ A React component `<LockedSection>`
✅ A Tailwind plugin for `.locked`
✅ Variants like “partially locked”, “hover to unlock”, “password unlock”, etc.

Just say what style you want!
