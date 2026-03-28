export interface Portfolio {
  _id: { $oid: string };
  fullName: string;
  email: string;
  role: string;
  username: string;
  slug: string;
  home: {
    name: string;
    description: string;
    roles: string[];
  };
  about: {
    name: string;
    title: string;
    bio: string;
    bio2?: string;
    stats: {
      experience: number;
      clients: number;
      recruiters: number;
    };
  };
  education: Array<{
    degree: string;
    university: string;
    fromYear: string;
    toYear: string;
    currentlyStudying: boolean;
    _id: { $oid: string };
  }>;
  experience: Array<{
    company: string;
    role: string;
    fromYear: string;
    toYear: string;
    currentlyWorking: boolean;
    project: string;
    description: string;
    techStack?: string[];
    _id: { $oid: string };
  }>;
  projects: Array<{
    title: string;
    category: string;
    role: string;
    description: string;
    codeLink: string;
    previewLink: string;
    techStack?: string[];
    _id: { $oid: string };
  }>;
  services: Array<{
    title: string;
    icon: string;
    color: string;
    description: string;
    _id: { $oid: string };
  }>;
  contactInfo: {
    location: {
      company: string;
      address: string;
      city: string;
      country: string;
      postalCode: string;
    };
    email: string;
    phone: string;
    socialMedia: {
      linkedin: string | null;
      github: string | null;
      twitter: string | null;
      instagram: string | null;
      facebook: string | null;
    };
  };
  skills: Array<{
    title: string;
    color: string;
    icon: string;
    skills: Array<{
      name: string;
      icon: string;
      _id: { $oid: string };
    }>;
    _id: { $oid: string };
  }>;
}

