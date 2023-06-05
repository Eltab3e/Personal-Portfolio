import {
  icon1,
  icon2,
  icon3,
  icon4,
  html,
  css,
  javascript,
  reactjs,
  next,
  redux,
  sass,
  tailwind,
  figma,
  githublogo,
  firebase,
  threejs,
  git,
  jest,
  nodejs,
  cs50,
  udacity,
  astronime,
  gpt3,
  realtor,
  natours,
  bankist,
} from '../assets';

const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'path',
    title: 'Path',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: icon1,
  },
  {
    title: 'Responsive Design',
    icon: icon2,
  },
  {
    title: 'Content Creator',
    icon: icon3,
  },
  {
    title: 'UI / UX',
    icon: icon4,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next',
    icon: next,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'SASS',
    icon: sass,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Github',
    icon: githublogo,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Jest',
    icon: jest,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
];

const path = [
  {
    title: 'CS50: Introduction to Computer Science',
    company_name: 'edX',
    icon: cs50,
    iconBg: '#E6DEDD',
    date: 'March 2022 - May 2022',
    points: [
      'Acquired a broad and comprehensive understanding of computer science and programming.',
      'Developed the ability to think algorithmically and efficiently solve programming problems.',
      'Explored and studied concepts such as abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.',
      'Gained familiarity with various programming languages, including C, Python, SQL, JavaScript, as well as CSS and HTML.',
    ],
  },
  {
    title: 'Front End Web Developer Nanodegree Program',
    company_name: 'Udacity',
    icon: udacity,
    iconBg: '#383E56',
    date: 'May 2022 - Sept 2022',
    points: [
      'Explored a variety of JavaScript design patterns and developed proficiency in utilizing popular developer tools, testing suites, and frameworks.',
      'Showcased and honed my skills through engaging in-class projects.',
      'Received expert evaluations on my project submissions, along with valuable feedback aimed at propelling my progress through the program successfully.',
      'Engaged in regular communication with a mentor, who offered guidance, support, addressed queries, and directed me to valuable resources along the way.',
    ],
  },
  {
    title: 'ReactJS',
    company_name: 'Udemy',
    icon: reactjs,
    iconBg: '#383E56',
    date: 'Sept 2022 - Feb 2023',
    points: [
      'Successfully developed robust and high-performance web applications that deliver exceptional user experiences with their speed, responsiveness, and user-friendly interfaces.',
      'Mastered React functional components, implemented optimized file and folder structures, and adhered to the CSS BEM model for efficient styling and maintainability.',
      'Acquired proficiency in utilizing React hooks for state management, as well as fetching data from APIs and effectively consuming that data within the application.',
      'Gained expertise in utilizing Redux and Redux Toolkit for advanced state management, implementing authentication features, writing unit tests, and incorporating advanced animations to enhance the visual appeal and interactivity of the web applications.',
    ],
  },
  {
    title: 'Next.js',
    company_name: 'Udemy',
    icon: next,
    iconBg: '#E6DEDD',
    date: 'Feb 2023 - Present',
    points: [
      'Acquired a comprehensive understanding of essential Next.js features, including pre-rendering techniques, server-side rendering (SSR), efficient data fetching, file-based routing, and authentication mechanisms.',
      'Developed proficiency in building both client-side and full-stack React.js applications using Next.js, leveraging its powerful capabilities and seamless integration with React.',
      'Applied theoretical knowledge gained through hands-on experience by building real projects, allowing me to solidify my skills and effectively demonstrate my understanding of Next.js concepts.',
      'Implemented various forms of page pre-rendering, including server-side rendering and static site generation. Additionally, incorporated data fetching and pre-fetching techniques to enhance the performance and interactivity of my applications.',
    ],
  },
];

const projects = [
  {
    name: 'Astronime',
    description:
      'Embark on a cosmic journey through the captivating world of anime with Astronime. Your ultimate celestial hub for the latest news, reviews, and upcoming releases.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'pink-text-gradient',
      },
    ],
    image: astronime,
    source_code_link: 'https://github.com/Eltab3e/Astronime',
  },
  {
    name: 'GPT-3',
    description:
      'Welcome to the world of AI, your gateway to a world shaped by the brilliance of AI technology. Dive into the realm of cutting-edge technologies like Chat GPT-3.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'figma',
        color: 'pink-text-gradient',
      },
    ],
    image: gpt3,
    source_code_link: 'https://github.com/Eltab3e/GPT-3',
  },
  {
    name: 'Realtor',
    description:
      'Step into a world of opulence with Realtor, your ultimate destination for exquisite properties in Dubai. Whether you seek to rent or own a luxurious home, We got you.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'green-text-gradient',
      },
      {
        name: 'chakura-ui',
        color: 'pink-text-gradient',
      },
    ],
    image: realtor,
    source_code_link: 'https://github.com/Eltab3e/Realtor',
  },
  {
    name: 'Bankist',
    description:
      'With Bankist, take control of your finances and unlock a world of limitless possibilities. Join us today and embark on a seamless banking experience like never before!',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: bankist,
    source_code_link: 'https://github.com/Eltab3e/Bankist',
  },
  {
    name: 'Natours',
    description:
      'Discover the untamed world with Natours, your gateway to exhilarating experiences. Our captivating tours website is designed exclusively for adventure seekers like you.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
    ],
    image: natours,
    source_code_link: 'https://github.com/Eltab3e/Natours',
  },
];

export { navLinks, services, technologies, path, projects };
