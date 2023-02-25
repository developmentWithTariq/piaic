import { TbBrandNextjs } from "react-icons/tb";
import { SiAmazonalexa, SiKeras, SiMatternet, SiTerraform, SiTypescript } from "react-icons/si";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoMdPlanet } from "react-icons/io";
import { TbAugmentedReality  } from "react-icons/tb";
import { FaPython  } from "react-icons/fa";
import { AiOutlinePartition  } from "react-icons/ai";
import { SiKubernetes  } from "react-icons/si";
import { ImCloud  } from "react-icons/im";
import { MdRecordVoiceOver  } from "react-icons/md";
import { FaRust  } from "react-icons/fa";
import { MdBiotech  } from "react-icons/md";
import { GrSystem } from 'react-icons/gr'
import bioImg from '/public/images/bio.webp'
import iotImg from '/public/images/iot.webp'
import metaImg from '/public/images/meta.webp'

export const CumpulsoryCourses = [
  {
    id: 1,
    categories: ["Quarter I", "(Core)"],
    title: "Object-Oriented Programming using TypeScript",
    icon: SiTypescript,
    image: "https://imgs.search.brave.com/NbUIKN1Z1BTMSpiVPgd1Ymg_j8zAyA3T_AJ1SLlJUCQ/rs:fit:1176:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/ZE82TzA3QWdEbWpw/ZmRBX1ppazN3SGFD/XyZwaWQ9QXBp",
    description: `We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. `,
    date: "Duration: 13 Weeks",
    courses: [
      {
        title: "Html Css Javascript",
        icon: "https://imgs.search.brave.com/ZmvmlWYjh4tpKcEkfLhGGltCiJbX0smJ1o71Mc5U2TE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/Z0Vqd0VNM2R1T0lD/dHp0MXdFUUV3SGFI/YSZwaWQ9QXBp",
        description: "Html, Css and Javascript is Basic Tools to Build a Website. HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript. CSS is used to control presentation, formatting, and layout. JavaScript is used to control the behavior of different elements."
      },
      {
        title: "Web 3.0 and Metaverse Theory",
        icon: "https://www.emizentech.com/blog/wp-content/uploads/sites/2/2022/04/what-is-metaverse-learn-everthing-about-it.jpg",
        description: "Web3 is decentralized: instead of large swathes of the internet controlled and owned by centralized entities, ownership gets distributed amongst its builders and users. Web3 is permissionless: everyone has equal access to participate in Web3, and no one gets excluded."
      },
      {
        title: "Object Oriented Programming using Typescript",
        icon: "https://imgs.search.brave.com/zNpoQFjgII6BsFC5InqayrGyeCAAskcbh-I1kCX2W8w/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/YUtlM2pYc0xkOGZs/b3ZOc1gyXzNRSGFI/YSZwaWQ9QXBp",
        description: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor."
      }
      
    ]
  },
  {
    id: 2,
    categories: ["Quarter II", "(Core)"],
    title:
      "Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    icon: TbBrandNextjs,
    image: "https://imgs.search.brave.com/fDRTA5rJt5iVKNOJkk3_VZim-Ou1i9TN1irj5iJD7OE/rs:fit:727:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/NDdYcmJxMGZQakhR/d0RTM2I3WTF3QUFB/QSZwaWQ9QXBp",
    description: `The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).`,
    date: "Duration: 13 Weeks",
    courses: [
      {
        title: "Next.js 13 Web Development",
        icon: "https://imgs.search.brave.com/ZmvmlWYjh4tpKcEkfLhGGltCiJbX0smJ1o71Mc5U2TE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/Z0Vqd0VNM2R1T0lD/dHp0MXdFUUV3SGFI/YSZwaWQ9QXBp",
        description: "Over the past few months, the Next.js team has been working to integrate Next.js with React Server Components and React 18 features. These new features are now available to try in the new app directory."
      },
      {
        title: "Next.js 13 using Chakra UI (Remote Zoom Class)",
        icon: "https://www.emizentech.com/blog/wp-content/uploads/sites/2/2022/04/what-is-metaverse-learn-everthing-about-it.jpg",
        description: "Over the past few months, the Next.js team has been working to integrate Next.js with React Server Components and React 18 features. These new features are now available to try in the new app directory."
      },
      {
        title: "UI/UX Design with Figma, TailwindCSS, and Chakra UI",
        icon: "https://imgs.search.brave.com/zNpoQFjgII6BsFC5InqayrGyeCAAskcbh-I1kCX2W8w/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/YUtlM2pYc0xkOGZs/b3ZOc1gyXzNRSGFI/YSZwaWQ9QXBp",
        description: "Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano"
      },
      {
        title: "API Routes with Next.js (Remote Zoom Class)",
        icon: "https://imgs.search.brave.com/zNpoQFjgII6BsFC5InqayrGyeCAAskcbh-I1kCX2W8w/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/YUtlM2pYc0xkOGZs/b3ZOc1gyXzNRSGFI/YSZwaWQ9QXBp",
        description: "A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a POST request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely ..."
      },
      {
        title: "APIs with Next.js and tRPC (Remote Zoom Class)",
        icon: "https://imgs.search.brave.com/zNpoQFjgII6BsFC5InqayrGyeCAAskcbh-I1kCX2W8w/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/YUtlM2pYc0xkOGZs/b3ZOc1gyXzNRSGFI/YSZwaWQ9QXBp",
        description: "tRPC is a remote procedure call framework that provides a type-safe environment to build APIs for TypeScript and JavaScript-based projects without relying on schema definitions or libraries for code generation"
      },
      {
        title: "SQL and Prisma",
        icon: "https://imgs.search.brave.com/zNpoQFjgII6BsFC5InqayrGyeCAAskcbh-I1kCX2W8w/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/YUtlM2pYc0xkOGZs/b3ZOc1gyXzNRSGFI/YSZwaWQ9QXBp",
        description: "Learn how to create a new Node.js or TypeScript project from scratch by connecting Prisma to your database and generating a Prisma Client for database access. The following tutorial introduces you to the Prisma CLI, Prisma Client, and Prisma Migrate."
      },
      {
        title: "Next.js 13 using TailwindCSS (Remote Zoom Class)",
        icon: "https://imgs.search.brave.com/zNpoQFjgII6BsFC5InqayrGyeCAAskcbh-I1kCX2W8w/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/YUtlM2pYc0xkOGZs/b3ZOc1gyXzNRSGFI/YSZwaWQ9QXBp",
        description: "Tailwind CSS is an exciting new CSS framework that allows you to design your site by composing simple utility classes to create complex effects. With Tailwind, you can style your text, move your items on the page, design complex page layouts"
      },
      {
        title: "AWS Application Composer (Remote Zoom Class)",
        icon: "https://imgs.search.brave.com/zNpoQFjgII6BsFC5InqayrGyeCAAskcbh-I1kCX2W8w/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/YUtlM2pYc0xkOGZs/b3ZOc1gyXzNRSGFI/YSZwaWQ9QXBp",
        description: "Streamline the composition of serverless applications from multiple AWS services. Simplify common tasks—such as generating deployment-ready configuration and IaC—for each service in your architecture."
      },
      {
        title: "Multi-Cloud GraphQL Serverless API Development with (CDKTF)",
        icon: "https://imgs.search.brave.com/zNpoQFjgII6BsFC5InqayrGyeCAAskcbh-I1kCX2W8w/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/YUtlM2pYc0xkOGZs/b3ZOc1gyXzNRSGFI/YSZwaWQ9QXBp",
        description: "Cloud Computing has revolutionized the world of information and technology. From the way we deploy and maintain applications to the development practices, everything has been highly impacted by Cloud Computing. All new applications are developed to be cloud-native and compatible with cloud services."
      }
    ]
  },
  {
    id: 3,
    categories: ["Quarter III", "(Core)"],
    title:
      "Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    icon: AiOutlineDollarCircle,
    image: "https://imgs.search.brave.com/pzuWydvXlzkSfevPqlqX3ykmHQpGqy1NnO6bSIJDxFc/rs:fit:774:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/VlJWMFZPeDhTZmFa/U0FNaF8zQTRBSGFF/aSZwaWQ9QXBp",
    description: `You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. `,
    date: "Duration: 13 Weeks",
    courses: [
      {
        title: "Build Full-Stack Next.js 13 Jamstack Templates",
        icon: "https://imgs.search.brave.com/ZmvmlWYjh4tpKcEkfLhGGltCiJbX0smJ1o71Mc5U2TE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/Z0Vqd0VNM2R1T0lD/dHp0MXdFUUV3SGFI/YSZwaWQ9QXBp",
        description: "You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens."
      },
      {
        title: "Build QraphQL APIs",
        icon: "https://imgs.search.brave.com/ZmvmlWYjh4tpKcEkfLhGGltCiJbX0smJ1o71Mc5U2TE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/Z0Vqd0VNM2R1T0lD/dHp0MXdFUUV3SGFI/YSZwaWQ9QXBp",
        description: "You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens."
      }
    ]
  },
]

