import type { Project, Experience } from "../types";

import codeninja from "../components/images/codeninja.jpeg";
import logo from "../components/images/logo.png";
import loot8S1 from "../components/images/loot8-s1.webp";
import loot8S2 from "../components/images/loot8-s2.webp";
import loot8S3 from "../components/images/loot8-s3.webp";
import loot8S4 from "../components/images/loot8-s4.webp";
import apniDukan1 from "../components/images/apni-dukan-1.webp";
import apniDukan2 from "../components/images/apni-dukan-2.webp";
import apniDukan3 from "../components/images/apni-dukan-3.webp";
import apniDukan4 from "../components/images/apni-dukan-4.webp";
import onboarding1 from "../components/images/onboarding-1.webp";
import onboarding2 from "../components/images/onboarding-2.webp";
import onboarding3 from "../components/images/onboarding-3.webp";
import onboarding4 from "../components/images/onboarding-4.webp";
import delivery from "../components/images/delivery.jpg";
import funoonee from "../components/images/Funoonee.jpg";
import worklics from "../components/images/worklics.jpg";
import stepPrep1 from "../components/images/stepPrep1.webp";
import stepPrep2 from "../components/images/stepPrep2.webp";
import stepPrep3 from "../components/images/stepPrep3.webp";
import stepPrep4 from "../components/images/stepPrep4.webp";

export const projects: Project[] = [
  {
    name: "StepPrep",
    description:
      "A comprehensive Ed-Tech platform powered by Arvo, designed to revolutionize the study experience. Features a curated daily study schedule, educational video content, extensive MCQs, and short/long-form assessments.",
    image: stepPrep1,
    screenshots: [stepPrep1, stepPrep2, stepPrep3, stepPrep4],
    tags: ["Ed-Tech"],
    badges: [
      { text: "React Native", colorScheme: "blue" },
      { text: "Education", colorScheme: "green" },
      { text: "iOS & Android", colorScheme: "purple" },
      { text: "REST API", colorScheme: "orange" },
    ],
    buttons: [{ text: "Play Store", href: "https://play.google.com/store/apps/details?id=com.stepprep" }],
  },
  {
    name: "Loot8",
    description:
      "An innovative entertainment ecosystem built on blockchain and Web3 technology. Connects creators and fans for exclusive digital experiences with wallet integration, NFT marketplace, and token-based transactions.",
    image: logo,
    screenshots: [loot8S1, loot8S2, loot8S3, loot8S4],
    tags: ["Web3"],
    badges: [
      { text: "React Native", colorScheme: "blue" },
      { text: "Web3", colorScheme: "purple" },
      { text: "Blockchain", colorScheme: "orange" },
      { text: "NFT", colorScheme: "pink" },
    ],
    buttons: [{ text: "App Store", href: "https://apps.apple.com/in/app/loot8/id1666456551" }],
  },
  {
    name: "Apni Dukan",
    description:
      "24Seven online grocery platform with 1000+ store partners. E-commerce app for browsing catalogs, wishlists, cart management, payment processing, and order tracking.",
    image: apniDukan1,
    screenshots: [apniDukan1, apniDukan2, apniDukan3, apniDukan4],
    tags: ["E-Commerce"],
    badges: [
      { text: "React Native", colorScheme: "blue" },
      { text: "Redux", colorScheme: "purple" },
      { text: "REST API", colorScheme: "green" },
    ],
    buttons: [{ text: "View Project", href: "#" }],
  },
  {
    name: "OnBoarding App",
    description:
      "Used to onboard shop retailers registered with 24Seven. Associates add required data of shops and shop owners which can be approved or rejected by the Cluster Manager.",
    image: onboarding1,
    screenshots: [onboarding1, onboarding2, onboarding3, onboarding4],
    tags: ["Enterprise"],
    badges: [
      { text: "React Native", colorScheme: "blue" },
      { text: "Maps", colorScheme: "teal" },
    ],
    buttons: [{ text: "View Project", href: "#" }],
  },
  {
    name: "Delivery App",
    description:
      "Delivery management for shop retailers from warehouse. Rider automatically moves to the optimized route for efficient delivery with real-time tracking.",
    image: delivery,
    tags: ["Logistics"],
    badges: [
      { text: "React Native", colorScheme: "blue" },
      { text: "Google Maps", colorScheme: "red" },
    ],
    buttons: [{ text: "View Project", href: "#" }],
  },
  {
    name: "Funoonee",
    description:
      "Online marketplace for hiring handymen based in Riyadh. Developed both mobile and web applications using React Native and React JS.",
    image: funoonee,
    tags: ["Marketplace"],
    badges: [
      { text: "React Native", colorScheme: "blue" },
      { text: "React JS", colorScheme: "cyan" },
    ],
    buttons: [{ text: "View Project", href: "#" }],
  },
  {
    name: "Worklics",
    description:
      "Attendance app with facial recognition using Microsoft Azure cognitive services, Google Maps API, Redux persist, and Firebase push notifications.",
    image: worklics,
    tags: ["AI/ML"],
    badges: [
      { text: "React Native", colorScheme: "blue" },
      { text: "Azure AI", colorScheme: "purple" },
      { text: "Firebase", colorScheme: "orange" },
    ],
    buttons: [{ text: "View Project", href: "#" }],
  },
];

export const experience: Experience[] = [
  {
    image: logo,
    company: "Arvo",
    position: "Software Engineer",
    duration: "Mar 2024 — Present",
    badges: [
      { name: "React Native", colorScheme: "blue" },
      { name: "iOS", colorScheme: "gray" },
      { name: "Android", colorScheme: "green" },
    ],
    listItems: [
      "Developed and maintained mobile applications using React Native for cross-platform compatibility on iOS and Android",
      "Integrated RESTful APIs to ensure seamless data flow between front-end and back-end services",
      "Implemented secure social login authentication for Facebook, Google, Microsoft, and Apple",
      "Collaborated with UI/UX design team to translate wireframes into high-quality functional interfaces",
      "Worked on multiple education apps including StepPrep, AEP, and Student App",
    ],
    tags: "Arvo",
  },
  {
    image: codeninja,
    company: "CodeNinja Consulting",
    position: "Software Engineer",
    duration: "Feb 2022 — Mar 2024",
    badges: [
      { name: "React Native", colorScheme: "blue" },
      { name: "JavaScript", colorScheme: "yellow" },
      { name: "REST API", colorScheme: "green" },
    ],
    listItems: [
      "Developed and maintained React Native components, screens, and features for mobile apps",
      "Collaborated with developers to implement features consistent with existing code-base conventions",
      "Integrated REST APIs and maintained code for both Android and iOS",
      "Deployed apps on both PlayStore and AppStore",
      "Worked on Loot8, 24Seven Apni Dukan, Graana, Worklics, and Funoonee",
    ],
    tags: "CodeNinja Consulting",
  },
];
