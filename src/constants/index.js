import {
    contact,
    css,
    docker,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript,
    management,
    console,
    property,
    restaurant,
    flutter
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl : docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Frontend",
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/aliffadillah',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aliffadillah',
    }
];

export const projects = [
    {
        iconUrl: management,
        theme: 'btn-back-red',
        name: 'Employee Management System',
        description: 'Developed an application and web service to manage employee management',
        link: 'https://github.com/aliffadillah/ems',
    },
    {
        iconUrl: console,
        theme: 'btn-back-green',
        name: 'Simon Game',
        description: 'Built a web-based Simon game, a memory game that challenges players to remember a sequence of colors and sounds.',
        link: 'https://github.com/aliffadillah/simon-game',
    },
    {
        iconUrl: property,
        theme: 'btn-back-blue',
        name: 'Real Estate',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/aliffadillah/real-estate',
    },
    {
        iconUrl: restaurant,
        theme: 'btn-back-pink',
        name: 'Brunch Restaurant',
        description: 'Developed a web application for a restaurant, facilitating food orders and connecting customers with the restaurant.',
        link: 'https://github.com/aliffadillah/final-project-2022',
    },
];