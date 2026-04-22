/*
 * ============================================================
 * Website Content Configuration File
 * ============================================================
 * 
 * How to update content:
 * 
 * 1. Modify siteInfo object → Update company name, description, contact info, etc.
 * 2. Modify navLinks array → Update navigation menu items
 * 3. Add new object at the beginning of articles array → Publish new article/update
 *    - featured: true will display with dashed border highlight
 *    - isNew: true will display "NEW" tag
 * 4. Modify teamMembers array → Update team member list
 * 5. Modify investors object → Update investor information
 * 6. Modify socialLinks object → Update social media links
 * 
 * ============================================================
 */

export const siteInfo = {
  /** Company/Product name (displayed in top-left and footer) */
  companyName: "Machine Society",
  /** Company name suffix (optional, e.g., version number, symbol, etc.) */
  companySuffix: "",
  /** Company description (displayed below navigation) */
  description:
    "We are bringing cutting-edge AI technology into the real world. We are a team of engineers, scientists, and product builders dedicated to developing foundational models and intelligent algorithms to empower today's products and drive tomorrow's technological innovation.",
  /** Page title (displayed in browser tab) */
  pageTitle: "Machine Society — Technology-Driven, Future-Creating",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Updates", href: "#updates" },
  { label: "Team", href: "#team" },
  { label: "Join Us", href: "#join" },
];

/**
 * Article/Update List
 * 
 * Field descriptions:
 * - id: Unique identifier (string, non-repeating)
 * - title: Article title
 * - date: Publication date (format: YYYY-MM-DD)
 * - summary: Summary (1-2 sentences)
 * - href: Link address (use full URL for external links, path for internal)
 * - isNew: Whether to display "NEW" tag (boolean)
 * - featured: Whether to highlight (dashed border, boolean)
 * - tags: Tag array (optional)
 */
export const articles = [
  {
    id: "001",
    title: "Core Technology Framework v2.0 Official Release",
    date: "2026-03-10",
    summary:
      "The new architecture supports larger-scale model training with 3x faster inference and significantly reduced deployment costs. Our partners have already validated its stability in production environments.",
    href: "#",
    isNew: true,
    featured: true,
    tags: ["Release", "Technology"],
  },
  {
    id: "002",
    title: "Intelligent Decision Engine: From Lab to Production",
    date: "2026-02-20",
    summary:
      "Learn how we transform research into reliable production-grade systems and the engineering insights we've accumulated in the process.",
    href: "#",
    isNew: false,
    featured: false,
    tags: ["Engineering", "Practice"],
  },
  {
    id: "003",
    title: "Open-Sourcing Our Foundational Model Training Toolkit",
    date: "2026-01-15",
    summary:
      "We officially open-source our core training toolkit, including data preprocessing, distributed training, and evaluation frameworks. Community contributions welcome.",
    href: "#",
    isNew: false,
    featured: true,
    tags: ["Open Source", "Tools"],
  },
  {
    id: "004",
    title: "Multimodal Understanding: Fusion of Vision and Language",
    date: "2025-12-08",
    summary:
      "Our multimodal model achieves industry-leading performance on multiple benchmarks, capable of understanding complex vision-language relationships.",
    href: "#",
    isNew: false,
    featured: false,
    tags: ["Research", "Multimodal"],
  },
  {
    id: "005",
    title: "Efficient Inference: Making Large Models Run Faster",
    date: "2025-11-03",
    summary:
      "Through a combination of quantization, pruning, and knowledge distillation strategies, we reduced model inference latency by 60% while maintaining over 95% accuracy.",
    href: "#",
    isNew: false,
    featured: false,
    tags: ["Research", "Optimization"],
  },
  {
    id: "006",
    title: "Data Flywheel: Building Continuously Improving AI Systems",
    date: "2025-10-12",
    summary:
      "Share our thoughts on building data flywheels: how to design feedback mechanisms so models continue learning from real user interactions after deployment.",
    href: "#",
    isNew: false,
    featured: false,
    tags: ["Methodology", "Data"],
  },
  {
    id: "007",
    title: "Our First General-Purpose Intelligent Agent",
    date: "2025-09-01",
    summary:
      "This is our first step toward artificial general intelligence: a prototype agent capable of autonomous planning and execution across multiple task scenarios.",
    href: "#",
    isNew: false,
    featured: true,
    tags: ["Milestone", "Agent"],
  },
];

/**
 * Team Member List
 * 
 * How to add members: Add { name: "Name", role: "Title (optional)" } at the end of the array
 */
export const teamMembers = [
  { name: "Alice Johnson", role: "" },
  { name: "Bob Smith", role: "" },
  { name: "Carol White", role: "" },
  { name: "David Chen", role: "" },
  { name: "Emma Davis", role: "" },
  { name: "Frank Wilson", role: "" },
  { name: "Grace Lee", role: "" },
  { name: "Henry Brown", role: "" },
  { name: "Iris Taylor", role: "" },
  { name: "Jack Martinez", role: "" },
  { name: "Karen Anderson", role: "" },
  { name: "Leo Thomas", role: "" },
  { name: "Mia Jackson", role: "" },
  { name: "Noah Harris", role: "" },
  { name: "Olivia Martin", role: "" },
  { name: "Peter Thompson", role: "" },
  { name: "Quinn Garcia", role: "" },
  { name: "Rachel Rodriguez", role: "" },
  { name: "Sam Clark", role: "" },
  { name: "Tina Lewis", role: "" },
  { name: "Uma Walker", role: "" },
  { name: "Victor Hall", role: "" },
  { name: "Wendy Young", role: "" },
  { name: "Xavier Hernandez", role: "" },
  { name: "...and growing!", role: "" },
];

/**
 * Investor Information
 */
export const investors = {
  description: "We are grateful for the support and trust of the following institutions and individuals:",
  list: [
    "Sequoia Capital",
    "Hillhouse Capital",
    "IDG Capital",
    "ZhenGeFund",
    "Matrix Partners",
    "Lightspeed China",
  ],
};

/**
 * Join Us Information
 */
export const joinInfo = {
  description: "If you're interested in joining us, please",
  linkText: "contact us",
  linkHref: "mailto:hello@machinesociety.ai",
};

/**
 * Social Media Links
 */
export const socialLinks = {
  twitter: "https://twitter.com/machinesociety",
  github: "https://github.com/machinesociety",
  email: "hello@machinesociety.ai",
};

/**
 * Footer Information
 */
export const footerInfo = {
  copyright: "Machine Society",
  year: new Date().getFullYear(),
};
