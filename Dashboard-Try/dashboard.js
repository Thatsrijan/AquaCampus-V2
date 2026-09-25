// AquaCampus Command Center - Complete Multi-View Interactive Engine
// Full implementation of: LPU Campus 3D Hydro-Map, Real OSM Leaflet Map, AR View, Nearby Stations, Alerts Feed, Profile, & Report Modal

const CAMPUS_STATIONS = [
  {
    id: 'LPU-CSE-2F',
    name: 'Block 34 CSE • 2nd Floor (IoT & AI)',
    short: 'CSE 2F',
    building: 'Block 34 (School of CSE)',
    floor: 2,
    quad: 'North-East Academic',
    block: 'CSE Building (Block 34)',
    lat: 31.2555,
    lng: 75.7055,
    distance: 65,
    walkTime: '1 min',
    level: 98,
    purity: 99.4,
    tds: 36,
    temp: '9.8°C',
    ph: 7.42,
    flow: '2.5 L/min',
    status: 'pristine',
    statusLabel: 'Pristine 99%+',
    dispensed: '3,840 L',
    filterHealth: '96%',
    uvStatus: 'Active (100%)',
    lastSanitized: '18m ago',
    timelineStart: 1,
    timelineDuration: 20,
    timelineType: 'lime',
    timelineLabel: 'Active IoT Lab Dispenser',
    isFavorite: true,
    chilled: true,
    bottleFiller: true
  },
  {
    id: 'LPU-CSE-4F',
    name: 'Block 34 CSE • 4th Floor (Coding Concourse)',
    short: 'CSE 4F',
    building: 'Block 34 (School of CSE)',
    floor: 4,
    quad: 'North-East Academic',
    block: 'CSE Building (Block 34)',
    lat: 31.2556,
    lng: 75.7056,
    distance: 85,
    walkTime: '2 min',
    level: 94,
    purity: 98.8,
    tds: 39,
    temp: '10.2°C',
    ph: 7.38,
    flow: '2.4 L/min',
    status: 'pristine',
    statusLabel: 'Pristine 98%+',
    dispensed: '4,120 L',
    filterHealth: '92%',
    uvStatus: 'Active (100%)',
    lastSanitized: '35m ago',
    timelineStart: 3,
    timelineDuration: 18,
    timelineType: 'lime',
    timelineLabel: 'Coding Concourse Chill Flow',
    isFavorite: true,
    chilled: true,
    bottleFiller: true
  },
  {
    id: 'LPU-CSE-6F',
    name: 'Block 34 CSE • 6th Floor (Cloud & Cyber)',
    short: 'CSE 6F',
    building: 'Block 34 (School of CSE)',
    floor: 6,
    quad: 'North-East Academic',
    block: 'CSE Building (Block 34)',
    lat: 31.2557,
    lng: 75.7057,
    distance: 110,
    walkTime: '2 min',
    level: 96,
    purity: 99.2,
    tds: 35,
    temp: '9.6°C',
    ph: 7.45,
    flow: '2.6 L/min',
    status: 'pristine',
    statusLabel: 'Pristine 99%+',
    dispensed: '2,980 L',
    filterHealth: '95%',
    uvStatus: 'Active (100%)',
    lastSanitized: '12m ago',
    timelineStart: 2,
    timelineDuration: 19,
    timelineType: 'lime',
    timelineLabel: 'Cyber Pods Dispensing',
    isFavorite: false,
    chilled: true,
    bottleFiller: true
  },
  {
    id: 'LPU-CSE-8F',
    name: 'Block 34 CSE • 8th Floor (Dean & Research)',
    short: 'CSE 8F',
    building: 'Block 34 (School of CSE)',
    floor: 8,
    quad: 'North-East Academic',
    block: 'CSE Building (Block 34)',
    lat: 31.2558,
    lng: 75.7058,
    distance: 140,
    walkTime: '3 min',
    level: 97,
    purity: 99.6,
    tds: 32,
    temp: '9.2°C',
    ph: 7.48,
    flow: '2.8 L/min',
    status: 'pristine',
    statusLabel: 'Pristine 99%+',
    dispensed: '1,890 L',
    filterHealth: '98%',
    uvStatus: 'Active (100%)',
    lastSanitized: '8m ago',
    timelineStart: 4,
    timelineDuration: 17,
    timelineType: 'lime',
    timelineLabel: 'Research Wing Executive Point',
    isFavorite: false,
    chilled: true,
    bottleFiller: true
  },
  {
    id: 'LPU-LIB-2F',
    name: 'Central Library Block 30 • 2nd Floor',
    short: 'LIB 2F',
    building: 'Block 30 (Central Library)',
    floor: 2,
    quad: 'North-West Academic',
    block: 'Central Library (Block 30)',
    lat: 31.2542,
    lng: 75.7025,
    distance: 180,
    walkTime: '3 min',
    level: 96,
    purity: 99.1,
    tds: 37,
    temp: '10.0°C',
    ph: 7.40,
    flow: '2.4 L/min',
    status: 'pristine',
    statusLabel: 'Pristine 98%+',
    dispensed: '5,210 L',
    filterHealth: '91%',
    uvStatus: 'Active (100%)',
    lastSanitized: '22m ago',
    timelineStart: 2,
    timelineDuration: 20,
    timelineType: 'lime',
    timelineLabel: 'Silent Reading Floor Refill',
    isFavorite: true,
    chilled: true,
    bottleFiller: true
  },
  {
    id: 'LPU-MALL-2F',
    name: 'UniMall Student Hub • 2nd Floor Food Plaza',
    short: 'MALL 2F',
    building: 'UniMall Commercial Complex',
    floor: 2,
    quad: 'South-West Hub',
    block: 'UniMall',
    lat: 31.2518,
    lng: 75.7022,
    distance: 290,
    walkTime: '4 min',
    level: 78,
    purity: 98.1,
    tds: 44,
    temp: '10.8°C',
    ph: 7.32,
    flow: '2.8 L/min',
    status: 'pristine',
    statusLabel: 'Pristine 98%+',
    dispensed: '6,450 L',
    filterHealth: '84%',
    uvStatus: 'Active (100%)',
    lastSanitized: '15m ago',
    timelineStart: 6,
    timelineDuration: 16,
    timelineType: 'lime',
    timelineLabel: 'High Peak Dining Rush',
    isFavorite: false,
    chilled: true,
    bottleFiller: true
  },
  {
    id: 'LPU-MSB-2F',
    name: 'Block 38 Mittal School of Business • 2nd Floor',
    short: 'MSB 2F',
    building: 'Block 38 (MSB)',
    floor: 2,
    quad: 'South-East Academic',
    block: 'Mittal School of Business',
    lat: 31.2515,
    lng: 75.7060,
    distance: 260,
    walkTime: '4 min',
    level: 91,
    purity: 98.4,
    tds: 41,
    temp: '10.5°C',
    ph: 7.36,
    flow: '2.1 L/min',
    status: 'pristine',
    statusLabel: 'Pristine 98%+',
    dispensed: '3,120 L',
    filterHealth: '89%',
    uvStatus: 'Active (100%)',
    lastSanitized: '40m ago',
    timelineStart: 5,
    timelineDuration: 15,
    timelineType: 'lime',
    timelineLabel: 'Executive MBA Foyer Station',
    isFavorite: false,
    chilled: true,
    bottleFiller: true
  },
  {
    id: 'LPU-ENG-2F',
    name: 'Block 26 Polytechnic & Mech • 2nd Floor',
    short: 'ENG 2F',
    building: 'Block 26 (Polytechnic)',
    floor: 2,
    quad: 'West Academic',
    block: 'Polytechnic Engineering',
    lat: 31.2532,
    lng: 75.7018,
    distance: 220,
    walkTime: '3 min',
    level: 68,
    purity: 86.4,
    tds: 112,
    temp: '16.2°C',
    ph: 7.02,
    flow: '1.5 L/min',
    status: 'warning',
    statusLabel: 'Filter Flush Due',
    dispensed: '2,940 L',
    filterHealth: '38%',
    uvStatus: 'Servicing Stage 2',
    lastSanitized: '3h ago',
    timelineStart: 10,
    timelineDuration: 8,
    timelineType: 'amber',
    timelineLabel: 'Sediment Filter Flush Due',
    isFavorite: false,
    chilled: false,
    bottleFiller: true
  },
  {
    id: 'LPU-SPORT-2F',
    name: 'Indoor Sports Stadium • 2nd Floor Deck',
    short: 'SPORT 2F',
    building: 'Shanti Devi Mittal Sports Complex',
    floor: 2,
    quad: 'South Athletics',
    block: 'Sports Stadium & Pool',
    lat: 31.2505,
    lng: 75.7038,
    distance: 380,
    walkTime: '5 min',
    level: 94,
    purity: 99.3,
    tds: 34,
    temp: '7.4°C',
    ph: 7.50,
    flow: '3.2 L/min',
    status: 'pristine',
    statusLabel: 'Pristine 99%+',
    dispensed: '4,890 L',
    filterHealth: '97%',
    uvStatus: 'Active (100%)',
    lastSanitized: '10m ago',
    timelineStart: 4,
    timelineDuration: 18,
    timelineType: 'lime',
    timelineLabel: 'Athletic Hydration Chill Deck',
    isFavorite: false,
    chilled: true,
    bottleFiller: true
  },
  {
    id: 'LPU-UNIPOLIS',
    name: 'Baldev Raj Mittal Unipolis • Ground Promenade',
    short: 'UNIPOLIS',
    building: 'Unipolis Amphitheater',
    floor: 0,
    quad: 'Central Campus',
    block: 'Unipolis Open Stage',
    lat: 31.2530,
    lng: 75.7042,
    distance: 120,
    walkTime: '2 min',
    level: 48,
    purity: 81.2,
    tds: 135,
    temp: '18.9°C',
    ph: 6.88,
    flow: '1.2 L/min',
    status: 'warning',
    statusLabel: 'Maintenance Active',
    dispensed: '7,120 L',
    filterHealth: '24%',
    uvStatus: 'Sensor Inspection',
    lastSanitized: '4h ago',
    timelineStart: 13,
    timelineDuration: 7,
    timelineType: 'amber',
    timelineLabel: 'High Traffic Event Scheduled Flush',
    isFavorite: false,
    chilled: false,
    bottleFiller: false
  }
];

