# 💧 AquaCampus V2

> **Next-Generation Smart Water Quality Monitoring, Campus Hydro-Map & AR Navigation System**  
> 🌐 **Live Netlify App:** [https://aquacampus-lpu-v2.netlify.app](https://aquacampus-lpu-v2.netlify.app)

AquaCampus V2 is an intelligent IoT campus water telemetry and spatial navigation platform designed for Lovely Professional University (LPU). Featuring a dark glassmorphic command center aesthetic inspired by modern dashboard design, it delivers real-time sensor analytics, interactive 3D and live campus mapping, augmented reality spatial navigation, nearby water point finder, and student hydration tracking.

---

## ✨ Core Features

*   📊 **Hydro-Grid Command Center:** Real-time monitoring of Total Dissolved Solids (TDS), purity index, pH levels, turbidity, temperature, and dispenser availability across campus quads.
*   🗺️ **Interactive Campus Hydro-Map:** High-resolution campus map of LPU Phagwara with real-time location tracking, North reset, dark/light tile modes, and dual 2D/3D perspective toggle.
*   💻 **Block 34 CSE Even-Floor Dispenser Locator:** Tailored for LPU campus infrastructure where academic blocks host water points on even floors (2nd, 4th, 6th, and 8th floor switcher).
*   🧭 **AR Spatial Navigation:** Browser-based augmented reality compass HUD with directional radar, distance telemetry, and step navigation to the nearest chilled water station.
*   🚶‍♂️ **Nearby Stations & Walk Simulation:** Real-time distance calculation, live walk simulation with animated step counter and calorie burn estimator.
*   ⚠️ **Campus Alerts & Disruption Log:** Instant notifications on filter replacements, UV lamp servicing, and line maintenance.
*   💧 **Student Profile & Hydration Tracker:** Daily hydration goals, quick-intake logging, hydration streak calculator, and analytics.
*   📱 **100% Mobile & Tablet Compatible:** Fully responsive, touch-friendly UI optimized across smartphones (375px–480px), tablets (768px), and desktop displays.

---

## 🛠️ Tech Stack

*   **Frontend:** Semantic HTML5, Vanilla CSS3 (Custom Glassmorphism, HSL Design Tokens, Flex/Grid Layouts), Vanilla JavaScript (ES6+)
*   **Mapping:** Leaflet.js with interactive multi-layer OpenStreetMap tile services & CSS 3D matrix transformations
*   **Motion & Animation:** Anime.js micro-animations and smooth cubic-bezier transitions
*   **Icons & Typography:** SVG Vector Icons, Plus Jakarta Sans, Barlow Condensed, JetBrains Mono
*   **Deployment:** Netlify (`aquacampus-lpu-v2`)

---

## 🚀 Local Development

To run AquaCampus V2 locally:

```bash
# Clone the repository
git clone https://github.com/Thatsrijan/AquaCampus-V2.git

# Navigate to project directory
cd AquaCampus-V2

# Start a local web server (Python 3)
python -m http.server 8080
```

Open `http://localhost:8080` in your web browser.

---

## 📄 License
MIT License. Developed for Lovely Professional University (LPU) campus community.
