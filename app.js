// app.js

// DOM Elements
const locationEl = document.getElementById('location');
const networkEl = document.getElementById('network');
const alertEl = document.getElementById('alert');
const sosBtn = document.getElementById('sosButton');

// Global State
let userLocation = null;

// Get Location
function getLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        userLocation = { latitude, longitude };
        locationEl.textContent = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
      },
      (error) => {
        locationEl.textContent = 'Location access denied';
      }
    );
  } else {
    locationEl.textContent = 'Geolocation not supported';
  }
}

// Get Network Info
function checkNetwork() {
  if ('connection' in navigator) {
    const conn = navigator.connection;
    const type = conn.effectiveType;
    const speed = conn.downlink;
    networkEl.textContent = `${type.toUpperCase()} (${speed} Mbps)`;

    if (type === '2g' || speed < 1.5) {
      alertEl.textContent = '⚠️ Weak signal detected! Consider moving to a better zone.';
      alertEl.style.color = 'red';
    } else {
      alertEl.textContent = ' Connection is stable.';
      alertEl.style.color = 'green';
    }
  } else {
    networkEl.textContent = 'Network API not supported';
    alertEl.textContent = 'Cannot determine connection status.';
  }
}

// SOS Button Click Handler
sosBtn.addEventListener('click', () => {
  if (userLocation) {
    alert(`🚨 SOS sent with location: ${userLocation.latitude.toFixed(4)}, ${userLocation.longitude.toFixed(4)}.`);
  } else {
    alert('Unable to send SOS – location not available.');
  }
});

// Auto-check every 30 seconds
function startBackgroundMonitoring() {
  getLocation();
  checkNetwork();
  setInterval(() => {
    getLocation();
    checkNetwork();
  }, 30000); // 30s
}

// Run on Load
window.onload = () => {
  startBackgroundMonitoring();
};
