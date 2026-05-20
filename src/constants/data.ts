export interface Project {
  id: number;
  title: string;
  category: 'Web' | 'Desktop' | 'Game';
  tags: string[];
  description: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Aloha Security Agency System',
    category: 'Web',
    tags: ['Vanilla JS', 'HTML5/CSS3'],
    description: "Recruitment & Management System. Designed and implemented responsive interfaces for Applicant Portal and Admin System.",
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=1000'
  },
  {
    id: 2,
    title: 'Electronic Learning Management (ELMS)',
    category: 'Web',
    tags: ['Bootstrap 5', 'jQuery'],
    description: "A comprehensive learning platform for multi-level admins and students. Successfully passed defense.",
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000'
  },
  {
    id: 3,
    title: 'Cafeteria Ordering System',
    category: 'Web',
    tags: ['Full-Stack', 'WebSockets'],
    description: "Real-time order processing with inventory tracking via recipe-based deductions and sales analytics.",
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000'
  },
  {
    id: 4,
    title: 'MLBB Draft & Ban Tool',
    category: 'Web',
    tags: ['Esports', 'Logic'],
    description: "Web-based tool for IT Week Esports. MPL-style pick/ban phases used for actual tournament management.",
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000'
  },
  {
    id: 5,
    title: "Chrono's Royale",
    category: 'Web',
    tags: ['PHP', 'UX/UI'],
    description: "Luxury Watch Store with mechanical splash screens and secure PHP authentication.",
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000'
  },
  {
    id: 6,
    title: 'History Dash',
    category: 'Game',
    tags: ['HypeHype', 'GameFest Champion'],
    description: "Championship-winning mobile endless runner combining historical trivia with fast-paced gameplay.",
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000'
  },
  {
    id: 7,
    title: 'Point of Sale (POS) System',
    category: 'Desktop',
    tags: ['VB.NET', 'SQL Server'],
    description: "Desktop application for sales management and financial reporting built for IT Week.",
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000'
  },
  {
    id: 8,
    title: 'Game Landing Page',
    category: 'Web',
    tags: ['HTML/CSS', 'Responsive'],
    description: "Fully responsive landing page for a fictional video game using pure CSS techniques.",
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000'
  },
  {
    id: 9,
    title: 'CineFlix',
    category: 'Web',
    tags: ['Tailwind', 'JavaScript'],
    description: "Immersive movie discovery platform featuring trending titles, search, and trailers.",
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000'
  },
  {
    id: 10,
    title: 'Tourista Trails',
    category: 'Web',
    tags: ['Leaflet.js', 'EmailJS'],
    description: "Travel website for Palawan featuring interactive maps and automated booking systems.",
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1000'
  },
  {
    id: 11,
    title: 'School Clinic Visit Record',
    category: 'Web',
    tags: ['System Analysis'],
    description: "Planned and architected the full system workflow for medical record tracking.",
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000'
  },
  {
    id: 12,
    title: 'Student Information System',
    category: 'Desktop',
    tags: ['VB.NET', 'QR Codes'],
    description: "VB.NET application with automatic QR code generation for identification and record management.",
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000'
  },
  {
    id: 13,
    title: 'Sales & Inventory System',
    category: 'Desktop',
    tags: ['VB.NET', 'Barcoding'],
    description: "Inventory system with password-free QR code sign-in and automated low-stock alerts.",
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1000'
  },
  {
    id: 14,
    title: 'Police Incident Record System',
    category: 'Desktop',
    tags: ['Solo Thesis', 'VB.NET'],
    description: "Solo thesis project digitizing police blotters with secure evidence and case handling.",
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000'
  },
  {
    id: 15,
    title: 'Automotive Rental System',
    category: 'Desktop',
    tags: ['QA', 'Frontend'],
    description: "Thesis project featuring automatic invoices and QR-based vehicle check-in/out.",
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000'
  },
  {
    id: 16,
    title: 'Pageant Tabulation System',
    category: 'Web',
    tags: ['LAN-Based', 'Real-time'],
    description: "LAN-based web system for school events ensuring instant, zero-error scoring results.",
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000'
  }
];