import {
  Monitor, Code2, Cloud, Shield, BarChart3, Network,
} from 'lucide-react'

export const services = [
  {
    id: 'it-consulting',
    slug: '/services/it-consulting',
    icon: Monitor,
    title: 'IT Consulting',
    short: 'Strategic technology guidance to align your IT infrastructure with business objectives.',
    description:
      'We provide strategic IT consulting services that help organizations navigate complex technology landscapes. Our experts work closely with your team to assess current systems, identify gaps, and design roadmaps for sustainable growth.',
    features: [
      'IT Strategy & Roadmap Development',
      'Digital Transformation Advisory',
      'Technology Audit & Assessment',
      'Vendor Selection & Management',
      'IT Governance & Compliance',
      'Budget Optimization & Cost Analysis',
    ],
    benefits: [
      { title: 'Reduced IT Costs', desc: 'Optimize your technology spend with data-driven recommendations.' },
      { title: 'Faster Decision Making', desc: 'Clear strategic vision accelerates business decisions.' },
      { title: 'Risk Mitigation', desc: 'Proactive identification and mitigation of technology risks.' },
      { title: 'Competitive Advantage', desc: 'Leverage cutting-edge technology to outpace competitors.' },
    ],
    technologies: ['ITIL', 'COBIT', 'ISO 27001', 'Agile', 'DevOps', 'TOGAF'],
    color: 'from-primary-700 to-primary-500',
    image1: '/IT%20Consulting.avif',
    image2: '/IT%20Consulting%202.jpg',
  },
  {
    id: 'software-development',
    slug: '/services/software-development',
    icon: Code2,
    title: 'Software Development',
    short: 'Custom software solutions engineered to drive efficiency and innovation at every scale.',
    description:
      'Our software development team builds robust, scalable, and maintainable applications tailored to your unique business requirements. From web applications to enterprise systems, we deliver software that performs.',
    features: [
      'Custom Web Application Development',
      'Mobile App Development (iOS & Android)',
      'Enterprise Software Solutions',
      'API Design & Integration',
      'Legacy System Modernization',
      'QA Testing & Quality Assurance',
    ],
    benefits: [
      { title: 'Tailored Solutions', desc: 'Software built specifically for your workflows, not generic templates.' },
      { title: 'Scalable Architecture', desc: 'Systems designed to grow alongside your business.' },
      { title: 'Faster Time-to-Market', desc: 'Agile delivery gets your product to users quickly.' },
      { title: 'Ongoing Support', desc: 'Dedicated support and maintenance after launch.' },
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'Flutter', 'PostgreSQL', 'MongoDB'],
    color: 'from-emerald-700 to-emerald-500',
    image1: '/Software%20Development.jpg',
    image2: '/Software%20Development%202.jpg',
  },
  {
    id: 'cloud-solutions',
    slug: '/services/cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    short: 'Seamless cloud migration, management, and optimization for agile modern businesses.',
    description:
      'Accelerate your digital journey with our end-to-end cloud services. We design, migrate, and manage cloud environments on AWS, Azure, and Google Cloud, enabling you to scale on demand while cutting infrastructure costs.',
    features: [
      'Cloud Migration & Strategy',
      'Multi-Cloud & Hybrid Cloud Architecture',
      'Cloud Infrastructure Management',
      'DevOps & CI/CD Pipeline Setup',
      'Cloud Cost Optimization',
      'Disaster Recovery & Backup Solutions',
    ],
    benefits: [
      { title: 'Elastic Scalability', desc: 'Scale resources up or down based on real-time demand.' },
      { title: 'Cost Efficiency', desc: 'Pay only for what you use and eliminate hardware overhead.' },
      { title: '99.9% Uptime SLA', desc: 'Highly available infrastructure with built-in redundancy.' },
      { title: 'Global Reach', desc: 'Deploy applications closer to users worldwide.' },
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
    color: 'from-sky-700 to-sky-500',
    image1: '/Cloud%20Solutions.jpg',
    image2: '/Cloud%20Solutions%202.jpg',
  },
  {
    id: 'cybersecurity',
    slug: '/services/cybersecurity',
    icon: Shield,
    title: 'Cybersecurity',
    short: 'Comprehensive security solutions protecting your digital assets from evolving threats.',
    description:
      'In an era of sophisticated cyber threats, protecting your business is non-negotiable. Our cybersecurity services provide multi-layered defense strategies, continuous monitoring, and rapid incident response to keep your data safe.',
    features: [
      'Vulnerability Assessment & Penetration Testing',
      'Security Information & Event Management (SIEM)',
      'Identity & Access Management (IAM)',
      'Endpoint Detection & Response (EDR)',
      'Compliance Management (GDPR, HIPAA, PCI-DSS)',
      'Security Awareness Training',
    ],
    benefits: [
      { title: 'Proactive Defense', desc: 'Identify and fix vulnerabilities before attackers can exploit them.' },
      { title: 'Regulatory Compliance', desc: 'Stay compliant with industry regulations and avoid penalties.' },
      { title: '24/7 Monitoring', desc: 'Round-the-clock threat detection and response capabilities.' },
      { title: 'Business Continuity', desc: 'Minimized downtime and fast recovery from security incidents.' },
    ],
    technologies: ['Splunk', 'CrowdStrike', 'Palo Alto', 'Fortinet', 'Nessus', 'Metasploit', 'ISO 27001'],
    color: 'from-red-700 to-rose-500',
    image1: '/Cybersecurity.jpg',
    image2: '/Cybersecurity%202.jpg',
  },
  {
    id: 'data-analytics',
    slug: '/services/data-analytics',
    icon: BarChart3,
    title: 'Data Analytics',
    short: 'Transform raw data into actionable intelligence that powers smarter business decisions.',
    description:
      'Unlock the full potential of your data with our analytics and business intelligence services. We build data pipelines, dashboards, and predictive models that help you understand trends, forecast outcomes, and act with confidence.',
    features: [
      'Business Intelligence & Reporting',
      'Big Data Engineering & Architecture',
      'Predictive Analytics & Machine Learning',
      'Data Warehousing & ETL Pipelines',
      'Real-time Analytics Dashboards',
      'Data Governance & Quality Management',
    ],
    benefits: [
      { title: 'Data-Driven Culture', desc: 'Empower every team with actionable, real-time insights.' },
      { title: 'Revenue Growth', desc: 'Identify new opportunities hidden within your data.' },
      { title: 'Operational Efficiency', desc: 'Eliminate bottlenecks using data-backed process optimization.' },
      { title: 'Predictive Power', desc: 'Anticipate market shifts before they impact your business.' },
    ],
    technologies: ['Power BI', 'Tableau', 'Python', 'Apache Spark', 'Snowflake', 'dbt', 'TensorFlow'],
    color: 'from-violet-700 to-violet-500',
    image1: '/Data%20Analytics.jpg',
    image2: '/Data%20Analytics%202.jpg',
  },
  {
    id: 'network-solutions',
    slug: '/services/network-solutions',
    icon: Network,
    title: 'Network Solutions',
    short: 'Reliable, high-performance network infrastructure designed for connected modern enterprises.',
    description:
      'A robust network is the backbone of every productive business. We design, implement, and manage enterprise-grade network solutions that deliver speed, security, and reliability across your entire organization.',
    features: [
      'Network Design & Architecture',
      'LAN / WAN Infrastructure Setup',
      'SD-WAN & MPLS Implementation',
      'Network Monitoring & Management',
      'Wireless & Wi-Fi Enterprise Solutions',
      'VoIP & Unified Communications',
    ],
    benefits: [
      { title: 'Zero Downtime', desc: 'Redundant designs with automatic failover keep you always online.' },
      { title: 'High Performance', desc: 'Optimized routing and QoS deliver fast, reliable connectivity.' },
      { title: 'Centralized Management', desc: 'Manage your entire network from a single dashboard.' },
      { title: 'Future-Ready', desc: 'Scalable designs built to accommodate business growth.' },
    ],
    technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Meraki', 'Ubiquiti', 'Wireshark'],
    color: 'from-amber-700 to-amber-500',
    image1: '/Network%20Solutions.jpg',
    image2: '/Network%20Solutions%202.jpg',
  },
]

export const stats = [
  { value: 500,  suffix: '+', label: 'Projects Delivered' },
  { value: 200,  suffix: '+', label: 'Happy Clients' },
  { value: 12,   suffix: '+', label: 'Years Experience' },
  { value: 50,   suffix: '+', label: 'Expert Engineers' },
]

export const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, FinBridge Solutions',
    avatar: 'SM',
    text: 'WorksOrient Technologies transformed our legacy infrastructure into a modern cloud-native platform in under six months. The team\'s expertise and dedication were exceptional throughout the entire engagement.',
  },
  {
    name: 'Raj Patel',
    role: 'CEO, RetailNova',
    avatar: 'RP',
    text: 'Their custom ERP solution reduced our operational overhead by 40%. The project was delivered on time and within budget — something rare in this industry. Highly recommended!',
  },
  {
    name: 'Amanda Chen',
    role: 'Head of IT, MedCore Hospitals',
    avatar: 'AC',
    text: 'The cybersecurity audit conducted by WorksOrient revealed critical vulnerabilities we weren\'t aware of. Their remediation plan was comprehensive and professionally executed.',
  },
  {
    name: 'David Okonkwo',
    role: 'Director of Operations, LogiTrack',
    avatar: 'DO',
    text: 'From network redesign to managed services, WorksOrient has been our trusted IT partner for three years. Their proactive support prevents issues before they become problems.',
  },
]