// Initial Campus Alerts for LPU Landmarks
let campusAlerts = [
  {
    id: 'ALT-401',
    category: 'critical',
    title: 'Block 26 Polytechnic 2F - Elevated TDS Anomaly',
    station: 'Block 26 Polytechnic & Mech • 2nd Floor',
    time: '8m ago',
    desc: 'LoRa node detected TDS spike to 112 ppm (Safe threshold: 80 ppm). Sediment pre-filter bypass valve flagged for inspection.',
    status: 'Active'
  },
  {
    id: 'ALT-402',
    category: 'maintenance',
    title: 'Unipolis Open Stage - Event Cycle Scheduled Flush',
    station: 'Baldev Raj Mittal Unipolis • Ground Promenade',
    time: '35m ago',
    desc: 'Heavy footfall detected during cultural fest rehearsals. Automatic CIP sanitization cycle scheduled at 23:00 IST.',
    status: 'Scheduled'
  },
  {
    id: 'ALT-403',
    category: 'community',
    title: 'Student Sip Review: Block 34 CSE 4th Floor',
    station: 'Block 34 CSE • 4th Floor (Coding Concourse)',
    time: '1h 10m ago',
    desc: '“Fountain temperature is crisp (10.2°C). Dual bottle filler sensors calibrated and quick to dispense.” — Srijan G. (B.Tech CSE)',
    status: 'Verified'
  },
  {
    id: 'ALT-404',
    category: 'maintenance',
    title: 'Central Library Block 30 2F - UV-C Germicidal Cycle Complete',
    station: 'Central Library Block 30 • 2nd Floor',
    time: '2h 15m ago',
    desc: 'Routine 254nm quartz chamber sterilization executed. Zero microbial load confirmed across 200L flow.',
    status: 'Resolved'
  }
];

// Hydration Tracker State
let userHydration = {
  current: 1850,
  goal: 2400,
  refillsToday: 4,
  plasticSavedKg: 4.2
};

// 50 LoRa Mesh Sensor Nodes across LPU
const SENSOR_NODES = Array.from({ length: 50 }, (_, i) => {
  const id = i + 1;
  const isWarning = [14, 28, 45].includes(id);
  const isAlert = [32].includes(id);
  const isIdle = id % 12 === 0;

  let state = 'pristine';
  if (isAlert) state = 'alert';
  else if (isWarning) state = 'warning';
  else if (isIdle) state = 'idle';

  return {
    id: `LPU-NODE-${String(id).padStart(2, '0')}`,
    station: CAMPUS_STATIONS[i % CAMPUS_STATIONS.length].name,
    state: state,
    battery: `${Math.floor(82 + Math.random() * 17)}%`,
    signal: `-${Math.floor(65 + Math.random() * 25)} dBm`
  };
});

// Campus 3D Engine State
let map3dState = {
  pitch: 46,      // rotateX in deg (46 in 3D, 0 in 2D)
  yaw: -14,       // rotateZ in deg (-14 default perspective, 0 North)
  zoom: 0.92,     // scale (0.65 to 1.6)
  x: 0,           // translateX in px
  y: 0,           // translateY in px
  is3D: true
};

// Walking Navigation State
let isWalkingNavActive = false;
let navigatingStation = null;
let activeRouteAnimation = null;

// Route Coordinates from User Location (560, 440 on LPU Central Lawns) to each 3D Station Marker
const STATION_ROUTES = {
  'LPU-CSE-2F': 'M 560 440 C 510 390, 480 340, 520 280 C 560 220, 600 170, 640 110',
  'LPU-CSE-4F': 'M 560 440 C 510 390, 500 320, 550 250 C 600 190, 650 160, 690 140',
  'LPU-CSE-6F': 'M 560 440 C 510 390, 520 300, 580 220 C 640 160, 700 120, 730 90',
  'LPU-CSE-8F': 'M 560 440 C 510 390, 540 280, 620 200 C 700 140, 740 135, 780 125',
  'LPU-LIB-2F': 'M 560 440 C 480 380, 420 310, 340 240 C 260 180, 210 160, 180 135',
  'LPU-MALL-2F': 'M 560 440 C 470 440, 350 460, 260 470 C 210 475, 190 480, 190 495',
  'LPU-MSB-2F': 'M 560 440 C 600 450, 650 470, 710 505',
  'LPU-ENG-2F': 'M 560 440 C 450 380, 360 340, 260 310 C 200 295, 170 290, 160 290',
  'LPU-SPORT-2F': 'M 560 440 C 520 480, 480 520, 440 550 C 435 558, 430 562, 430 565',
  'LPU-UNIPOLIS': 'M 560 440 C 510 410, 470 370, 440 330 C 430 315, 425 305, 420 300'
};

// Current Global Navigation State
let currentView = 'grid';
let activeDrawerStation = null;
let activeMapStation = CAMPUS_STATIONS[0];
let activeNearbyFilter = 'all';
let activeAlertsFilter = 'all';
let reportSelectedStation = CAMPUS_STATIONS[0];
let reportRating = 5;

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initGridComponents();
  initMapComponent();
  initArComponent();
  initNearbyComponent();
  initAlertsComponent();
  initProfileComponent();
  initReportModal();
  initDrawer();
  initTooltips();
  startSimulation();
});

// ========================================================
// 1. NAVIGATION & VIEW SWITCHER (WITH ANIME.JS)
// ========================================================
function initNavigation() {
  // Rail buttons
  document.querySelectorAll('.rail-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      switchView(view);
    });
  });

  // Top segmented tabs
  document.querySelectorAll('.tab-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      switchView(view);
    });
  });

  // User Profile Pill in Header
  document.getElementById('headerProfilePill')?.addEventListener('click', () => {
    switchView('profile');
    showToast('Viewing Student Profile & Hydration');
  });

  // Action Plus Button in Rail -> Open Report Modal
  document.getElementById('openReportModalBtn')?.addEventListener('click', () => {
    openReportModal();
  });
}

function switchView(viewName) {
  currentView = viewName;

  // Update panels
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active-view');
  });
  const targetPanel = document.getElementById(`view-${viewName}`);
  if (targetPanel) {
    targetPanel.classList.add('active-view');

    // Smooth Anime.js staggered entrance
    if (typeof anime !== 'undefined') {
      anime({
        targets: targetPanel.querySelectorAll('.data-card, .map-card-wrapper, .station-inspect-card, .ar-viewport-card, .nearby-card, .alert-card, .profile-card-left, .hydration-card'),
        translateY: [16, 0],
        opacity: [0, 1],
        delay: anime.stagger(50),
        duration: 400,
        easing: 'easeOutCubic'
      });
    }
  }

  // Update rail active states
  document.querySelectorAll('.rail-btn[data-view]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
  });

  // Update top tabs active states
  document.querySelectorAll('.tab-btn[data-view]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
  });

  // View specific refreshes
  if (viewName === 'nearby') renderNearbyList();
  if (viewName === 'alerts') renderAlertsList();
  if (viewName === 'map') {
    if (!isWalkingNavActive) {
      selectMapStation(activeMapStation.id, false);
    }
    const isLeaflet = document.getElementById('btnModeLeaflet')?.classList.contains('active');
    if (isLeaflet) {
      initLeafletMap();
      setTimeout(() => leafletMapInstance?.invalidateSize(), 150);
    } else {
      applyMapTransform();
    }
  }

  showToast(`Switched view to ${formatViewName(viewName)}`);
}

function formatViewName(v) {
  const map = {
    grid: 'Hydro-Grid Command Center',
    map: 'LPU Campus Map',
    ar: 'AR Spatial Navigation',
    nearby: 'Nearby Water Stations',
    alerts: 'Live Campus Alerts',
    profile: 'Student Profile & Hydration'
  };
  return map[v] || v;
}

// ========================================================
// 2. VIEW 1: HYDRO-GRID LOGIC (WITH ANIME.JS)
// ========================================================
function initGridComponents() {
  renderCapsuleChart();
  renderTimeline();
  renderSensorGrid();

  // Filter dropdowns
  document.getElementById('quadSelect')?.addEventListener('change', (e) => {
    renderCapsuleChart();
    renderTimeline();
    showToast(`Quad filter: ${e.target.value}`);
  });
  document.getElementById('blockSelect')?.addEventListener('change', (e) => {
    renderCapsuleChart();
    renderTimeline();
    showToast(`Block filter: ${e.target.value}`);
  });
  document.getElementById('statusSelect')?.addEventListener('change', (e) => {
    renderCapsuleChart();
    renderTimeline();
    showToast(`Status filter: ${e.target.value}`);
  });

  // Search input in header
  document.getElementById('stationSearchInput')?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    if (!term) {
      renderCapsuleChart();
      renderTimeline();
      return;
    }
    const cols = document.querySelectorAll('.capsule-column');
    cols.forEach((col, i) => {
      const st = CAMPUS_STATIONS[i];
      if (st && (st.name.toLowerCase().includes(term) || st.short.toLowerCase().includes(term))) {
        col.style.opacity = '1';
        col.style.transform = 'scale(1.05)';
      } else {
        col.style.opacity = '0.25';
        col.style.transform = 'scale(0.95)';
      }
    });
  });
}

