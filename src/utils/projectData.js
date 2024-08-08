import ayla from "../../public/image/ayla.jpg";
import crefin from "../../public/image/crefin.jpg";
import realEstate from "../../public/image/real-estate.jpg";
import travel from "../../public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Codeverse.Dev",
    description:
      "Codeverse.dev is a web app designed for creating and sharing code snippets, fostering a community experience similar to platforms like Discord. The frontend is built with Next.js, utilizing Tailwind CSS and Headless UI for styling, ensuring a modern and responsive design. Data fetching is optimized using React Query, while form handling is made efficient with React Hook Form and Zod for validation. On the backend, the app leverages Node.js and Express.js, with MongoDB serving as the database. For security, JWT is implemented for robust authentication and authorization.",
    tools: [
      "Express",
      "MongoDB",
      "OpenAI API",
      "Node Mailer",
      "Multer",
      "React Query",
      "Zod",
      "React Hook Form",
      "Tailwind CSS",
      "NextJS",
      "Next Auth",
      "JWT",
      "Redux Toolkit",
    ],
    role: "MERN Stack Developer",
    code: "",
    demo: "https://code-verse-dev.vercel.app/",
    githubLink: "https://github.com/devutkarsh7565/code-verse-dev",
    image: crefin,
  },
  {
    id: 2,
    name: "CodeBoot",
    description:
      "CodBoot is a platform designed to streamline note-taking for Coding and DSA problems. The platform allows users to implement custom tags and attach problem URLs, making organization and accessibility more seamless. Developed with React.js, TypeScript, and TailwindCSS, CodBoot offers an intuitive and responsive user interface. Firebase Authentication ensures secure access, while Firestore is integrated for efficient database management, providing a reliable and robust experience for users.",
    tools: [
      "React Js",
      "Tailwind CSS",
      "Firebase",
      "Cloud Firestore",
      "TypeScript",
      "React Query",
      "Context Api",
      "Kontest Api",
    ],
    role: "Frontend Developer with Firesbase services",
    code: "",
    demo: "https://codboot.onrender.com/",
    githubLink: "https://github.com/devutkarsh7565/codBoot",
    image: travel,
  },
  {
    id: 3,
    name: "Moviehut",
    description:
      "This project empowers users to access and explore detailed movie information simply by providing movie titles. Built using React.js and written in TypeScript, the application features a beautiful and responsive UI, styled with TailwindCSS. Firebase is utilized for the backend, handling authentication, Cloud Firestore for the database, and storage, ensuring a seamless and efficient user experience.",
    tools: [
      "React",
      "Tailwind CSS",
      "SCSS",
      "Javascript",
      "MongoDB",
      "Firebase",
      "Cloud Firestore",
      "Cloud Storage",
      "Custom Hooks",
      "TMBD API",
    ],
    code: "",
    role: "Frontend Developer",
    demo: "https://moviehut-alpha.vercel.app/",
    githubLink: "https://github.com/devutkarsh7565/Moviehut",
    image: realEstate,
  },
  {
    id: 4,
    name: "Neon Project",
    description:
      "The Neon project is a web app designed to help users create the perfect photo with customizable text, font style, and text color. Built on Next.js and Next Font, the app is styled using Tailwind CSS, ensuring a sleek and user-friendly interface.",
    tools: ["NextJS", "Material UI", "Redux", "Tailwind CSS", "Next Font"],
    code: "",
    demo: "https://neon-project.vercel.app/",
    githubLink: "https://github.com/devutkarsh7565/neon_project",
    image: ayla,
    role: "Frontend Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
