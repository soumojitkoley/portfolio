import serviceNowLogo from '../assets/stack/servicenow.webp'
import reactLogo from '../assets/stack/react.svg'
import jsLogo from '../assets/stack/js.svg'
import cssLogo from '../assets/stack/css.svg'
import reactRouterLogo from '../assets/stack/react-router-dark.svg'
import netlifyLogo from '../assets/stack/netlify.png'
import nodejsLogo from '../assets/stack/nodejs.svg'
import githubLogo from '../assets/stack/github.svg'
import tcssLogo from '../assets/stack/tailwindcss.svg'
import gitLogo from '../assets/stack/git.svg'

const data = [
  {
    company: "Cognizant",
    roles: [
      {
        title: "Programmer Analyst",
        year: "Feb 2026 – Present",
        details: [
          "Led the development and deployment of scalable frontend features using React.js, JavaScript, and Tailwind CSS, improving overall user experience and reducing UI response time across devices.",
          "Optimized application performance through efficient state management, component reusability, lazy loading, and rendering improvements, resulting in faster page load times and smoother user interactions.",
          "Integrated REST APIs and implemented dynamic data handling with React Context API, enabling seamless real-time updates and improving application reliability and maintainability.",
          "Managed production deployments and continuous updates using Git/GitHub and Netlify, while contributing to UI/UX enhancements, debugging, and frontend architecture decisions."
        ],
        tech: [
          { name: "React", src: reactLogo },
          { name: "Tailwind CSS", src: tcssLogo },
          { name: "JavaScript", src: jsLogo },
          { name: "Nodejs", src: nodejsLogo },
          { name: "Service Now", src: serviceNowLogo },
          { name: "Github", src: githubLogo },
          { name: "Git", src: gitLogo },
        ]
      },
      {
        title: "Programmer Analyst Trainee",
        year: "Feb 2025 – Feb 2026",
        details: [
          "Developed responsive and dynamic web applications using React.js, JavaScript, and Tailwind CSS, improving cross-device compatibility and reducing UI defects by 30%.",
          "Built reusable UI components and optimized rendering with React hooks and conditional rendering, which improved application performance and reduced page load time by ~20%.",
          "Integrated REST APIs and managed state efficiently with React/Context API, enabling real-time data fetching and reducing API response rendering time by ~25%."
        ],
        tech: [
          { name: "React", src: reactLogo },
          { name: "JavaScript", src: jsLogo },
          { name: "Nodejs", src: nodejsLogo },
          { name: "Service Now", src: serviceNowLogo }
        ]
      }
    ]
  },
  {
    company: "Eveinew",
    roles: [
      {
        title: "Software Engineer",
        year: "Mar 2024 – Jun 2024",
        details: [
          "Designed and developed a fully responsive website using React.js, JavaScript, Tailwind CSS, and Swiper.js, ensuring smooth UI/UX with interactive carousels and cross-device compatibility.",
          "Implemented SEO best practices with React Helmet, Open Graph and CMS services to optimized rendering and asset loading, which improved page performance and boosted search visibility.",
          "Integrated EmailJS for contact forms and deployed on Netlify from GitHub, ensuring seamless updates, fast load times, and near 98% uptime."
        ],
        tech: [
          { name: "React", src: reactLogo },
          { name: "JavaScript", src: jsLogo },
          { name: "CSS", src: cssLogo },
          { name: "React Router", src: reactRouterLogo },
          { name: "Netlify", src: netlifyLogo }
        ]
      }
    ]
  }
]

export default data
