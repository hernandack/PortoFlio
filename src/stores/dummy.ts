export const DSections = [
  {
    id: 'hero',
    type: 'hero',
    data: {
      heading:
        "Hi, I'm {{ name }}. Crafting Elegant Solutions: Software Engineer with 5 Years of Proven Experience",
      caption:
        "Passionate about building high-quality, user-centric software that solves real-world problems. Let's collaborate on your next exciting project.",
      image: {
        src: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'hero image',
      },
      button: { label: 'Contact Me', link: '#' },
      hero: {
        image:
          'https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  },
  {
    id: 'generic-one',
    type: 'generic',
    data: {
      heading: 'Full-Stack Expertise',
      caption:
        'As a proficient Full-Stack Engineer, I possess a strong foundation in both front-end and back-end development. I am adept at utilizing modern JavaScript frameworks like React, Vue.js, and Angular for building dynamic and interactive user interfaces. My expertise extends to back-end development with Node.js, Python (Django/Flask), and other popular languages. I am comfortable working with various databases, including relational databases like MySQL and PostgreSQL, as well as NoSQL databases like MongoDB. I have a solid understanding of software engineering principles, including object-oriented programming, design patterns, and agile development methodologies.',
      image: 'https://via.placeholder.com/950',
      button: { label: 'Hire Me', link: '#' },
    },
  },
  {
    id: 'skills',
    type: 'skills',
    heading: 'My Expertise',
    data: { skills: [{ name: 'JavaScript' }, { name: 'Vue.js' }, { name: 'Node.js' }] },
  },
  {
    id: 'experiences',
    type: 'experiences',
    data: {
      heading: 'My Experience',
      caption:
        'Continuously seeking new challenges and opportunities to expand my knowledge and contribute to innovative projects. Eager to join a dynamic team and make a significant impact.',
      experiences: [
        {
          title: 'Full-Stack Developer',
          company: 'Company A',
          location: 'Malang, Indonesia',
          date: '2016 - 2018',
          description:
            'Developed and maintained a high-traffic e-commerce platform utilizing React, Node.js, and MongoDB. Implemented user authentication, payment gateway integration, and inventory management systems. Collaborated with cross-functional teams including designers, product managers, and QA engineers to deliver successful projects. Contributed to improving website performance and user experience through A/B testing and data analysis.',
        },
        {
          title: 'UI/UX Designer & Front-End Developer',
          company: 'Company B',
          location: 'Yogyakarta, Indonesia',
          date: '2018 - 2021',
          description:
            'Designed and developed a user-friendly e-learning platform for a higher education institution, utilizing React, Redux, and a headless CMS. Conducted user research and created user personas to inform design decisions. Developed interactive and engaging learning experiences, including gamified elements and personalized learning paths. Improved website accessibility and usability based on user feedback and industry best practices.',
        },
        {
          title: 'Senior Full-Stack Engineer',
          company: 'Company C',
          location: 'Denpasar, Bali',
          date: '2021 - present',
          description:
            'Led the development of a cloud-based collaboration platform for remote teams, utilizing React, Node.js, and AWS. Designed and implemented real-time communication features, including video conferencing, chat, and file sharing. Optimized application performance and scalability to handle a growing user base. Mentored junior developers and fostered a collaborative team environment.',
        },
      ],
    },
  },
  {
    id: 'projects',
    type: 'projects',
    data: {
      heading: 'Selected Works',
      caption: 'A selection of my recent projects.',
      projects: [
        {
          title: 'E-commerce Platform for Local Artisans',
          description:
            "Developed a fully functional e-commerce platform for a collective of local artisans. This project involved front-end development using React, back-end development with Node.js and Express.js, and database design with MongoDB. Implemented features such as product listings, user authentication, secure payment processing, and order management. This project significantly improved the artisans' online visibility and sales.",
          link: 'https://project-a.com',
          image:
            'https://images.unsplash.com/photo-1675703818188-cee153b831f3?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Interactive Educational App for Children',
          description:
            'Designed and developed an interactive educational app for children to learn basic math and science concepts. Utilized React Native for cross-platform compatibility (iOS and Android). Implemented gamified learning experiences, engaging animations, and personalized learning paths. This project received positive feedback from parents and educators for its user-friendly interface and effective learning outcomes.',
          link: 'https://project-b.com',
          image:
            'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Revamp of a Fitness Tracking App',
          description:
            'Led the redesign and development of a fitness tracking app. Conducted user research to identify pain points and improve the user experience. Redesigned the user interface with a focus on intuitiveness and visual appeal using Figma. Developed new features such as social integration, personalized workout plans, and progress tracking using React and a cloud-based database. This resulted in increased user engagement and app store ratings.',
          link: 'https://project-c.com',
          image:
            'https://images.unsplash.com/photo-1662386392870-1f47856cf78f?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Social Networking App for Pet Owners',
          description:
            'Developed a social networking app specifically for pet owners to connect, share experiences, and find local services. Utilized a combination of React Native, Firebase, and a cloud-based database. Implemented features such as user profiles, pet profiles, community forums, event calendars, and local business directories. This project successfully addressed the needs of a niche community and fostered a strong sense of online community.',
          link: 'https://project-c.com',
          image:
            'https://images.unsplash.com/photo-1601758002737-1919f3ba2774?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
    },
  },
  {
    id: 'services',
    type: 'services',
    data: {
      heading: 'Services',
      caption: 'What I can do for you.',
      services: [
        {
          title: 'End-to-End Web Application Development',
          description:
            'From concept to deployment, I handle all aspects of web application development. This includes user research and interface design, front-end development using modern frameworks like React or Vue.js, back-end development with Node.js, Python (Django/Flask), or other suitable languages, and database integration. I ensure a seamless user experience, high performance, and robust security.',
          icon: 'browser-outline',
        },
        {
          title: 'Mobile App Development',
          description:
            "I specialize in developing cross-platform mobile applications using frameworks like React Native or Flutter. I focus on creating intuitive and user-friendly interfaces, integrating with backend APIs, and ensuring smooth performance across different devices. I can help you bring your mobile app ideas to life, whether it's a consumer-facing app, a business tool, or an internal company application.",
          icon: 'layers-outline',
        },
        {
          title: 'UI/UX Design & Prototyping',
          description:
            'I excel at creating visually appealing and user-centered digital experiences. I conduct user research to understand user needs and pain points. I then translate these insights into wireframes, mockups, and interactive prototypes using design tools like Figma or Sketch. I ensure that the user interface is not only visually appealing but also intuitive and easy to navigate.',
          icon: 'layout-outline',
        },
        {
          title: 'Technical Consulting & Project Management',
          description:
            'I can provide expert technical guidance and project management support for your digital projects. This includes assisting with technology selection, architectural design, and development team management. I can also help you define project scope, manage timelines and budgets, and ensure the successful delivery of your projects within the required timeframe and budget.',
          icon: 'unlock-outline',
        },
      ],
    },
  },
  {
    id: 'clients',
    type: 'clients',
    data: {
      heading: 'Clients',
      caption: 'Companies I have worked with.',
      clients: [
        { name: 'Company A', image: '/logo/logoipsum-349.svg' },
        { name: 'Company B', image: '/logo/logoipsum-255.svg' },
        { name: 'Company C', image: '/logo/logoipsum-212.svg' },
        { name: 'Company D', image: '/logo/logoipsum-290.svg' },
        { name: 'Company E', image: '/logo/logoipsum-329.svg' },
      ],
    },
  },
  {
    id: '3cols',
    type: '3cols',
    data: {
      heading: 'Education, Awards and Contact',
      educations: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          school: 'University A',
          date: '2016-2020',
        },
        {
          degree: 'Master of Science',
          major: 'Computer Science',
          school: 'University B',
          date: '2020-2022',
        },
      ],
      awards: [
        {
          title: 'Award A',
          date: '2021',
          description: 'Description of Award A.',
        },
        {
          title: 'Award B',
          date: '2021',
          description: 'Description of Award A.',
        },
        {
          title: 'Award C',
          date: '2021',
          description: 'Description of Award A.',
        },
      ],
      contact: {
        email: 'test@test.test',
        phone: '123-456-7890',
        address: '123 Street, City, Country',
        description: 'Contact me!',
      },
    },
  },
  {
    id: 'socials',
    type: 'socials',
    data: {
      heading: 'Social',
      socials: [
        { name: 'GitHub', link: 'https://github.com' },
        { name: 'Twitter', link: 'https://twitter.com' },
      ],
    },
  },
  {
    id: 'testimonials',
    type: 'testimonials',
    data: {
      heading: 'Client Testimonials',
      caption: 'Refer to what my clients say about me, it speaks for itself.',
      testimonials: [
        {
          name: 'John Doe',
          title: 'CEO of Company A',
          content:
            '{{ Your Name }} and their team delivered an exceptional end-to-end solution for our e-commerce platform. They seamlessly integrated design, development, and deployment, resulting in a robust and user-friendly platform that exceeded our expectations.',
          rating: 5,
        },
        {
          name: 'Jane Smith',
          title: 'Client Relations Manager at Company B',
          content:
            'The UI/UX designs provided by {{ Your Name }} were truly remarkable. Their focus on user experience resulted in a visually appealing and intuitive interface that significantly improved user engagement with our application.',
          rating: 4,
        },
        {
          name: 'Alice Johnson',
          title: 'CTO of Company C',
          content:
            'Working with {{ Your Name }} was a pleasure. Their technical expertise and problem-solving skills were evident throughout the project. They consistently delivered high-quality code and provided valuable insights that enhanced the overall project.',
          rating: 5,
        },
        {
          name: 'Bob Brown',
          title: 'Product Manager at Company D',
          content:
            'I highly recommend {{ Your Name }} for any software development project. Their professionalism, attention to detail, and commitment to delivering exceptional results make them an invaluable asset to any team. We look forward to collaborating on future projects.',
          rating: 5,
        },
        {
          name: 'Charlie Chalks',
          title: 'Senior',
          content:
            'We were struggling to define the scope of our mobile app development project. {{ Your Name }} provided invaluable consulting services, guiding us through the entire process and helping us make informed decisions about technology, features, and budget.',
          rating: 4,
        },
        {
          name: 'Davidson Daviddad',
          title: 'Manager',
          content:
            'The technical support provided by {{ Your Name }} was outstanding. They were responsive, knowledgeable, and proactive in addressing our concerns and resolving any issues that arose during the development process. We appreciate their dedication and expertise.',
          rating: 5,
        },
      ],
    },
  },
]
