# 🎯 Basic Trails

> A simple interactive demo that creates animated trailing circles following the user's mouse cursor using GSAP.

---

## 🖼 Preview

![Mouse Trail Demo](./media/basic-trails-demo.gif)

---

## ⚙️ Getting Started

This project is written in plain HTML, CSS, and JavaScript, and uses the GSAP library from a CDN.

### Run it locally

1. Clone or download the repo:
```bash
git clone https://github.com/yourname/basic-trails.git
```

2. Open `Trails.html` in your browser.

> No build tools or installation required.

---

## ✨ Features

- Creates glowing circular trails that follow the cursor
- Trails shrink and fade over time using GSAP
- Responsive and full-screen layout
- Pure front-end — no frameworks or build tools required

---

## 💡 Dev Notes

- Uses GSAP 3.10.4 via CDN
- `.trail` elements are dynamically created and destroyed for performance
- Trail effect uses `mix-blend-mode: screen` for an additive light-blend feel
- The cursor is hidden to highlight the animated trail

---

## 🧪 Known Issues

- May create performance issues if mouse is moved too rapidly for long periods (many DOM elements being created/deleted)

---

## 📂 Folder Structure

```bash
basic-trails/
├── index.js         # Main script for trail creation
├── style.css        # Styling for background and trail elements
├── Trails.html      # Entry point
└── media/           
```

---

## 📜 License

MIT — free to use, remix, and share.

---

## 🙋‍♀️ Author

Made by [Suzy Dev](https://github.com/suzubu) — built for fun, demo, or inspiration!