function renderCapsuleChart() {
  const container = document.getElementById('capsuleGrid');
  if (!container) return;

  container.innerHTML = '';
  CAMPUS_STATIONS.forEach(station => {
    const isAmber = station.status === 'warning';
    const col = document.createElement('button');
    col.className = 'capsule-column';
    col.type = 'button';
    col.title = `${station.name} (${station.level}% Reservoir Capacity)`;

    col.innerHTML = `
      <div class="upper-pill">
        <div class="upper-pill-fill ${isAmber ? 'amber-fill' : ''}" style="height: ${station.level}%;"></div>
        <span class="upper-pill-val">${station.level}%</span>
      </div>
      <div class="capsule-connector">
        <span class="connector-dot ${isAmber ? 'amber-dot' : ''}"></span>
      </div>
      <div class="lower-pill ${isAmber ? 'amber-lower' : ''}">
        <span class="lower-pill-val">${Math.round(station.purity)}</span>
        <span class="lower-pill-lbl">PURITY</span>
      </div>
      <span class="station-col-lbl">${station.short}</span>
    `;

    col.addEventListener('click', () => openStationDrawer(station));
    container.appendChild(col);
  });

  if (typeof anime !== 'undefined') {
    anime({
      targets: '.capsule-column',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(40),
      duration: 500,
      easing: 'easeOutBack'
    });
  }
}

function renderTimeline() {
  const container = document.getElementById('timelineRows');
  if (!container) return;

  container.innerHTML = '';
  CAMPUS_STATIONS.forEach(station => {
    const row = document.createElement('div');
    row.className = 'timeline-row';
    const startPct = (station.timelineStart / 30) * 100;
    const durPct = Math.min((station.timelineDuration / 30) * 100, 100 - startPct);

    let capsuleClass = 'lime-capsule';
    if (station.timelineType === 'amber') capsuleClass = 'amber-capsule';
    if (station.timelineType === 'standby') capsuleClass = 'standby-capsule';

    row.innerHTML = `
      <span class="row-station-tag">${station.short}</span>
      <div class="timeline-track">
        <div class="schedule-capsule ${capsuleClass}" style="left: ${startPct}%; width: ${durPct}%;">
          <div class="capsule-content">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            <span>${station.timelineLabel}</span>
          </div>
          <span class="capsule-days">${station.timelineDuration}D</span>
        </div>
      </div>
    `;

    row.addEventListener('click', () => openStationDrawer(station));
    container.appendChild(row);
  });
}

function renderSensorGrid() {
  const container = document.getElementById('sensorGrid');
  if (!container) return;

  container.innerHTML = '';
  const tooltip = document.getElementById('sensorTooltip');

  SENSOR_NODES.forEach(node => {
    const dot = document.createElement('button');
    dot.className = `sensor-node ${node.state}`;
    dot.type = 'button';
    dot.setAttribute('aria-label', `${node.id}: ${node.station}`);

    dot.addEventListener('mouseenter', (e) => {
      if (!tooltip) return;
      tooltip.innerHTML = `
        <strong>${node.id} • ${node.state.toUpperCase()}</strong>
        <div>${node.station}</div>
        <div style="color: #8E959E; font-size: 10px; margin-top: 3px;">
          Battery: ${node.battery} | Signal: ${node.signal}
        </div>
      `;
      tooltip.style.display = 'block';
      positionTooltip(e, tooltip);
    });

    dot.addEventListener('mousemove', (e) => positionTooltip(e, tooltip));
    dot.addEventListener('mouseleave', () => { if (tooltip) tooltip.style.display = 'none'; });
    dot.addEventListener('click', () => {
      const match = CAMPUS_STATIONS.find(s => s.name === node.station) || CAMPUS_STATIONS[0];
      openStationDrawer(match);
    });

    container.appendChild(dot);
  });
}

// ========================================================
// 3. VIEW 2: LPU 3D HYDRO-MAP & REAL OSM LEAFLET ENGINE
// ========================================================
let leafletMapInstance = null;