export const teamMembers = [
  { name: 'Arjun Sharma',    role: 'Chief Executive Officer',     initials: 'AS', years: 15 },
  { name: 'Priya Mehta',     role: 'Chief Technology Officer',    initials: 'PM', years: 12 },
  { name: 'Michael Torres',  role: 'Head of Cybersecurity',       initials: 'MT', years: 10 },
  { name: 'Neha Kapoor',     role: 'Lead Software Architect',     initials: 'NK', years: 9  },
  { name: 'James Whitfield', role: 'Cloud Solutions Director',    initials: 'JW', years: 11 },
  { name: 'Fatima Al-Hassan','role': 'Data Analytics Manager',    initials: 'FA', years: 8  },
]

export const techLogos = [
  'AWS', 'Microsoft Azure', 'Google Cloud', 'React', 'Node.js',
  'Kubernetes', 'Python', 'Cisco', 'Salesforce', 'SAP',
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    desc: 'We begin by deeply understanding your business goals, existing infrastructure, and challenges through thorough discovery sessions.',
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    desc: 'Our experts craft a tailored roadmap with clear milestones, timelines, and resource allocations aligned to your objectives.',
  },
  {
    step: '03',
    title: 'Execution & Delivery',
    desc: 'Using agile methodologies, we implement solutions iteratively — ensuring quality, transparency, and on-time delivery.',
  },
  {
    step: '04',
    title: 'Support & Optimization',
    desc: 'Post-launch, we provide ongoing monitoring, maintenance, and continuous optimization to maximize your ROI.',
  },
]
