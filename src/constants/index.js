import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    AWS,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    firebase,
    portfolio,
    manuscript,
    art,
    moguide,
    expense,
    c,cpp,jwt,auth

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "<Coder/>",
      icon: web,
    },
    {
      title: "Designer🖌",
      icon: creator,
    },
    {
      title: "Frontend🖥️",
      icon: mobile,
    },
    {
      title: "Backend⚙️",
      icon: backend,
    },
    
  ];
  
  const languages =[
    {
      name: "C",
      icon: c
    },
    {
      name: "C++",
      icon: cpp
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  ]

  const techbackend = [
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
  ];  

  const frontend = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "NextJS",
      icon: nextjs,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];

  const devops = [
    {
      name: "AWS",
      icon: AWS,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];

  const tools = [
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "OAuth",
      icon: auth,
    },
    {
      name: "JWT",
      icon: jwt,
    },
  ];
  
  
  
  const experiences = [
    {
      title: "Graphic Designer",
      company_name: "Katallyst",
      icon: shopify,
      iconBg: "#383E56",
      date: "April 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Collaboration with Otani university, Japan",
      icon: shopify,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  

  const testimonials = [
    {
      testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut minima quo!",
      name: "User1",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut minima quo!",
      name: "User2",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut minima quo!",
      name: "user3",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "This portfolio is built with Vite for a blazing-fast development experience, React for a modular UI, Three.js for stunning 3D graphics, and Tailwind CSS for a sleek and responsive design. It's designed to showcase your projects and skills in an engaging and interactive manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "EmailJS",
          color: "white-text-gradient",
        },
        {
          name: "Framer-motion",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      github_code_link: "https://github.com/Siddhartha587729/Dev-Portfolio",
      source_code_link: "https://siddharthadev.club/",
    },
    {
      name: "Manuscript Reader",
      description:
        "Made in colaboration with Otani University, used to preserve old script digitally. React site uses Tesseract OCR to translate uploaded manuscripts, integrating Google Translate API, ThreeJS, and Sanity.io backend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Tesseract",
          color: "pink-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity.io",
          color: "white-text-gradient",
        },
      ],
      image: manuscript,
      github_code_link: "https://github.com/Siddhartha587729/manuscipt-reader",
      source_code_link: "https://ms.siddharthadev.co/",
    },
    {
      name: "Art Gallery",
      description:
        "This is an e-commerce website created for painters and sketch artists to buy painting products.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Sanity.io",
          color: "white-text-gradient",
        },
      ],
      image: art,
      github_code_link: "https://github.com/Siddhartha587729/e-commerce-app",
      source_code_link: "https://artgallery.siddharthadev.co/",
    },{
      name: "Mo Guide",
      description:
        "It is a tourist guide cum planner web app developed at the final stage of CODE4ODDISHA hackathon, ITER Bhubaneswar. The app focuses on the first time traveler to Odisha and uses previously gathered information to recommend places to visit with in-build planner and Google maps.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "white-text-gradient",
        },
        {
          name: "Gooogle-maps",
          color: "blue-text-gradient",
        },
      ],
      image: moguide,
      github_code_link: "https://github.com/Siddhartha587729/mo-guide/tree/main",
      source_code_link: "https://github.com/Siddhartha587729/mo-guide/tree/main",
    },
    {
      name: "Expense Tracker",
      description:
        "Effortlessly manage expenses with this React-based web app. Seamlessly stored on your browser, it simplifies budgeting. Efficient, user-friendly, and secure.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "Local storage",
          color: "pink-text-gradient",
        },
      ],
      image: expense,
      github_code_link: "https://github.com/Siddhartha587729/expense-app",
      source_code_link: "https://github.com/Siddhartha587729/expense-app",
    },
    
  ];

  const Contacts = [
    {
      name: "Github",
      link: "https://github.com/Siddhartha587729"
    },
    {
      name: "Twitter",
      link: "https://x.com/Siddhartha294"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/siddhartha-kumar-748751223/"
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/siddhartha_kumar13/"
    }
  ]
  
  export { services, languages, frontend, techbackend, devops, tools, experiences, testimonials, projects, Contacts };