function initLeafletMap() {
  if (leafletMapInstance || typeof L === 'undefined') return;
  const container = document.getElementById('realLpuLeafletMap');
  if (!container) return;

  try {
    // Center at Lovely Professional University (LPU), Phagwara, Punjab
    const lpuCenter = [31.2536, 75.7037];
    leafletMapInstance = L.map('realLpuLeafletMap', {
      center: lpuCenter,
      zoom: 16,
      zoomControl: false,
      attributionControl: true
    });

    // 100% Free Official OpenStreetMap Tile Server - NO API KEY REQUIRED
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
    }).addTo(leafletMapInstance);

    // Custom LPU map markers
    CAMPUS_STATIONS.forEach(st => {
      if (!st.lat || !st.lng) return;
      const isAlert = st.status === 'warning' || st.status === 'alert';
      const color = isAlert ? '#FFA41B' : '#9FE870';
      const isCse = st.id.startsWith('LPU-CSE-');

      const customIcon = L.divIcon({
        className: 'lpu-leaflet-marker-wrap',
        html: `
          <div style="background: rgba(14,17,24,0.92); border: 1.5px solid ${isCse ? '#00E5FF' : color}; border-radius: 18px; padding: 4px 8px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 5px; box-shadow: 0 4px 14px rgba(0,0,0,0.7); white-space: nowrap; cursor: pointer;">
            <span style="width: 7px; height: 7px; border-radius: 50%; background: ${isCse ? '#00E5FF' : color}; display: inline-block; box-shadow: 0 0 6px ${isCse ? '#00E5FF' : color};"></span>
            <span>${st.short}</span>
          </div>
        `,
        iconSize: [100, 24],
        iconAnchor: [50, 12]
      });

      const marker = L.marker([st.lat, st.lng], { icon: customIcon }).addTo(leafletMapInstance);

      marker.bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; color: #111; padding: 4px; min-width: 170px;">
          <strong style="font-size: 13px; color: #0D111A; display: block; margin-bottom: 2px;">${st.name}</strong>
          <span style="font-size: 10px; color: #666; display: block;">${st.block}</span>
          <div style="margin-top: 6px; font-size: 11px; font-weight: 700; color: ${color};">
            Purity: ${st.purity}% • TDS: ${st.tds} ppm
          </div>
          <div style="margin-top: 3px; font-size: 10px; color: #444;">
            Temp: ${st.temp} • Flow: ${st.flow}
          </div>
        </div>
      `);

      marker.on('click', () => {
        selectMapStation(st.id);
        showToast(`📍 Selected ${st.name} on Real LPU Map`);
      });
    });

    // Student GPS Location Marker on LPU Central Lawns
    L.circleMarker([31.2530, 75.7035], {
      radius: 9,
      fillColor: '#007AFF',
      color: '#00E5FF',
      weight: 2.5,
      opacity: 1,
      fillOpacity: 0.9
    }).addTo(leafletMapInstance).bindPopup('<strong style="font-family: \'Plus Jakarta Sans\', sans-serif; font-size: 12px; color: #111;">You Are Here</strong><br><span style="font-size: 10px; color: #666;">LPU Central Lawns (GPS Anchor)</span>');

  } catch (err) {
    console.warn('[Leaflet] Map init note:', err);
  }
}

function initMapComponent() {
  // Mode Switcher: OpenMaps (Live OSM) <-> 3D Digital Twin
  const btnMode3D = document.getElementById('btnMode3D');
  const btnModeLeaflet = document.getElementById('btnModeLeaflet');
  const world3D = document.getElementById('map3dWorld');
  const leafletContainer = document.getElementById('realLpuLeafletMap');

  // Initialize OpenMaps if active by default
  if (btnModeLeaflet?.classList.contains('active')) {
    if (leafletContainer) leafletContainer.style.display = 'block';
    if (world3D) world3D.style.display = 'none';
    initLeafletMap();
  }

  btnMode3D?.addEventListener('click', () => {
    btnMode3D.classList.add('active');
    btnModeLeaflet?.classList.remove('active');
    if (leafletContainer) leafletContainer.style.display = 'none';
    if (world3D) world3D.style.display = 'block';
    applyMapTransform();
    showToast('🏢 LPU Campus 3D Digital Twin Activated');
  });

  btnModeLeaflet?.addEventListener('click', () => {
    btnModeLeaflet.classList.add('active');
    btnMode3D?.classList.remove('active');
    if (world3D) world3D.style.display = 'none';
    if (leafletContainer) {
      leafletContainer.style.display = 'block';
      initLeafletMap();
      if (leafletMapInstance) {
        setTimeout(() => leafletMapInstance.invalidateSize(), 150);
      }
    }
    showToast('🗺️ Live Campus Map Active');
  });

  // OpenStreetMap Dark / Standard Mode Toggle
  const btnToggleOsmDark = document.getElementById('btnToggleOsmDark');
  btnToggleOsmDark?.addEventListener('click', () => {
    const isDark = leafletContainer.classList.toggle('osm-dark-tiles');
    btnToggleOsmDark.textContent = isDark ? '☀️' : '🌙';
    btnToggleOsmDark.classList.toggle('active', isDark);
    showToast(isDark ? '🌙 Map Dark Theme Active' : '☀️ Map Standard Theme Active');
  });

  // 3D Perspective Controls
  const btn3D = document.getElementById('btnToggle3D');
  btn3D?.addEventListener('click', () => {
    map3dState.is3D = !map3dState.is3D;
    btn3D.classList.toggle('active', map3dState.is3D);
    btn3D.textContent = map3dState.is3D ? '3D' : '2D';

    if (map3dState.is3D) {
      animateMapCamera({ pitch: 46, yaw: -14, zoom: 0.92, x: 0, y: 0 });
      showToast('3D Vector Perspective Active');
    } else {
      animateMapCamera({ pitch: 0, yaw: 0, zoom: 0.85, x: 0, y: 0 });
      showToast('Switched to 2D Plan View (Overhead)');
    }
  });

  // Compass Reset to North
  document.getElementById('btnCompassReset')?.addEventListener('click', () => {
    animateMapCamera({ yaw: 0, x: 0, y: 0 });
    if (typeof anime !== 'undefined') {
      anime({
        targets: '#btnCompassReset',
        rotate: [0, 360],
        duration: 500,
        easing: 'easeOutQuad'
      });
    }
    showToast('Compass reset to Campus North');
  });

  // Zoom In
  document.getElementById('btnMapZoomIn')?.addEventListener('click', () => {
    if (btnModeLeaflet?.classList.contains('active') && leafletMapInstance) {
      leafletMapInstance.zoomIn();
      return;
    }
    const nextZoom = Math.min(map3dState.zoom + 0.18, 1.6);
    animateMapCamera({ zoom: nextZoom }, 350);
  });

  // Zoom Out
  document.getElementById('btnMapZoomOut')?.addEventListener('click', () => {
    if (btnModeLeaflet?.classList.contains('active') && leafletMapInstance) {
      leafletMapInstance.zoomOut();
      return;
    }
    const nextZoom = Math.max(map3dState.zoom - 0.18, 0.65);
    animateMapCamera({ zoom: nextZoom }, 350);
  });

  // Recenter on User
  document.getElementById('btnRecenterUser')?.addEventListener('click', () => {
    if (btnModeLeaflet?.classList.contains('active') && leafletMapInstance) {
      leafletMapInstance.flyTo([31.2530, 75.7035], 17);
      showToast('Centered on Your GPS Anchor (LPU Lawns)');
      return;
    }
    animateMapCamera({ x: -60, y: 40, zoom: 1.05, pitch: 46, yaw: -14 }, 650);
    if (typeof anime !== 'undefined') {
      anime({
        targets: '.user-pulse-disc',
        scale: [1, 1.9, 1],
        boxShadow: ['0 0 16px var(--blue-nav-glow)', '0 0 40px #00E5FF', '0 0 16px var(--blue-nav-glow)'],
        duration: 800,
        easing: 'easeInOutQuad'
      });
    }
    showToast('Centered on Your GPS Anchor');
  });

  // End Walking Route Guidance Button in HUD
  document.getElementById('btnEndNav')?.addEventListener('click', () => {
    stopWalkingNavigation();
  });

  // Interactive Pan & Drag inside 3D Viewport
  initMapDrag();

  // Map Filter Ribbon
  document.querySelectorAll('.map-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const wasActive = chip.classList.contains('active');
      document.querySelectorAll('.map-chip').forEach(c => c.classList.remove('active'));
      if (!wasActive) {
        chip.classList.add('active');
        const filter = chip.getAttribute('data-filter');
        filterMapPins(filter);
      } else {
        filterMapPins('all');
        showToast('Filter reset: Showing all stations');
      }
    });
  });

  // Quick actions inside map station inspection card
  document.getElementById('mapBtnDirections')?.addEventListener('click', () => {
    if (isWalkingNavActive && navigatingStation?.id === activeMapStation.id) {
      stopWalkingNavigation();
    } else {
      startWalkingNavigation(activeMapStation);
    }
  });

  document.getElementById('mapBtnAr')?.addEventListener('click', () => {
    switchView('ar');
    setArStation(activeMapStation.id);
  });

  document.getElementById('mapBtnReport')?.addEventListener('click', () => {
    openReportModal(activeMapStation);
  });

  document.getElementById('mapBtnTelemetry')?.addEventListener('click', () => {
    openStationDrawer(activeMapStation);
  });

  // Initialize selection
  selectMapStation(activeMapStation.id);
  applyMapTransform();
}

// Special Dedicated Floor Selector for Block 34 (School of CSE)
function selectCseFloor(stationId) {
  // Update CSE floor buttons state
  document.querySelectorAll('.cse-floor-btn').forEach(btn => {
    const isTarget = btn.getAttribute('data-floor-station') === stationId || btn.id === `cseBtn${stationId.split('-')[2]}`;
    btn.classList.toggle('active', isTarget);
  });

  // Select the station
  selectMapStation(stationId, true);

  // If in 3D mode, focus camera onto Block 34 CSE
  const world3D = document.getElementById('map3dWorld');
  if (world3D && world3D.style.display !== 'none') {
    animateMapCamera({
      pitch: 50,
      yaw: -8,
      zoom: 1.15,
      x: -140,
      y: 70
    }, 650);
  }

  const floorNum = stationId.split('-')[2] || '2F';
  showToast(`💻 Block 34 CSE • ${floorNum} Water Station Selected`);
}

function applyMapTransform() {
  const world = document.getElementById('map3dWorld');
  if (!world) return;
  world.style.transform = `translate(${map3dState.x}px, ${map3dState.y}px) rotateX(${map3dState.pitch}deg) rotateZ(${map3dState.yaw}deg) scale(${map3dState.zoom})`;
}

function animateMapCamera(targetProps, duration = 650, easing = 'easeOutCubic') {
  if (typeof anime === 'undefined') {
    Object.assign(map3dState, targetProps);
    applyMapTransform();
    return;
  }
  anime.remove(map3dState);
  anime({
    targets: map3dState,
    ...targetProps,
    duration: duration,
    easing: easing,
    update: applyMapTransform
  });
}

function initMapDrag() {
  const container = document.getElementById('appleMapContainer');
  if (!container) return;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;
  let isRotating = false;
  let initialPitch = 0;
  let initialYaw = 0;

  container.addEventListener('mousedown', (e) => {
    if (e.target.closest('button') || e.target.closest('.station-pin-3d') || e.target.closest('.bldg-3d') || e.target.closest('#realLpuLeafletMap')) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = map3dState.x;
    initialY = map3dState.y;
    initialPitch = map3dState.pitch;
    initialYaw = map3dState.yaw;
    isRotating = e.shiftKey || e.altKey || e.button === 2;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (isRotating) {
      map3dState.yaw = initialYaw + dx * 0.35;
      map3dState.pitch = Math.max(0, Math.min(75, initialPitch - dy * 0.3));
    } else {
      map3dState.x = initialX + dx;
      map3dState.y = initialY + dy;
    }
    applyMapTransform();
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      container.style.cursor = 'grab';
    }
  });

  container.addEventListener('wheel', (e) => {
    const leafletActive = document.getElementById('btnModeLeaflet')?.classList.contains('active');
    if (leafletActive) return; // Allow natural leaflet zoom

    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.08 : -0.08;
    map3dState.zoom = Math.max(0.65, Math.min(1.6, map3dState.zoom + delta));
    applyMapTransform();
  }, { passive: false });
}

function selectMapStation(stationId, updateNavigation = true) {
  const st = CAMPUS_STATIONS.find(s => s.id === stationId);
  if (!st) return;
  activeMapStation = st;

  // Update inspection card
  const nameEl = document.getElementById('mapInspectName');
  if (nameEl) nameEl.textContent = st.name;
  const locEl = document.getElementById('mapInspectLoc');
  if (locEl) locEl.textContent = `${st.quad} • ${st.block}`;
  const badgeEl = document.getElementById('mapInspectBadge');
  if (badgeEl) badgeEl.textContent = `${st.statusLabel} • ${st.purity}% Pure`;
  const tempEl = document.getElementById('mapInspectTemp');
  if (tempEl) tempEl.textContent = st.temp;
  const tdsEl = document.getElementById('mapInspectTds');
  if (tdsEl) tdsEl.textContent = `${st.tds} ppm`;
  const flowEl = document.getElementById('mapInspectFlow');
  if (flowEl) flowEl.textContent = st.flow;
  const filterEl = document.getElementById('mapInspectFilter');
  if (filterEl) filterEl.textContent = `${st.filterHealth} (${parseFloat(st.filterHealth) > 50 ? 'Optimal' : 'Needs Flush'})`;

  const filterBar = document.getElementById('mapInspectFilterBar');
  if (filterBar) {
    filterBar.style.width = st.filterHealth;
    filterBar.style.background = parseFloat(st.filterHealth) > 50 ? 'var(--lime)' : 'var(--amber)';
  }
  const sanitizedEl = document.getElementById('mapInspectSanitized');
  if (sanitizedEl) sanitizedEl.textContent = `Sanitized ${st.lastSanitized}`;

  // Update walk button label
  const walkBtn = document.getElementById('mapBtnDirections');
  if (walkBtn) {
    walkBtn.textContent = (isWalkingNavActive && navigatingStation?.id === st.id)
      ? '✕ End Walk Guidance'
      : `Start Walk (${st.walkTime})`;
  }

  // Update CSE floor button active state if applicable
  if (st.id.startsWith('LPU-CSE-')) {
    document.querySelectorAll('.cse-floor-btn').forEach(btn => {
      const match = btn.getAttribute('data-floor-station') === st.id || btn.id === `cseBtn${st.id.split('-')[2]}`;
      btn.classList.toggle('active', match);
    });
  }

  // Highlight selected 3D pin
  document.querySelectorAll('.station-pin-3d').forEach(pin => {
    pin.classList.toggle('active-pin', pin.getAttribute('data-station-id') === st.id);
  });

  // Elastic bounce active pin with Anime.js
  if (typeof anime !== 'undefined') {
    const pinEl = document.getElementById(`pin-${st.id}`);
    if (pinEl) {
      anime.remove(pinEl);
      anime({
        targets: pinEl,
        translateY: [-16, 0],
        scale: [1.25, 1],
        duration: 550,
        easing: 'easeOutElastic(1, .5)'
      });
    }
  }

  // If walking navigation is currently active and station changed, smoothly reroute
  if (updateNavigation && isWalkingNavActive && navigatingStation?.id !== st.id) {
    startWalkingNavigation(st, false);
  }
}

function filterMapPins(filter) {
  const pins = document.querySelectorAll('.station-pin-3d');
  pins.forEach(pin => {
    const stId = pin.getAttribute('data-station-id');
    const st = CAMPUS_STATIONS.find(s => s.id === stId);
    if (!st) return;

    let match = true;
    if (filter === 'cse') match = st.id.startsWith('LPU-CSE-');
    else if (filter === 'chilled') match = st.chilled;
    else if (filter === 'bottle') match = st.bottleFiller;
    else if (filter === 'alert') match = (st.status === 'warning' || st.status === 'alert');
    else if (filter === 'all') match = true;

    if (typeof anime !== 'undefined') {
      anime.remove(pin);
      anime({
        targets: pin,
        opacity: match ? 1 : 0.15,
        scale: match ? 1 : 0.8,
        duration: 350,
        easing: 'easeOutQuad'
      });
    } else {
      pin.style.opacity = match ? '1' : '0.15';
    }
  });

  if (filter !== 'all') {
    showToast(`Filtered LPU pins: ${filter.toUpperCase()}`);
  }
}

// Walking Navigation Functionality (Accessible from Nearby Tab, Map Card, & Station Drawer)
function startWalkingNavigation(station, switchTab = true) {
  isWalkingNavActive = true;
  navigatingStation = station;
  activeMapStation = station;

  if (switchTab && currentView !== 'map') {
    switchView('map');
  }

  // Pass updateNavigation=false to prevent recursion loop!
  selectMapStation(station.id, false);

  // Show Navigation HUD
  const hud = document.getElementById('appleNavHud');
  if (hud) hud.classList.add('active');

  const navPrimary = document.getElementById('navPrimaryText');
  const navSub = document.getElementById('navSubText');
  if (navPrimary) {
    navPrimary.textContent = `In ${Math.min(station.distance, 45)}m: Proceed along LPU Central Corridor to ${station.name}`;
  }
  if (navSub) {
    navSub.textContent = `Destination: ${station.name} • ${station.distance}m (${station.walkTime}) • Pace: 1.2 m/s`;
  }

  // Update map walk button
  const walkBtn = document.getElementById('mapBtnDirections');
  if (walkBtn) walkBtn.textContent = '✕ End Walk Guidance';

  // Animate route SVG with Anime.js
  const routeEl = document.getElementById('activeWalkingRoute');
  if (routeEl) {
    const dPath = STATION_ROUTES[station.id] || STATION_ROUTES['LPU-CSE-2F'];
    routeEl.setAttribute('d', dPath);
    routeEl.style.opacity = '1';

    if (activeRouteAnimation) {
      activeRouteAnimation.pause();
    }

    if (typeof anime !== 'undefined') {
      const length = routeEl.getTotalLength ? routeEl.getTotalLength() : 500;
      routeEl.style.strokeDasharray = `${length}`;

      activeRouteAnimation = anime({
        targets: routeEl,
        strokeDashoffset: [length, 0],
        duration: 1100,
        easing: 'easeInOutQuad',
        complete: () => {
          // Flowing animated dashed trail
          routeEl.style.strokeDasharray = '10 8';
          activeRouteAnimation = anime({
            targets: routeEl,
            strokeDashoffset: [0, -36],
            duration: 1200,
            loop: true,
            easing: 'linear'
          });
        }
      });

      // Frame camera onto the route
      animateMapCamera({
        pitch: 48,
        yaw: -12,
        zoom: 0.96,
        x: -30,
        y: 10
      }, 750);
    }
  }

  showToast(`🚶 Walking Guidance started to ${station.name} (${station.walkTime})`);
}

function stopWalkingNavigation() {
  isWalkingNavActive = false;
  navigatingStation = null;

  const hud = document.getElementById('appleNavHud');
  if (hud) hud.classList.remove('active');

  const walkBtn = document.getElementById('mapBtnDirections');
  if (walkBtn && activeMapStation) {
    walkBtn.textContent = `Start Walk (${activeMapStation.walkTime})`;
  }

  const routeEl = document.getElementById('activeWalkingRoute');
  if (routeEl) {
    if (activeRouteAnimation) activeRouteAnimation.pause();
    if (typeof anime !== 'undefined') {
      anime({
        targets: routeEl,
        opacity: [1, 0],
        duration: 350,
        easing: 'easeOutQuad',
        complete: () => {
          routeEl.style.opacity = '0';
        }
      });
    } else {
      routeEl.style.opacity = '0';
    }
  }

  showToast('Walking navigation ended');
}

// ========================================================
// 4. VIEW 3: AR NAVIGATION ENGINE (PROPER DYNAMIC GUIDANCE)
// ========================================================

const AR_STATION_GUIDANCE = {
  'LPU-CSE-2F': {
    heading: 'NE 42°',
    turnTitle: 'In 25m: Turn Right',
    turnSub: 'Enter Block 34 East Lobby',
    steps: [
      'Walk 25m northeast past the Science Quad courtyard.',
      'Enter Block 34 via East Automated Glass Doors.',
      'Take stairs or express elevator to Floor 2.',
      'Arrive at IoT & AI Lab corridor; station is on left alcove.'
    ]
  },
  'LPU-CSE-4F': {
    heading: 'NE 45°',
    turnTitle: 'In 30m: Enter Block 34 Atrium',
    turnSub: 'Proceed to Central Lift Bank',
    steps: [
      'Head 30m northeast toward Block 34 main glass canopy.',
      'Take Central High-Speed Elevator to Floor 4.',
      'Turn right into Coding Concourse corridor.',
      'Water station is positioned between Labs 402 & 404.'
    ]
  },
  'LPU-CSE-6F': {
    heading: 'NE 40°',
    turnTitle: 'In 35m: Head to Block 34 North Wing',
    turnSub: 'Ascend to Cloud & Cyber Wing',
    steps: [
      'Enter Block 34 through North academic gateway.',
      'Take North elevator up to Floor 6.',
      'Follow cyber lab illuminated corridor signs.',
      'Station is active adjacent to Cloud Pod 608.'
    ]
  },
  'LPU-CSE-8F': {
    heading: 'NE 38°',
    turnTitle: 'In 35m: Board High-Rise Lift',
    turnSub: 'Direct express to Research & Dean Suite',
    steps: [
      'Proceed into Block 34 central elevator foyer.',
      'Take high-speed elevator to Floor 8 (Top Level).',
      'Turn left towards Faculty Research Commons.',
      'Executive HydroPoint is located opposite Dean Conference Hall.'
    ]
  },
  'LPU-LIB-2F': {
    heading: 'NW 315°',
    turnTitle: 'In 45m: Cross Science Walkway',
    turnSub: 'Enter Central Library Block 30 Grand Rotunda',
    steps: [
      'Follow the tree-lined West Walkway toward Block 30.',
      'Pass security turnstiles and take central escalator to Level 2.',
      'Head past digital periodicals lounge.',
      'Station is located in West Quiet Study alcove.'
    ]
  },
  'LPU-MALL-2F': {
    heading: 'SE 135°',
    turnTitle: 'In 80m: Head to UniMall Arcade',
    turnSub: 'Ascend central escalator to Food Court',
    steps: [
      'Take the South-East boulevard toward UniMall Complex.',
      'Enter through main revolving glass entrance.',
      'Ascend central glass escalator to Floor 2 Food Plaza.',
      'Dispenser is located between Subway and Student Helpdesk.'
    ]
  },
  'LPU-MSB-2F': {
    heading: 'SE 120°',
    turnTitle: 'In 70m: Enter MSB Grand Atrium',
    turnSub: 'Take marble staircase to Floor 2',
    steps: [
      'Walk east along Academic Boulevard toward Block 38 (MSB).',
      'Enter ground atrium and ascend to Floor 2.',
      'Follow the Corporate Case Study corridor.',
      'Station is positioned between Case Study Halls 204 & 206.'
    ]
  },
  'LPU-ENG-2F': {
    heading: 'W 270°',
    turnTitle: 'In 55m: Enter Block 26 Polytechnic',
    turnSub: 'Pass CAD & Robotics Prototyping Labs',
    steps: [
      'Head west toward Block 26 Mechanical & Polytechnic.',
      'Enter main workshop wing and take west stairs to 2nd Floor.',
      'Follow the Mechatronics laboratory hall.',
      'Dispenser is situated outside CAD Studio 215.'
    ]
  },
  'LPU-SPORT-2F': {
    heading: 'SW 220°',
    turnTitle: 'In 120m: Head to Indoor Sports Arena',
    turnSub: 'Ascend to Arena Viewing Gallery',
    steps: [
      'Follow sports promenade toward Shanti Devi Mittal Arena.',
      'Enter north sports lobby and take stairs to Mezzanine Floor 2.',
      'Walk past indoor Olympic pool observation gallery.',
      'Rapid chilled dispenser is next to Gymnasium entrance.'
    ]
  }
};

let arActiveStationId = 'LPU-CSE-2F';
let arCameraStream = null;
let isArCamActive = true;
let isArVoiceActive = true;
let isArNavigating = false;
let arNavInterval = null;
let arCurrentStepIndex = 0;
let arRemainingDist = 65;
let arStepCount = 0;

function initArComponent() {
  const btnArCam = document.getElementById('btnArLiveCam');
  const btn3dMesh = document.getElementById('btnAr3dMesh');
  const btnVoice = document.getElementById('btnArVoiceToggle');
  const select = document.getElementById('arStationSelect');
  const startBtn = document.getElementById('startArGuidanceBtn');
  const recenterBtn = document.getElementById('arRecenterBtn');
  const recalSensorBtn = document.getElementById('btnArRecalibrateSensor');

  // Camera Mode Toggle
  btnArCam?.addEventListener('click', () => {
    btnArCam.classList.add('active');
    btn3dMesh?.classList.remove('active');
    isArCamActive = true;
    startCameraFeed();
    showToast('📹 AR Live Cam Mode: Optical reticle tracking engaged');
  });

  // 3D Mesh Mode Toggle
  btn3dMesh?.addEventListener('click', () => {
    btn3dMesh.classList.add('active');
    btnArCam?.classList.remove('active');
    isArCamActive = false;
    stopCameraFeed();
    showToast('📐 3D Spatial Vector Corridor Active');
  });

  // Spoken Voice Guidance Toggle
  btnVoice?.addEventListener('click', () => {
    isArVoiceActive = !isArVoiceActive;
    btnVoice.textContent = isArVoiceActive ? '🔊 Voice: On' : '🔇 Voice: Muted';
    btnVoice.classList.toggle('active', isArVoiceActive);
    showToast(isArVoiceActive ? '🔊 Audio Voice Guidance Enabled' : '🔇 Audio Voice Guidance Muted');
    if (isArVoiceActive) {
      speakArPrompt('Audio guidance active. Follow glowing waypoint path.');
    }
  });

  // Recenter / Recalibrate Compass Button
  recenterBtn?.addEventListener('click', () => {
    recalibrateCompass();
  });

  recalSensorBtn?.addEventListener('click', () => {
    recalibrateCompass();
    showToast('🎯 RTK Dual-GPS sensor calibrated (Accuracy ±0.8m)');
  });

  // Dropdown station change
  select?.addEventListener('change', (e) => {
    setArStation(e.target.value);
  });

  // Start Turn-by-Turn Guidance CTA
  startBtn?.addEventListener('click', () => {
    toggleArTurnByTurnGuidance();
  });

  // Initialize initial station UI
  updateArStationUI(arActiveStationId);
}

function setArStation(stationId) {
  const station = CAMPUS_STATIONS.find(s => s.id === stationId) || CAMPUS_STATIONS[0];
  arActiveStationId = station.id;

  const select = document.getElementById('arStationSelect');
  if (select && select.value !== station.id) {
    select.value = station.id;
  }

  updateArStationUI(station.id);
  showToast(`🎯 AR Navigation waypoint locked: ${station.name}`);
}

function updateArStationUI(stationId) {
  const st = CAMPUS_STATIONS.find(s => s.id === stationId) || CAMPUS_STATIONS[0];
  const guide = AR_STATION_GUIDANCE[st.id] || AR_STATION_GUIDANCE['LPU-CSE-2F'];

  arRemainingDist = st.distance;
  arCurrentStepIndex = 0;
  arStepCount = 0;

  // Station info
  const nameEl = document.getElementById('arTargetStationName');
  if (nameEl) nameEl.textContent = st.name;

  const distEl = document.getElementById('arTargetStationDist');
  if (distEl) distEl.textContent = `${st.distance}m (${st.walkTime} walk)`;

  const floorEl = document.getElementById('arFloorBadge');
  if (floorEl) floorEl.textContent = `Floor: G → ${st.floor}F`;

  const headEl = document.getElementById('arHeadingText');
  if (headEl) headEl.textContent = `🧭 Heading ${guide.heading}`;

  const paceEl = document.getElementById('arPaceText');
  if (paceEl) paceEl.textContent = `Pace: 1.2 m/s • 0 steps`;

  // HUD Prompts
  const turnTitleEl = document.getElementById('arTurnTitle');
  if (turnTitleEl) turnTitleEl.textContent = guide.turnTitle;

  const turnSubEl = document.getElementById('arTurnSub');
  if (turnSubEl) turnSubEl.textContent = guide.turnSub;

  // Floating SVG Target
  const svgTitle = document.getElementById('arSvgDestTitle');
  if (svgTitle) svgTitle.textContent = `${st.short} Station`;

  const svgSub = document.getElementById('arSvgDestSub');
  if (svgSub) svgSub.textContent = `Pristine • Chilled ${st.temp}`;

  // Vitals
  const vTemp = document.getElementById('arVitalTemp');
  if (vTemp) vTemp.textContent = st.temp;

  const vPurity = document.getElementById('arVitalPurity');
  if (vPurity) vPurity.textContent = `${st.purity}%`;

  const vTds = document.getElementById('arVitalTds');
  if (vTds) vTds.textContent = `${st.tds} ppm`;

  const vFlow = document.getElementById('arVitalFlow');
  if (vFlow) vFlow.textContent = st.flow.split(' ')[0] + ' L/m';

  // Render Steps
  renderArStepsList(guide.steps, 0);

  // Animate reticle pulse
  animateReticleLock();
}

function renderArStepsList(steps, activeIdx) {
  const container = document.getElementById('arStepsList');
  if (!container) return;

  container.innerHTML = '';
  steps.forEach((step, idx) => {
    const item = document.createElement('div');
    item.className = `ar-step-item ${idx === activeIdx ? 'active-step' : ''}`;
    item.innerHTML = `
      <div class="ar-step-num">${idx + 1}</div>
      <div class="ar-step-text">${step}</div>
    `;
    container.appendChild(item);
  });

  const progEl = document.getElementById('arProgressPercent');
  if (progEl) {
    if (activeIdx >= steps.length) {
      progEl.textContent = '🎉 Arrived!';
      progEl.style.color = 'var(--lime)';
    } else {
      progEl.textContent = `Step ${activeIdx + 1} of ${steps.length}`;
      progEl.style.color = 'var(--cyan)';
    }
  }
}

function startCameraFeed() {
  const video = document.getElementById('arVideoElement');
  const scanBeam = document.getElementById('arScanBeam');
  if (!video) return;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' } },
      audio: false
    }).then(stream => {
      arCameraStream = stream;
      video.srcObject = stream;
      video.classList.add('active-feed');
      if (scanBeam) scanBeam.style.display = 'block';
    }).catch(() => {
      // In simulator / browser without camera, show laser beam and high-tech optical scrim
      video.classList.remove('active-feed');
      if (scanBeam) scanBeam.style.display = 'block';
    });
  } else {
    if (scanBeam) scanBeam.style.display = 'block';
  }
}

function stopCameraFeed() {
  const video = document.getElementById('arVideoElement');
  const scanBeam = document.getElementById('arScanBeam');

  if (arCameraStream) {
    arCameraStream.getTracks().forEach(track => track.stop());
    arCameraStream = null;
  }
  if (video) {
    video.srcObject = null;
    video.classList.remove('active-feed');
  }
  if (scanBeam) scanBeam.style.display = 'none';
}

function recalibrateCompass() {
  const reticle = document.getElementById('arReticleCorners');
  const headingEl = document.getElementById('arHeadingText');
  const st = CAMPUS_STATIONS.find(s => s.id === arActiveStationId) || CAMPUS_STATIONS[0];
  const guide = AR_STATION_GUIDANCE[st.id] || AR_STATION_GUIDANCE['LPU-CSE-2F'];

  if (reticle && typeof anime !== 'undefined') {
    anime({
      targets: '.corner-bracket',
      scale: [1, 1.25, 1],
      opacity: [0.7, 1, 0.7],
      duration: 500,
      easing: 'easeInOutQuad'
    });
  }

  if (headingEl) {
    headingEl.textContent = `🧭 Calibrated: ${guide.heading}`;
  }
  showToast(`Compass heading locked to ${guide.heading} (RTK Dual-GPS lock)`);
}

function toggleArTurnByTurnGuidance() {
  const btn = document.getElementById('startArGuidanceBtn');
  const st = CAMPUS_STATIONS.find(s => s.id === arActiveStationId) || CAMPUS_STATIONS[0];
  const guide = AR_STATION_GUIDANCE[st.id] || AR_STATION_GUIDANCE['LPU-CSE-2F'];

  if (isArNavigating) {
    // Stop Navigation
    clearInterval(arNavInterval);
    isArNavigating = false;
    if (btn) {
      btn.textContent = '🚀 Start Turn-by-Turn Guidance';
      btn.classList.remove('ar-guidance-active');
    }
    showToast('AR Guidance Paused');
    return;
  }

  // Start Navigation
  isArNavigating = true;
  if (btn) {
    btn.textContent = '⏹️ Stop Guidance (Navigating...)';
    btn.classList.add('ar-guidance-active');
  }

  showToast(`🚶 AR Turn-by-Turn Guidance Active to ${st.short}`);
  if (isArVoiceActive) {
    speakArPrompt(`Starting walking guidance to ${st.name}. ${guide.steps[0]}`);
  }

  const totalSteps = guide.steps.length;
  arCurrentStepIndex = 0;
  arRemainingDist = st.distance;
  arStepCount = 0;

  arNavInterval = setInterval(() => {
    arStepCount += Math.floor(Math.random() * 5) + 6;
    arRemainingDist = Math.max(0, arRemainingDist - 15);

    // Update Pace Text
    const paceEl = document.getElementById('arPaceText');
    if (paceEl) paceEl.textContent = `Pace: 1.3 m/s • ${arStepCount} steps`;

    // Update Distance
    const distEl = document.getElementById('arTargetStationDist');
    if (distEl) distEl.textContent = `${arRemainingDist}m remaining`;

    // Advance step
    if (arRemainingDist <= 0) {
      // Arrived!
      clearInterval(arNavInterval);
      isArNavigating = false;
      if (btn) {
        btn.textContent = '🚀 Start Turn-by-Turn Guidance';
        btn.classList.remove('ar-guidance-active');
      }
      renderArStepsList(guide.steps, totalSteps);

      const turnTitleEl = document.getElementById('arTurnTitle');
      if (turnTitleEl) turnTitleEl.textContent = '🎉 Arrived at Water Station!';
      const turnSubEl = document.getElementById('arTurnSub');
      if (turnSubEl) turnSubEl.textContent = 'Pure chilled water ready for refill.';

      showToast(`🎉 You have reached ${st.name}! Ready for refill.`);
      if (isArVoiceActive) {
        speakArPrompt(`You have arrived at ${st.name}. Pure chilled water is ready.`);
      }

      // Add 250ml to student intake upon completing a walk
      if (typeof userHydration !== 'undefined') {
        userHydration.currentIntakeMl = Math.min(userHydration.dailyGoalMl, userHydration.currentIntakeMl + 250);
        userHydration.refillsToday += 1;
        updateHydrationUI(true);
      }
      return;
    }

    // Step index calculation
    const progress = 1 - (arRemainingDist / st.distance);
    const nextStepIdx = Math.min(totalSteps - 1, Math.floor(progress * totalSteps));

    if (nextStepIdx !== arCurrentStepIndex) {
      arCurrentStepIndex = nextStepIdx;
      renderArStepsList(guide.steps, arCurrentStepIndex);

      const turnTitleEl = document.getElementById('arTurnTitle');
      if (turnTitleEl) turnTitleEl.textContent = `In ${arRemainingDist}m: Follow Path`;
      const turnSubEl = document.getElementById('arTurnSub');
      if (turnSubEl) turnSubEl.textContent = guide.steps[arCurrentStepIndex];

      if (isArVoiceActive) {
        speakArPrompt(guide.steps[arCurrentStepIndex]);
      }
    }
  }, 1800);
}

function speakArPrompt(text) {
  if (!('speechSynthesis' in window) || !isArVoiceActive) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  } catch {
    // Ignore speech failure
  }
}

function animateReticleLock() {
  if (typeof anime === 'undefined') return;
  anime({
    targets: '#arSpatialSvg #arWalkerPulse',
    scale: [0.8, 1.25, 1],
    duration: 600,
    easing: 'easeOutElastic(1, .6)'
  });
}

// ========================================================
// 5. VIEW 4: NEARBY STATIONS LOGIC (WALK BUTTONS FIXED)
// ========================================================
function initNearbyComponent() {
  document.querySelectorAll('.nearby-filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.nearby-filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeNearbyFilter = chip.getAttribute('data-filter');
      renderNearbyList();
    });
  });

  renderNearbyList();
}

function renderNearbyList() {
  const container = document.getElementById('nearbyListGrid');
  if (!container) return;

  container.innerHTML = '';
  let list = [...CAMPUS_STATIONS];

  if (activeNearbyFilter === 'chilled') list = list.filter(s => s.chilled);
  if (activeNearbyFilter === 'pristine') list = list.filter(s => s.purity >= 95);
  if (activeNearbyFilter === 'fast') list = list.filter(s => parseFloat(s.flow) >= 2.0);

  list.forEach(st => {
    const card = document.createElement('article');
    card.className = 'nearby-card';
    card.innerHTML = `
      <div class="nearby-header">
        <div>
          <span class="nearby-dist-pill">${st.distance}m • ${st.walkTime}</span>
          <h3 style="font-family: var(--font-display); font-size: 20px; font-weight: 700; margin-top: 6px;">${st.name}</h3>
          <p style="font-size: 11px; color: var(--text-muted);">${st.quad} • ${st.block}</p>
        </div>
        <button type="button" class="icon-pill-btn nearby-fav-btn" title="Toggle Favorite" style="width: 32px; height: 32px;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="${st.isFavorite ? 'var(--amber)' : 'none'}" stroke="var(--amber)" stroke-width="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </button>
      </div>

      <div class="nearby-stats-row">
        <div class="nearby-stat-cell">
          <small>TDS</small>
          <strong>${st.tds} <span style="font-size: 10px;">ppm</span></strong>
        </div>
        <div class="nearby-stat-cell">
          <small>TEMP</small>
          <strong style="color: var(--cyan);">${st.temp}</strong>
        </div>
        <div class="nearby-stat-cell">
          <small>PURITY</small>
          <strong style="color: var(--lime);">${st.purity}%</strong>
        </div>
        <div class="nearby-stat-cell">
          <small>FLOW</small>
          <strong>${st.flow.split(' ')[0]} <span style="font-size: 10px;">L/m</span></strong>
        </div>
      </div>

      <div style="display: flex; gap: 8px; margin-top: auto;">
        <button type="button" class="primary-action-btn nearby-walk-btn" style="flex: 1; height: 38px; font-size: 12px;">
          Walk (${st.walkTime})
        </button>
        <button type="button" class="secondary-action-btn nearby-ar-btn" style="padding: 0 14px; height: 38px; font-size: 12px; color: var(--cyan);">
          AR View
        </button>
        <button type="button" class="secondary-action-btn nearby-report-btn" style="padding: 0 12px; height: 38px; font-size: 12px; color: var(--amber);">
          Report
        </button>
      </div>
    `;

    // Toggle Favorite
    card.querySelector('.nearby-fav-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      st.isFavorite = !st.isFavorite;
      renderNearbyList();
      showToast(st.isFavorite ? `Added ${st.name} to Favorites` : `Removed ${st.name} from Favorites`);
    });

    // Walk Button -> Triggers Real 3D Walking Guidance
    card.querySelector('.nearby-walk-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      startWalkingNavigation(st);
    });

    // AR View Button
    card.querySelector('.nearby-ar-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      switchView('ar');
      setArStation(st.id);
    });

    // Report Button
    card.querySelector('.nearby-report-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openReportModal(st);
    });

    // Card click -> Open telemetry drawer
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openStationDrawer(st);
    });

    container.appendChild(card);
  });
}

// ========================================================
// 6. VIEW 5: CAMPUS ALERTS LOGIC
// ========================================================
function initAlertsComponent() {
  document.querySelectorAll('.alerts-filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.alerts-filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeAlertsFilter = chip.getAttribute('data-filter');
      renderAlertsList();
    });
  });

  document.getElementById('markAllReadBtn')?.addEventListener('click', () => {
    campusAlerts.forEach(a => a.status = 'Resolved');
    renderAlertsList();
    showToast('All alerts marked as read and resolved');
  });

  document.getElementById('reportNewAlertBtn')?.addEventListener('click', () => {
    openReportModal();
  });

  renderAlertsList();
}

function renderAlertsList() {
  const container = document.getElementById('alertsFeedStack');
  if (!container) return;

  container.innerHTML = '';
  let filtered = [...campusAlerts];
  if (activeAlertsFilter !== 'all') {
    filtered = filtered.filter(a => a.category === activeAlertsFilter);
  }

  filtered.forEach(alert => {
    const card = document.createElement('article');
    card.className = `alert-card ${alert.category}`;

    let badgeClass = 'crit-badge';
    let badgeLabel = 'CRITICAL ALERT';
    if (alert.category === 'maintenance') {
      badgeClass = 'maint-badge';
      badgeLabel = 'MAINTENANCE';
    } else if (alert.category === 'community') {
      badgeClass = 'comm-badge';
      badgeLabel = 'STUDENT REVIEW';
    }

    card.innerHTML = `
      <div style="flex: 1;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <span class="alert-badge ${badgeClass}">${badgeLabel}</span>
          <span style="font-size: 11px; color: var(--text-muted);">${alert.time} • LoRa Mesh Sync</span>
          <span style="font-size: 11px; font-weight: 700; color: ${alert.status === 'Resolved' ? 'var(--lime)' : 'var(--amber)'};">• ${alert.status}</span>
        </div>
        <h4 style="font-size: 16px; font-weight: 700; color: var(--text-main);">${alert.title}</h4>
        <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px; line-height: 1.4;">${alert.desc}</p>
        <span style="display: inline-block; font-size: 11px; color: var(--lime); margin-top: 6px; font-weight: 600;">Location: ${alert.station}</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px; flex-shrink: 0;">
        <button type="button" class="secondary-action-btn resolve-btn" style="height: 34px; padding: 0 12px; font-size: 11px;">
          ${alert.status === 'Resolved' ? 'Archived' : 'Resolve & Clear'}
        </button>
        <button type="button" class="secondary-action-btn view-st-btn" style="height: 34px; padding: 0 12px; font-size: 11px;">
          View Station
        </button>
      </div>
    `;

    card.querySelector('.resolve-btn').addEventListener('click', () => {
      alert.status = 'Resolved';
      renderAlertsList();
      showToast(`Alert cleared: ${alert.title}`);
    });

    card.querySelector('.view-st-btn').addEventListener('click', () => {
      const match = CAMPUS_STATIONS.find(s => s.name === alert.station) || CAMPUS_STATIONS[0];
      openStationDrawer(match);
    });

    container.appendChild(card);
  });
}

// ========================================================
// 7. VIEW 6: PROFILE & HYDRATION LOGIC (WITH ANIME.JS)
// ========================================================
function initProfileComponent() {
  updateHydrationUI(false);

  // Log Drink (+250 ml)
  document.getElementById('logDrinkBtn')?.addEventListener('click', () => {
    userHydration.current += 250;
    userHydration.refillsToday += 1;
    userHydration.plasticSavedKg = (parseFloat(userHydration.plasticSavedKg) + 0.05).toFixed(2);
    updateHydrationUI(true);
    showToast('💧 Hydration logged! +250 mL added to your daily progress.');
  });
}

function updateHydrationUI(animate = false) {
  const currentEl = document.getElementById('userDrankAmount');
  const pctEl = document.getElementById('userHydrationPct');
  const refillsEl = document.getElementById('userRefillsCount');
  const plasticEl = document.getElementById('userPlasticCount');
  const circleEl = document.getElementById('hydrationCircle');

  const pct = Math.min(Math.round((userHydration.current / userHydration.goal) * 100), 100);

  if (currentEl) currentEl.textContent = `${userHydration.current.toLocaleString()} / ${userHydration.goal.toLocaleString()} ml`;
  if (pctEl) pctEl.textContent = `${pct}%`;
  if (refillsEl) refillsEl.textContent = userHydration.refillsToday;
  if (plasticEl) plasticEl.textContent = `${userHydration.plasticSavedKg} kg`;

  if (circleEl) {
    const circumference = 2 * Math.PI * 34; // r=34 -> ~213.6
    const offset = circumference - (pct / 100) * circumference;

    if (animate && typeof anime !== 'undefined') {
      anime({
        targets: circleEl,
        strokeDashoffset: offset,
        duration: 800,
        easing: 'easeOutCubic'
      });
      anime({
        targets: '#userHydrationPct',
        scale: [1, 1.25, 1],
        duration: 400,
        easing: 'easeInOutQuad'
      });
    } else {
      circleEl.style.strokeDashoffset = offset;
    }
  }
}

// ========================================================
// 8. INTERACTIVE REPORT / TICKET MODAL
// ========================================================
function initReportModal() {
  const backdrop = document.getElementById('reportModalBackdrop');
  const closeBtn = document.getElementById('closeReportModalBtn');
  const cancelBtn = document.getElementById('cancelReportBtn');
  const form = document.getElementById('reportIssueForm');

  closeBtn?.addEventListener('click', closeReportModal);
  cancelBtn?.addEventListener('click', closeReportModal);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeReportModal();
  });

  // Star Rating Interaction
  document.querySelectorAll('.star-icon').forEach(star => {
    star.addEventListener('click', () => {
      reportRating = parseInt(star.getAttribute('data-value') || '5', 10);
      updateStarRatingUI();
    });
  });

  // Form submission
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const stationSelect = document.getElementById('reportStationSelect');
    const issueCategory = document.getElementById('reportIssueCategory');
    const description = document.getElementById('reportDescription');

    const stName = stationSelect.value;
    const cat = issueCategory.value;
    const desc = description.value || 'Report submitted by student via mobile terminal.';

    // Create new alert
    const newAlert = {
      id: `ALT-${Math.floor(500 + Math.random() * 400)}`,
      category: cat === 'Quality' ? 'critical' : 'maintenance',
      title: `${stName} - ${cat} Anomaly (${reportRating}★ Rating)`,
      station: stName,
      time: 'Just now',
      desc: desc,
      status: 'Active'
    };

    campusAlerts.unshift(newAlert);
    renderAlertsList();

    // Reset and close
    form.reset();
    closeReportModal();
    showToast(`Maintenance Ticket #${newAlert.id} submitted! Campus facilities alerted.`);
  });
}

