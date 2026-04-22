/**
 * ============================================================
 * 网站内容配置文件
 * ============================================================
 * 
 * 如何更新内容：
 * 
 * 1. 修改 siteInfo 对象 → 更新公司名称、描述、联系方式等基本信息
 * 2. 修改 navLinks 数组 → 更新导航菜单项
 * 3. 在 articles 数组开头添加新对象 → 发布新文章/动态
 *    - featured: true 会显示虚线边框高亮
 *    - isNew: true 会显示 "NEW" 标签
 * 4. 修改 teamMembers 数组 → 更新团队成员列表
 * 5. 修改 investors 对象 → 更新投资方信息
 * 6. 修改 socialLinks 对象 → 更新社交媒体链接
 * 
 * ============================================================
 */

export const siteInfo = {
  /** 公司/产品名称（显示在左上角和页脚） */
  companyName: "TechCo",
  /** 公司名称后缀（可选，如版本号、符号等） */
  companySuffix: "",
  /** 公司简介（显示在导航下方） */
  description:
    "我们正在将前沿 AI 技术带入现实世界。我们是一支由工程师、科学家和产品构建者组成的团队，致力于开发基础模型和智能算法，为当今的产品赋能，驱动未来的技术创新。",
  /** 页面标题（浏览器标签显示） */
  pageTitle: "TechCo — 技术驱动，创造未来",
};

export const navLinks = [
  { label: "首页", href: "#home" },
  { label: "动态", href: "#updates" },
  { label: "团队", href: "#team" },
  { label: "加入我们", href: "#join" },
];

/**
 * 文章/动态列表
 * 
 * 字段说明：
 * - id: 唯一标识符（字符串，不重复）
 * - title: 文章标题
 * - date: 发布日期（格式：YYYY年MM月DD日）
 * - summary: 摘要（1-2句话）
 * - href: 链接地址（外部链接用完整 URL，内部用路径）
 * - isNew: 是否显示 "NEW" 标签（布尔值）
 * - featured: 是否高亮显示（虚线边框，布尔值）
 * - tags: 标签数组（可选）
 */
export const articles = [
  {
    id: "001",
    title: "我们的核心技术框架 v2.0 正式发布",
    date: "2026年3月10日",
    summary:
      "全新架构支持更大规模的模型训练，推理速度提升 3 倍，同时大幅降低部署成本。我们的合作伙伴已率先在生产环境中验证了其稳定性。",
    href: "#",
    isNew: true,
    featured: true,
    tags: ["发布", "技术"],
  },
  {
    id: "002",
    title: "智能决策引擎：从实验室到生产环境",
    date: "2026年2月20日",
    summary:
      "介绍我们如何将研究成果转化为可靠的生产级系统，以及在此过程中积累的工程经验。",
    href: "#",
    isNew: false,
    featured: false,
    tags: ["工程", "实践"],
  },
  {
    id: "003",
    title: "开源我们的基础模型训练工具链",
    date: "2026年1月15日",
    summary:
      "我们正式开源核心训练工具链，包括数据预处理、分布式训练和评估框架，欢迎社区贡献。",
    href: "#",
    isNew: false,
    featured: true,
    tags: ["开源", "工具"],
  },
  {
    id: "004",
    title: "多模态理解：视觉与语言的融合",
    date: "2025年12月8日",
    summary:
      "我们的多模态模型在多项基准测试中达到业界领先水平，能够理解复杂的视觉-语言关系。",
    href: "#",
    isNew: false,
    featured: false,
    tags: ["研究", "多模态"],
  },
  {
    id: "005",
    title: "高效推理：让大模型跑得更快",
    date: "2025年11月3日",
    summary:
      "通过量化、剪枝和知识蒸馏的组合策略，我们将模型推理延迟降低了 60%，同时保持了 95% 以上的精度。",
    href: "#",
    isNew: false,
    featured: false,
    tags: ["研究", "优化"],
  },
  {
    id: "006",
    title: "数据飞轮：构建持续改进的 AI 系统",
    date: "2025年10月12日",
    summary:
      "分享我们在构建数据飞轮方面的思考：如何设计反馈机制，让模型在部署后持续从真实用户交互中学习。",
    href: "#",
    isNew: false,
    featured: false,
    tags: ["方法论", "数据"],
  },
  {
    id: "007",
    title: "我们的第一个通用智能体",
    date: "2025年9月1日",
    summary:
      "这是我们迈向通用人工智能的第一步：一个能够在多种任务场景下自主规划和执行的智能体原型。",
    href: "#",
    isNew: false,
    featured: true,
    tags: ["里程碑", "智能体"],
  },
];

/**
 * 团队成员列表
 * 
 * 如何添加成员：在数组末尾添加 { name: "姓名", role: "职位（可选）" }
 */
export const teamMembers = [
  { name: "张伟", role: "" },
  { name: "李娜", role: "" },
  { name: "王芳", role: "" },
  { name: "刘洋", role: "" },
  { name: "陈静", role: "" },
  { name: "赵磊", role: "" },
  { name: "黄敏", role: "" },
  { name: "周杰", role: "" },
  { name: "吴昊", role: "" },
  { name: "郑超", role: "" },
  { name: "孙悦", role: "" },
  { name: "钱博", role: "" },
  { name: "冯晨", role: "" },
  { name: "蒋雪", role: "" },
  { name: "沈宇", role: "" },
  { name: "韩林", role: "" },
  { name: "曹阳", role: "" },
  { name: "许梦", role: "" },
  { name: "邓浩", role: "" },
  { name: "彭涛", role: "" },
  { name: "谢婷", role: "" },
  { name: "卢锋", role: "" },
  { name: "丁鑫", role: "" },
  { name: "薛丽", role: "" },
  { name: "...持续壮大中！", role: "" },
];

/**
 * 投资方信息
 */
export const investors = {
  description: "我们感谢以下机构和个人的支持与信任：",
  list: [
    "红杉资本",
    "高瓴资本",
    "IDG 资本",
    "真格基金",
    "经纬创投",
    "光速中国",
  ],
};

/**
 * 加入我们信息
 */
export const joinInfo = {
  description: "如果您有兴趣加入我们，请",
  linkText: "联系我们",
  linkHref: "mailto:hello@techco.ai",
};

/**
 * 社交媒体链接
 */
export const socialLinks = {
  twitter: "https://twitter.com/techco",
  github: "https://github.com/techco",
  email: "hello@techco.ai",
};

/**
 * 页脚信息
 */
export const footerInfo = {
  copyright: "TechCo",
  year: new Date().getFullYear(),
};
