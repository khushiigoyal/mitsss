import { NavItem, RecruitmentNotice, NotificationItem, CarouselSlide, QuickLinkItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    isRed: true,
    href: '#home',
  },
  {
    id: 'about',
    label: 'About Institute',
    children: [
      { title: 'Overview & Heritage', description: 'Established in 1957 by His Highness Maharaja Jiwaji Rao Scindia' },
      { title: 'Vision, Mission & Core Values', description: 'Transforming technical education with character and innovation' },
      { title: 'Deemed University Status', description: 'Distinct Category declared by Ministry of Education, Govt. of India' },
      { title: 'NAAC Accreditation (A++ Grade)', description: 'Recognized with outstanding 3.65 CGPA by NAAC' },
      { title: "President & Board of Governors", description: 'Leadership headed by Shrimant Jyotiraditya M. Scindia' },
      { title: "Director's Message", description: 'Message from the leadership on institutional progress' },
      { title: 'Mandatory Disclosures & AICTE Approvals', description: 'Public audits, NIRF reports and RTI disclosures' },
    ],
  },
  {
    id: 'administration',
    label: 'Administration',
    children: [
      { title: 'Board of Governors (BOG)', description: 'Apex governing body of the Institute' },
      { title: 'Academic Council', description: 'Statutory body for all academic regulations and syllabus' },
      { title: 'Finance Committee', description: 'Budgetary approvals and institutional allocation' },
      { title: 'Office of the Registrar', description: 'Administrative administration and student records' },
      { title: 'Deans & Heads of Departments', description: 'Academic deans and departmental leadership' },
      { title: 'Internal Quality Assurance Cell (IQAC)', description: 'Continuous improvement in academic delivery' },
    ],
  },
  {
    id: 'academics',
    label: 'Academics',
    children: [
      { title: 'Undergraduate Programs (B.Tech)', description: 'CSE, AI & Robotics, Data Science, IoT, Civil, Mechanical, ECE, EE, Chemical' },
      { title: 'Postgraduate Programs (M.Tech, MCA, MBA)', description: 'Advanced specialized postgraduate degrees' },
      { title: 'Doctoral Programs (Ph.D.)', description: 'Research in engineering, sciences, and humanities' },
      { title: 'Academic Calendar 2026-27', description: 'Schedules for semesters, exams and academic milestones' },
      { title: 'Curriculum & NEP 2020 Schemes', description: 'Choice Based Credit System (CBCS) and multi-disciplinary minors' },
      { title: 'Examination & Grading Cell', description: 'Continuous evaluation system and result portal' },
    ],
  },
  {
    id: 'students-life',
    label: 'Students Life',
    children: [
      { title: 'Campus Facilities & Infrastructure', description: '47-acre lush green campus with modern smart classrooms' },
      { title: 'Hostels & Residential Halls', description: 'Comfortable on-campus accommodation for boys & girls' },
      { title: 'Technical Clubs & Societies', description: 'Robotics Club, Coding Society, Aero Club, SAE Collegiate' },
      { title: 'Cultural, Arts & Literary Wings', description: 'Music, theatre, debating, photography and annual fest' },
      { title: 'Sports & Gymnasium Complex', description: 'Cricket ground, tennis, basketball, badminton courts & gym' },
      { title: 'NSS, NCC & Social Outreach', description: 'Community development, environmental drives and blood camps' },
    ],
  },
  {
    id: 'admission',
    label: 'Admission',
    children: [
      { title: 'B.Tech Admission 2026', description: 'Admission via JEE Mains & DTE MP Centralized Counseling' },
      { title: 'PG Admissions (GATE / CMAT / MP PRE-MCA)', description: 'Master of Technology, Management and Computer Applications' },
      { title: 'Ph.D. Entrance Examination', description: 'Visvesvaraya Ph.D. Scheme & Institutional Research Fellowships' },
      { title: 'Fee Structure & Refund Policy', description: 'Official semester-wise tuition fees and university charges' },
      { title: 'Scholarships & Medhavi Chhatra Yojana', description: 'State & Central Govt. scholarships, Post-matric & Merit grants' },
      { title: 'International Students Admission', description: 'Direct admissions for NRI, PIO and foreign nationals' },
    ],
  },
  {
    id: 'rnd',
    label: 'R&D',
    children: [
      { title: 'Research & Consultancy Cell', description: 'Promoting high-impact research and industry testing' },
      { title: 'Sponsored Research Projects', description: 'DST, SERB, AICTE, DRDO, ISRO funded active projects' },
      { title: 'Patents & Intellectual Property (IPR)', description: 'Institutional patents granted and filed' },
      { title: 'Center of Excellence (CoE)', description: 'Advanced AI, Cyber-Physical Systems & Drone Innovation Lab' },
      { title: 'Industry MoUs & International Ties', description: 'Collaborations with top global universities and Fortune 500s' },
    ],
  },
  {
    id: 'placements',
    label: 'Training & Placements',
    children: [
      { title: 'Placement Statistics & Highlights', description: 'Consistent 90%+ placement track record with top tech giants' },
      { title: 'Our Esteemed Recruiters', description: 'TCS, Infosys, Amazon, Microsoft, L&T, Siemens, Adani, Cognizant' },
      { title: 'Internship & Career Guidance Cell', description: 'Paid 6-month industrial internships and pre-placement training' },
      { title: 'Employability Skill Enhancement', description: 'Soft skills, coding bootcamps, and mock technical interviews' },
      { title: 'Corporate Relations & Invitation', description: 'Brochure and campus visit scheduling for recruiters' },
    ],
  },
  {
    id: 'aviation',
    label: 'Aviation Training',
    badge: 'DGCA',
    href: '#aviation',
  },
  {
    id: 'conference',
    label: 'Conference',
    href: '#conference',
  },
  {
    id: 'gallery',
    label: 'Gallery',
    children: [
      { title: 'Campus Photo Gallery', description: 'Historic architecture, botanical lawns, and auditoriums' },
      { title: 'Inauguration & Foundation Day', description: 'Glimpses of high-profile dignitaries and milestone celebrations' },
      { title: 'Convocation Ceremony', description: 'Gold medals, honorary doctorates, and degree conferral' },
      { title: 'Student Festivals (Techfest & Cul-Fest)', description: 'Electrifying hackathons and cultural performances' },
      { title: '360° Virtual Campus Walkthrough', description: 'Immersive exploration of academic blocks and hostels' },
    ],
  },
];