function openReportModal(station) {
  reportSelectedStation = station || CAMPUS_STATIONS[0];
  const select = document.getElementById('reportStationSelect');
  if (select && reportSelectedStation) {
    select.value = reportSelectedStation.name;
  }
  reportRating = 5;
  updateStarRatingUI();

  const backdrop = document.getElementById('reportModalBackdrop');
  if (backdrop) {
    backdrop.classList.add('open');
    if (typeof anime !== 'undefined') {
      anime({
        targets: '.report-modal',
        scale: [0.85, 1],
        opacity: [0, 1],
        duration: 350,
        easing: 'easeOutBack'
      });
    }
  }
}

function closeReportModal() {
  const backdrop = document.getElementById('reportModalBackdrop');
  if (backdrop) backdrop.classList.remove('open');
}

function updateStarRatingUI() {
  document.querySelectorAll('.star-icon').forEach(star => {
    const val = parseInt(star.getAttribute('data-value') || '0', 10);
    star.classList.toggle('filled', val <= reportRating);
  });
}

// ========================================================
// 9. STATION SLIDE-OVER DRAWER (FOR STUDENTS ONLY)
// Note: "Log Nano-Filter Replacement" has been removed
// Maintenance authentication will be added in a separate portal
// ========================================================
function initDrawer() {
  document.getElementById('drawerCloseBtn')?.addEventListener('click', closeStationDrawer);
  document.getElementById('stationDrawerBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'stationDrawerBackdrop') closeStationDrawer();
  });

  // Student Action 1: Start 3D Walk Navigation
  document.getElementById('drawerActionNavWalk')?.addEventListener('click', () => {
    if (activeDrawerStation) {
      const st = activeDrawerStation;
      closeStationDrawer();
      startWalkingNavigation(st);
    }
  });

  // Student Action 2: Navigate via AR Cam
  document.getElementById('drawerActionAr')?.addEventListener('click', () => {
    if (activeDrawerStation) {
      const st = activeDrawerStation;
      closeStationDrawer();
      switchView('ar');
      setArStation(st.id);
    }
  });

  // Student Action 3: Save to Favorites
  document.getElementById('drawerActionFav')?.addEventListener('click', () => {
    if (activeDrawerStation) {
      activeDrawerStation.isFavorite = !activeDrawerStation.isFavorite;
      const favBtn = document.getElementById('drawerActionFav');
      if (favBtn) {
        favBtn.textContent = activeDrawerStation.isFavorite ? '★ Saved to Favorite Fountains' : '☆ Save to Favorite Fountains';
        favBtn.style.color = activeDrawerStation.isFavorite ? 'var(--amber)' : '';
      }
      renderNearbyList();
      showToast(activeDrawerStation.isFavorite ? `Added ${activeDrawerStation.name} to Favorites` : `Removed ${activeDrawerStation.name} from Favorites`);
    }
  });

  // Student Action 4: Report Dispenser Issue
  document.getElementById('drawerActionReport')?.addEventListener('click', () => {
    if (activeDrawerStation) {
      const st = activeDrawerStation;
      closeStationDrawer();
      openReportModal(st);
    }
  });
}