export const SpecializationTrack = [
    {
        title: "Web 3.0 and Metaverse Specialization",
        description: "A ONE AND A QUARTER YEAR DEV PROGRAM FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF METAVERSE.",
        image: "https://imgs.search.brave.com/S2rR3N5R6KkcNRulG3xCVqJa_o-4eaAzIQEhSebziVQ/rs:fit:847:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/QzYyN3liSzR5dGMz/d3BzYXVzTGNRSGFF/SiZwaWQ9QXBp",
        details: [
              {
                id: 4,
                categories: ["Quarter IV", "(Specialization)"],
                title: "Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                icon: IoMdPlanet,
                description: `In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.`,
                date: "Duration: 13 Weeks",
                courses: [
                  {
                    id: 1,
                    title: "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
                    icon: SiKubernetes,
                    description: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
                  },
                  {
                    id: 2, 
                    title: "Cloud Development Kit for Kubernetes",
                    icon: ImCloud,
                    description: "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices"
                  }
                ]
              },
              {
                id: 5,
                categories: ["Quarter V", "(Specialization)"],
                title:
                  "Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                icon: TbAugmentedReality,
                description: `The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.`,
                date: "Duration: 13 Weeks",
                courses: [
                  {
                    id: 1,
                    title: "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
                    icon: SiKubernetes,
                    description: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
                  },
                  {
                    id: 2, 
                    title: "Cloud Development Kit for Kubernetes",
                    icon: ImCloud,
                    description: "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices"
                  }
                ]
              },
        ]
    },
    {
      title: "Artificial Intelligence (AI) Specialization",
      description: "A ONE AND A QUARTER YEAR DEV PROGRAM FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI",
      image: "https://imgs.search.brave.com/dVJ2WDdzHh184TMdIFPJ8RfJp2PuAyZFtVSe2P273qQ/rs:fit:864:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/UFM2TFdkcFZOSDV2/VmluRWpiZmp3SGFF/RSZwaWQ9QXBp",
      details: [
        {
          id: 4,
          categories: ["Quarter IV", "(Specialization)"],
          title: "Developing Planet-Scale Intelligent APIs and Python Programming",
          icon: FaPython,
          description: `We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.`,
          date: "Duration: 13 Weeks",
          courses: [
            {
              id: 1,
              icon: SiKeras,
              title: "Introduction to Machine Learning, Data Science, and AI",
              description: "You won't find a top programmer, web developer, or AI engineer who doesn't use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github."
            },
            {
              id: 2, 
              icon: TbBrandNextjs,
              title: "Building Next-Gen Intelligent Apps with ChatGPT, etc. and Next.js 13",
              description: "This module is structured around a series of practical code examples, demonstrating on real world problems. PIAIC strongly believes in the value of teaching using concrete examples, anchoring theoretical ideas into actual results and tangible code patterns. These examples all rely on chat-gpt. Students will learn to build text and sequences, finance, and advanced neural network design with nextjs"
            },
            {
              id: 3,
              icon: FaPython,
              title: "Python Crash Course  for TypeScript Developers",
              description: "In this module of the program, students will learn about basic programming concepts such as lists, dictionaries, classes, functions and loops, and practice writing clean and readable code with exercises for each topic. Students will also learn how to make programs interactive and how to test code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.6 that will have students writing programs, solving problems, and making things that work in no time."
            }
          ]
        },
        {
          id: 5,
          categories: ["Quarter V", "(Specialization)"],
          title: "Deep Learning and MLOps",
          icon: AiOutlinePartition,
          description: `We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.`,
          date: "Duration: 13 Weeks",
          courses: [
            {
              id: 1,
              title: "Deep Learning with Tensorflow",
              description: "This module is structured around a series of practical code examples, demonstrating on real world problems. PIAIC strongly believes in the value of teaching using concrete examples, anchoring theoretical ideas into actual results and tangible code patterns. These examples all rely on Keras, the Python deep learning library. Students will learn Deep Learning for computer vision, text and sequences, finance, and advanced neural network design."
            },
            {
              id: 2, 
              title: "Machine Learning Engineering for Production (MLOps) using Terraform for CDK",
              description: "Terraform is one of the tools used by a lot of tech companies for managing their infrastructure. It is becoming a popular tool in IaC. It is also cloud-agnostic and can work with any cloud provider. So you can work with AWS, GCP, Azure, OCI, etc."
            }
          ]
        },
      ]
    },
    {
      title: "Cloud-Native Computing Specialization",
      description: "A ONE AND A QUARTER YEAR CLOUD COMPUTING PROGRAM FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.",
      image: "https://imgs.search.brave.com/dVJ2WDdzHh184TMdIFPJ8RfJp2PuAyZFtVSe2P273qQ/rs:fit:864:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/UFM2TFdkcFZOSDV2/VmluRWpiZmp3SGFF/RSZwaWQ9QXBp",
      details: [
        {
          id: 4,
          categories: ["Quarter IV", "(Specialization)"],
          title: "Certified Kubernetes Application Developer (CKAD)",
          icon: SiKubernetes,
          description: `Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.`,
          date: "Duration: 13 Weeks",
          courses: [
            {
              id: 1,
              title: "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
              icon: SiKubernetes,
              description: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
            },
            {
              id: 2, 
              title: "Cloud Development Kit for Kubernetes",
              icon: ImCloud,
              description: "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices"
            }
          ]
        },
        {
          id: 5,
          categories: ["Quarter V", "(Specialization)"],
          title: "Developing Multi-Cloud Apps using CDK for Terraform",
          icon: ImCloud,
          description: `Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.`,
          date: "Duration: 13 Weeks",
          courses: [
            {
              id: 1,
              title: "CDK for Terraform",
              icon: SiTerraform,
              description: "Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc."
            }
          ]
        },
      ]
    },
    {
      title: "Ambient Computing and IoT Specialization",
      description: "A FIFTEEN MONTHS IOT AND AI PROGRAM FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI.",
      image: "https://imgs.search.brave.com/jR99ioq0qFiSTxOLEfV4N4Oq8WLDPl-em31U6SBbllY/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/UU1MX3ExSTU3YWxt/R2g5UmphOTZ3SGFF/SyZwaWQ9QXBp",
      details: [
        {
          id: 4,
          categories: ["Quarter IV", "(Specialization)"],
          title: "Ambient Computing with Voice Assistants and Matter Devices",
          icon: MdRecordVoiceOver,
          description: `If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected.`,
          date: "Duration: 13 Weeks",
          courses: [
            {
              id: 1,
              title: "Alexa Skill Developement",
              icon: SiAmazonalexa,
              description: "Alexa is Amazon’s cloud-based voice service available on hundreds of millions of devices from Amazon and third-party device manufacturers. With Alexa, you can build natural voice experiences that offer customers a more intuitive way to interact with the technology they use every day. We offer a collection of tools, APIs, reference solutions, and documentation to make it easier to build for Alexa."
            },
            {
              id: 2, 
              title: "Alexa with Matter Protocol",
              icon: SiMatternet,
              description: "Since 2014, we’ve taken an open and collaborative approach to help you deliver value-add experiences and be successful with Alexa. Alexa supports devices across major smart home protocols including Wi-Fi, BLE Mesh, Zigbee, and soon Matter, and Thread across millions of new and existing Echo and eero devices"
            }
          ]
        },
        {
          id: 5,
          categories: ["Quarter V", "(Specialization)"],
          title: "Embedded Programming using C and Rust",
          icon: FaRust,
          description: `This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.`,
          date: "Duration: 13 Weeks",
          courses: [
            {
              id: 1,
              title: "Introduction to the Internet of Things and Embedded Systems",
              icon: GrSystem,
              description: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
            },
            {
              id: 2, 
              title: "Introduction to C Part 1",
              description: "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices"
            },
            {
              id: 1,
              title: "C Programming Part 2",
              description: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
            },
          ]
        }
      ]
    },
    {
      title: "Genomics and Bioinformatics Specialization",
      description: "A ONE AND A QUARTER YEAR DEV PROGRAM FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF BIOINFORMATICS.",
      image: "https://imgs.search.brave.com/S2rR3N5R6KkcNRulG3xCVqJa_o-4eaAzIQEhSebziVQ/rs:fit:847:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/QzYyN3liSzR5dGMz/d3BzYXVzTGNRSGFF/SiZwaWQ9QXBp",
      details: [
        {
          id: 4,
          categories: ["Quarter IV", "(Specialization)", "New"],
          title: "Python for Biologists",
          icon: MdBiotech,
          description: `This course will focus on learning the basics of the Python programming language through genomics examples.`,
          date: "Duration: 13 Weeks",
          courses: [
            {
              id: 1,
              title: "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
              description: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
            },
            {
              id: 2, 
              title: "Cloud Development Kit for Kubernetes",
              description: "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices"
            }
          ]
        },
        {
          id: 5,
          categories: ["Quarter V", "(Specialization)", "New"],
          title: "Bioinformatics with Python",
          icon: FaPython,
          description: `In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.`,
          date: "Duration: 13 Weeks",
          courses: [
            {
              id: 1,
              title: "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
              description: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
            },
            {
              id: 2, 
              title: "Cloud Development Kit for Kubernetes",
              description: "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices"
            }
          ]
        },
      ]
    },
    {
      title: "Programmability and Automation Specialization",
      description: "A ONE AND A QUARTER YEAR DEV PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AUTOMATION.",
      image:  "https://imgs.search.brave.com/dVJ2WDdzHh184TMdIFPJ8RfJp2PuAyZFtVSe2P273qQ/rs:fit:864:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/UFM2TFdkcFZOSDV2/VmluRWpiZmp3SGFF/RSZwaWQ9QXBp",
      details: [
        {
          id: 4,
          categories: ["Quarter IV", "(Specialization)", "New"],
          title: "CCNA 200-301 Certification",
          icon: AiOutlineSafetyCertificate,
          description: `This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.`,
          date: "Duration: 13 Weeks",
          courses: [
            {
              id: 1,
              title: "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
              description: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
            },
            {
              id: 2, 
              title: "Cloud Development Kit for Kubernetes",
              description: "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices"
            }
          ]
        },
        {
          id: 5,
          categories: ["Quarter V", "(Specialization)", "New"],
          title: "Network Programmability and Automation",
          icon: BiNetworkChart,
          description: `Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in developing the skills required for the Next-Generation Network Engineer.`,
          date: "Duration: 13 Weeks",
          courses: [
            {
              id: 1,
              title: "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
              description: "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
            },
            {
              id: 2, 
              title: "Cloud Development Kit for Kubernetes",
              description: "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices"
            }
          ]
        },
      ]
    }
]
