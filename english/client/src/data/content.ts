/**
 * ================================================================
 * Machine Society — Site Content Configuration
 * ================================================================
 *
 * HOW TO UPDATE CONTENT
 * ─────────────────────
 * 1. METADATA (this file) — controls cards/lists AND product detail sections
 * 2. BODY CONTENT (Markdown files):
 *    - Products:  client/src/content/products/{slug}.md
 *    - Research:  client/src/content/research/{slug}.md
 *
 * ── Product Series ────────────────────────────────────────────
 *   productSeries  — defines series groups shown in nav dropdown & products page
 *   Each series has: id, name, description, products[]
 *
 * ── Product Detail Page Sections ─────────────────────────────
 *   features    — Product Features (icon + title + description + optional image)
 *   useCases    — Product Use Cases (image + scenario name + description)
 *   specs       — Product Specifications (grouped table)
 *   highlights  — Product Highlights (large image + text alternating layout)
 *   modules     — Product Core Modules (card grid + images)
 *
 * ── Product status field ──────────────────────────────────────
 *   "available"      — live product
 *   "beta"           — limited / early access
 *   "in-development" — still building, shows Coming Soon overlay
 *
 * ── Image field ───────────────────────────────────────────────
 *   Upload: manus-upload-file --webdev path/to/image.jpg
 *   Use /images/filename.ext for local files.
 * ================================================================
 */

// ── Asset URLs ───────────────────────────────────────────────
export const LOGO_URL = "/images/ms-logo.png";

const CDN = {
  hero_product:  "/images/hero_product.webp",
  card_agent:    "/images/card_agent.webp",
  card_infra:    "/images/card_infra.webp",
  card_model:    "/images/card_model.webp",
  card_research: "/images/card_research.webp",
};

export const siteInfo = {
  name: "Machine Society",
  tagline: "Thousand Forms, Ultimate Intelligence",
  vision: "Full-Stack Intelligent Robot Service Provider",
  description:
    "From general-purpose humanoid robots to precision end-effectors, providing full-stack intelligent robot solutions covering R&D, manufacturing, deployment, and maintenance.",
};

// ─────────────────────────────────────────────────────────────
// TYPE DEFINITIONS
// ─────────────────────────────────────────────────────────────

export type ProductStatus = "available" | "beta" | "in-development";

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
  image?: string;       // optional feature image
}

export interface ProductUseCase {
  image: string;
  scenario: string;
  industry: string;
  description: string;
}

export interface SpecGroup {
  group: string;
  items: { label: string; value: string }[];
}

export interface ProductHighlight {
  image: string;
  title: string;
  description: string;
  imagePosition: "left" | "right";
}

export interface ProductModule {
  icon: string;
  name: string;
  description: string;
  tag?: string;
  image?: string;       // optional module image
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  label: string;
  date: string;
  status: ProductStatus;
  image: string;
  featured: boolean;
  seriesId: string;     // links to productSeries.id
  overview?: string;
  features?: ProductFeature[];
  useCases?: ProductUseCase[];
  specs?: SpecGroup[];
  highlights?: ProductHighlight[];
  modules?: ProductModule[];
}

export interface ProductSeries {
  id: string;
  name: string;
  description: string;
}

// ─────────────────────────────────────────────────────────────
// PRODUCT SERIES
// ─────────────────────────────────────────────────────────────
// Used in: nav dropdown (left column) + products page section headers

export const productSeries: ProductSeries[] = [
  {
    id: "neme-1",
    name: "Neme 1",
    description: "Next-Generation Flagship Humanoid Robot",
  },
  {
    id: "neme-grgo",
    name: "Neme GRGO",
    description: "Compact Mobile Manipulation Platform",
  },
];

// ─────────────────────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────────────────────