function openStationDrawer(station) {
  activeDrawerStation = station;
  const drawer = document.getElementById('stationDrawerBackdrop');
  if (!drawer) return;

  document.getElementById('drawerStationName').textContent = station.name;
  document.getElementById('drawerStationId').textContent = `STATION ${station.id} • ${station.quad} • ${station.block}`;

  const gaugeBox = document.getElementById('drawerGauge');
  if (gaugeBox) gaugeBox.style.setProperty('--gauge-pct', station.level);
  document.getElementById('drawerGaugeVal').textContent = station.level;

  document.getElementById('drawerPurity').textContent = `${station.purity}% (${station.statusLabel})`;
  document.getElementById('drawerTDS').textContent = `${station.tds} ppm`;
  document.getElementById('drawerPH').textContent = `${station.ph} (Balanced Alkaline)`;
  document.getElementById('drawerFlow').textContent = station.flow;
  document.getElementById('drawerDispensed').textContent = station.dispensed;
  document.getElementById('drawerSanitized').textContent = station.lastSanitized;
  document.getElementById('drawerFilterHealth').textContent = station.filterHealth;
  document.getElementById('drawerUv').textContent = station.uvStatus;

  // Update Favorite button status in drawer
  const favBtn = document.getElementById('drawerActionFav');
  if (favBtn) {
    favBtn.textContent = station.isFavorite ? '★ Saved to Favorite Fountains' : '☆ Save to Favorite Fountains';
    favBtn.style.color = station.isFavorite ? 'var(--amber)' : '';
  }

  drawer.classList.add('open');

  if (typeof anime !== 'undefined') {
    anime({
      targets: '.station-drawer',
      translateX: ['100%', '0%'],
      duration: 380,
      easing: 'easeOutCubic'
    });
  }
}

