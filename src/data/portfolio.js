// ═══════════════════════════════════════════════════════════
//  ANSHUL KHICHI — PORTFOLIO DATA
//  Clean · No emojis · Professional
// ═══════════════════════════════════════════════════════════

export const personal = {
  name:      'Anshul Khichi',
  firstName: 'Anshul',
  lastName:  'Khichi',
  title:     'Full-Stack Developer & IoT Innovator',
  subtitle:  'Building web applications, mobile apps & hardware systems that actually ship.',
  tagline:   'MERN · Flutter · IoT · AI',
  location:  'Bhilwara, Rajasthan, India',
  email:     'khatikanshul8@gmail.com',
  phone:     '+91 7976921685',
  linkedin:  'https://linkedin.com/in/anshul-khichi',
  github:    'https://github.com/AnshulKhichi11',
  resume:    '/AnshulKhichi_Resume.pdf',
  available: true,
  objective:
    'Versatile Full-Stack Developer with expertise in MERN stack, Flutter, and IoT hardware integration. Skilled in building scalable web and mobile applications, real-time monitoring systems, and automation solutions that bridge software and hardware innovation.',
}

// ─────────────────────────────────────────────
//  EDUCATION
// ─────────────────────────────────────────────
export const education = [
  {
    id:         'btech',
    degree:     'Bachelor of Technology — Information Technology',
    school:     'Manikya Lal Verma Textile & Engineering College (MLVTEC)',
    university: 'Rajasthan Technical University, Kota',
    location:   'Bhilwara, Rajasthan',
    period:     'Jul 2023 – Jul 2027',
    grade:      'CGPA: 8.2 / 10',
    highlights: [
      'Specialization in Web & Mobile Development',
      'Core Member — Techbizz Club',
      'Participant — Smart India Hackathon 2025',
    ],
  },
  {
    id:         'class12',
    degree:     'Senior Secondary (Class XII) — Science, CBSE',
    school:     'Swami Vivekanand Government Model School',
    university: '',
    location:   'Bhilwara, Rajasthan',
    period:     '2020 – 2022',
    grade:      '',
    highlights: [
      'Stream: Physics, Chemistry, Mathematics, Computer Science',
    ],
  },
]

// ─────────────────────────────────────────────
//  EXPERIENCE
// ─────────────────────────────────────────────
export const experience = [
  {
    id:          'skyroot',
    role:        'Developer & Hardware Integrator',
    company:     'Kshitij',
    type:        'Full-time',
    location:    'Bhilwara, Rajasthan',
    period:      'Jun 2025 – Oct 2025',
    current:     false,
    color:       '#dc2626',
    description:
      'Built an IoT-enabled Parachute Deployment System that automates parachute release at 400 m altitude using real-time sensor fusion, GPS tracking, and GSM communication.',
    highlights: [
      'Designed & deployed IoT-enabled parachute system triggering at 400 m altitude automatically.',
      'Integrated barometric pressure sensors, GPS modules & GSM for live tracking and base alerts.',
      'Ensured hardware–software synchronization through precise sensor calibration routines.',
      'Improved deployment reliability by 40% through iterative testing and firmware optimization.',
    ],
    tech: ['Arduino', 'C++', 'GPS Module', 'GSM SIM800', 'Python', 'Sensors'],
  },
  {
    id:          'readybytes',
    role:        'Full Stack / Backend Developer Intern',
    company:     'Ready Bytes Software Labs',
    type:        'Internship',
    location:    'Bhilwara, Rajasthan',
    period:      'Apr 2024 – Jul 2024',
    current:     false,
    color:       '#1a56db',
    description:
      'Developed and optimized scalable web applications using the MERN stack. Focused on backend performance, security, and clean architecture.',
    highlights: [
      'Built & optimized scalable web applications using Node.js, Express, MongoDB, and React.',
      'Improved backend efficiency by 25% through query optimization and Redis-based caching.',
      'Implemented secure JWT authentication with granular role-based access control (RBAC).',
      'Collaborated in Agile sprints using Git and Postman.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redis', 'REST API'],
  },
]

