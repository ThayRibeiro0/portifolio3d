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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    chatapp1,
    validaregister,
    todoapp,
    guessnumber,
    pygym,
    project1,
    threejs,
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
      title: "System Developer",
      icon: web, mobile,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Vacancy open for a special company",
      // company_name: "Starbucks",
      // icon: starbucks,
      // iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      // points: [
      //   "Developing and maintaining web applications using React.js and other related technologies.",
      //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //   "Implementing responsive design and ensuring cross-browser compatibility.",
      //   "Participating in code reviews and providing constructive feedback to other developers.",
      // ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I had the pleasure of working with Thays in a multinational company for a long time, being an apprentice of her teachings. An incredible professional that every company should have, super attentive, thoughtful. Has a technical skill in several tools, knows how to work under pressure and with bulky projects. Always ready to learn and teach.",
      name: "Mayara Rodrigues",
      designation: "Associate",
      company: "PwC Brasil",
      image: "/src/assets/Mayara.jpeg",
    },
    {
      testimonial:
        "Very dedicated and dedicated professional. I had the privilege of having her by my side for a period of time... she was always kind, open to suggestions and, above all, responsible for carrying out any task or case. Success and guarantee always!",
      name: "Aneliza Ulian Zuccarato",
      designation: "Lawyer",
      company: "Loeser e Portela Advogados",
      image: "/src/assets/Aneliza.jpeg",
    },
  ];
  
  const projects = [
    {
      name: "Chatapp1",
      description:
        "Web-chat that allows users have a conversation safe and efficient.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "white-text-gradient",
        },
      ],
      image: chatapp1,
      source_code_link: "https://github.com/ThayRibeiro0/chatapp1.git",
    },
    {
      name: "ValidaRegister",
      description:
        "Web application to collect the data and to validate them so that are faithful to what was required in the input and that they work correctly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: validaregister,
      source_code_link: "https://github.com/ThayRibeiro0/validform.git",
    },
    {
      name: "TodoApp",
      description:
        "Web Application which aims to help in the organization of daily tasks.",
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
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "white-text-gradient",
        },
      ],
      image: todoapp,
      source_code_link: "https://github.com/ThayRibeiro0/TodoApp.git",
    },
    {
      name: "Pygym",
      description:
        "Final Project CS50 that has the purpose of allow the employee of the gym register the students that use the gym and the admins have a control about who acess this datas, can this admins register new employees, edit or delete.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "white-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "orange-text-gradient",
        },
      ],
      image: pygym,
      source_code_link: "https://github.com/ThayRibeiro0/PyGym.git",
    },
    {
      name: "GuessNumber",
      description:
        "Java Programm in which the user have the provide a correct number trying to guess between a range that is show in each number typed",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
      ],
      image: guessnumber,
      source_code_link: "https://github.com/ThayRibeiro0/Guess_Number",
    },
    // {
    //   name: "Project1",
    //   description:
    //   "Prototype Web Application to scheduling services to aesthetic clinics firstly, but can be used to all kind of company to works with the appointments to better controls of your calls. This project is a final assignment of the first semester of the System Development Associate Course.",
    //   tags: [
    //     {
    //       name: "html",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "sql",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: project1,
    //   source_code_link: "https://github.com/ThayRibeiro0/Guess_Number",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };