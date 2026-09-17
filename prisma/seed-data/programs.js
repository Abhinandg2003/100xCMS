// Source data for the seed script. Icons are stored as plain string
// names (matching lucide-react export names) since React components
// can't be persisted — the frontend maps the name back to a component,
// e.g.:
//   import { Brain, Link2, Globe, Server, Code2, Lock } from 'lucide-react'
//   const ICONS = { Brain, Link2, Globe, Server, Code2, Lock }
//   const Icon = ICONS[program.metadata.icon]

const programs = [
  {
    id: 'ai',
    title: `Machine Learning \nand AI`,
    emoji: '🧠',
    icon: 'Brain',
    pastel: '#e8d5ff',
    pastelbg: 'rgba(180, 120, 255, 0.08)',
    pastelborder: 'rgba(180, 120, 255, 0.18)',
    glowColor: 'rgba(180, 120, 255, 0.25)',
    iconBg: 'rgba(180, 120, 255, 0.15)',
    iconColor: '#c084fc',
    duration: '16 Weeks',
    level: 'Beginner → Advanced',
    tag: 'Most Popular',
    tagColor: 'rgba(255, 159, 67, 0.15)',
    tagText: '#fece01',
    color: '#fece01',
    description:
      'Master ML, Deep Learning, NLP, and build real AI products from scratch with hands-on projects.',
    image:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&h=300&fit=crop',
    bgimg: '/images/AI2.jpg',
    categories: [
      {
        category: 'Foundations & History',
        subjects: [
          'What is AI',
          'History of AI',
          'How we reached Transformers',
          'What is Deep Learning',
          'Backpropagation',
          'NLP Basics',
        ],
      },
      {
        category: 'Neural Networks & Deep Learning',
        subjects: ['Neural Networks', 'RNNs', 'LSTMs', 'Sequential Models', 'CNNs'],
      },
      {
        category: 'Attention & Transformers',
        subjects: [
          'Simple Attention Coding',
          'Attention Variations',
          'KV Cache',
          'GQA',
          'MLA',
        ],
      },
      {
        category: 'LLM Engineering',
        subjects: [
          'HuggingFace End-to-End',
          'LLM Instrumentation',
          'Observability',
          'Tracing',
          'Context Engineering',
          'Summarization',
          'Data Collection',
        ],
      },
      {
        category: 'RAG & Vector Databases',
        subjects: ['Vector Databases', 'RAG (Retrieval Augmented Generation)'],
      },
      {
        category: 'Agents & Agent Frameworks',
        subjects: [
          'Agents from First Principles',
          'Building an Agent Framework',
          'Agent Frameworks',
          'Computer Use Agents',
          'Multimodal Agents',
          'Memory Systems',
        ],
      },
      {
        category: 'Fine-Tuning',
        subjects: ['What is Fine-Tuning', 'Fine-Tuning for Use Cases', 'RL Fine-Tuning'],
      },
      {
        category: 'Evaluation & Testing',
        subjects: ['Evals', 'Testing Agents', 'Writing Evals'],
      },
      {
        category: 'Projects',
        subjects: [
          'Agent Framework Project',
          'RL Fine-Tuning Project',
          'Devin Clone Project',
          'Memory Framework Project',
        ],
      },
      {
        category: 'Advanced Topics',
        subjects: ['Advanced AI Topics'],
      },
    ],
  },
  {
    id: 'blockchain',
    title: 'Web3 - Solana',
    emoji: '🔗',
    icon: 'Link2',
    pastel: '#d5f0ff',
    pastelbg: 'rgba(56, 189, 248, 0.07)',
    pastelborder: 'rgba(56, 189, 248, 0.15)',
    glowColor: 'rgba(56, 189, 248, 0.2)',
    iconBg: 'rgba(56, 189, 248, 0.12)',
    iconColor: '#38bdf8',
    duration: '14 Weeks',
    level: 'Beginner → Advanced',
    tag: 'High Demand',
    tagColor: 'rgba(56, 189, 248, 0.12)',
    tagText: '#38bdf8',
    color: '#e0706c',
    description:
      'Solidity, smart contracts, DeFi, NFTs and building decentralized applications on Ethereum & beyond.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
    bgimg: '/images/block2.jpg',
    categories: [
      {
        category: 'Blockchain Fundamentals',
        subjects: [
          'Introduction to Blockchains',
          'Cryptography',
          'Solana Architecture',
          'Solana Terminology',
          'Authorities & Ownership',
          'PDAs (Program Derived Addresses)',
        ],
      },
      {
        category: 'Solana Development',
        subjects: [
          '@solana/web3.js',
          'Gill',
          'Wallet Adapter',
          'Solana Data Model',
          'Token Program',
          'Indexing',
        ],
      },
      {
        category: 'DeFi Concepts',
        subjects: ['AMMs', 'DLMM', 'CLMM', 'Perpetuals', 'DeFi Architecture'],
      },
      {
        category: 'Rust Programming',
        subjects: ['Rust Basics', 'Advanced Rust'],
      },
      {
        category: 'Smart Contracts',
        subjects: [
          'Anchor Framework',
          'Common Smart Contracts',
          'Staking Contracts',
          'Escrow Contracts',
          'Partially Centralized Contracts',
        ],
      },
      {
        category: 'Security & Cryptographic Systems',
        subjects: ['MPC (Multi-Party Computation)', 'Shamir’s Secret Sharing'],
      },
      {
        category: 'Web2 + Web3 Integration',
        subjects: [
          'Ad Hoc Web2 + Web3 Integration',
          'Frontend/Client Integration',
          'Testing Smart Contracts',
        ],
      },
      {
        category: 'Projects',
        subjects: [
          'DEX (Decentralized Exchange)',
          'CEX (Centralized Exchange)',
          'Wallet Development',
          'Prediction Market',
          'Staking Platform',
          'Escrow Platform',
        ],
      },
      {
        category: 'Resources',
        subjects: [
          'Solana Foundation Curriculum',
          'Bitcoin Whitepaper',
          'Rust by Jon Gjengset',
        ],
      },
    ],
  },
  {
    id: 'webdev',
    title: 'Full-Stack \nWeb Dev',
    emoji: '🌐',
    icon: 'Globe',
    pastel: '#d5ffe8',
    pastelbg: 'rgba(52, 211, 153, 0.07)',
    pastelborder: 'rgba(52, 211, 153, 0.15)',
    glowColor: 'rgba(52, 211, 153, 0.2)',
    iconBg: 'rgba(52, 211, 153, 0.12)',
    iconColor: '#34d399',
    duration: '18 Weeks',
    level: 'Zero to Hero',
    tag: 'Best for Beginners',
    tagColor: 'rgba(52, 211, 153, 0.12)',
    tagText: '#34d399',
    color: '#eccd51',
    description:
      'Full-stack mastery from HTML to Next.js, React, Node.js, databases and deploying production apps.',
    image:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&h=300&fit=crop',
    bgimg: '/images/web2.jpg',
    categories: [
      {
        category: 'Frontend Fundamentals',
        subjects: [
          'HTML',
          'CSS',
          'JavaScript Basics',
          'JavaScript Architecture',
          'Asynchronous JavaScript',
          'TypeScript',
        ],
      },
      {
        category: 'Backend Development',
        subjects: [
          'Node.js vs Browser JavaScript',
          'HTTP Fundamentals',
          'Express.js',
          'Databases',
          'MongoDB',
          'PostgreSQL',
          'Prisma',
          'Drizzle ORM',
        ],
      },
      {
        category: 'Modern Web Tooling',
        subjects: ['Turborepo', 'BunJS'],
      },
      {
        category: 'Frontend Frameworks',
        subjects: ['React', 'Tailwind CSS', 'Next.js'],
      },
      {
        category: 'Real-Time Communication',
        subjects: ['WebSockets', 'WebRTC', 'Queues', 'Publish/Subscribe Systems'],
      },
      {
        category: 'Projects',
        subjects: ['Todo App', 'Lovable Clone', 'Codeforces Clone', 'Trading App'],
      },
      {
        category: 'Resources & Practice',
        subjects: [
          'YouTube Channel Resources',
          'Angela Yu Course',
          'React.dev Documentation',
          'Open Source Practice Projects',
          'GSOC Organizations',
          'Open Source Companies',
        ],
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    emoji: '🚀',
    icon: 'Server',
    pastel: '#fff3d5',
    pastelbg: 'rgba(254, 206, 1, 0.06)',
    pastelborder: 'rgba(254, 206, 1, 0.18)',
    glowColor: 'rgba(254, 206, 1, 0.15)',
    iconBg: 'rgba(254, 206, 1, 0.12)',
    iconColor: '#fece01',
    duration: '12 Weeks',
    level: 'Intermediate',
    tag: 'High Salary',
    tagColor: 'rgba(254, 206, 1, 0.12)',
    tagText: '#fece01',
    color: '#6fb3de',
    description:
      'Docker, Kubernetes, CI/CD pipelines, AWS/GCP, infrastructure as code — become a cloud native.',
    image:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop',
    bgimg: '/images/devops.jpg',
    categories: [
      {
        category: 'Linux & Infrastructure Fundamentals',
        subjects: [
          'Bash / Terminal',
          'Virtual Machines',
          'Bare Metal Machines',
          'Process Management',
          'Reverse Proxies',
          'Certificates',
          'Certificate Management',
        ],
      },
      {
        category: 'Cloud Infrastructure',
        subjects: [
          'ASGs (Auto Scaling Groups)',
          'MIGs (Managed Instance Groups)',
          'CDNs',
          'Object Storage',
        ],
      },
      {
        category: 'Containers & Orchestration',
        subjects: [
          'Containers',
          'Container Runtimes',
          'Docker',
          'Kubernetes Basics',
          'Advanced Kubernetes',
        ],
      },
      {
        category: 'DevOps Automation',
        subjects: ['CI/CD Pipelines', 'Infrastructure as Code (IaC)'],
      },
      {
        category: 'Monitoring & Reliability',
        subjects: ['Monitoring', 'Observability'],
      },
      {
        category: 'Security & Isolation',
        subjects: ['Sandboxing', 'Firecracker'],
      },
      {
        category: 'Projects',
        subjects: ['e2b Clone', 'Replit Clone', 'Cloudflare Workers Project'],
      },
      {
        category: 'Resources',
        subjects: ['e2b Blog', 'Modal Blog'],
      },
    ],
  },
  {
    id: 'dsa',
    title: 'Data Structures\n & Algorithms',
    emoji: '🏆',
    icon: 'Code2',
    pastel: '#ffd5e8',
    pastelbg: 'rgba(244, 114, 182, 0.07)',
    pastelborder: 'rgba(244, 114, 182, 0.15)',
    glowColor: 'rgba(244, 114, 182, 0.2)',
    iconBg: 'rgba(244, 114, 182, 0.12)',
    iconColor: '#f472b6',
    duration: '10 Weeks',
    level: 'All Levels',
    tag: 'Interview Prep',
    tagColor: 'rgba(244, 114, 182, 0.12)',
    tagText: '#f472b6',
    color: '#ed8f66',
    description:
      'Crack FAANG interviews. Master arrays, trees, graphs, dynamic programming with 500+ curated problems.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop',
    bgimg: '/images/dsa2.jpg',
    categories: [
      {
        category: 'Programming Fundamentals',
        subjects: [
          'Introduction to C++',
          'Loops',
          'Pattern Printing',
          'Arrays',
          '2D Arrays',
          'Strings',
          'Pointers',
          'Pass by Value',
          'Pass by Reference',
          'Memory Addresses',
        ],
      },
      {
        category: 'Algorithm Basics',
        subjects: [
          'Sorting Algorithms',
          'Searching Algorithms',
          'Time Complexity',
          'Space Complexity',
          'Bit Manipulation',
          'Number Theory Basics',
        ],
      },
      {
        category: 'Problem Solving Techniques',
        subjects: [
          'Prefix Sums',
          'Sliding Window',
          'Contribution Technique',
          'Recursion',
          'Backtracking',
          'Two Pointers',
          'Greedy Algorithms',
          'Dynamic Programming',
        ],
      },
      {
        category: 'STL & Data Structures',
        subjects: [
          'Sets',
          'Maps',
          'Linked Lists',
          'Stacks',
          'Queues',
          'Deque',
          'Priority Queue',
          'Heap',
          'Ordered Set',
        ],
      },
      {
        category: 'Trees & Graphs',
        subjects: ['Binary Trees', 'Binary Search Trees (BST)', 'Trie', 'Graphs', 'Segment Trees'],
      },
      {
        category: 'Competitive Programming Resources',
        subjects: [
          'Harvard CS50',
          'Abdul Bari Course',
          'Pavel Marvin Playlist',
          'Codeforces EDU',
          'CP Algorithms',
        ],
      },
      {
        category: 'Practice Platforms',
        subjects: ['Codeforces', 'LeetCode', 'AtCoder'],
      },
    ],
  },
  {
    id: 'cyber',
    title: 'Cyber Security',
    emoji: '🏆',
    icon: 'Lock',
    pastel: '#ffd5e8',
    pastelbg: 'rgba(244, 114, 182, 0.07)',
    pastelborder: 'rgba(244, 114, 182, 0.15)',
    glowColor: 'rgba(244, 114, 182, 0.2)',
    iconBg: 'rgba(244, 114, 182, 0.12)',
    iconColor: '#f472b6',
    duration: '10 Weeks',
    level: 'Beginner Level',
    tag: 'Interview Prep',
    tagColor: 'rgba(244, 114, 182, 0.12)',
    tagText: '#f472b6',
    color: '#ed8f66',
    description:
      'Understand how cyber attacks work, secure digital systems, and develop essential cybersecurity skills through guided practical sessions.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop',
    categories: [
      {
        category: 'Introduction to Cyber Security',
        subjects: [
          'Cyber Security Fundamentals',
          'Security Mindset & Methodologies',
          'Offensive vs Defensive Security',
          'Information Security Principles',
          'CIA Triad & Security Models',
          'Hacking Lifecycle',
          'CTF & Cybersecurity Labs',
          'Documentation & Note Taking',
        ],
      },
      {
        category: 'Networking',
        subjects: [
          'Network Fundamentals',
          'Network Types & Architectures',
          'Networking Hardware',
          'Protocols & Communication',
          'Ports & Common Services',
          'OSI & TCP/IP Models',
          'Network Topologies',
          'Packet Flow & TCP Handshake',
        ],
      },
      {
        category: 'Windows & Linux',
        subjects: [
          'Operating System Fundamentals',
          'Windows Administration',
          'Linux Administration',
          'File Systems & Directories',
          'User & Permission Management',
          'Command Line Essentials',
          'PowerShell & Shell Scripting',
          'System Navigation & Configuration',
        ],
      },
      {
        category: 'OSINT (Open Source Intelligence)',
        subjects: [
          'Introduction to OSINT',
          'Search Engine Intelligence',
          'Social Media Investigation',
          'Domain & DNS Reconnaissance',
          'Email & Username Enumeration',
          'Metadata Analysis',
          'Geolocation & Image Intelligence',
          'OSINT Tools & Methodologies',
        ],
      },
      {
        category: 'Understanding Cyber Threats',
        subjects: [
          'Threat Landscape Overview',
          'Malware & Ransomware',
          'Phishing & Social Engineering',
          'Web Application Attacks',
          'Network-Based Attacks',
          'Insider & Advanced Threats',
          'Threat Detection & Analysis',
          'Security Best Practices & Mitigation',
        ],
      },
    ],
  },
]

module.exports = programs