export const RECRUITMENT_NOTICES: RecruitmentNotice[] = [
  {
    id: 'rec-01',
    title: 'Applications are invited for the regular position of Assistant Professor',
    category: 'Faculty',
    referenceNo: 'MITS/ADMIN/REC/2026/04',
    deadline: 'October 30, 2026',
    payScale: 'Level 10 (Entry Pay ₹57,700 - ₹1,82,400) as per 7th CPC',
    positions: [
      'Assistant Professor in Computer Science & Engineering',
      'Assistant Professor in Artificial Intelligence & Data Science',
      'Assistant Professor in Electronics & Communication Engineering',
      'Assistant Professor in Electrical Engineering',
      'Assistant Professor in Mechanical & Mechatronics',
      'Assistant Professor in Civil Engineering',
      'Assistant Professor in Mathematics / Applied Sciences',
    ],
    eligibility: 'First Class Master’s Degree in the appropriate branch of Engineering & Technology with Ph.D. degree in relevant discipline. Consistent excellent academic track record with high-impact SCI/Scopus journal publications.',
    qualifications: [
      'B.E./B.Tech/B.S. and M.E./M.Tech/M.S. or Integrated M.Tech in relevant branch with First Class or equivalent.',
      'Ph.D. in appropriate engineering / technology discipline from an institute of national importance or reputed university.',
      'Proven record of research publications in high impact peer-reviewed indexed journals.',
      'Teaching / Industry experience desirable as per UGC/AICTE / Institute norms.',
    ],
    department: ['CSE', 'AI & DS', 'IT', 'ECE', 'EE', 'ME', 'Civil', 'Applied Sciences'],
  },
  {
    id: 'rec-02',
    title: 'Applications are invited for the regular position of Training & Placement Officer/Sports Officer (Male)/Assistant Engineer (Civil) and Company Secretary/ Chartered Accountant',
    category: 'Administrative',
    referenceNo: 'MITS/ADMIN/REC/2026/05',
    deadline: 'November 15, 2026',
    payScale: 'Level 10 / Level 11 as per 7th CPC (commensurate with post and experience)',
    positions: [
      'Training & Placement Officer (TPO) - 01 Post',
      'Sports Officer (Male) - 01 Post',
      'Assistant Engineer (Civil) - 01 Post',
      'Company Secretary / Chartered Accountant (CA) - 01 Post',
    ],
    eligibility: 'Master’s degree / Professional qualification (CA/CS/M.P.Ed/M.Tech/MBA) with minimum 5 years of relevant administrative/field experience in recognized institutions or reputed corporate organizations.',
    qualifications: [
      'TPO: Master’s in Engineering/Management with minimum 5 years corporate liaising or university placement experience.',
      'Sports Officer (Male): Master’s Degree in Physical Education (M.P.Ed) with at least 55% marks, UGC NET / State Level credentials.',
      'Assistant Engineer (Civil): B.E. / B.Tech in Civil Engineering with 3+ years experience in public works / institutional infrastructure.',
      'Company Secretary / CA: Associate/Fellow Member of ICAI / ICSI with expertise in financial reporting, statutory audits, and tax compliance.',
    ],
  },
];