export const products: Product[] = [

  // ══════════════════════════════════════════════════════════
  // Neme GR00 Series
  // ══════════════════════════════════════════════════════════

  // ══════════════════════════════════════════════════════════
  // Neme GR01 Series
  // ══════════════════════════════════════════════════════════

  // ══════════════════════════════════════════════════════════
  // Neme GR H Series
  // ══════════════════════════════════════════════════════════

  // ══════════════════════════════════════════════════════════
  // Neme 1 Series
  // ══════════════════════════════════════════════════════════
  {
    slug: "neme-1",
    name: "Neme 1",
    tagline: "Next-Generation Flagship Humanoid Robot",
    label: "Neme 1",
    date: "2027",
    status: "in-development",
    image: CDN.hero_product,
    featured: true,
    seriesId: "neme-1",
    overview: "Neme 1 is the Machine Society Next-Generation Flagship Humanoid Robot, integrating the most advanced perception, decision-making, and motion control technologies, representing the future form of humanoid robots.",
    features: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Next-Generation Embodied Intelligence",
        description: "Integrates Machine Society's most advanced embodied intelligence model, supporting open-world task understanding and autonomous execution without pre-programming.",
        image: "/images/hero_product.webp",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "Full-Body Dexterous Manipulation",
        description: "Each arm has 9 degrees of freedom, equipped with 5-Finger Dexterous Hand at the end-effector, supporting complex manipulation tasks like tool use and precision assembly.",
        image: "/images/card_model.webp",
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        title: "Humanoid Bipedal Locomotion",
        description: "Dynamic balance control supporting running, stair climbing, and traversing complex terrain with max walking speed of 3 m/s, adapting to real-world environments.",
        image: "/images/card_research.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        title: "Multimodal Perception System",
        description: "360° visual perception, tactile skin, and auditory array fusion, building comprehensive environmental understanding capability and supporting autonomous decision-making in complex scenarios.",
        image: "/images/card_agent.webp",
      },
    ],
    useCases: [
      {
        image: "/images/hero_product.webp",
        scenario: "General Industrial Automation",
        industry: "Manufacturing",
        description: "No production line modification needed, directly adapts to existing factory environments, executing diverse industrial tasks like transport, assembly, and quality inspection.",
      },
      {
        image: "/images/card_agent.webp",
        scenario: "Home Services",
        industry: "Home / Service Industry",
        description: "Household assistance, elderly care, and child education, safely and autonomously completing daily service tasks in unstructured home environments.",
      },
      {
        image: "/images/card_research.webp",
        scenario: "Research Exploration",
        industry: "Research Institutions",
        description: "As a universal embodied intelligence research platform, supporting cutting-edge research in robotics learning, human-robot interaction, and cognitive science.",
      },
    ],
    specs: [
      {
        group: "Basic Information",
        items: [
          { label: "Model", value: "Neme 1" },
          { label: "Height", value: "About 1.75 m" },
          { label: "Total Weight", value: "About 65 kg" },
          { label: "Degrees of Freedom", value: "9 DOF per arm + 12 DOF for bipedal legs" },
        ],
      },
      {
        group: "Motion Performance",
        items: [
          { label: "Max Walking Speed", value: "3 m/s" },
          { label: "Jump Height", value: "0.5 m" },
          { label: "Runtime", value: "6 hours" },
        ],
      },
      {
        group: "Intelligence Capabilities",
        items: [
          { label: "Intelligence Engine", value: "Embodied Intelligence Model" },
          { label: "Task Understanding", value: "Open-world natural language instructions" },
          { label: "OTA Upgrade", value: "Supported" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        name: "Embodied Intelligence Model",
        description: "Machine Society's proprietary embodied intelligence model, supporting open-world task understanding and autonomous execution with continuous OTA evolution.",
        tag: "Core",
        image: "/images/hero_product.webp",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "5-Finger Dexterous Hand",
        description: "5-Finger Dexterous Hand equipped at both arm end-effectors, supporting complex manipulation tasks like tool use and precision assembly with industry-leading tactile sensing accuracy.",
        tag: "Standard",
        image: "/images/card_model.webp",
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        name: "Dynamic Bipedal System",
        description: "Humanoid bipedal locomotion with max speed of 3 m/s, supporting running, stair climbing, and traversing complex terrain.",
        tag: "Standard",
        image: "/images/card_research.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        name: "Multimodal Perception System",
        description: "360° vision + tactile skin + auditory array fusion, building comprehensive environmental understanding capability.",
        tag: "Standard",
        image: "/images/card_agent.webp",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // Neme GRGO Series
  // ══════════════════════════════════════════════════════════
  {
    slug: "grgo-mini",
    name: "Neme GRGO Mini",
    tagline: "Desktop-Level Intelligent Quadruped Robot, ideal for home companionship and programming education",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_research,
    featured: false,
    seriesId: "neme-grgo",
    overview: "GRGO Mini is a desktop-level intelligent quadruped robot launched by Neme AI for individual and home users. With its compact and agile body and rich facial interaction capabilities, it features an AI voice model and bionic motion engine, serving as both a programming mentor for children and a smart home assistant for the whole family. The robot weighs only about 2.5 kg with 2-3 hours of runtime, supporting voice dialogue, visual gestures, and mobile app interactions.",
    features: [
      {
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
        title: "Multimodal Emotional Interaction",
        description: "Built-in AI Voice Model and Bionic Action Engine, Can understand owner of emotions and provide realistic responses, Achieve natural and smooth of human-robot emotional communication.",
        image: CDN.card_research,
      },
      {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        title: "Smart HomeSecurity",
        description: "Equipped with autonomous patrolandabnormal sound/image detectioncapability，Supportremote video callandreal-time alert，Keep home security in your hands at all times。",
        image: CDN.card_model,
      },
      {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        title: "GraphicalProgramming Education",
        description: "ProvideEasy to useofgraphical programming interface，Let children learn robot control while playingand AI logic，Inspire programming interestandcreativity。",
        image: CDN.card_agent,
      },
    ],
    useCases: [
      {
        image: CDN.card_research,
        scenario: "Home CompanionandInteraction",
        industry: "Home Consumer",
        description: "Achieve natural through multimodal large modelsofhuman-robot communication，Provideemotional interaction、elderly careandsmart home control，become familyofintelligent companion。",
      },
      {
        image: CDN.card_model,
        scenario: "ChildrenProgramming Education",
        industry: "Education",
        description: "Graphical programming interface makes it easy for children to get started，Learn robot control while playingand AI logic，Cultivate programming thinkingandcreativity。",
      },
      {
        image: CDN.card_agent,
        scenario: "IndoorSecurityMonitoring",
        industry: "Home Security",
        description: "autonomous patrolandanomaly detectioncapability，Supportremote video callandreal-time alert，All-weather protection of home security。",
      },
      {
        image: CDN.card_research,
        scenario: "Children Educational Playmate",
        industry: "Entertainment Education",
        description: "Bionic Action Engineandrich expression interaction，accompany children tolength，Inspire interest in technologyandrobotsofinterestandpassion。",
      },
    ],
    specs: [
      {
        group: "Basic Parameters",
        items: [
          { label: "ProductsModel", value: "Neme GRGO Mini" },
          { label: "Total Weight", value: "About 2.5 kg" },
          { label: "Protection Level", value: "IP44" },
          { label: "Corecomputing power", value: "5 TOPS（edge AI chip）" },
        ],
      },
      {
        group: "Electrical Parameters",
        items: [
          { label: "Runtime", value: "About 2–3 hours" },
          { label: "Charging Method", value: "Supportautomatic return charging" },
        ],
      },
      {
        group: "interactionandCommunication",
        items: [
          { label: "interaction method", value: "voice dialogue / visiongesture / mobile phone App" },
          { label: "Communication", value: "Wi-Fi（2.4/5 GHz）/ Bluetooth" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
        name: "AI Voice Model",
        description: "edge AI Voice Model，achieve natural language understandingandemotional response，Supportvoice dialogueandautonomous task understanding。",
        image: CDN.card_infra,
        tag: "Standard",
      },
      {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        name: "Graphical Programmingplatform",
        description: "Easy to useofgraphical programming interface，Supportchildren learn robot controland AI logic，Provideabundantofteaching course resources。",
        image: CDN.card_research,
        tag: "Standard",
      },
      {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        name: "whole houseSecuritysystem",
        description: "autonomous patrolandabnormal sound/image detection，Supportremote video callandreal-time alert push，protect home security。",
        image: CDN.card_model,
        tag: "Standard",
      },
    ],
  },
  {
    slug: "grgo-air",
    name: "Neme GRGO Air",
    tagline: "Lightweight All-Terrain Quadruped Robot, ideal platform for academic research and outdoor exploration",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_model,
    featured: false,
    seriesId: "neme-grgo",
    overview: "GRGO Air is a lightweight quadruped robot with high mobility and extensibility, benchmarked against Unitree Go2, serving as a universal platform for academic research, tech enthusiast development, and lightweight outdoor inspection. With innovative hybrid material construction that reduces weight while maintaining strength, it achieves speeds up to 3.5 m/s and supports advanced dynamic movements like jumping and flipping. It provides comprehensive ROS/ROS2 interfaces and simulation environments, making it ideal for embodied AI algorithm verification in academic laboratories.",
    features: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Ultimate Mobility Performance",
        description: "Highestrunning speedcan reach 3.5 m/s，Supportjumping、somersaults and other high-difficulty dynamic movements，Easily cross 15cm obstacles，adapt to various complex terrain。",
        image: CDN.card_agent,
      },
      {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        title: "Comprehensive Open Source Ecosystem",
        description: "ProvidePerfect ROS/ROS2 interfaceandsimulation environment，Support C++ / Python Secondary development，accelerate scientific research landing，Yesalgorithm verificationofidealplatform。",
        image: CDN.card_infra,
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "Flexible Load Extension",
        description: "Top reserved standard guide rail and power supply/Communicationinterface，Can quickly mount lidar、depth camera or lightweight robotic arm，Meet diverse research needs。",
        image: CDN.card_research,
      },
    ],
    useCases: [
      {
        image: CDN.card_model,
        scenario: "University Lab Research",
        industry: "Education & Research",
        description: "Provide open algorithm verification platform for universities and research institutions，Support ROS2，Suitable for outdoor terrain exploration、Geological data collection andEnvironmental Monitoring。",
      },
      {
        image: CDN.card_research,
        scenario: "Outdoor Complex Terrain Exploration",
        industry: "Outdoor Exploration",
        description: "High MobilityCan withAll-Terrain Adaptationcapability，Easily handle grassland、sand、snow、gravel and other complex terrain，Suitable for outdoor scientific exploration and exploration tasks。",
      },
      {
        image: CDN.card_agent,
        scenario: "Lightweight Emergency Rescue",
        industry: "Emergency Rescue",
        description: "Lightweight design for quick deployment，Can carry thermal imaging and gasSensors，Conduct preliminary reconnaissance and life detection at disaster sites。",
      },
      {
        image: CDN.card_model,
        scenario: "Public Safetyand park patrol",
        industry: "Security",
        description: "Autonomous Navigation and Obstacle Avoidance capability, supporting autonomous patrol in parks, campuses, factories and other venues, achieving 24-hour continuous security monitoring.",
      },
    ],
    specs: [
      {
        group: "Basic Parameters",
        items: [
          { label: "ProductsModel", value: "Neme GRGO Air" },
          { label: "Total Weight", value: "About 12 kg" },
          { label: "Payload Capacity", value: "Max 5 kg" },
          { label: "Protection Level", value: "IP54（Dust and splash proof）" },
          { label: "Max Speed", value: "3.5 m/s" },
        ],
      },
      {
        group: "Sensing System",
        items: [
          { label: "CoreSensors", value: "4D Lidar + Wide-angle binocular vision" },
          { label: "Development Interface", value: "ROS/ROS2 + C++ / Python SDK" },
          { label: "Communication", value: "Wi-Fi / 4G / Industrial Ethernet" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        name: "High-Mobility Motion System",
        description: "Highest 3.5 m/s running speed，Supportjumping、somersaults and other high-difficulty dynamic movements，Easily cross 15cm obstacles，All-terrain adaptive gait control。",
        image: CDN.card_model,
        tag: "Standard",
      },
      {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        name: "Open Source Development Platform",
        description: "Perfect ROS/ROS2 interfaceandsimulation environment，Support C++ / Python Secondary development，Provide abundant algorithm examples and tutorial resources。",
        image: CDN.card_agent,
        tag: "Standard",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "Modular Extension Interface",
        description: "Top standard guide rail and power supply/Communicationinterface，Can quickly mount lidar、depth camera、lightweight robotic arm and other load modules。",
        image: CDN.card_infra,
        tag: "Standard",
      },
    ],
  },
  {
    slug: "grgo-pro",
    name: "Neme GRGO Pro",
    tagline: "All-Terrain Quadruped Robot, designed for high-risk scenarios",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_research,
    featured: true,
    seriesId: "neme-grgo",
    overview: "Neme GRGO Pro YesA professional-grade quadruped robot，Equipped with hot-swappable dual batteries and wheel-leg switching design，Has powerful all-terrain traversal capability。Standard APC Sensing and Control Moduleand MasRobo Cloud Intelligence Platform，SupportMultimodal Sensing & Early Warning、Modular Transportation、Autonomous NavigationObstacle Avoidance & Remote Control，Widely used in emergency fire fighting、Disaster Relief、Police Security、Power and industrial inspection and other high-risk scenarios。",
    features: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "Multimodal Sensing & Early Warning",
        description: "Thermal camera detects fire sources and equipment heat anomalies，gasSensorsReal-time monitoring of toxic/flammable/hypoxic environment，HD camera remote video transmission，Push alerts immediately when abnormalities occur。",
        image: CDN.card_research,
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "All-Terrain Adaptation·Wheel-Leg Switching",
        description: "Has powerful all-terrain traversal capability，Can choose wheeled or legged form according to scenario，SupportStair climbing、gravel road、slopes and other complex terrain walking，Balance speed and mobility。",
        image: CDN.card_model,
      },
      {
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        title: "Hot-swappable dual battery·Ultra-fast replacement",
        description: "Adopts hot-swappable design，Battery can be replaced in seconds，Significantly reduce downtime，Light-duty inspection endurance 1.5–2 hours，Ensure continuous operation efficiency。",
        image: CDN.card_agent,
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        title: "MasRobo Cloud Intelligent Dispatch",
        description: "Access MasRobo Cloud Platform，Achieve global task scheduling、path optimization andMulti-Robot Coordination。cloudReal-time Monitoringdevice status，Automatically generate globally optimal travel routes，Significantly improve operational intelligence level。",
        image: CDN.card_infra,
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        title: "Autonomous Navigation and Obstacle Avoidance",
        description: "Based on lidar/vision World Model Build environmental map，Fused infrared、Supersound wave、depth camera realizes static and dynamic obstacle avoidance，Automatically generate optimal path based on task requirements。",
        image: CDN.card_research,
      },
    ],
    useCases: [
      {
        image: CDN.card_research,
        scenario: "Disaster Relief",
        industry: "Emergency Rescue",
        description: "Earthquake Ruins Reconnaissance、Mine accident investigation、Flood risk investigation，Carry rescue supplies orCommunicationequipment，through voice/Light guidance for survivors to safe areas。",
      },
      {
        image: CDN.card_model,
        scenario: "Emergency Fire Fighting",
        industry: "Fire Safety",
        description: "fire scene/Explosion risk reconnaissance、Smoke and heat source detection、Hazardous gas detection、Search for trapped personnel，Execute reconnaissance tasks in high-risk environments where personnel cannot enter。",
      },
      {
        image: CDN.card_agent,
        scenario: "Police Security",
        industry: "Public Safety",
        description: "Remote reconnaissance of dangerous locations、Explosive detection、Urban security patrol and monitoring，Support 4G/5G Remote Controland two-way voiceCommunication。",
      },
      {
        image: CDN.card_research,
        scenario: "Power Inspection",
        industry: "Energy & Power",
        description: "Substation inspection、Transmission corridor monitoring、hot spot/Partial discharge detection、Automatic meter reading，All-weather autonomous inspection replaces manual work。",
      },
      {
        image: CDN.card_model,
        scenario: "Industrial Inspection",
        industry: "Industrial Manufacturing",
        description: "Chemical Industryfactory/tunnel/Pipe gallery inspection、Gas leak detection、Equipment anomaly monitoring，Complete high-frequency autonomous inspection tasks in complex industrial environments。",
      },
      {
        image: CDN.card_agent,
        scenario: "Education & Research",
        industry: "Education & Research",
        description: "Mobile robot course practice、Navigation obstacle avoidance algorithm verification、academicResearchplatform，Providecompleteof SDK/REST/ROS interfaceSupportSecondary development。",
      },
    ],
    specs: [
      {
        group: "Basic Parameters",
        items: [
          { label: "ProductsModel", value: "Neme GRGO Pro" },
          { label: "Standing size（length×width×height）", value: "750 × 400 × 350 mm" },
          { label: "Weight（including battery）", value: "35 KG" },
          { label: "Load capacity/externalPayload Capacity", value: "≤ 20 KG" },
          { label: "Max speed", value: "2 m/s" },
          { label: "Operating Temperature", value: "-20°C ~ 55°C" },
          { label: "Environment & Protection", value: "IP44" },
        ],
      },
      {
        group: "Electrical Parameters",
        items: [
          { label: "Battery Type", value: "Dual Battery Compartment 24V 8Ah" },
          { label: "Charging Time", value: "2.67h" },
          { label: "Charging Method", value: "Hot-swappable battery / Docking charging station" },
          { label: "Endurance", value: "light-duty inspection 1.5–2h" },
        ],
      },
      {
        group: "Sensing & Communication",
        items: [
          { label: "PositioningNavigation method", value: "World Model" },
          { label: "Sensors", value: "Standard APC Sensing & Control System" },
          { label: "Communication", value: "Wi-Fi（2.4/5 GHz）/ Industrial Ethernet / 4G/5G / RFRF" },
          { label: "Software & Interface", value: "Provide SDK/REST/ROS node，SupportRemote manual control" },
        ],
      },
      {
        group: "Control & Safety",
        items: [
          { label: "Cloud Platform", value: "MasRobo Agent Platform" },
          { label: "Safety Mechanisms", value: "Emergency Stop Button / Collision Detection / Fall protection" },
          { label: "Operation Method", value: "Mobile App / Voice Interaction / Cloud Dispatch" },
          { label: "Display & Feedback", value: "LED Indicator light" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "APC Sensing and Control Module",
        description: "Built-in Multi-Source Sensing & Control Unit，Covers vision、inertial navigation、force control and other sensing capabilities，EnsureAutonomous Navigationand motion balance，for all GRGO Pro ModelStandard。",
        image: CDN.card_model,
        tag: "Standard",
      },
      {
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        name: "Hot-Swappable Dual Battery Compartment",
        description: "Dual Battery Compartment 24V 8Ah，SupportHot-swappable ultra-fast replacement，Complete battery switching in seconds，Ensure continuous operation without downtime。",
        image: CDN.card_agent,
        tag: "Standard",
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        name: "MasRobo Cloud Intelligence Platform",
        description: "Access MasRobo Cloud Platform，Achieve global task scheduling、path optimization planning andMulti-Robot Coordination，cloudReal-time Monitoringdevice statusandperform health diagnosis。",
        image: CDN.card_infra,
        tag: "Standard",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        name: "5G Communication Module",
        description: "Support 4G/5G、Wi-Fi、Dedicated industrial network and 2.4GHz RF RF joystick direct control，Integrated speaker and microphone，SupportRemote announcement and two-way voiceCommunication。",
        image: CDN.card_research,
        tag: "Optional",
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        name: "Modular Payload System",
        description: "Back-mounted system for stable carrying of standard supplies，Expandable external trolley、hanging frame to achieve large volume orHeavy-Loadcargo shipping，SupportFlexible combination of multiple functional modules。",
        image: CDN.card_model,
        tag: "Optional",
      },
    ],
  },
  {
    slug: "grgo-pro-s",
    name: "Neme GRGO Pro-S",
    tagline: "Direct-Drive Precision Operation Version，Ultimate Force Control & Millisecond Response",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_research,
    featured: false,
    seriesId: "neme-grgo",
    overview: "GRGO Pro-S is a direct-drive derivative of the Pro series, designed for high-precision manufacturing and nuclear power applications. It eliminates linkage structures and uses high-performance direct-drive motors, trading some impact resistance for extremely low joint friction and unmatched force control accuracy (< 0.5 Nm), making it perfect for contact-based detection. The robot weighs about 40 kg with a maximum payload of 15 kg and IP54 protection rating.",
    features: [
      {
        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
        title: "Ultimate Direct-Drive Force Control",
        description: "Extremely Low Joint Friction，Can sense subtle external force changes，Achieve high-precision compliant control and contact-based operations，Force Control Accuracy < 0.5 Nm。",
        image: CDN.card_agent,
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Millisecond-Level Dynamic Response",
        description: "Extremely low mechanical latency enables instant posture adjustment，Maintain absolute balance on complex or slippery terrain，Ensure precision operationsStability。",
        image: CDN.card_infra,
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "Precision Instrument Mounting",
        description: "Extremely Low Operating Vibration，Ensure mounted high-precisionSensors（such asSuperultrasonic flaw detector、infrared thermal imager）Data accurate，Meet precision detection requirements。",
        image: CDN.card_research,
      },
    ],
    useCases: [
      {
        image: CDN.card_research,
        scenario: "High-Precision Contact Detection",
        industry: "Precision Manufacturing",
        description: "Leveraging ultimate force control capabilities，Perform precision contact detection on equipment surface，Sense subtle external force changes，Achieve high-precision compliant control and operations。",
      },
      {
        image: CDN.card_model,
        scenario: "Substation Precision Inspection",
        industry: "Energy & Power",
        description: "Low-vibration operation ensures accurate high-precision sensor data，Complete precision inspection of substation equipment、Hot spot detection and partial discharge detection tasks。",
      },
      {
        image: CDN.card_agent,
        scenario: "Nuclear Power Plant Facility Detection",
        industry: "Nuclear Energy",
        description: "Perform contact-based facility detection in high-demand scenarios such as nuclear power plants，Millisecond response ensures absolute balance and operational accuracy in complex environments。",
      },
      {
        image: CDN.card_research,
        scenario: "Precision Manufacturing Workshop Inspection",
        industry: "Industrial Manufacturing",
        description: "Conduct equipment status inspection in precision manufacturing workshops，Ultra-low operating vibration protects precisionSensors，Ensure accuracy of detection data andReliability。",
      },
    ],
    specs: [
      {
        group: "Basic Parameters",
        items: [
          { label: "ProductsModel", value: "Neme GRGO Pro-S" },
          { label: "Total Weight", value: "About 40 kg" },
          { label: "Payload Capacity", value: "Max 15 kg" },
          { label: "Protection Level", value: "IP54" },
          { label: "Force Control Accuracy", value: "< 0.5 Nm" },
        ],
      },
      {
        group: "Drive System",
        items: [
          { label: "Drive Type", value: "High-Performance Direct-Drive Motor" },
          { label: "Joint Friction", value: "ultra-low（direct drive without reducer）" },
          { label: "Dynamic Response", value: "millisecond-level" },
        ],
      },
      {
        group: "Sensing & Communication",
        items: [
          { label: "Sensors", value: "Standard APC Sensing & Control System" },
          { label: "Communication", value: "Wi-Fi / 4G/5G / Industrial Ethernet" },
          { label: "Cloud Platform", value: "MasRobo Agent Platform" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
        name: "Direct-Drive Force Control System",
        description: "High-Performance Direct-Drive Motor，Extremely Low Joint Friction，Force Control Accuracy < 0.5 Nm，Achieve high-precision compliant control and contact-based precision operations。",
        image: CDN.card_model,
        tag: "Standard",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "APC Sensing and Control Module",
        description: "Built-in Multi-Source Sensing & Control Unit，Covers vision、inertial navigation、force control and other sensing capabilities，EnsureAutonomous Navigationand motion balance。",
        image: CDN.card_agent,
        tag: "Standard",
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        name: "MasRobo Cloud Platform",
        description: "Access MasRobo Cloud Platform，Achieve global task scheduling、path optimization andMulti-Robot Coordination，cloudReal-time Monitoringdevice status。",
        image: CDN.card_infra,
        tag: "Standard",
      },
    ],
  },
  {
    slug: "grgo-pro-t",
    name: "Neme GRGO Pro-T",
    tagline: "Robotic Arm Integrated Operation Platform，True embodied intelligent operator",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_agent,
    featured: false,
    seriesId: "neme-grgo",
    overview: "GRGO Pro T is a deeply customized embodied AI operation platform based on the Pro chassis, breaking the limitation of 'look but not move'. It natively integrates a 6-DOF collaborative robotic arm, perfectly combining the high mobility of quadruped robots with the dexterous manipulation of robotic arms, truly achieving 'hands and feet working together'. The chassis and arm share the same APC sensing and control brain, with total weight about 55 kg (including arm), arm payload up to 5 kg, and IP54 protection rating.",
    features: [
      {
        icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
        title: "Mobile + Manipulation Integration",
        description: "Chassis and arm share the same APC sensing and control brain, achieving coordinated full-body motion and expanding the effective working space of the arm, truly achieving hands and feet working together.",
        image: CDN.card_research,
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        title: "Embodied Intelligence Visual Grasping",
        description: "Integrated with Edge-Side Vision Large Model，Can autonomously identify target objects（such as valves、switches、packages）and plan grasping trajectories，Achieve intelligent operation。",
        image: CDN.card_model,
      },
      {
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        title: "Complex Scene Interaction",
        description: "Easily Complete Door Opening、Press elevator、Rotate valve、Material handling and other complex physical interaction tasks，Replace humans in entering dangerous areasExecute high-risk operations。",
        image: CDN.card_agent,
      },
    ],
    useCases: [
      {
        image: CDN.card_agent,
        scenario: "Complex Physical Grasping Tasks",
        industry: "Industrial Manufacturing",
        description: "Autonomously identify target objects and plan grasping trajectories，Complete material handling in factory environment、Equipment operation and precision assembly assistance tasks。",
      },
      {
        image: CDN.card_research,
        scenario: "Autonomous Door Opening & Navigation",
        industry: "Security Patrol",
        description: "Equipped with door opening、Press elevator and other complex physical interaction capabilities，Can autonomously navigate in multi-story buildings，Complete cross-area inspection and task execution。",
      },
      {
        image: CDN.card_model,
        scenario: "Hazardous Material Disposal & Risk Mitigation",
        industry: "Public Safety",
        description: "Replace humans in entering dangerous areas，Use robotic arm for hazardous material detection and disposal，Ensure personnel safety，Reduce operational risk。",
      },
      {
        image: CDN.card_agent,
        scenario: "Chemical Valve Rotation Operation",
        industry: "Chemical Industry",
        description: "Autonomously operate valves in dangerous environments such as chemical plants、switches and other equipment，combined with gasSensorsReal-time monitoring of environmental safety status。",
      },
    ],
    specs: [
      {
        group: "Basic Parameters",
        items: [
          { label: "ProductsModel", value: "Neme GRGO Pro-T" },
          { label: "Total Weight", value: "About 55 kg（including robotic arm）" },
          { label: "Robotic Arm Payload", value: "Max 5 kg" },
          { label: "Robotic Arm Degrees of Freedom", value: "6 DoF + Dexterous gripper" },
          { label: "Protection Level", value: "IP54" },
        ],
      },
      {
        group: "sensingandcontrol",
        items: [
          { label: "Sensors", value: "Standard APC Sensing & Control System" },
          { label: "Vision System", value: "Edge-Side Vision Large Model" },
          { label: "Communication", value: "Wi-Fi / 4G/5G / Industrial Ethernet" },
          { label: "Cloud Platform", value: "MasRobo Agent Platform" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
        name: "6-DOF Collaborative Robotic Arm",
        description: "Native Integration 6 DOF collaborative robotic arm，Equipped with dexterous gripper，Robotic Arm PayloadMax 5 kg，Share with chassis APC Sensing & control brain achieves full-body coordination。",
        image: CDN.card_infra,
        tag: "Standard",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        name: "Edge-Side Vision Large Model",
        description: "Integrated with Edge-Side Vision Large Model，Autonomously identify target objects and plan grasping trajectories，Achieve intelligent embodied operational capability。",
        image: CDN.card_research,
        tag: "Standard",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "APC Sensing and Control Module",
        description: "Chassis and robotic arm share the same APC Sensing & control brain，Achieve full-body coordinated movement，EnsureAutonomous Navigationand synchronized execution of precision operations。",
        image: CDN.card_model,
        tag: "Standard",
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        name: "MasRobo Cloud Platform",
        description: "Access MasRobo Cloud Platform，Achieve global task scheduling andMulti-Robot Coordination，SupportRemote planning and monitoring of complex work tasks。",
        image: CDN.card_agent,
        tag: "Standard",
      },
    ],
  },
  {
    slug: "grgo-max",
    name: "Neme GRGO Max",
    tagline: "Heavy-Load Industry Flagship，All-weather operation platform for extreme industrial environments",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_model,
    featured: false,
    seriesId: "neme-grgo",
    overview: "GRGO Max Yes Neme AI Productsin line【Giant】，Specifically designed for mining、All-weather heavy-duty transportation and operation platform designed for metallurgy and heavy industry。Has a massive body and amazing strength，Payload CapacityExceeds 50 kg，Reaches IP67 level protection，Fearless of heavy rain、mud、sandstorm，Can even wade through shallow water。Equipped with large-capacity power battery pack，Supportup to 4–6 hourscontinuousHeavy-Loadwalking，Meet large-scale mining area inspection needs。",
    features: [
      {
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        title: "Ultimate Load Capacity",
        description: "Exceeds 50kg ofPayload Capacity，Can easily carry largeCommunicationbase station、heavy detection radar or large amounts of rescue supplies，Meet heavy industry scenario requirements。",
        image: CDN.card_infra,
      },
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Highest Protection Level",
        description: "Reaches IP67 level protection，Fearless of heavy rain、mud、sandstorm，Can even wade through shallow water，Adapt to the most severe industrial environment。",
        image: CDN.card_research,
      },
      {
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        title: "SuperLong Runtimemileage",
        description: "Equipped with large-capacity power battery pack，Supportup to 4–6 hourscontinuousHeavy-Loadwalking，Meet large-scale mining area inspection and long-term operation in extreme environments。",
        image: CDN.card_model,
      },
    ],
    useCases: [
      {
        image: CDN.card_model,
        scenario: "Mining Heavy-Load Transportation",
        industry: "Mining & Metallurgy",
        description: "Carry heavy equipment and supplies in mining environments，IP67 Protection fearless of dust and mud，4–6 hoursEndurance meets large-scale mining area operation requirements。",
      },
      {
        image: CDN.card_research,
        scenario: "Underground Mine Exploration",
        industry: "Mining & Metallurgy",
        description: "Enter underground mine environments difficult for humans to access，Carry detection equipment for geological exploration and safety assessment，Reduce personnel operation risk。",
      },
      {
        image: CDN.card_agent,
        scenario: "Forest Fire Fighting & Supply Carrying",
        industry: "Fire & Rescue",
        description: "Carry fire-fighting supplies and communication equipment in forest fire scenarios，All-terrain traversal capability ensures stable operation in complex forest environments。",
      },
      {
        image: CDN.card_model,
        scenario: "Harsh Environment Border Patrol",
        industry: "National Defense & Security",
        description: "In deserts、snow、Execute border patrol tasks in muddy and other extreme environments，IP67 Protection andSuperLong RuntimeEnsure all-weather continuous operation capability。",
      },
    ],
    specs: [
      {
        group: "Basic Parameters",
        items: [
          { label: "ProductsModel", value: "Neme GRGO Max" },
          { label: "Total Weight", value: "About 120 kg" },
          { label: "Payload Capacity", value: "≥ 50 kg" },
          { label: "Protection Level", value: "IP67（Dust and water immersion proof）" },
          { label: "Operating Temperature", value: "-20°C ~ 55°C" },
        ],
      },
      {
        group: "Electrical Parameters",
        items: [
          { label: "Battery System", value: "Large-Capacity Power Battery Pack" },
          { label: "Runtime", value: "4–6 hours（Heavy-Load）" },
          { label: "Charging Method", value: "Contact-Type Automatic Charging Station" },
        ],
      },
      {
        group: "Sensing & Communication",
        items: [
          { label: "Sensors", value: "Standard APC Sensing & Control System" },
          { label: "Communication", value: "Wi-Fi / 4G/5G / SatelliteCommunicationterminal" },
          { label: "Positioning", value: "RTK/GPS centimeter-levelPositioningmodule" },
          { label: "Cloud Platform", value: "MasRobo Agent Platform" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        name: "Heavy-Load Chassis System",
        description: "Massive body and amazing load capacity，Payload CapacityExceeds 50 kg，All-terrain adaptive gait control，Adapt to mining、metallurgy and other extreme industrial environments。",
        image: CDN.card_agent,
        tag: "Standard",
      },
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        name: "IP67 Full Sealed Protection",
        description: "Reaches IP67 level protection，Fearless of heavy rain、mud、sandstorm，Can even wade through shallow water，Adapt to the most severe industrial environment。",
        image: CDN.card_infra,
        tag: "Standard",
      },
      {
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        name: "Large-Capacity Power Battery Pack",
        description: "Equipped with large-capacity power battery pack，Supportup to 4–6 hourscontinuousHeavy-Loadwalking，cooperate withContact-Type Automatic Charging StationAchieve efficient energy replenishment。",
        image: CDN.card_research,
        tag: "Standard",
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        name: "MasRobo Cloud Platform",
        description: "Access MasRobo Cloud Platform，SupportSatelliteCommunicationterminaland RTK/GPS centimeter-levelPositioning，Achieve remote monitoring and dispatch in extreme environments。",
        image: CDN.card_model,
        tag: "Standard",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // Neme Living Series
  // ══════════════════════════════════════════════════════════

];

// ─────────────────────────────────────────────────────────────
// RESEARCH
// ─────────────────────────────────────────────────────────────
// Body content lives in: client/src/content/research/{slug}.md

export const research = [
  {
    slug: "clawloops",
    title: "ClawLoops: Evolution from OpenClaw to Team-Level AI Workspace Platform",
    label: "Research",
    date: "April 16, 2026",
    readTime: "12 min read",
    image: CDN.card_agent,
    featured: true,
    summary:
      "Explore the architectural evolution of ClawLoops as it transforms OpenClaw from a single-user tool into a comprehensive, self-hosted team platform, bridging the gap between individual AI experimentation and enterprise-level collaboration.",
  },
  {
    slug: "scaling-reasoning",
    title: "Scaling Reasoning Through Structured Thought",
    label: "Research",
    date: "March 10, 2026",
    readTime: "14 min read",
    image: CDN.card_research,
    featured: false,
    summary:
      "We investigate how explicit reasoning traces during training improve model performance on multi-step logical tasks, and show that structured thought supervision scales predictably with compute.",
  },
  {
    slug: "sparse-attention",
    title: "Sparse Attention Patterns in Long-Context Models",
    label: "Research",
    date: "February 18, 2026",
    readTime: "11 min read",
    image: CDN.card_model,
    featured: false,
    summary:
      "An analysis of attention head specialization in models trained on 128K context windows, revealing emergent sparse routing patterns that enable efficient long-document reasoning.",
  },
  {
    slug: "reward-modeling",
    title: "Reward Model Calibration for Alignment",
    label: "Research",
    date: "January 29, 2026",
    readTime: "9 min read",
    image: CDN.card_infra,
    featured: false,
    summary:
      "We identify systematic miscalibration in reward models trained on human preference data and propose a calibration procedure that improves alignment stability across distribution shifts.",
  },
  {
    slug: "multimodal-grounding",
    title: "Grounding Language Models in Perceptual Space",
    label: "Research",
    date: "December 5, 2025",
    readTime: "12 min read",
    image: CDN.card_agent,
    featured: false,
    summary:
      "A new training paradigm for multimodal models that improves visual grounding by aligning language representations with perceptual features at multiple levels of abstraction.",
  },
  {
    slug: "inference-efficiency",
    title: "Speculative Decoding with Draft Model Ensembles",
    label: "Research",
    date: "November 14, 2025",
    readTime: "8 min read",
    image: CDN.card_research,
    featured: false,
    summary:
      "We extend speculative decoding with an ensemble of small draft models, achieving 3.2× inference speedup on diverse task distributions while maintaining output quality.",
  },
];
