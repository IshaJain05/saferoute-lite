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

1. On page load, the user’s location and network strength are fetched.
2. Every 30 seconds, background checks run to:
   - Re-evaluate signal status.
   - Trigger alerts when the connection is poor.
3. A red warning is shown when the signal is weak.
4. The SOS button allows users to send coordinates manually. (The SOS button is shown here as a reference to the alert being sent to the selected users such as the travel agent, or anyone in the emergency contact.)

SafeRoute Lite is not just a web app — it's a safety companion for travelers. 
By combining modern web APIs with practical features, it alerts users about low connectivity, suggests nearest network-safe zones, and ensures help is never out of reach, even in the background.

---

##  Folder Structure

safroute-lite/
├── index.html 
├── style.css 
├── app.js 
├── README.md 