// ─────────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────────
export const projects = [
  {
    id:          'astraforge',
    title:       'AstraForge — GUI for AstraDB',
    category:    'Desktop App',
    year:        '2026',
    status:      'Live',
    statusColor: 'blue',
    color:       '#7c3aed',
    description:
      'A clean, powerful desktop GUI for AstraDB. Browse collections, run queries, manage data — from an app that feels fast and professional. Cross-platform, MIT licensed, no account required.',
    longDesc:
      'Built a GUI tool for interacting with AstraDB (Apache Cassandra cloud). Features collection browsing, document viewing, query execution, and schema inspection — all from a native-feeling desktop interface.',
    highlights: [
      'Cross-platform — Windows, macOS, Linux',
      'MIT License — free forever',
      'No account required',
      'Real-time query execution',
    ],
    tech:     ['React', 'Electron', 'AstraDB', 'Node.js', 'REST API', 'Tailwind CSS'],
    github:   'https://astrawebsite.vercel.app/',
    live:     null,
    featured: true,
  },
  {
    id:          'parachute',
    title:       'Skyroot Parachute Deployment System',
    category:    'IoT',
    year:        '2025',
    status:      'Shipped',
    statusColor: 'green',
    color:       '#dc2626',
    description:
      'IoT-enabled parachute deployment system that automatically triggers release at 400 m altitude with live GPS tracking and real-time ground station alerts.',
    longDesc:
      'Designed and built a complete hardware-software system for autonomous parachute deployment in unmanned aerial vehicles. Uses barometric altitude sensing, GPS positioning, and GSM communication for end-to-end safety coverage.',
    highlights: [
      'Auto-triggers at exact 400 m altitude',
      'Live GPS tracking',
      'Real-time SMS alerts to ground station',
      'Redundant sensor fusion for reliability',
    ],
    tech:     ['Arduino', 'C++', 'GPS NEO-6M', 'GSM SIM800L', 'BMP280', 'Python'],
    github:   'https://github.com/AnshulKhichi11',
    live:     null,
    featured: true,
  },
  {
    id:          'mining',
    title:       'Automatic Mining Alert System',
    category:    'IoT',
    year:        '2025',
    status:      'SIH 2025',
    statusColor: 'blue',
    color:       '#d97706',
    description:
      'AI-powered safety solution for mining sites. Integrates soil moisture, slope sensors, rainfall data, and vegetation index to generate predictive real-time disaster prevention alerts.',
    longDesc:
      'Submitted to Smart India Hackathon 2025 for the Ministry of Mines. Uses multimodal sensor fusion with an ML model to predict slope failures and flooding risks before they become catastrophic events.',
    highlights: [
      'Multi-sensor fusion architecture',
      'ML-based risk prediction model',
      'Real-time monitoring dashboard',
      'Ministry of Mines problem statement',
    ],
    tech:     ['IoT Sensors', 'Python', 'Flask', 'React', 'TensorFlow Lite', 'MQTT'],
    github:   'https://github.com/AnshulKhichi11',
    live:     null,
    featured: true,
  },
  {
    id:          'hospital',
    title:       'Bhilwara Private Hospital Website',
    category:    'Full Stack',
    year:        '2024',
    status:      'Delivered',
    statusColor: 'green',
    color:       '#0891b2',
    description:
      'Responsive full-stack hospital management website streamlining appointment booking, doctor listings, and patient record handling with secure multi-role authentication.',
    longDesc:
      'Built a complete Hospital Management System for a local private hospital in Bhilwara. Features patient registration, doctor scheduling, appointment management, and an admin dashboard with analytics.',
    highlights: [
      'Appointment booking system',
      'Separate doctor & patient portals',
      'Admin dashboard with analytics',
      'Role-based access control (RBAC)',
    ],
    tech:     ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    github:   'https://github.com/AnshulKhichi11',
    live:     null,
    featured: true,
  },
]