export const NOTIFICATION_TICKER_ITEMS = [
  'Post-Doctoral-Fellowship Admission under Vishveshwaraya scheme open for Academic Year 2026-27',
  'AICTE QIP Research Admissions 2026-27 announced for eligible engineering faculty and scholars',
  'Registration for International Conference on Sustainable Engineering & Smart Computing (ICSE 2026) is now open',
  'MITS Gwalior awarded prestigious A++ Grade by NAAC with 3.65 CGPA under Deemed University Framework',
  'Applications are invited for regular faculty and officer positions in Engineering and Administrative cadres',
  'Last date for submission of End-Semester Examination & Grade Improvement forms extended',
];

export const NOTIFICATION_LIST: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Post-Doctoral-Fellowship Admission under Vishveshwaraya Scheme Open (Round II)',
    date: 'Sep 21, 2026',
    category: 'Research',
    isNew: true,
  },
  {
    id: 'notif-2',
    title: 'Recruitment Notice 2026: Assistant Professor (CSE, AI, ECE, Civil, Mechanical)',
    date: 'Sep 18, 2026',
    category: 'Recruitment',
    isNew: true,
  },
  {
    id: 'notif-3',
    title: 'Schedule for Odd Semester Mid-Term & Lab Practical Examinations Announced',
    date: 'Sep 15, 2026',
    category: 'Examination',
  },
  {
    id: 'notif-4',
    title: 'Call for Papers: 5th International Conference on Advances in Computing & Sustainable Infrastructure',
    date: 'Sep 12, 2026',
    category: 'Conference',
    isNew: true,
  },
  {
    id: 'notif-5',
    title: 'National Scholarship Portal (NSP) and Medhavi Chhatra Portal Verification Window Active',
    date: 'Sep 10, 2026',
    category: 'Academic',
  },
  {
    id: 'notif-6',
    title: 'DGCA Certified Drone Pilot & Remote Sensing Certificate Course Admissions Open',
    date: 'Sep 05, 2026',
    category: 'Academic',
  },
];

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    title: 'Inauguration & Academic Conclave Ceremony',
    subtitle: 'Faculty and student scholars gathering for the grand launch of pioneering tech initiatives at MITS Gwalior',
    tag: 'Campus Milestone',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
    highlightQuote: {
      text: 'Creativity is the key to success in the future, and education is where teachers can bring creativity in children',
      author: 'Dr. APJ Abdul Kalam',
    },
  },
  {
    id: 2,
    title: 'Historic Heritage Campus & Architectural Splendor',
    subtitle: 'Sprawling 47-acre campus established in 1957, harmonizing venerable tradition with frontier engineering',
    tag: 'Estd. 1957',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80',
    highlightQuote: {
      text: 'Be the change you want to see in the world',
      author: 'Mahatma Gandhi',
    },
  },
  {
    id: 3,
    title: 'DGCA Approved Drone Academy & Aviation Training Hub',
    subtitle: 'Pioneering remote pilot training, UAV flight simulation, avionics engineering and geospatial diagnostics',
    tag: 'Aviation Center',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 4,
    title: 'High-Performance Research & Artificial Intelligence Labs',
    subtitle: 'NVIDIA GPU clusters, IoT sensor testbeds, and advanced robotic manufacturing centers',
    tag: 'Innovation & R&D',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
  },
];