export const portfolioData: Portfolio[] = [
  {
    _id: { $oid: '691814f858db9a08fdf4368d' },
    fullName: 'Avinash Suryawanshi',
    email: 'abhiyavm@gmail.com',
    role: 'Angular Developer',
    username: 'avinash-suryawanshi',
    slug: 'avinash-suryawanshi',
    home: {
      name: 'Avinash Suryawanshi',
      description:
        "Creativity with purpose, design with impact — that's my approach, that's my passion.",
      roles: ['Angular Developer', 'Front End Developer', 'Full Stack Developer'],
    },
    about: {
      name: 'Avinash Suryawanshi',
      title: 'Angular Developer',
      bio:
        'As an Angular Developer with 3 years of experience, I am passionate about crafting modern UI/UX. My expertise lies in building intuitive and engaging user interfaces that elevate the overall user experience.',
      bio2:
        'With 3 years as an Angular Developer, I thrive on crafting smooth, scalable, and user-centric web applications. My motivation is creating elegant solutions and continuous learning, aspiring to lead innovative front-end architectures that make a significant impact.',
      stats: {
        experience: 3,
        clients: 4,
        recruiters: 4,
      },
    },
    education: [
      {
        degree: "Bachelor's Degree - Bio-Informatics",
        university: 'SRTM University',
        fromYear: '2013',
        toYear: '2016',
        currentlyStudying: false,
        _id: { $oid: '6919b35015fda8b4f21acfe4' },
      },
      {
        degree: "Master's Degree - Bio-Informatics",
        university: 'SRTM University',
        fromYear: '2016',
        toYear: '2018',
        currentlyStudying: false,
        _id: { $oid: '6919b37115fda8b4f21ad035' },
      },
    ],
    experience: [
      {
        company: 'Ambroasian Research & Development Pvt Ltd',
        role: 'Front End Developer',
        fromYear: 'Dec 2021',
        toYear: 'Mar 2024',
        currentlyWorking: false,
        project: 'Hotel Management Monitoring',
        description:
          'As a Front End Developer at Ambroasian R&D Pvt Ltd, I developed intuitive interfaces for the Hotel Management Monitoring project. This optimized data presentation, resulting in a measurable 15% improvement in operational reporting efficiency.',
        techStack: ['Angular', 'Bootstrap', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
        _id: { $oid: '692170115115746f7f9b4d6d' },
      },
      {
        company: 'Torrent Pharma Ltd Corporate Office',
        role: 'Front End Developer - Angular - Executive',
        fromYear: 'Mar 2024',
        toYear: '',
        currentlyWorking: true,
        project: 'Sales Force Automation (SFA)',
        description:
          'As an Angular Front End Developer Executive at Torrent Pharma Ltd Corporate Office, I engineered user-centric features for the Sales Force Automation (SFA) system. My contributions directly boosted sales team efficiency by 15%, significantly streamlining critical daily operations.',
        techStack: ['Angular', 'Angular Material', 'DevExtreme', 'TypeScript', 'RxJS', 'REST APIs'],
        _id: { $oid: '69216f625115746f7f9b4bd1' },
      },
    ],
    projects: [
      {
        title: 'Sale Force Automation (SFA)',
        category: 'Web App (CRM Enterprise)',
        role: 'Angular, Angular Material, Devextreme',
        description:
          'Developing SFA product for sales teams, optimizing workflows and data visualization. role-based dynamic dashboards with KPIs, charts, and activity logs tailored for Sales Reps, Managers, and Admins.',
        codeLink: 'https://github.com/yourname/ai-resume-builder',
        previewLink: 'https://airesumebuilder.vercel.app',
        _id: { $oid: '69188b69df206831325e97ab' },
      },
      {
        title: 'Hotel Management Monitoring',
        category: 'Web App (Enterprise)',
        role: 'Angular, Bootstrap',
        description:
          'Developed Hotel Management & Monitoring Platform enabling property listings, booking management, and operational monitoring.',
        codeLink: 'https://github.com/yourname/ems',
        previewLink: 'https://emsapp.vercel.app',
        _id: { $oid: '69188d71df206831325e97ea' },
      },
      {
        title: 'Employee Management App',
        category: 'Web App (CRM Enterprise)',
        role: 'Angular, Angular Material, Node.js, Express.js, MongoDB',
        description:
          'Designed and developed a comprehensive HRMS-like Employee Management System covering authentication, employee workflows, leave approvals, attendance, and meeting scheduling.',
        codeLink: 'https://github.com/AvinashS1995/ems-frontends.git',
        previewLink: 'https://ems-project-kappa.vercel.app/login',
        _id: { $oid: '691dfb638ee215c178b3a62b' },
      },
      {
        title: 'Weather Forecasting App',
        category: 'Utility / Informational App',
        role: 'Angular, Tailwind CSS, Open Meteo Live Api',
        description:
          'I engineered a dynamic weather forecasting application, leveraging Angular, Tailwind CSS, and the Open Meteo API. This utility delivers precise, real-time, location-based hourly and weekly forecasts with severe weather alerts, empowering users to plan their day effectively with comprehensive weather insights.',
        codeLink: 'https://github.com/AvinashS1995/weather-forecast-dashboard.git',
        previewLink: 'https://weather-forecast-dashboard-theta.vercel.app/weather',
        _id: { $oid: '692170815115746f7f9b4f80' },
      },
    ],
    services: [
      {
        title: 'Frontend Development',
        icon: 'fa-code',
        color: '#f58b49',
        description: 'Building fast, modern, and responsive web interfaces using Angular, React, and TypeScript.',
        _id: { $oid: '69187e8fdb9e1eb848d10fba' },
      },
      {
        title: 'UI/UX Design',
        icon: 'fa-paint-brush',
        color: '#f58b49',
        description: 'Designing clean, user-friendly interfaces focused on usability, accessibility, and visual appeal.',
        _id: { $oid: '69187fcec01a075688e71470' },
      },
      {
        title: 'API Integration',
        icon: 'fa-plug',
        color: '#f58b49',
        description: 'Connecting apps with secure backend APIs and optimizing data flow using RESTful services.',
        _id: { $oid: '69187f3bc01a075688e713e9' },
      },
      {
        title: 'Performance Optimization',
        icon: 'fa-rocket',
        color: '#f58b49',
        description: 'Improving load time, Core Web Vitals, and rendering efficiency for seamless user experiences.',
        _id: { $oid: '69187f5fc01a075688e713fc' },
      },
      {
        title: 'Maintenance & Support',
        icon: 'fa-tools',
        color: '#f58b49',
        description: 'Ensuring applications run smoothly with updates, monitoring, and quick issue resolution.',
        _id: { $oid: '69187f7dc01a075688e71411' },
      },
      {
        title: 'Deployment & DevOps',
        icon: 'fa-server',
        color: '#f58b49',
        description: 'CI/CD setup and deploying scalable apps on AWS, Vercel, and Render for production-ready systems.',
        _id: { $oid: '69187f97c01a075688e71428' },
      },
    ],
    contactInfo: {
      location: {
        company: 'Torrent Pharma Ltd Corporate Office',
        address: 'Ahmedabad',
        city: 'Gujarat',
        country: 'India',
        postalCode: '380009',
      },
      email: 'abhiyavm@gmail.com',
      phone: '8390308967',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/yourprofile',
        github: 'https://github.com/yourprofile',
        twitter: null,
        instagram: null,
        facebook: null,
      },
    },
    skills: [
      {
        title: 'Frontend Development',
        color: '#f58b49',
        icon: 'fas fa-code',
        skills: [
          { name: 'Angular', icon: 'fab fa-angular', _id: { $oid: '6919a01ae1758d6463a5b465' } },
          { name: 'Angular Material', icon: 'fas fa-layer-group', _id: { $oid: '6919a01ae1758d6463a5b466' } },
          { name: 'DevExtreme', icon: 'fas fa-th-large', _id: { $oid: '6919a01ae1758d6463a5b467' } },
          { name: 'HTML', icon: 'fab fa-html5', _id: { $oid: '6919a01ae1758d6463a5b468' } },
          { name: 'CSS', icon: 'fab fa-css3-alt', _id: { $oid: '6919a01ae1758d6463a5b469' } },
          { name: 'JavaScript', icon: 'fab fa-js-square', _id: { $oid: '6919a01ae1758d6463a5b46a' } },
          { name: 'TypeScript', icon: 'fab fa-js', _id: { $oid: '6919a01ae1758d6463a5b46b' } },
          { name: 'Bootstrap', icon: 'fab fa-css3-alt', _id: { $oid: '6919a01ae1758d6463a5b46c' } },
          { name: 'Tailwind', icon: 'fas fa-wind', _id: { $oid: '6919a01ae1758d6463a5b46d' } },
        ],
        _id: { $oid: '6919a01ae1758d6463a5b464' },
      },
      {
        title: 'Backend',
        color: '#f58b49',
        icon: 'fas fa-database',
        skills: [
          { name: 'Node.js', icon: 'fab fa-node-js', _id: { $oid: '6919a0ade1758d6463a5b4a3' } },
          { name: 'Express.js', icon: 'fas fa-server', _id: { $oid: '6919a0ade1758d6463a5b4a4' } },
          { name: 'MongoDB', icon: 'fas fa-leaf', _id: { $oid: '6919a0ade1758d6463a5b4a5' } },
          { name: '.Net Core', icon: 'fas fa-cube', _id: { $oid: '6919a0ade1758d6463a5b4a6' } },
          { name: 'MySQL', icon: 'fas fa-database', _id: { $oid: '6919a0ade1758d6463a5b4a7' } },
        ],
        _id: { $oid: '6919a0ade1758d6463a5b4a2' },
      },
      {
        title: 'Tools & Platforms',
        color: '#f58b49',
        icon: 'fas fa-tools',
        skills: [
          { name: 'Git & GitHub', icon: 'fab fa-github', _id: { $oid: '6919a172e1758d6463a5b4e9' } },
          { name: 'Swagger', icon: 'fas fa-file-code', _id: { $oid: '6919a172e1758d6463a5b4ea' } },
          { name: 'Postman', icon: 'fas fa-envelope-open-text', _id: { $oid: '6919a172e1758d6463a5b4eb' } },
          { name: 'VS Code', icon: 'fas fa-code', _id: { $oid: '6919a172e1758d6463a5b4ec' } },
          { name: 'Visual Studio Pro', icon: 'fas fa-laptop-code', _id: { $oid: '6919a172e1758d6463a5b4ed' } },
          { name: 'Vercel', icon: 'fas fa-rocket', _id: { $oid: '6919a172e1758d6463a5b4ee' } },
          { name: 'Render', icon: 'fas fa-cloud', _id: { $oid: '6919a172e1758d6463a5b4ef' } },
          { name: 'CI/CD', icon: 'fas fa-cogs', _id: { $oid: '6919a172e1758d6463a5b4f0' } },
        ],
        _id: { $oid: '6919a172e1758d6463a5b4e8' },
      },
    ],
  },
];