// ─────────────────────────────────────────────
//  SKILLS
// ─────────────────────────────────────────────
export const skills = {
  'Languages': {
    color: '#1a56db',
    items: ['JavaScript', 'Java', 'Dart', 'Python', 'C++', 'HTML5', 'CSS3'],
  },
  'Frontend': {
    color: '#0891b2',
    items: ['React.js', 'Flutter', 'Tailwind CSS', 'Bootstrap', 'GSAP'],
  },
  'Backend': {
    color: '#7c3aed',
    items: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'WebSockets'],
  },
  'Database': {
    color: '#059669',
    items: ['MongoDB', 'Firebase', 'AstraDB', 'MySQL', 'Mongoose'],
  },
  'IoT & Hardware': {
    color: '#dc2626',
    items: ['Arduino', 'GPS Modules', 'GSM SIM800', 'BMP280', 'Servo Motors', 'Arduino IDE'],
  },
  'Tools & Platforms': {
    color: '#d97706',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB Compass', 'Firebase Console'],
  },
}

// ─────────────────────────────────────────────
//  ACHIEVEMENTS
// ─────────────────────────────────────────────
export const achievements = [
  {
    id:          'udbhavan',
    title:       '2nd Prize — Udbhavan 2.0',
    org:         'Sangam University, Rajasthan',
    year:        '2024',
    type:        'Award',
    color:       '#d97706',
    description:
      'Secured 2nd place for outstanding innovation and technical excellence among multiple competing teams across Rajasthan.',
    proof: null,
  },
  {
    id:          'sih',
    title:       'Smart India Hackathon 2025',
    org:         'Ministry of Education, India',
    year:        '2025',
    type:        'Hackathon',
    color:       '#1a56db',
    description:
      "Developed an AI + IoT-powered Automatic Mining Alert System for the Ministry of Mines — one of India's largest student hackathons.",
    proof: null,
  },
  {
    id:          'techbizz',
    title:       'Core Member — Techbizz Club',
    org:         'MLVTEC, Bhilwara',
    year:        '2023 – Present',
    type:        'Leadership',
    color:       '#059669',
    description:
      'Actively organising college hackathons, coding competitions, and technical workshops. Mentoring junior students in web development and IoT.',
    proof: null,
  },
  {
    id:          'cdac',
    title:       'Finalist — C-DAC Hackathon 2026',
    org:         'Centre for Development of Advanced Computing',
    year:        '2026',
    type:        'Hackathon',
    color:       '#0891b2',
    description:
      'Reached the finals of the national-level C-DAC Hackathon 2026, competing against teams from premier engineering institutes across India.',
    proof: null,
  },
]

// ─────────────────────────────────────────────
//  CERTIFICATES
// ─────────────────────────────────────────────
export const certificates = [
  {
  id:            'isro-iirs',
  title:         'Geospatial Technology for Modelling of Urban Environment',
  issuer:        'ISRO — Indian Institute of Remote Sensing (IIRS)',
  year:          '2025',
  credentialUrl: 'https://drive.google.com/file/d/1gTHcoc2cbcJHKIHWcEEGN5Skz0r7O8ca/view?usp=sharing',
  color:         '#dc2626',
},
  {
  id:            'tcs-ion',
  title:         'TCS iON Career Edge — Young Professional',
  issuer:        'TCS iON — Tata Consultancy Services',
  year:          '2024',
  credentialUrl: 'https://drive.google.com/file/d/1DpKNr2jnMGcvj2ZI1FnCY-ngAuLsTRsf/view',
  color:         '#0369a1',
},
  {
  id:            'tcs-ion-it',
  title:         'TCS iON Career Edge — IT for Non-IT',
  issuer:        'TCS iON — Tata Consultancy Services',
  year:          '2024',
  credentialUrl: 'https://drive.google.com/file/d/1Dl6HOvBfGsSSvnTkKjjIdolFFj_o6LHu/view',
  color:         '#0369a1',
},
{
  id:            'apna-delta',
  title:         'Delta — Full Stack Web Development',
  issuer:        'Apna College',
  year:          '2024',
  credentialUrl: 'https://drive.google.com/file/d/1838hTrszt-iA2ckfz096yvIx6K0VRkd1/view?usp=sharing',
  color:         '#b45309',
}
]