export const QUICK_LAUNCH_ITEMS: QuickLinkItem[] = [
  {
    id: 'ql-erp',
    name: 'IMS / ERP Portal',
    description: 'Faculty, staff and student automated management system',
    category: 'Portals',
    icon: 'LayoutGrid',
  },
  {
    id: 'ql-lms',
    name: 'Moodle LMS',
    description: 'Online learning modules, lecture notes and assignments',
    category: 'Academics',
    icon: 'BookOpen',
  },
  {
    id: 'ql-fee',
    name: 'Online Fee Payment',
    description: 'Secure payment gateway for tuition, hostel and examination fee',
    category: 'Services',
    icon: 'CreditCard',
  },
  {
    id: 'ql-results',
    name: 'Results & Grade Cards',
    description: 'End semester exam result sheets and digital transcripts',
    category: 'Academics',
    icon: 'Award',
  },
  {
    id: 'ql-library',
    name: 'Central E-Library',
    description: 'Access IEEE Xplore, ScienceDirect, Springer, and DELNET',
    category: 'Academics',
    icon: 'Library',
  },
  {
    id: 'ql-training',
    name: 'Training & Placements Cell',
    description: 'Placement notices, registered recruiter portal and schedules',
    category: 'Services',
    icon: 'Briefcase',
  },
  {
    id: 'ql-anti-ragging',
    name: 'Anti-Ragging Cell & Helpline',
    description: '24x7 confidential anti-ragging support and grievance redressal',
    category: 'Support',
    icon: 'ShieldCheck',
  },
  {
    id: 'ql-alumni',
    name: 'Global Alumni Connect',
    description: 'Network with MITS alumni across 60+ countries worldwide',
    category: 'Portals',
    icon: 'Users',
  },
  {
    id: 'ql-digilocker',
    name: 'DigiLocker & NAD',
    description: 'National Academic Depository certified digital degree verification',
    category: 'Services',
    icon: 'FileCheck',
  },
];

export const INSTITUTIONAL_STATS = [
  { label: 'Estd. Heritage', value: '1957', sub: '68+ Years of Technical Leadership' },
  { label: 'NAAC Accreditation', value: 'A++', sub: '3.65 CGPA Top Tier Rank' },
  { label: 'Deemed University', value: 'Distinct Category', sub: 'Declared by Ministry of Education, Govt. of India' },
  { label: 'Campus Placement', value: '94%', sub: 'Highest CTC ₹1.2 Cr | Top Global MNCs' },
  { label: 'Research & Patents', value: '180+', sub: 'Patents filed & Published' },
];
