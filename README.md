# 📍 SafeRoute Lite

**Smart Connectivity & Safety Assistant for Travelers**  
A lightweight web app that monitors signal strength and location in real-time to keep travelers connected and safe, even in remote areas.

---

## Tech Stack
- HTML, CSS, Vanilla JavaScript
- Web APIs:  
  - **Geolocation API**  
  - **Network Information API**  
  - **Background Activity (simulated with `setInterval`)**

---

## Key Features

| Feature | Description | API |
|--------|-------------|-----|
| 📍 Real-time Location | Detects current user coordinates | Geolocation API |
| 📶 Signal Monitor | Checks internet quality (e.g., 2G/4G) | Network Info API |
| 🚨 Auto Alert | Alerts on weak network zones | Background Logic |
| 🆘 SOS Button | Sends manual alert with current coordinates | Geolocation API |

---

##  How It Works

1. On page load, user’s location and network strength are fetched.
2. Every 30 seconds, background checks run to:
   - Re-evaluate signal status.
   - Trigger alerts when connection is poor.
3. A red warning is shown when signal is weak.
4. SOS button allows users to send coordinates manually.

---

##  Folder Structure

safroute-lite/
├── index.html 
├── style.css 
├── app.js 
├── README.md 