function closeStationDrawer() {
  const drawer = document.getElementById('stationDrawerBackdrop');
  if (drawer) drawer.classList.remove('open');
  activeDrawerStation = null;
}

// ========================================================
// 10. TOOLTIPS, TOASTS & SIMULATION (WITH ANIME.JS)
// ========================================================
function initTooltips() {
  let tooltip = document.getElementById('sensorTooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'sensorTooltip';
    tooltip.className = 'sensor-tooltip';
    document.body.appendChild(tooltip);
  }
}

function positionTooltip(event, tooltip) {
  if (!tooltip) return;
  const offset = 12;
  tooltip.style.left = `${event.clientX + offset}px`;
  tooltip.style.top = `${event.clientY + offset}px`;
}

function showToast(message) {
  const toast = document.getElementById('toastMsg');
  const text = document.getElementById('toastText');
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add('show');

  if (typeof anime !== 'undefined') {
    anime({
      targets: toast,
      translateY: [20, 0],
      scale: [0.92, 1],
      opacity: [0, 1],
      duration: 350,
      easing: 'easeOutBack'
    });
  }

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function startSimulation() {
  let seconds = 8;
  const timeDisplay = document.getElementById('liveSyncText');

  setInterval(() => {
    seconds += 2;
    if (seconds > 58) seconds = 2;
    if (timeDisplay) timeDisplay.textContent = `SYNCED ${seconds}s AGO`;

    // Micro fluctuations
    const purityVal = (98.3 + (Math.random() * 0.2 - 0.1)).toFixed(1);
    const flowVal = (2.1 + (Math.random() * 0.2 - 0.1)).toFixed(1);
    const purityEl = document.getElementById('livePurityVal');
    const flowEl = document.getElementById('liveFlowVal');
    if (purityEl) purityEl.innerHTML = `${purityVal}<small>%</small>`;
    if (flowEl) flowEl.innerHTML = `${flowVal}<small>L/min</small>`;
  }, 3500);
}

// Expose key functions globally for inline HTML event handlers
window.switchView = switchView;
window.selectMapStation = selectMapStation;
window.selectCseFloor = selectCseFloor;
window.startWalkingNavigation = startWalkingNavigation;
window.stopWalkingNavigation = stopWalkingNavigation;
window.openStationDrawer = openStationDrawer;
window.closeStationDrawer = closeStationDrawer;
window.openReportModal = openReportModal;
window.closeReportModal = closeReportModal;
window.showToast = showToast;
