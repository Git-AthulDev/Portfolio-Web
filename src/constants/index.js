import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    python,
    csharp,
    xd,
    xml,
    photoshop,
    illustrator,
    unity,
    figma,
    mro,
    freelance,
    unext,
    website,
    game,
    virtual,
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
      title: "Web Developement",
      icon: web,
    },
    {
      title: "Game Development",
      icon: mobile,
    },
    {
      title: "Software Development",
      icon: backend,
    },
    {
      title: "UI Designing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Illustrator",
      icon: illustrator,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
    {
      name: "Adobe XD",
      icon: xd,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "XML",
      icon: xml,
    },
  ];
  
  const experiences = [
    {
      title: "Software development Intern",
      company_name: "MRO Global",
      icon: mro,
      iconBg: "#383E56",
      date: "Mar 2022 - Jun 2022",
      points: [
        "Worked for the Software Development Team.",
        "Internship included Application Development and Application testing.",
        "Worked with Android Studio and different API modules.",
      ],
    },
    {
      title: "Web development and UI design",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "July 2022 - Sept 2022",
      points: [
        "Worked for clients with respect to their needs related to web development and UI designs.",
        "Interacted and communicated with clients regarding the project.",
        "Completed projects for multiple clients.",
      ],
    },
    {
      title: "Junior content developer",
      company_name: "UNext Learning",
      icon: unext,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Nov 2022",
      points: [
        "Member of the Academic Content Creation Team.",
        "Gained an insight into careers within online tutoring sector and the skills required.",
        "Attended a skills-building session on forging excellent client relationships.",
        "Exhibited effective communication with various representatives.",
        "Worked with various tools and software related to graphic development and video creation.",
      ],
    },
  ];

  
  const projects = [
    {
      name: "2D Platformer Game",
      description:
        "Thrilling Unity 2D platformer with fluid controls, vibrant pixel art, challenging levels, dynamic obstacles, and power-ups. Engaging gameplay, rich soundscapes, and a captivating storyline deliver an immersive gaming experience.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "visual-studio",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/Git-AthulDev/2D-Platformer-Game",
    },
    {
      name: "Echo: Virtual-Assistant",
      description:
        "OpenAI's virtual assistant, powered by Python, employs advanced language models to comprehend and generate human-like text, enabling seamless and intelligent interactions in various applications and domains.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "pycharm",
          color: "pink-text-gradient",
        },
      ],
      image: virtual,
      source_code_link: "https://github.com/Git-AthulDev/Echo-OpenAI-powered-Virtual-Assistant",
    },
    {
      name: "Web designs",
      description:
        "As a beginner, I've created various web projects using HTML, CSS, and JavaScript, and designed with Figma and Adobe Suite, and have some proficiency in web development and design.",
      tags: [
        {
          name: "htmlcss",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "adobe-creative-suite",
          color: "pink-text-gradient",
        },
      ],
      image: website,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };