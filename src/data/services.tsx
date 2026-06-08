import { AutoAwesome, Code, Dashboard, Engineering, MoveUp } from "@mui/icons-material";
import Image from "next/image";

export const services = [
  {
    title: "React-Frontend Development",
    description:
      "Custom React applications built with scalability, maintainability, and performance in mind.",
    stacks: [
      "React",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "TypeScript",
      "Material UI",
      "REST APIs",
    ],
    icon: <Dashboard />,
  },
  {
    title: "Next.js Fullstack Development",
    description:
      "Server-rendered and modern web applications optimized for speed and user experience.",
    stacks: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Redux",
      "Prisma",
      "PostgreSQL",
      "Material UI",
      "REST APIs",
      "TypeScript",
    ],
    icon: <Image src="/vercel.svg" alt="Next.js Logo" width={20} height={20} className="invert dark:invert-0" />,
  },
  {
    title: "React Native - Frontend Development",
    description: "Cross-platform mobile applications for Android and iOS.",
    stacks: [
      "React Native",
      "Redux",
      "Firebase",
      "REST APIs",
      "TypeScript",
      "Zustand",
    ],
    icon: <Code />,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving application speed, responsiveness, and overall user experience.",
    stacks: [
      "React Performance Optimization",
      "Next.js Performance Optimization",
      "React Hooks Optimization",
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Profiling and Debugging",
    ],
    icon: <AutoAwesome />,
  },
  {
    title: "Maintenance and Support",
    description:
      "Ongoing maintenance, updates, and technical support for existing applications. Ensuring your software remains secure, up-to-date, and performing optimally.",
    stacks: [
      "Bug Fixes",
      "Updates",
      "Security Patches",
      "Performance Tuning",
      "Backup Solutions",
      "Monitoring",
      "React Native Maintenance",
      "Next.js Maintenance",
      "React Maintenance",
    ],
    icon: <Engineering />,
  },
  {
    title: "Legacy Application Modernization",
    description:
      "Transforming legacy applications into modern, responsive, and user-friendly web and mobile applications.",
    stacks: [
      "React Migration",
      "Next.js Migration",
      "React Native Migration",
      "TypeScript Migration",
      "Material UI Migration",
      "Redux Migration",
      "PostgreSQL Migration",
    ],
    icon: <MoveUp />,
  },
];
