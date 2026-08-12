<div align="center">

# 🌤️ Weather App

**A sleek weather app built with React + Vite, styled with Material UI.**
Search any city and get real-time conditions, powered by OpenWeatherMap.

[**🚀 Live Demo**](https://arpanmallick23.github.io/Weather_App/) · [Report Bug](https://github.com/arpanmallick23/Weather_App/issues) · [Request Feature](https://github.com/arpanmallick23/Weather_App/issues)

</div>

<br>

<div align="center">
  <img src="./src/assets/hero.png" alt="Weather App preview" width="600">
</div>

<br>

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Build for Production](#️-build-for-production)
- [Deployment](#-deployment-github-actions--github-pages)
- [Project Structure](#-project-structure)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

## ✨ Features

- 🔍 **Instant search** — type a city, get live weather in seconds
- 🌡️ **Full details** — temperature, min/max, "feels like," and humidity
- 🖼️ **Dynamic theming** — background image and icon change to match conditions (clear, rain, snow, thunderstorm, and more)
- ⚡ **Fast & modern** — built on Vite with instant HMR during development

## 📦 Tech Stack

| Layer | Tech |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 8](https://vite.dev/) |
| UI library | [Material UI (MUI)](https://mui.com/) |
| Data | [OpenWeatherMap API](https://openweathermap.org/api) |
| Deployment | GitHub Actions → GitHub Pages |

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/arpanmallick23/Weather_App.git
cd Weather_App

# 2. Install dependencies
npm install

# 3. Set up your API key
cp .env.example .env
```

Sign up for a free key at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) (activation can take up to a couple of hours), then add it to `.env`:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> ⚠️ `.env` is git-ignored — never commit it.

```bash
# 4. Run the dev server
npm run dev
```

Open `http://localhost:5173` in your browser. 🎉

## 🏗️ Build for Production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## 🌐 Deployment (GitHub Actions → GitHub Pages)

<details>
<summary><strong>Click to expand deployment steps</strong></summary>

<br>

1. **Add your API key as a repo secret**
   `Settings → Secrets and variables → Actions → New repository secret`
   | Name | Value |
   |---|---|
   | `VITE_WEATHER_API_KEY` | your OpenWeatherMap key |

2. **Reference it in your workflow build step** (`.github/workflows/*.yml`)
   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_WEATHER_API_KEY: ${{ secrets.VITE_WEATHER_API_KEY }}
   ```

3. **Set the correct base path** in `vite.config.js`
   ```js
   base: '/Weather_App/',
   ```

4. **Push to `main`** — the workflow builds and deploys automatically. Check the **Actions** tab for a green checkmark, then hard refresh the live site.

</details>

## 📁 Project Structure

```
Weather_App/
├── .github/workflows/   # CI/CD deploy workflow
├── public/               # Static assets (favicon, icons)
├── src/
│   ├── assets/            # Images
│   ├── App.jsx            # Root component
│   ├── WeatherApp.jsx     # Main app logic/state
│   ├── SearchBox.jsx      # City search input + API call
│   ├── InfoBox.jsx        # Weather display card
│   └── main.jsx           # Entry point
├── .env.example           # Template for required env vars
├── package.json
└── vite.config.js
```

## 🐛 Troubleshooting

| Issue | Likely Cause |
|---|---|
| "No such place exists!" for every search | `.env` missing, wrong variable name, or dev server not restarted after adding it |
| API key `undefined` in console | `.env` not in project root, or missing `VITE_` prefix |
| Works locally but not on GitHub Pages | `VITE_WEATHER_API_KEY` secret not set, or not passed to the build step in the workflow |
| Blank page / broken assets on GitHub Pages | `base` path in `vite.config.js` missing or incorrect |
| Key seems invalid | New OpenWeatherMap keys can take a few hours to activate |

## 📄 License

Distributed under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **[Arpan](https://github.com/arpanmallick23)**

</div>
