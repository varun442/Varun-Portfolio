import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Varun Savai",
  initials: "sv",
  url: "https://dillion.io",
  location: "Atlanta, GA",
  locationLink: "https://www.google.com/maps/place/atlanta",
  description:
    "Software Engineer. I love building things, helping people & lifting weights.",
  summary:
    "I moved to US in 2023 to pursue a Master's degree in Computer Science at Georgia State University 🎓, seeking to expand my knowledge and gain international exposure after [working for 2 years](/#experience) in India  💼. During my summer, I interned at [Alien Attorney/Orbex labs](/#experience) 👽💼, gaining valuable experience in the US tech industry. In the past, I pursued a [B.Tech in CSE at JNTUH](/#education) 🖥️🎓. Currently, I'm actively looking for Software Engineer roles (both full-time and internship opportunities) 👨‍💻🔍. Apart from my tech pursuits, I also enjoy lifting weights 🏋️‍♂️, learning about nutrition 🥗, and reading self-help books 📚, maintaining a well-rounded lifestyle that complements my professional ambitions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Java",
    "Javascript",
    "Node.js",
    "MongoDB",
    "Python",
    "PostgreSQL",
    "Redis",
    "MySQL",
    "Docker",
    "Kubernetes",
    "C++",
    "HTML",
    "CSS",
    "REST API",
    "CI/CD",
    "GraphQL"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "varun.savai23@gmail.com",
    tel: "+1 862 410 4910",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/varun442",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in//varunsavai",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram:{
        name: "Instagram",
        url: "https://www.instagram.com/varunsavai/",
        icon: Icons.instagram,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:varun.savai23@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Georgia State University - Student Success Department",
      href: "https://success.students.gsu.edu/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/GSU.png",
      start: "Aug 2024",
      end: "present",
      description:
        "Built and deployed a comprehensive student management platform using React.js, Node.js, and AWS DynamoDB that streamlined attendance tracking and grade monitoring, leading to an 85% reduction in administrative workload and saving 20+ hours weekly for 300+ professors managing 10K+ students. Engineered a robust communication system utilizing SendGrid API with JWT authentication and Redis caching that achieved 98% email delivery rate, significantly improving student outreach efficiency. Implemented targeted intervention strategies for 100+ at-risk students, resulting in a 40% improvement in course completion rates through systematic academic and career mentorship. Leveraged full-stack expertise across HTML, CSS, React.js, JavaScript, Node.js, AWS DynamoDB, SendGrid API, JWT, and Redis to deliver a scalable and secure solution that transformed academic operations and student success tracking.",
    },{
      company: "Alien Attorney/Orbex Labs",
      href: "https://www.alienattorney.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/alien.jpg",
      start: "May 2024",
      end: "Aug 2024",
      description:
      "Developed a high-performance AI document classification system using ReactJS, JavaScript, and Redux, featuring responsive UI components that improved workflow efficiency by 60% and enhanced user experience. Engineered an automated HTML5-based document annotation system that eliminated manual processes, increasing processing speed by 80% through single-click functionality. Implemented PostgreSQL schema denormalization and Python Django Rest APIs to handle increased document processing load, achieving 70% faster query response times and scaling from 100K to 1M+ daily requests. Optimized deployment infrastructure using GitHub Actions, Docker containerization, and AWS, establishing robust CI/CD pipelines with automated testing and monitoring that maintained a 99% deployment success rate, leveraging a comprehensive tech stack including ReactJS, JavaScript, Redux, HTML5, PostgreSQL, Python Django, Docker, and AWS."
    },
    {
      company: "LTIMindTree",
      badges: [],
      href: "https://www.ltimindtree.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/lti.jpg",
      start: "Oct 2020",
      end: "May 2022",
      description: "Architected and transformed a monolithic credit decisioning system into a microservices architecture using Core Java, Spring Boot, and AWS Kubernetes, significantly improving credit decision time by 40% and enabling 4x more application processing through an optimized ReactJS frontend and Spring backend REST APIs. Engineered a robust data persistence layer with Spring Data JPA, Hibernate, Java 17, and MySQL/PostgreSQL that achieved 45% faster transaction processing, while implementing comprehensive testing frameworks using Cypress, Playwright, JUnit, and Cucumber that reduced scoring discrepancies by 40%. Developed a high-throughput Kafka-based credit monitoring system processing 10,000+ daily transactions that slashed fraud detection latency from 15 to 5 minutes, enabling real-time fraud alerts. Led end-to-end Agile SDLC processes while applying OOP principles and design patterns, utilizing a tech stack including Java, Spring Boot, React, Kafka, Kubernetes, AWS, MySQL/PostgreSQL, and modern testing frameworks to deliver a scalable, efficient credit processing platform."
    },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Georgia State University",
      href: "https://csds.gsu.edu/",
      degree: "Master of Science in Computer Science",
      logoUrl: "/GSU.png",
      start: "2023",
      end: "present",
    },
    {
      school: "Jawaharlal Nehru Technological University",
      href: "https://jntuh.ac.in/",
      degree: "Bachelor of Technology in Computer Science Engineering",
      logoUrl: "/jntu.png",
      start: "2016",
      end: "2020",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Community Restoration (Hackathon)",
      href: "https://github.com/varun442/CRP",
      dates: "Sept 2024",
      active: true,
      description: "A MERN stack app for the Community Restoration Project, featuring event management, volunteer coordination, and a points system. Built with React.js, MongoDB, MaterialUI, ExpressJS, and JavaScript, it uses Gemini API and Generative AI for a chatbot integration.",

      technologies: [
        "React.js",
        "MongoDB",
        "MaterialUI",
        "JavaScript",
        "ExpressJS",
        "Gemini API",
        "Generative AI"
      ],
      links: [
        
        {
          type: "Source - Frontend",
          href: "https://github.com/varun442/CRP",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source - Backend",
          href: "https://github.com/varun442/CRP-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crp.jpg",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Crypto Hunter",
      href: "https://kriptoo.netlify.app/",
      dates: "Jan 2023 - Feb 2023",
      active: true,
      description:
      "A React.js cryptocurrency tracking app using CoinGecko API, Chart.js, and Firebase Authentication. Offers coin rankings, news, watchlists, and price chart analysis",
      technologies: [
        "React.js",
        "Firebase Authentication",
        "Chart.js",
        "CoinGecko API",
        "Context API",
      ],
      links: [
        {
          type: "Website",
          href: "https://kriptoo.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/varun442/crypto-hunter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crypto.png",
      video: "",
    },
    {
      title: "Moviebase",
      href: "https://movieebasee.netlify.app/",
      dates: "Mar 2023",
      active: true,
      description:
      "A React-based movie and TV show information platform utilizing TMDB API. Features React Router, Context API, and React Carousel for seamless navigation and an engaging user experience.",
      technologies: [
        "React.js",
        "Context API",
        "React Router Dom",
        "Axios",
        "React Carousel",
        "TMDB API",
      ],
      links: [
        {
          type: "Website",
          href: "https://movieebasee.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://movieebasee.netlify.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/moviebase.png",
    },
    {
      title: "AI Course Generator",
      href: "https://ai-course-generator-ten.vercel.app/",
      dates: "Sept 2024",
      active: true,
      description: "A full-stack web application built with Next.js, React, and TailwindCSS. Utilizes Gemini API for content generation, YouTube API for video integration, and Clerk for authentication. Enables users to create custom courses with AI-generated content and curated video resources.",

      technologies: [
        "Next.js",
        "Drizzle ORM",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
        "Gemini API",
        "Generative AI"
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-course-generator-ten.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/varun442/AI-Course-Generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AI.png",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Code to Give by Morgan Stanley",
      dates: "Sept 18th - 23rd, 2024",
      location: "Alpharetta, Georgia",
      description:
      "We've built a MERN stack app to help the Community Restoration Project improve connections in their housing programs. It includes features for managing events, volunteers, and discussions, plus a points system to encourage participation. Although we didn't win the hackathon, the experience of developing this solution was invaluable, providing insights into real-world community needs and collaborative problem-solving.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*twctbt-v6anXTJW7EzvI1w.png",
      links: [{
        title: "Source - Frontend",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/varun442/CRP",
      },{
        title: "Source - Backend",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/varun442/CRP-backend",
      }],
    },
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "FirstNet Public Safety Hackathon",
    //   dates: "March 23rd - 24th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //   icon: "public",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //   links: [],
    // },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ]    // },
  ],
} as const;
