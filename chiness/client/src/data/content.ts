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
 *   features    — 产品功能介绍 (图标 + 标题 + 描述 + 可选图片)
 *   useCases    — 产品应用场景 (图片 + 场景名 + 描述)
 *   specs       — 产品规格信息 (分组表格)
 *   highlights  — 产品特性亮点 (大图 + 文字交替布局)
 *   modules     — 产品核心模块 (卡片网格 + 图片)
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

export const ASSET_BASE = "/zh/";

// ── Asset URLs ───────────────────────────────────────────────
export const LOGO_URL = ASSET_BASE + "images/ms-logo.png";

const CDN = {
  hero_product:  ASSET_BASE + "images/hero_product.webp",
  card_agent:    ASSET_BASE + "images/card_agent.webp",
  card_infra:    ASSET_BASE + "images/card_infra.webp",
  card_model:    ASSET_BASE + "images/card_model.webp",
  card_research: ASSET_BASE + "images/card_research.webp",
};

export const siteInfo = {
  name: "Machine Society",
  tagline: "万千形态，终归智能",
  vision: "智能机器人全栈式服务商",
  description:
    "从通用人形机器人到精密末端执行器，提供覆盖研发、制造、部署与运维的全栈式智能机器人解决方案。",
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
    id: "neme-gr00",
    name: "Neme GR00",
    description: "入门级人形机器人平台",
  },
  {
    id: "neme-gr01",
    name: "Neme GR01",
    description: "通用人形机器人系列",
  },
  {
    id: "neme-gr-h",
    name: "Neme GR H",
    description: "重载工业人形机器人",
  },
  {
    id: "neme-1",
    name: "Neme 1",
    description: "新一代旗舰人形机器人",
  },
  {
    id: "neme-grgo",
    name: "Neme GRGO",
    description: "紧凑型移动操作平台",
  },
  {
    id: "dexgrasp",
    name: "DexGrasp",
    description: "灵巧操作末端执行器",
  },
  {
    id: "neme-living",
    name: "Neme Living",
    description: "家庭陪伴与生活服务机器人",
  },
];

// ─────────────────────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────────────────────

export const products: Product[] = [

  // ══════════════════════════════════════════════════════════
  // Neme GR00 Series
  // ══════════════════════════════════════════════════════════
  {
    slug: "neme-gr00-d",
    name: "Neme GR00-D",
    tagline: "工业级自主移动巡检机器人 · 工厂 / 仓储专属版",
    label: "Neme GR00",
    date: "2026",
    status: "available",
    image: CDN.hero_product,
    featured: false,
    seriesId: "neme-gr00",
    overview: "Neme GR00-D 是基于 Neme GR00 底盘平台的工业巡检专属版本，专为工业厂区、仓储物流等高强度作业场景设计。整机自重 50 kg，最大承载 100 kg，最高速度 20 km/h，搭载 APC 主动感控与 MasRobo 云端调度系统，支持自主导航、环境巡检、货物搬运与多机协同作业，可在污水厂、化工厂、电厂/变电站等复杂环境中全天候稳定运行。",
    features: [
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        title: "自主导航与避障",
        description: "APC 主动感控模块实现室内外复杂环境自主导航，LiDAR 360° 扫描，精度 ±10–20 mm，支持路径规划与实时避障。",
        image: CDN.hero_product,
      },
      {
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
        title: "巡检与监控",
        description: "沿预设路线实时采集温湿度、图像等环境数据，支持区域巡逻、物品/货物监控与异常自动报警，数据实时上传云端。",
        image: CDN.card_research,
      },
      {
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        title: "货物搬运",
        description: "支持直接承载（≤100 kg）与拖动运输两种模式，适配仓库货物转运、车间物料配送等高频循环搬运场景。",
        image: CDN.card_model,
      },
      {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "MasRobo 云端调度",
        description: "云端根据实时地图与任务优先级生成最优路径，支持多机协同调度、远程监控诊断与 AI 预测调度，大幅减少人工干预。",
        image: CDN.card_agent,
      },
    ],
    useCases: [
      {
        image: CDN.card_research,
        scenario: "工业厂区巡检",
        industry: "工业 / 能源",
        description: "在污水厂、化工厂、电厂/变电站等高危场景中自主巡逻，实时采集环境数据，异常自动报警，替代人工高频巡检。",
      },
      {
        image: CDN.card_model,
        scenario: "仓储物流搬运",
        industry: "仓储 / 物流",
        description: "货架占用检测、货物清点与物资搬运一体化，支持高频循环任务，配合 MasRobo 多机调度实现仓库全自动化运营。",
      },
      {
        image: CDN.card_agent,
        scenario: "地下管廊巡检",
        industry: "市政 / 基础设施",
        description: "在地下管廊、隧道等受限空间内自主行驶，完成管道线路巡检、环境监测与物资搬运，保障基础设施安全运行。",
      },
    ],
    specs: [
      {
        group: "结构尺寸",
        items: [
          { label: "外观尺寸", value: "600mm × 420mm × 1100mm" },
          { label: "自重", value: "50 kg" },
          { label: "承载能力", value: "100 kg" },
        ],
      },
      {
        group: "运动性能",
        items: [
          { label: "驱动方式", value: "两轮阿卡曼转向 + 后轮驱动 / 全向轮可选" },
          { label: "最高速度", value: "20 km/h" },
          { label: "转弯半径", value: "1.5 m" },
          { label: "爬坡能力", value: "≤ 15°" },
          { label: "越障高度", value: "≤ 20 mm" },
        ],
      },
      {
        group: "感知传感",
        items: [
          { label: "传感器类型", value: "LiDAR、摄像头、温湿度传感器、红外传感器（激光雷达选配）" },
          { label: "感知精度", value: "LiDAR ±10–20 mm；相机识别误差 ≤2%" },
          { label: "扫描范围", value: "LiDAR 360°，10–100 m；摄像头 60°–120°" },
          { label: "扫描频率", value: "5–20 Hz" },
        ],
      },
      {
        group: "电源续航",
        items: [
          { label: "电池类型", value: "锂电池组" },
          { label: "电池容量", value: "24V 20Ah" },
          { label: "续航时间", value: "约 2 小时（典型工况）" },
          { label: "充电方式", value: "自动回充 / 手动快充" },
          { label: "充电时间", value: "≤ 3.5 小时（6A 最大充电电流）" },
        ],
      },
      {
        group: "安全合规",
        items: [
          { label: "安全机制", value: "急停按钮、低电量保护、障碍物检测" },
          { label: "合规标准", value: "CE、FCC、RoHS（可扩展至 ISO/GB）" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        name: "移动底盘执行器",
        description: "双动力轮 + 从动轮差速驱动，最大速度 20 km/h，最大负载 100 kg，适配室内外平地与斜坡运输场景。",
        tag: "标配",
        image: CDN.hero_product,
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        name: "APC 感知执行器",
        description: "集成 LiDAR、摄像头、温湿度与红外传感器，实现 360° 环境感知、自主导航与异常检测，精度 ±10–20 mm。",
        tag: "标配",
        image: CDN.card_research,
      },
      {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        name: "MasRobo 云端平台",
        description: "云端智能调度系统，支持路径优化规划、多机任务分配、远程监控诊断与 AI 预测调度，保障作业连续稳定。",
        tag: "云服务",
        image: CDN.card_model,
      },
    ],
  },
  {
    slug: "neme-gr00-p",
    name: "Neme GR00-P",
    tagline: "医院 / 校园巡检服务机器人 · 安防巡逻与物资配送专属版",
    label: "Neme GR00",
    date: "2026",
    status: "available",
    image: CDN.card_agent,
    featured: false,
    seriesId: "neme-gr00",
    overview: "Neme GR00-P 是基于 Neme GR00 底盘平台的医院/校园服务专属版本，专为医院、校园等公共服务场景设计。支持晚间巡逻安防、环境监测、药品运送与样本/文件传送等多种服务任务。整机自重 50 kg，最大承载 100 kg，搭载 APC 主动感控与 MasRobo 云端调度系统，全天候稳定运行，有效减轻医护人员巡逻压力。",
    features: [
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        title: "巡逻安防",
        description: "按预设路线定时巡逻，实时采集环境数据，支持晚间巡逻安防与异常自动报警，替代人工高频巡逻任务。",
        image: CDN.hero_product,
      },
      {
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        title: "药品与物资配送",
        description: "自主完成药品运送、样本/文件传送等任务，支持直接承载（≤100 kg），有效减轻医护人员工作负担。",
        image: CDN.card_model,
      },
      {
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
        title: "环境监测",
        description: "实时采集温湿度、空气质量等环境数据，支持历史数据分析与云端存储，保障医院/校园环境安全合规。",
        image: CDN.card_research,
      },
      {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "MasRobo 云端调度",
        description: "云端实时监控机器人状态、电池健康度与任务进度，支持多机协同调度与远程干预，保障作业连续稳定。",
        image: CDN.card_agent,
      },
    ],
    useCases: [
      {
        image: CDN.hero_product,
        scenario: "医院巡逻与配送",
        industry: "医疗 / 健康",
        description: "晚间巡逻安防、药品运送、样本传送一体化，全天候稳定运行，有效减轻医护人员工作负担。",
      },
      {
        image: CDN.card_research,
        scenario: "校园巡逻安防",
        industry: "教育 / 校园",
        description: "按预设路线巡逻，实时采集校园环境数据，异常自动报警，进行文件与物资配送，提升校园安全管理效率。",
      },
      {
        image: CDN.card_agent,
        scenario: "地下管廊巡检",
        industry: "市政 / 公共设施",
        description: "在地下管廊、隐蔽空间自主行驶，完成管道线路巡检、环境监测与物资搬运，保障基础设施安全运行。",
      },
    ],
    specs: [
      {
        group: "结构尺寸",
        items: [
          { label: "外观尺寸", value: "600mm × 420mm × 1100mm" },
          { label: "自重", value: "50 kg" },
          { label: "承载能力", value: "100 kg" },
        ],
      },
      {
        group: "运动性能",
        items: [
          { label: "驱动方式", value: "两轮阿卡曼转向 + 后轮驱动 / 全向轮可选" },
          { label: "最高速度", value: "20 km/h" },
          { label: "转弯半径", value: "1.5 m" },
          { label: "爬坡能力", value: "≤ 15°" },
          { label: "越障高度", value: "≤ 20 mm" },
        ],
      },
      {
        group: "感知传感",
        items: [
          { label: "传感器类型", value: "LiDAR、摄像头、温湿度传感器、红外传感器" },
          { label: "感知精度", value: "LiDAR ±10–20 mm；相机识别误差 ≤2%" },
          { label: "扫描范围", value: "LiDAR 360°，10–100 m；摄像头 60°–120°" },
          { label: "扫描频率", value: "5–20 Hz" },
        ],
      },
      {
        group: "电源续航",
        items: [
          { label: "电池类型", value: "锂电池组" },
          { label: "电池容量", value: "24V 20Ah" },
          { label: "续航时间", value: "约 2 小时（典型工况）" },
          { label: "充电方式", value: "自动回充 / 手动快充" },
          { label: "充电时间", value: "≤ 3.5 小时（6A 最大充电电流）" },
        ],
      },
      {
        group: "安全合规",
        items: [
          { label: "安全机制", value: "急停按钮、低电量保护、障碍物检测" },
          { label: "合规标准", value: "CE、FCC、RoHS（可扩展至 ISO/GB）" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        name: "移动底盘执行器",
        description: "双动力轮 + 从动轮差速驱动，最大速度 20 km/h，最大负载 100 kg，适配医院/校园室内外巡逻与配送场景。",
        tag: "标配",
        image: CDN.hero_product,
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        name: "APC 感知执行器",
        description: "集成 LiDAR、摄像头、温湿度与红外传感器，实现 360° 环境感知、自主导航与异常检测。",
        tag: "标配",
        image: CDN.card_research,
      },
      {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        name: "MasRobo 云端平台",
        description: "云端智能调度系统，支持路径优化规划、多机任务分配、远程监控诊断与 AI 预测调度，保障作业连续稳定。",
        tag: "云服务",
        image: CDN.card_agent,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // Neme GR01 Series
  // ══════════════════════════════════════════════════════════
  {
    slug: "neme-gr01-lite",
    name: "Neme GR01 Lite",
    tagline: "模块化 IDC 巡检机器人 · 教育科研平台",
    label: "Neme GR01",
    date: "January 2026",
    status: "available",
    image: CDN.hero_product,
    featured: true,
    seriesId: "neme-gr01",
    overview:
      "Neme GR01 Lite 是一款面向 IDC 机房巡检与教育科研场景的模块化移动机器人平台。搭载 APC 感控系统与 0–1.8 m 升降执行器，可精准覆盖机柜高低位区域；模块化末端执行器支持快速切换机械臂或云台，适配多样化巡检任务。配合 Masrobo 智能体平台，实现自主导航、异常告警与远程调度的全流程自动化。",
    features: [
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        title: "自主导航",
        description: "预设路线自主导航，精准抵达巡检点位，激光 SLAM 定位精度 ±10 cm，确保巡检工作有序进行。",
        image: CDN.hero_product,
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        title: "智能避障",
        description: "标配 APC 感控模块，精准识别设备和人员，有效避开障碍物，支持最大跨越 10 mm 障碍、爬坡能力 ≤ 8°。",
        image: CDN.card_research,
      },
      {
        icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11",
        title: "升降灵活",
        description: "升降杆覆盖 0–1.8 m，升降速度 0.01–0.05 m/s，精准匹配 IDC 机柜高低位区域，轻松触达巡检盲区。",
        image: CDN.card_model,
      },
      {
        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        title: "多维度检测",
        description: "支持顶点拍照，通过可见光相机与热成像采集环境参数及设备状态，实时上传异常告警信息。",
        image: CDN.card_agent,
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "自动回充",
        description: "电量不足时自动返回充电桩，24V 30Ah 电池支持 6–8 小时连续作业，2–3 小时充满，保障全天候巡检连续性。",
        image: CDN.card_infra,
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "模块化执行器",
        description: "机械臂采用模块化设计，可快速替换为云台结构；三种底盘形式（差速驱动 / 四轮四转 / 四轮四转带锁）按场景灵活选配。",
        image: CDN.card_model,
      },
    ],
    useCases: [
      {
        image: CDN.card_infra,
        scenario: "机房巡检",
        industry: "IDC / 数据中心",
        description: "机柜指示状态识别、机柜编号与资产标识核查、线缆连接异常检测，实现 IDC 机房全自动巡检闭环。",
      },
      {
        image: CDN.card_model,
        scenario: "工业巡检",
        industry: "制造业",
        description: "设备外观状态巡检、安全区域与通道状态巡检、运行指示与状态标识识别，适配工厂生产环境。",
      },
      {
        image: CDN.card_research,
        scenario: "教育科研",
        industry: "高校 / 科研机构",
        description: "感知算法实验、运动控制与升降协同实验、教学演示与课程实验，是机器人专业教学的理想平台。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "产品型号", value: "Neme GR01 Edu" },
          { label: "外形尺寸", value: "600 × 480 × 1750 mm" },
          { label: "整机重量", value: "80 kg" },
          { label: "单臂负载", value: "≤ 5 kg" },
          { label: "底盘承载", value: "≤ 100 kg" },
          { label: "作业高度", value: "0 – 1.8 m" },
        ],
      },
      {
        group: "移动性能",
        items: [
          { label: "移动方式", value: "差速 / 四轮四转 / 四轮四转带锁" },
          { label: "最大速度", value: "2 m/s" },
          { label: "越障能力", value: "≤ 10 mm，爬坡 ≤ 8°" },
          { label: "定位精度", value: "±10 cm（激光 SLAM）" },
        ],
      },
      {
        group: "感知与控制",
        items: [
          { label: "感知传感", value: "标配 APC 感控系统" },
          { label: "云端平台", value: "Masrobo 智能体平台" },
          { label: "操作方式", value: "移动端 App / 语音交互 / 云端调度" },
          { label: "语音支持", value: "远场麦克风阵列" },
        ],
      },
      {
        group: "电气参数",
        items: [
          { label: "电池类型", value: "24V 30Ah" },
          { label: "续航时间", value: "6–8 小时（典型工况）" },
          { label: "充电时间", value: "2–3 小时" },
          { label: "防护等级", value: "IP20" },
        ],
      },
      {
        group: "安全与通信",
        items: [
          { label: "安全机制", value: "急停按钮 / 碰撞检测 / 跌落防护" },
          { label: "网络与通信", value: "Wi-Fi / 4G / 5G" },
          { label: "工作温度", value: "-10 °C ~ 45 °C" },
          { label: "OTA 固件升级", value: "支持" },
        ],
      },
      {
        group: "MasRobo 服务支持",
        items: [
          { label: "RCS 远程控制", value: "支持" },
          { label: "智能任务规划", value: "支持" },
          { label: "任务安全性校验", value: "支持" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        name: "APC 感控模块",
        description: "APC + 视觉传感器，实现 IDC 导航避障、设备识别与环境检测，标配于所有 GR01 Lite 机型。",
        tag: "标配",
        image: CDN.hero_product,
      },
      {
        icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11",
        name: "升降执行器",
        description: "覆盖 0–1.8 m 作业高度，升降速度 0.01–0.05 m/s，精准匹配 IDC 机柜高低位巡检需求。",
        tag: "标配",
        image: CDN.card_model,
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "模块化机械臂",
        description: "可快速替换为云台结构，支持夹爪模块与巡检相机模块快速换装，满足抓取、搬运与状态监测任务。",
        tag: "可选",
        image: CDN.card_research,
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        name: "Masrobo 智能体平台",
        description: "云端智能调度平台，支持 RCS 远程控制、智能任务规划、OTA 固件升级与任务安全性校验。",
        tag: "云服务",
        image: CDN.card_agent,
      },
      {
        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
        name: "多模态底盘",
        description: "差速驱动 / 四轮四转 / 四轮四转带锁三种底盘形式，按场景灵活选配，支持全向移动与精确停靠。",
        tag: "可选",
        image: CDN.card_infra,
      },
    ],
  },
  {
    slug: "neme-gr01",
    name: "Neme GR01",
    tagline: "通用人形机器人，适用于工业、服务与教育场景",
    label: "Neme GR01",
    date: "March 2026",
    status: "available",
    image: CDN.card_agent,
    featured: true,
    seriesId: "neme-gr01",
    overview: "Neme GR01 是一款面向工业、服务与教育场景的通用人形机器人。具备双臂操作、自主导航与全身感知能力，搭载 MasRobo 云端智能规划平台，支持路径优化、多机调度与远程监控，可广泛应用于安全巡检、制造车间、仓储物流、医疗机构等多种场景。",
    features: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "双臂协同操作",
        description: "双臂 7 自由度设计，支持复杂物体抓取与双手协同任务，适配工业装配、物料配送与服务操作等多类场景。",
        image: CDN.hero_product,
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        title: "自主导航与避障",
        description: "激光雷达与视觉融合 SLAM，实时建图与路径规划，支持动态障碍物识别与绕行，适应复杂室内环境。",
        image: CDN.card_model,
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        title: "全身感知融合",
        description: "集成视觉、力觉与触觉传感器，实现全身感知融合，确保人机协作安全性，支持接触状态实时感知。",
        image: CDN.card_research,
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        title: "MasRobo 云端智能规划",
        description: "云端根据实时地图与机器人状态生成全局最优路径，结合 AI 预测调度，实现多机协同、任务分配与远程监控的全流程自动化。",
        image: CDN.card_infra,
      },
    ],
    useCases: [
      {
        image: CDN.card_infra,
        scenario: "安全巡检",
        industry: "安防 / 工业",
        description: "机房、仓储环境自主巡检，支持参数高低点拍摄记录，异常自动告警，替代人工完成高频次例行巡检任务。",
      },
      {
        image: CDN.hero_product,
        scenario: "制造车间",
        industry: "制造业",
        description: "工位物料零部件配送、装配辅助与生产点检取样，提升柔性生产线的自动化水平。",
      },
      {
        image: CDN.card_model,
        scenario: "仓储物流",
        industry: "物流",
        description: "包裹分拣、货物上下架与搬运，配合 MasRobo 云端调度实现多机协同，大幅提升仓储作业效率。",
      },
      {
        image: CDN.card_research,
        scenario: "教育科研",
        industry: "教育",
        description: "智能移动实验教学演示、教师科研实验平台与学生自主编程实训，提供开放的机器人研究与教学环境。",
      },
      {
        image: CDN.card_agent,
        scenario: "医疗机构",
        industry: "医疗",
        description: "药品与器械的拿取配送、样品运输，在医院环境中实现自主行走与物品递送，减少人工接触风险。",
      },
      {
        image: CDN.card_infra,
        scenario: "冷链配送",
        industry: "冷链 / 物流",
        description: "冷库物资搬运、疫苗与食品配送，适应低温环境下的自主作业需求。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "产品型号", value: "Neme GR01" },
          { label: "适用场景", value: "工业 / 服务 / 教育" },
          { label: "自由度", value: "双臂各 7 DOF" },
          { label: "最大行走速度", value: "1.5 m/s" },
        ],
      },
      {
        group: "操作能力",
        items: [
          { label: "单臂负载", value: "5 kg" },
          { label: "操作模式", value: "示教学习 / 自主执行" },
          { label: "末端执行器", value: "模块化快换接口" },
        ],
      },
      {
        group: "感知与导航",
        items: [
          { label: "导航方式", value: "激光雷达 + 视觉融合 SLAM" },
          { label: "感知传感器", value: "视觉 / 力觉 / 触觉" },
          { label: "避障能力", value: "动态障碍物实时识别与绕行" },
        ],
      },
      {
        group: "云端平台",
        items: [
          { label: "调度平台", value: "MasRobo 云端智能规划" },
          { label: "系统集成", value: "支持 MES / WMS 对接" },
          { label: "远程能力", value: "实时监控 / 远程干预 / OTA 升级" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "双臂操作系统",
        description: "7 自由度力控机械臂，支持阻抗控制与导纳控制，适配精密装配、物料配送与柔性操作任务。",
        tag: "核心",
        image: CDN.hero_product,
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        name: "自主导航底盘",
        description: "激光雷达 + 视觉融合 SLAM，支持动态环境实时建图与路径规划，适应复杂室内多场景自主移动。",
        tag: "核心",
        image: CDN.card_model,
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        name: "全身感知模块",
        description: "视觉 + 力觉 + 触觉三重感知融合，实时构建环境感知地图，支持安全人机协作与接触状态监测。",
        tag: "标配",
        image: CDN.card_research,
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        name: "MasRobo 智能体平台",
        description: "云端路径优化、任务调度与分配、货位智能管理、远程监控诊断及 AI 预测调度，支持与 MES/WMS 深度集成。",
        tag: "云服务",
        image: CDN.card_infra,
      },
    ],
  },
  {
    slug: "neme-gr01-pro",
    name: "Neme GR01 Pro",
    tagline: "高性能人形机器人，面向精密工业应用",
    label: "Neme GR01",
    date: "Q3 2026",
    status: "beta",
    image: CDN.card_model,
    featured: false,
    seriesId: "neme-gr01",
    overview: "Neme GR01 Pro 是 GR01 系列的旗舰版本，配备更高精度的力控关节与增强感知系统，专为精密工业操作场景设计。",
    features: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "高精度力控关节",
        description: "关节力矩传感精度 ±0.1 Nm，支持毫米级精密装配与微力操作，适配半导体、精密仪器等高端制造场景。",
        image: "/images/hero_product.webp",
      },
      {
        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        title: "增强视觉感知",
        description: "搭载工业级 4K 立体相机与结构光传感器，点云精度 ±0.1 mm，支持微小零件的精准识别与定位。",
        image: "/images/card_model.webp",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "全身柔顺控制",
        description: "全身阻抗控制框架，支持与人类协作时的柔顺交互，碰撞检测与响应时间 < 2 ms。",
        image: "/images/card_research.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        title: "多模态操作感知",
        description: "触觉 + 视觉 + 力觉三模态融合，实时感知操作过程中的接触状态，确保精密操作的稳定性与安全性。",
        image: "/images/card_agent.webp",
      },
    ],
    useCases: [
      {
        image: "/images/card_model.webp",
        scenario: "半导体制造",
        industry: "半导体 / 精密制造",
        description: "晶圆搬运、精密组装与质检，替代人工完成高洁净度环境下的精密操作任务。",
      },
      {
        image: "/images/card_research.webp",
        scenario: "精密仪器装配",
        industry: "仪器仪表",
        description: "光学元件装配、微小螺丝拧紧等高精度任务，重复定位精度 ±0.5 mm。",
      },
      {
        image: "/images/card_agent.webp",
        scenario: "人机协作生产",
        industry: "汽车 / 电子",
        description: "与人类工人并肩作业，柔顺控制确保协作安全，适配柔性生产线的动态任务需求。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "产品型号", value: "Neme GR01 Pro" },
          { label: "身高", value: "约 1.75 m" },
          { label: "整机重量", value: "约 80 kg" },
          { label: "自由度", value: "双臂各 7 DOF，腰部 3 DOF" },
        ],
      },
      {
        group: "精密操作",
        items: [
          { label: "单臂负载", value: "8 kg" },
          { label: "关节力矩精度", value: "±0.1 Nm" },
          { label: "重复定位精度", value: "±0.5 mm" },
          { label: "碰撞响应时间", value: "< 2 ms" },
        ],
      },
      {
        group: "感知系统",
        items: [
          { label: "视觉传感", value: "4K 立体相机 + 结构光传感器" },
          { label: "点云精度", value: "±0.1 mm" },
          { label: "触觉传感", value: "高密度触觉皮肤" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "高精度力控关节",
        description: "关节力矩传感精度 ±0.1 Nm，支持毫米级精密装配，适配半导体等高端制造场景。",
        tag: "核心",
        image: "/images/hero_product.webp",
      },
      {
        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        name: "工业级视觉系统",
        description: "4K 立体相机 + 结构光传感器，点云精度 ±0.1 mm，支持微小零件精准识别与定位。",
        tag: "核心",
        image: "/images/card_model.webp",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        name: "全身柔顺控制器",
        description: "全身阻抗控制框架，碰撞检测响应 < 2 ms，确保人机协作的绝对安全性。",
        tag: "标配",
        image: "/images/card_research.webp",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // Neme GR H Series
  // ══════════════════════════════════════════════════════════
  {
    slug: "neme-gr-h1",
    name: "Neme GR H1",
    tagline: "重载工业人形机器人",
    label: "Neme GR H",
    date: "2026",
    status: "available",
    image: CDN.card_infra,
    featured: true,
    seriesId: "neme-gr-h",
    overview: "Neme GR H1 是面向重载工业场景的人形机器人，具备强大的负载能力与耐用性，适合重工业、物流仓储等高强度作业环境。",
    features: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "重载操作",
        description: "单臂负载能力达 20 kg，适配重型零件搬运与工业装配任务。",
        image: CDN.card_infra,
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "高耐久设计",
        description: "工业级防护等级，适应高温、粉尘、振动等恶劣工业环境，保障长期稳定运行。",
        image: CDN.card_model,
      },
    ],
    useCases: [
      {
        image: CDN.card_infra,
        scenario: "重工业搬运",
        industry: "重工业",
        description: "重型零件搬运、装卸与转运，替代人工完成高强度体力劳动。",
      },
      {
        image: CDN.card_model,
        scenario: "仓储物流",
        industry: "物流",
        description: "仓库货物分拣、搬运与堆叠，提升仓储自动化水平。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "单臂负载", value: "20 kg" },
          { label: "防护等级", value: "IP54" },
          { label: "续航时间", value: "10 小时" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "重载液压关节",
        description: "液压辅助驱动关节，单臂负载 20 kg，双臂协同 35 kg，适配重工业操作需求。",
        tag: "核心",
        image: "/images/card_infra.webp",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        name: "工业级防护外壳",
        description: "IP54 防护等级，耐高温、防粉尘、抗振动，适应恶劣工业环境长期稳定运行。",
        tag: "标配",
        image: "/images/card_model.webp",
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        name: "双足行走系统",
        description: "支持爬楼梯、跨越障碍，适应工厂复杂地面，最大步行速度 1.2 m/s。",
        tag: "标配",
        image: "/images/card_research.webp",
      },
    ],
  },
  {
    slug: "neme-gr-hos",
    name: "Neme GR HOS",
    tagline: "重载人形机器人操作系统版",
    label: "Neme GR H",
    date: "Q4 2026",
    status: "in-development",
    image: CDN.card_agent,
    featured: false,
    seriesId: "neme-gr-h",
    overview: "Neme GR HOS 是 GR H 系列的操作系统增强版，集成先进的任务规划与自主决策能力。",
    features: [
      {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "自主任务规划",
        description: "基于大语言模型的任务分解与规划引擎，支持复杂多步骤任务的自主执行，无需逐步编程。",
        image: "/images/card_agent.webp",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "重载操作能力",
        description: "继承 GR H1 的重载操作能力，单臂负载 20 kg，并增强了精密操作的力控精度。",
        image: "/images/card_infra.webp",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "OTA 持续进化",
        description: "支持操作系统与技能库的 OTA 在线升级，机器人能力随软件迭代持续增强，无需硬件更换。",
        image: "/images/card_model.webp",
      },
    ],
    useCases: [
      {
        image: "/images/card_agent.webp",
        scenario: "智能工厂",
        industry: "制造业",
        description: "自主执行复杂生产任务，与 MES 系统集成，根据生产计划动态调整作业内容。",
      },
      {
        image: "/images/card_infra.webp",
        scenario: "危险环境作业",
        industry: "化工 / 核工业",
        description: "自主规划作业路径，在危险环境中执行巡检、采样与操作任务，减少人员风险暴露。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "产品型号", value: "Neme GR HOS" },
          { label: "身高", value: "约 1.85 m" },
          { label: "整机重量", value: "约 125 kg" },
          { label: "防护等级", value: "IP54" },
        ],
      },
      {
        group: "智能能力",
        items: [
          { label: "任务规划", value: "LLM 驱动自主规划" },
          { label: "技能库", value: "100+ 预置操作技能" },
          { label: "OTA 升级", value: "支持" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        name: "自主任务规划引擎",
        description: "LLM 驱动的任务分解与规划，支持复杂多步骤任务自主执行，内置 100+ 操作技能。",
        tag: "核心",
        image: "/images/card_agent.webp",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "重载操作系统",
        description: "继承 GR H1 重载能力，单臂 20 kg，增强力控精度，适配精密重载双重需求。",
        tag: "标配",
        image: "/images/card_infra.webp",
      },
    ],
  },
  {
    slug: "neme-gr-h0",
    name: "Neme GR H0",
    tagline: "重载人形机器人基础版",
    label: "Neme GR H",
    date: "2026",
    status: "available",
    image: CDN.card_research,
    featured: false,
    seriesId: "neme-gr-h",
    overview: "Neme GR H0 是 GR H 系列的基础版本，提供可靠的重载操作能力，适合标准工业部署场景。",
    features: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "可靠重载操作",
        description: "单臂负载 15 kg，采用成熟的电动关节驱动方案，提供稳定可靠的重载操作能力。",
        image: "/images/card_infra.webp",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "标准工业接口",
        description: "兼容主流工业通信协议（EtherCAT / Modbus / PROFINET），可与现有工业设备无缝集成。",
        image: "/images/card_model.webp",
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        title: "轮式移动底盘",
        description: "全向轮底盘，最大速度 1.5 m/s，适应标准工厂地面，部署成本低、维护简便。",
        image: "/images/card_research.webp",
      },
    ],
    useCases: [
      {
        image: "/images/card_infra.webp",
        scenario: "标准工业搬运",
        industry: "制造业",
        description: "标准化零件搬运、上下料与码垛，适配大多数工业生产线的物料转运需求。",
      },
      {
        image: "/images/card_model.webp",
        scenario: "仓储作业",
        industry: "物流仓储",
        description: "货架取放、货物分拣与转运，与 WMS 系统集成，提升仓储作业效率。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "产品型号", value: "Neme GR H0" },
          { label: "整机重量", value: "约 100 kg" },
          { label: "单臂负载", value: "15 kg" },
          { label: "防护等级", value: "IP44" },
        ],
      },
      {
        group: "移动与通信",
        items: [
          { label: "移动方式", value: "全向轮底盘" },
          { label: "最大速度", value: "1.5 m/s" },
          { label: "工业协议", value: "EtherCAT / Modbus / PROFINET" },
          { label: "续航时间", value: "10 小时" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "电动重载关节",
        description: "成熟的电动关节驱动方案，单臂负载 15 kg，稳定可靠，维护成本低。",
        tag: "标配",
        image: "/images/card_infra.webp",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        name: "工业协议网关",
        description: "支持 EtherCAT / Modbus / PROFINET，与现有工业设备无缝集成，部署门槛低。",
        tag: "标配",
        image: "/images/card_model.webp",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // Neme 1 Series
  // ══════════════════════════════════════════════════════════
  {
    slug: "neme-1",
    name: "Neme 1",
    tagline: "新一代旗舰人形机器人",
    label: "Neme 1",
    date: "2027",
    status: "in-development",
    image: CDN.hero_product,
    featured: true,
    seriesId: "neme-1",
    overview: "Neme 1 是 Machine Society 新一代旗舰人形机器人，集成最先进的感知、决策与运动控制技术，代表人形机器人的未来形态。",
    features: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "下一代具身智能",
        description: "集成 Machine Society 最先进的具身智能大模型，支持开放世界任务理解与自主执行，无需预编程。",
        image: "/images/hero_product.webp",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "全身灵巧操作",
        description: "双臂各 9 自由度，末端配备 5 指灵巧手，支持工具使用、精密装配等复杂操作任务。",
        image: "/images/card_model.webp",
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        title: "仿人双足行走",
        description: "动态平衡控制，支持奔跑、爬楼梯、跨越复杂地形，步行速度最高 3 m/s，适应真实世界环境。",
        image: "/images/card_research.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        title: "多模态感知系统",
        description: "360° 视觉感知、触觉皮肤、听觉阵列三重融合，构建完整的环境理解能力，支持复杂场景下的自主决策。",
        image: "/images/card_agent.webp",
      },
    ],
    useCases: [
      {
        image: "/images/hero_product.webp",
        scenario: "通用工业自动化",
        industry: "制造业",
        description: "无需改造生产线，直接适应现有工厂环境，执行搬运、装配、质检等多样化工业任务。",
      },
      {
        image: "/images/card_agent.webp",
        scenario: "家庭服务",
        industry: "家庭 / 服务业",
        description: "家务协助、老人陪护、儿童教育，在非结构化家庭环境中安全、自主地完成日常服务任务。",
      },
      {
        image: "/images/card_research.webp",
        scenario: "科研探索",
        industry: "科研机构",
        description: "作为通用具身智能研究平台，支持机器人学习、人机交互、认知科学等前沿研究。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "产品型号", value: "Neme 1" },
          { label: "身高", value: "约 1.75 m" },
          { label: "整机重量", value: "约 65 kg" },
          { label: "自由度", value: "双臂各 9 DOF + 双足 12 DOF" },
        ],
      },
      {
        group: "运动性能",
        items: [
          { label: "最大步行速度", value: "3 m/s" },
          { label: "跳跃高度", value: "0.5 m" },
          { label: "续航时间", value: "6 小时" },
        ],
      },
      {
        group: "智能能力",
        items: [
          { label: "智能引擎", value: "具身智能大模型" },
          { label: "任务理解", value: "开放世界自然语言指令" },
          { label: "OTA 升级", value: "支持" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        name: "具身智能大模型",
        description: "Machine Society 自研具身智能大模型，支持开放世界任务理解与自主执行，持续 OTA 进化。",
        tag: "核心",
        image: "/images/hero_product.webp",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "5 指灵巧手",
        description: "双臂末端配备 5 指灵巧手，支持工具使用、精密装配等复杂操作，触觉感知精度业界领先。",
        tag: "标配",
        image: "/images/card_model.webp",
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        name: "动态双足系统",
        description: "仿人双足行走，最高速度 3 m/s，支持奔跑、爬楼梯、跨越复杂地形。",
        tag: "标配",
        image: "/images/card_research.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        name: "多模态感知系统",
        description: "360° 视觉 + 触觉皮肤 + 听觉阵列三重融合，构建完整环境理解能力。",
        tag: "标配",
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
    tagline: "桌级智能四足机器人，家庭陪伴与编程教育的首选",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_research,
    featured: false,
    seriesId: "neme-grgo",
    overview: "GRGO Mini 是 Neme AI 面向个人与家庭用户推出的桌级智能四足机器人。它拥有小巧灵动的身躯与丰富的表情交互能力，内置 AI 语音大模型与仿生动作引擎，不仅是孩子们的编程启蒙导师，更是全家人的智能管家。整机重量仅约 2.5 kg，续航 2–3 小时，支持语音对话、视觉手势与手机 App 多种交互方式。",
    features: [
      {
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
        title: "多模态情感交互",
        description: "内置 AI 语音大模型与仿生动作引擎，能够理解主人的情绪并做出拟真回应，实现自然流畅的人机情感交流。",
        image: CDN.card_research,
      },
      {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        title: "全屋智能安防",
        description: "具备自主巡逻与异常声音/画面检测能力，支持远程视频通话与实时告警，让家庭安全随时掌握在手中。",
        image: CDN.card_model,
      },
      {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        title: "图形化编程教育",
        description: "提供简单易用的图形化编程界面，让儿童在玩乐中学习机器人控制与 AI 逻辑，激发编程兴趣与创造力。",
        image: CDN.card_agent,
      },
    ],
    useCases: [
      {
        image: CDN.card_research,
        scenario: "家庭陪伴与互动",
        industry: "家庭消费",
        description: "通过多模态大模型实现自然的人机交流，提供情感互动、老人看护与智能家居控制，成为家庭的智能伴侣。",
      },
      {
        image: CDN.card_model,
        scenario: "儿童编程教育",
        industry: "教育",
        description: "图形化编程界面让儿童轻松上手，在玩乐中学习机器人控制与 AI 逻辑，培养编程思维与创造力。",
      },
      {
        image: CDN.card_agent,
        scenario: "室内安防监控",
        industry: "家庭安全",
        description: "自主巡逻与异常检测能力，支持远程视频通话与实时告警，全天候守护家庭安全。",
      },
      {
        image: CDN.card_research,
        scenario: "儿童益智玩伴",
        industry: "娱乐教育",
        description: "仿生动作引擎与丰富表情交互，陪伴儿童成长，激发对科技与机器人的兴趣与热情。",
      },
    ],
    specs: [
      {
        group: "基本参数",
        items: [
          { label: "产品型号", value: "Neme GRGO Mini" },
          { label: "整机重量", value: "约 2.5 kg" },
          { label: "防护等级", value: "IP44" },
          { label: "核心算力", value: "5 TOPS（端侧 AI 芯片）" },
        ],
      },
      {
        group: "电气参数",
        items: [
          { label: "续航时间", value: "约 2–3 小时" },
          { label: "充电方式", value: "支持自动回充" },
        ],
      },
      {
        group: "交互与通信",
        items: [
          { label: "交互方式", value: "语音对话 / 视觉手势 / 手机 App" },
          { label: "通信", value: "Wi-Fi（2.4/5 GHz）/ 蓝牙" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
        name: "AI 语音大模型",
        description: "端侧 AI 语音大模型，实现自然语言理解与情感回应，支持语音对话与自主任务理解。",
        image: CDN.card_infra,
        tag: "标配",
      },
      {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        name: "图形化编程平台",
        description: "简单易用的图形化编程界面，支持儿童学习机器人控制与 AI 逻辑，提供丰富的教学课程资源。",
        image: CDN.card_research,
        tag: "标配",
      },
      {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        name: "全屋安防系统",
        description: "自主巡逻与异常声音/画面检测，支持远程视频通话与实时告警推送，守护家庭安全。",
        image: CDN.card_model,
        tag: "标配",
      },
    ],
  },
  {
    slug: "grgo-air",
    name: "Neme GRGO Air",
    tagline: "轻量全能四足机器人，高校科研与户外探索的理想平台",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_model,
    featured: false,
    seriesId: "neme-grgo",
    overview: "GRGO Air 是一款兼具高机动性与扩展性的轻量级四足机器人，对标宇树 Go2，面向高校科研、极客开发与轻量级户外巡检的通用平台。采用创新的混合材质机身，在保证强度的同时大幅降低了重量，最高奔跑速度可达 3.5 m/s，支持跳跃、空翻等高难度动态动作。提供完善的 ROS/ROS2 接口与仿真环境，是高校实验室进行具身智能算法验证的理想平台。",
    features: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "极致机动性能",
        description: "最高奔跑速度可达 3.5 m/s，支持跳跃、空翻等高难度动态动作，轻松跨越 15cm 障碍，适应各类复杂地形。",
        image: CDN.card_agent,
      },
      {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        title: "全面开源生态",
        description: "提供完善的 ROS/ROS2 接口与仿真环境，支持 C++ / Python 二次开发，加速科研落地，是算法验证的理想平台。",
        image: CDN.card_infra,
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "灵活负载扩展",
        description: "顶部预留标准导轨与供电/通信接口，可快速搭载激光雷达、深度相机或轻量级机械臂，满足多样化科研需求。",
        image: CDN.card_research,
      },
    ],
    useCases: [
      {
        image: CDN.card_model,
        scenario: "高校实验室科研",
        industry: "教育科研",
        description: "为高校和科研机构提供开放的算法验证平台，支持 ROS2，适用于野外地形勘探、地质数据采集与环境监测。",
      },
      {
        image: CDN.card_research,
        scenario: "户外复杂地形探索",
        industry: "户外探索",
        description: "高机动性能与全地形适应能力，轻松应对草地、沙地、雪地、碎石等复杂地形，适合户外科考与探索任务。",
      },
      {
        image: CDN.card_agent,
        scenario: "轻量级应急救援",
        industry: "应急救援",
        description: "轻量化设计便于快速部署，可搭载热成像与气体传感器，在灾害现场进行初步侦察与生命探测。",
      },
      {
        image: CDN.card_model,
        scenario: "公共安全与园区巡逻",
        industry: "安防",
        description: "自主导航与避障能力，支持园区、校园、工厂等场所的自主巡逻，实现 24 小时不间断安防监控。",
      },
    ],
    specs: [
      {
        group: "基本参数",
        items: [
          { label: "产品型号", value: "Neme GRGO Air" },
          { label: "整机重量", value: "约 12 kg" },
          { label: "有效载荷", value: "最大 5 kg" },
          { label: "防护等级", value: "IP54（防尘防泼溅）" },
          { label: "最高速度", value: "3.5 m/s" },
        ],
      },
      {
        group: "感知系统",
        items: [
          { label: "核心传感器", value: "4D 激光雷达 + 广角双目视觉" },
          { label: "开发接口", value: "ROS/ROS2 + C++ / Python SDK" },
          { label: "通信", value: "Wi-Fi / 4G / 工业以太网" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        name: "高机动运动系统",
        description: "最高 3.5 m/s 奔跑速度，支持跳跃、空翻等高难度动态动作，轻松跨越 15cm 障碍，全地形自适应步态控制。",
        image: CDN.card_model,
        tag: "标配",
      },
      {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        name: "开源开发平台",
        description: "完善的 ROS/ROS2 接口与仿真环境，支持 C++ / Python 二次开发，提供丰富的算法示例与教程资源。",
        image: CDN.card_agent,
        tag: "标配",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "模块化扩展接口",
        description: "顶部标准导轨与供电/通信接口，可快速搭载激光雷达、深度相机、轻量级机械臂等多种负载模块。",
        image: CDN.card_infra,
        tag: "标配",
      },
    ],
  },
  {
    slug: "grgo-pro",
    name: "Neme GRGO Pro",
    tagline: "全地形四足机器人，专为高危场景而生",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_research,
    featured: true,
    seriesId: "neme-grgo",
    overview: "Neme GRGO Pro 是一款专业级四足机器人，搭载热插拔双电池与轮足切换设计，具备强大的全地形通过能力。标配 APC 感控模块与 MasRobo 云端智能平台，支持多模态感知预警、模块化运输、自主导航避障与远程控制，广泛应用于应急消防、灾害救援、警用安防、电力与工业巡检等高危场景。",
    features: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "多模态感知与预警",
        description: "热成像相机检测火源与设备发热异常，气体传感器实时监测有毒/易燃/缺氧环境，高清摄像头远程回传视频，异常情况第一时间推送告警。",
        image: CDN.card_research,
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "全地形适应·轮足切换",
        description: "具备强大的全地形通过能力，可根据场景选择轮式或足式形态，支持台阶攀爬、碎石路、斜坡等复杂地形行走，兼顾速度与机动性。",
        image: CDN.card_model,
      },
      {
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        title: "热插拔双电池·极速更换",
        description: "采用热插拔设计，电池可在数秒内更换，显著减少停机时间，轻载巡检续航 1.5–2 小时，保障持续作业效率。",
        image: CDN.card_agent,
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        title: "MasRobo 云端智能调度",
        description: "接入 MasRobo 云端平台，实现全局任务调度、路径优化与多机协同。云端实时监控设备状态，自动生成全局最优行进路线，大幅提升作业智能化水平。",
        image: CDN.card_infra,
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        title: "自主导航与避障",
        description: "基于激光雷达/视觉 World Model 构建环境地图，融合红外、超声波、深度相机实现静态与动态障碍物避让，结合任务需求自动生成最优路径。",
        image: CDN.card_research,
      },
    ],
    useCases: [
      {
        image: CDN.card_research,
        scenario: "灾害救援",
        industry: "应急救援",
        description: "地震废墟侦察、矿井事故勘查、洪水险情排查，携带救援物资或通信设备，通过语音/灯光引导幸存者至安全区域。",
      },
      {
        image: CDN.card_model,
        scenario: "应急消防",
        industry: "消防安全",
        description: "火场/爆燃险情侦察、烟雾与热源探测、危险气体检测、搜索受困人员，在人员无法进入的高危环境中执行侦察任务。",
      },
      {
        image: CDN.card_agent,
        scenario: "警用安防",
        industry: "公共安全",
        description: "危险场所远程侦查、爆炸物排查、城市治安巡逻与监控，支持 4G/5G 远程操控与双向语音通信。",
      },
      {
        image: CDN.card_research,
        scenario: "电力巡检",
        industry: "能源电力",
        description: "变电站巡检、输电走廊监测、热斑/局放检测、表计自动读取，全天候自主巡检替代人工作业。",
      },
      {
        image: CDN.card_model,
        scenario: "工业巡检",
        industry: "工业制造",
        description: "化工厂/隧道/管廊巡检、气体泄漏检测、设备异常监测，在复杂工业环境中完成高频次自主巡检任务。",
      },
      {
        image: CDN.card_agent,
        scenario: "教育科研",
        industry: "教育科研",
        description: "移动机器人课程实践、导航避障算法验证、学术研究平台，提供完整的 SDK/REST/ROS 接口支持二次开发。",
      },
    ],
    specs: [
      {
        group: "基本参数",
        items: [
          { label: "产品型号", value: "Neme GRGO Pro" },
          { label: "站立尺寸（长×宽×高）", value: "750 × 400 × 350 mm" },
          { label: "重量（含电池）", value: "35 KG" },
          { label: "载重能力/外挂有效载荷", value: "≤ 20 KG" },
          { label: "最大速度", value: "2 m/s" },
          { label: "工作温度", value: "-20°C ~ 55°C" },
          { label: "环境与防护", value: "IP44" },
        ],
      },
      {
        group: "电气参数",
        items: [
          { label: "电池类型", value: "双电池仓 24V 8Ah" },
          { label: "充电时间", value: "2.67h" },
          { label: "充电方式", value: "热插拔电池 / 对接充电站" },
          { label: "续航", value: "轻载巡检 1.5–2h" },
        ],
      },
      {
        group: "感知与通信",
        items: [
          { label: "定位导航方式", value: "World Model" },
          { label: "传感器", value: "标配 APC 感控系统" },
          { label: "通信", value: "Wi-Fi（2.4/5 GHz）/ 工业以太网 / 4G/5G / RF射频" },
          { label: "软件与接口", value: "提供 SDK/REST/ROS 节点，支持远程手动控制" },
        ],
      },
      {
        group: "控制与安全",
        items: [
          { label: "云端平台", value: "MasRobo 智能体平台" },
          { label: "安全机制", value: "急停按钮 / 碰撞检测 / 跌落保护" },
          { label: "操作方式", value: "移动端 App / 语音交互 / 云端调度" },
          { label: "显示与提示", value: "LED 指示灯" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "APC 感控模块",
        description: "内置多源传感与控制单元，涵盖视觉、惯导、力控等感知能力，保障自主导航与运动平衡，为所有 GRGO Pro 型号标配。",
        image: CDN.card_model,
        tag: "标配",
      },
      {
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        name: "热插拔双电池仓",
        description: "双电池仓 24V 8Ah，支持热插拔极速更换，数秒内完成电池切换，保障持续作业不停机。",
        image: CDN.card_agent,
        tag: "标配",
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        name: "MasRobo 云端智能平台",
        description: "接入 MasRobo 云端平台，实现全局任务调度、路径优化规划与多机协同，云端实时监控设备状态并进行健康诊断。",
        image: CDN.card_infra,
        tag: "标配",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        name: "5G 通信模块",
        description: "支持 4G/5G、Wi-Fi、专用工业网络与 2.4GHz 射频 RF 手柄直控，集成扩音器与麦克风，支持远程喊话与双向语音通信。",
        image: CDN.card_research,
        tag: "可选",
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        name: "模块化载荷系统",
        description: "背负式挂载系统可稳定携带常规物资，可扩展外接小推车、挂架等实现大体积或重载货物托运，支持多种功能模块灵活组合。",
        image: CDN.card_model,
        tag: "可选",
      },
    ],
  },
  {
    slug: "grgo-pro-s",
    name: "Neme GRGO Pro-S",
    tagline: "直驱精密作业版，极致力控与毫秒级响应",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_research,
    featured: false,
    seriesId: "neme-grgo",
    overview: "GRGO Pro-S 是 Pro 系列的直驱衍生型号，面向精密制造与核电等高要求场景。它摒弃了连杆结构，采用高性能直驱电机，以牺牲部分抗冲击能力为代价，换取了极低的关节摩擦与无与伦比的力控精度（< 0.5 Nm），是接触式检测的完美载体。整机重量约 40 kg，有效载荷最大 15 kg，防护等级 IP54。",
    features: [
      {
        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
        title: "极致直驱力控",
        description: "关节摩擦力极低，能够感知微小的外力变化，实现高精度的柔顺控制与接触式作业，力控精度 < 0.5 Nm。",
        image: CDN.card_agent,
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "毫秒级动态响应",
        description: "极低的机械延迟使得机器人能够瞬间调整姿态，在复杂或湿滑地形上保持绝对平衡，确保精密作业稳定性。",
        image: CDN.card_infra,
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "精密仪器搭载",
        description: "极低的运行震动，确保搭载的高精度传感器（如超声波探伤仪、红外热像仪）数据准确无误，满足精密检测需求。",
        image: CDN.card_research,
      },
    ],
    useCases: [
      {
        image: CDN.card_research,
        scenario: "高精度接触式检测",
        industry: "精密制造",
        description: "利用极致力控能力，对设备表面进行精密接触式检测，感知微小外力变化，实现高精度柔顺控制与作业。",
      },
      {
        image: CDN.card_model,
        scenario: "变电站精密巡检",
        industry: "能源电力",
        description: "低震动运行确保高精度传感器数据准确，完成变电站设备的精密巡检、热斑检测与局部放电检测任务。",
      },
      {
        image: CDN.card_agent,
        scenario: "核电站设施检测",
        industry: "核能",
        description: "在核电站等高要求场景中进行接触式设施检测，毫秒级响应确保在复杂环境中保持绝对平衡与操作精度。",
      },
      {
        image: CDN.card_research,
        scenario: "精密制造车间巡检",
        industry: "工业制造",
        description: "在精密制造车间中进行设备状态巡检，极低运行震动保护精密传感器，确保检测数据的准确性与可靠性。",
      },
    ],
    specs: [
      {
        group: "基本参数",
        items: [
          { label: "产品型号", value: "Neme GRGO Pro-S" },
          { label: "整机重量", value: "约 40 kg" },
          { label: "有效载荷", value: "最大 15 kg" },
          { label: "防护等级", value: "IP54" },
          { label: "力控精度", value: "< 0.5 Nm" },
        ],
      },
      {
        group: "驱动系统",
        items: [
          { label: "驱动方式", value: "高性能直驱电机" },
          { label: "关节摩擦", value: "极低（直驱无减速器）" },
          { label: "动态响应", value: "毫秒级" },
        ],
      },
      {
        group: "感知与通信",
        items: [
          { label: "传感器", value: "标配 APC 感控系统" },
          { label: "通信", value: "Wi-Fi / 4G/5G / 工业以太网" },
          { label: "云端平台", value: "MasRobo 智能体平台" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
        name: "直驱力控系统",
        description: "高性能直驱电机，关节摩擦力极低，力控精度 < 0.5 Nm，实现高精度柔顺控制与接触式精密作业。",
        image: CDN.card_model,
        tag: "标配",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "APC 感控模块",
        description: "内置多源传感与控制单元，涵盖视觉、惯导、力控等感知能力，保障自主导航与运动平衡。",
        image: CDN.card_agent,
        tag: "标配",
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        name: "MasRobo 云端平台",
        description: "接入 MasRobo 云端平台，实现全局任务调度、路径优化与多机协同，云端实时监控设备状态。",
        image: CDN.card_infra,
        tag: "标配",
      },
    ],
  },
  {
    slug: "grgo-pro-t",
    name: "Neme GRGO Pro-T",
    tagline: "机械臂集成作业平台，真正的具身智能操作者",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_agent,
    featured: false,
    seriesId: "neme-grgo",
    overview: "GRGO Pro T 是基于 Pro 底盘深度定制的具身智能作业平台，打破【只看不动】的局限。它原生集成了一台 6 自由度协作机械臂，将四足机器人的高机动性与机械臂的灵巧操作完美结合，真正实现了【手脚并用】。底盘与机械臂共享同一个 APC 感控大脑，整机重量约 55 kg（含机械臂），机械臂负载最大 5 kg，防护等级 IP54。",
    features: [
      {
        icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
        title: "移动+操作一体化",
        description: "底盘与机械臂共享同一个 APC 感控大脑，实现全身协调运动，扩大了机械臂的有效作业空间，真正实现手脚并用。",
        image: CDN.card_research,
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        title: "具身智能视觉抓取",
        description: "结合端侧视觉大模型，能够自主识别目标物体（如阀门、开关、包裹）并规划抓取轨迹，实现智能化操作。",
        image: CDN.card_model,
      },
      {
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        title: "复杂场景交互",
        description: "轻松完成开门、按电梯、旋转阀门、搬运物料等复杂物理交互任务，替代人类进入危险区域执行高风险作业。",
        image: CDN.card_agent,
      },
    ],
    useCases: [
      {
        image: CDN.card_agent,
        scenario: "复杂物理抓取任务",
        industry: "工业制造",
        description: "自主识别目标物体并规划抓取轨迹，在工厂环境中完成物料搬运、设备操作与精密装配辅助任务。",
      },
      {
        image: CDN.card_research,
        scenario: "自主开门与遁行",
        industry: "安防巡检",
        description: "具备开门、按电梯等复杂物理交互能力，可在多楼层建筑中自主遁行，完成跨区域巡检与任务执行。",
      },
      {
        image: CDN.card_model,
        scenario: "危险品排爆排险",
        industry: "公共安全",
        description: "替代人类进入危险区域，利用机械臂进行危险品排查与处置，保障人员安全，降低作业风险。",
      },
      {
        image: CDN.card_agent,
        scenario: "化工阀门旋转操作",
        industry: "化工",
        description: "在化工厂等危险环境中自主操作阀门、开关等设备，结合气体传感器实时监测环境安全状态。",
      },
    ],
    specs: [
      {
        group: "基本参数",
        items: [
          { label: "产品型号", value: "Neme GRGO Pro-T" },
          { label: "整机重量", value: "约 55 kg（含机械臂）" },
          { label: "机械臂负载", value: "最大 5 kg" },
          { label: "机械臂自由度", value: "6 DoF + 灵巧夹爪" },
          { label: "防护等级", value: "IP54" },
        ],
      },
      {
        group: "感知与控制",
        items: [
          { label: "传感器", value: "标配 APC 感控系统" },
          { label: "视觉系统", value: "端侧视觉大模型" },
          { label: "通信", value: "Wi-Fi / 4G/5G / 工业以太网" },
          { label: "云端平台", value: "MasRobo 智能体平台" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
        name: "6 DoF 协作机械臂",
        description: "原生集成 6 自由度协作机械臂，配备灵巧夹爪，机械臂负载最大 5 kg，与底盘共享 APC 感控大脑实现全身协调。",
        image: CDN.card_infra,
        tag: "标配",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        name: "端侧视觉大模型",
        description: "结合端侧视觉大模型，自主识别目标物体并规划抓取轨迹，实现智能化具身操作能力。",
        image: CDN.card_research,
        tag: "标配",
      },
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "APC 感控模块",
        description: "底盘与机械臂共享同一个 APC 感控大脑，实现全身协调运动，保障自主导航与精密操作的同步执行。",
        image: CDN.card_model,
        tag: "标配",
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        name: "MasRobo 云端平台",
        description: "接入 MasRobo 云端平台，实现全局任务调度与多机协同，支持复杂作业任务的远程规划与监控。",
        image: CDN.card_agent,
        tag: "标配",
      },
    ],
  },
  {
    slug: "grgo-max",
    name: "Neme GRGO Max",
    tagline: "重载行业旗舰，极端工业环境的全天候作业平台",
    label: "Neme GRGO",
    date: "2026",
    status: "available",
    image: CDN.card_model,
    featured: false,
    seriesId: "neme-grgo",
    overview: "GRGO Max 是 Neme AI 产品线中的【巨无霸】，专为矿山、冶金与重工领域设计的全天候重型运输与作业平台。拥有庞大的身躯与惊人的力量，有效载荷超过 50 kg，达到 IP67 级别防护，无惧暴雨、泥浆、沙尘暴，甚至可在浅水区涉水前行。搭载大容量动力电池组，支持长达 4–6 小时的连续重载行走，满足大范围矿区巡检需求。",
    features: [
      {
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        title: "极限负载能力",
        description: "超过 50kg 的有效载荷，能够轻松背负大型通信基站、重型探测雷达或大量救援物资，满足重工业场景需求。",
        image: CDN.card_infra,
      },
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "最高防护等级",
        description: "达到 IP67 级别防护，无惧暴雨、泥浆、沙尘暴，甚至可在浅水区涉水前行，适应最恶劣的工业环境。",
        image: CDN.card_research,
      },
      {
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        title: "超长续航里程",
        description: "搭载大容量动力电池组，支持长达 4–6 小时的连续重载行走，满足大范围矿区巡检与极端环境长时间作业需求。",
        image: CDN.card_model,
      },
    ],
    useCases: [
      {
        image: CDN.card_model,
        scenario: "矿山重载运输",
        industry: "矿山冶金",
        description: "在矿山环境中背负重型设备与物资，IP67 防护无惧粉尘与泥浆，4–6 小时续航满足大范围矿区作业需求。",
      },
      {
        image: CDN.card_research,
        scenario: "地下矿井勘探",
        industry: "矿山冶金",
        description: "进入人类难以涉足的地下矿井环境，携带探测设备进行地质勘探与安全评估，降低人员作业风险。",
      },
      {
        image: CDN.card_agent,
        scenario: "森林消防与物资背负",
        industry: "消防救援",
        description: "在森林消防场景中背负灭火物资与通信设备，全地形通过能力确保在复杂林地环境中稳定作业。",
      },
      {
        image: CDN.card_model,
        scenario: "恶劣环境边防巡逻",
        industry: "国防安全",
        description: "在沙漠、雪地、泥泞等极端环境中执行边防巡逻任务，IP67 防护与超长续航保障全天候持续作业能力。",
      },
    ],
    specs: [
      {
        group: "基本参数",
        items: [
          { label: "产品型号", value: "Neme GRGO Max" },
          { label: "整机重量", value: "约 120 kg" },
          { label: "有效载荷", value: "≥ 50 kg" },
          { label: "防护等级", value: "IP67（防尘防水浸）" },
          { label: "工作温度", value: "-20°C ~ 55°C" },
        ],
      },
      {
        group: "电气参数",
        items: [
          { label: "电池系统", value: "大容量动力电池组" },
          { label: "续航时间", value: "4–6 小时（重载）" },
          { label: "充电方式", value: "接触式自动充电桩" },
        ],
      },
      {
        group: "感知与通信",
        items: [
          { label: "传感器", value: "标配 APC 感控系统" },
          { label: "通信", value: "Wi-Fi / 4G/5G / 卫星通信终端" },
          { label: "定位", value: "RTK/GPS 厘米级定位模块" },
          { label: "云端平台", value: "MasRobo 智能体平台" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
        name: "重载底盘系统",
        description: "庞大机身与惊人承载力，有效载荷超过 50 kg，全地形自适应步态控制，适应矿山、冶金等极端工业环境。",
        image: CDN.card_agent,
        tag: "标配",
      },
      {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        name: "IP67 全密封防护",
        description: "达到 IP67 级别防护，无惧暴雨、泥浆、沙尘暴，甚至可在浅水区涉水前行，适应最恶劣的工业环境。",
        image: CDN.card_infra,
        tag: "标配",
      },
      {
        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
        name: "大容量动力电池组",
        description: "搭载大容量动力电池组，支持长达 4–6 小时的连续重载行走，配合接触式自动充电桩实现高效补能。",
        image: CDN.card_research,
        tag: "标配",
      },
      {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        name: "MasRobo 云端平台",
        description: "接入 MasRobo 云端平台，支持卫星通信终端与 RTK/GPS 厘米级定位，实现极端环境下的远程监控与调度。",
        image: CDN.card_model,
        tag: "标配",
      },
    ],
  },
  {
    slug: "neme-dgh",
    name: "Neme DGH",
    tagline: "高自由度灵巧手",
    label: "DexGrasp",
    date: "2026",
    status: "available",
    image: CDN.card_research,
    featured: true,
    seriesId: "dexgrasp",
    overview: "Neme DGH 是一款高自由度灵巧手末端执行器，具备类人手指结构与触觉感知能力，适配各类人形机器人平台。",
    features: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "高自由度仿人手指",
        description: "5 指 15 自由度设计，关节角度范围接近人手，支持捏取、抓握、工具使用等复杂操作。",
        image: "/images/card_research.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        title: "高密度触觉感知",
        description: "指尖触觉传感器密度 100 点/cm²，可感知接触力、滑动与物体材质，实现精细操作反馈。",
        image: "/images/card_model.webp",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "标准化机械接口",
        description: "兼容主流机械臂末端法兰标准（ISO 9283），可快速安装于 Neme GR01/GR H 等系列机械臂。",
        image: "/images/card_agent.webp",
      },
    ],
    useCases: [
      {
        image: "/images/card_research.webp",
        scenario: "精密装配",
        industry: "制造业",
        description: "电子元件插拔、微小螺丝拧紧等精密操作，触觉反馈确保操作力度精准可控。",
      },
      {
        image: "/images/card_model.webp",
        scenario: "医疗辅助",
        industry: "医疗",
        description: "手术辅助、药品分拣、医疗器械操作，高精度触觉感知确保医疗操作的安全性。",
      },
      {
        image: "/images/card_agent.webp",
        scenario: "科研实验",
        industry: "科研机构",
        description: "作为灵巧操作研究平台，支持抓取策略、触觉感知等前沿研究的实验验证。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "产品型号", value: "Neme DGH" },
          { label: "自由度", value: "5 指 15 DOF" },
          { label: "重量", value: "0.8 kg" },
          { label: "最大抓握力", value: "30 N" },
        ],
      },
      {
        group: "感知能力",
        items: [
          { label: "触觉传感密度", value: "100 点/cm²" },
          { label: "力感知精度", value: "±0.05 N" },
          { label: "接口标准", value: "ISO 9283 法兰" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "5 指灵巧手本体",
        description: "15 自由度仿人手指，关节角度范围接近人手，支持多种抓握姿态与工具使用。",
        tag: "核心",
        image: "/images/card_research.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        name: "高密度触觉皮肤",
        description: "100 点/cm² 触觉传感，感知接触力、滑动与材质，实现精细操作反馈控制。",
        tag: "标配",
        image: "/images/card_model.webp",
      },
    ],
  },
  {
    slug: "neme-dga",
    name: "Neme DGA",
    tagline: "轻量化灵巧夹爪",
    label: "DexGrasp",
    date: "2026",
    status: "available",
    image: CDN.card_model,
    featured: false,
    seriesId: "dexgrasp",
    overview: "Neme DGA 是一款轻量化灵巧夹爪，兼顾抓取力度与精度，适合工业装配与服务操作场景。",
    features: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        title: "轻量化夹爪设计",
        description: "整体重量仅 0.45 kg，采用铝合金与碳纤维复合结构，在保持抓取力的同时大幅降低末端负载。",
        image: "/images/card_model.webp",
      },
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "自适应抓取",
        description: "柔性指尖设计，可自适应不规则形状物体，抓取成功率 > 98%，适配工业生产线的多品种物料。",
        image: "/images/card_research.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        title: "力控抓取",
        description: "内置力传感器，抓取力精度 ±0.1 N，可处理易碎物品与柔性材料，避免损坏被操作物体。",
        image: "/images/card_agent.webp",
      },
    ],
    useCases: [
      {
        image: "/images/card_model.webp",
        scenario: "工业上下料",
        industry: "制造业",
        description: "CNC 机床上下料、冲压件转运等工业场景，自适应抓取适配多品种零件，换型无需调整。",
      },
      {
        image: "/images/card_research.webp",
        scenario: "食品包装",
        industry: "食品",
        description: "食品抓取与装箱，柔性指尖避免损伤食品，力控抓取确保包装完整性。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "产品型号", value: "Neme DGA" },
          { label: "重量", value: "0.45 kg" },
          { label: "最大抓握力", value: "80 N" },
          { label: "行程", value: "0–85 mm" },
        ],
      },
      {
        group: "感知与控制",
        items: [
          { label: "力感知精度", value: "±0.1 N" },
          { label: "抓取成功率", value: "> 98%" },
          { label: "接口标准", value: "ISO 9283 法兰" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        name: "自适应夹爪本体",
        description: "柔性指尖自适应不规则形状，抓取成功率 > 98%，适配多品种物料无需换型。",
        tag: "核心",
        image: "/images/card_model.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        name: "内置力传感器",
        description: "抓取力精度 ±0.1 N，可处理易碎物品与柔性材料，避免损坏被操作物体。",
        tag: "标配",
        image: "/images/card_research.webp",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // Neme Living Series
  // ══════════════════════════════════════════════════════════
  {
    slug: "miban",
    name: "咪伴",
    tagline: "家庭陪伴智能机器人",
    label: "Neme Living",
    date: "2026",
    status: "available",
    image: CDN.card_agent,
    featured: true,
    seriesId: "neme-living",
    overview: "咪伴是一款面向家庭场景的智能陪伴机器人，具备情感交互、家庭助理与儿童教育等功能，为家庭成员提供温暖的智能陪伴体验。",
    features: [
      {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        title: "情感陪伴",
        description: "基于情感计算技术，识别用户情绪状态，主动提供情感支持与陪伴，建立长期情感连接。",
        image: "/images/card_agent.webp",
      },
      {
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
        title: "智能对话",
        description: "基于大语言模型的自然对话能力，支持多轮上下文理解，提供知识问答、故事讲述、情感倾听等服务。",
        image: "/images/card_model.webp",
      },
      {
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        title: "儿童教育",
        description: "内置 1000+ 儿童教育内容，支持互动故事、益智游戏与学习辅导，寓教于乐，陪伴儿童健康成长。",
        image: "/images/card_research.webp",
      },
      {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        title: "家庭助理",
        description: "智能家居控制、日程管理、提醒服务，与主流智能家居平台集成，成为家庭的智能中枢。",
        image: "/images/card_infra.webp",
      },
    ],
    useCases: [
      {
        image: "/images/card_agent.webp",
        scenario: "老人陪伴",
        industry: "养老",
        description: "为独居老人提供情感陪伴、健康提醒与紧急呼叫，减轻家庭照护压力，提升老人生活质量。",
      },
      {
        image: "/images/card_research.webp",
        scenario: "儿童教育",
        industry: "家庭教育",
        description: "陪伴儿童学习与玩耍，提供个性化教育内容，培养语言表达与创造力，是孩子的智能玩伴。",
      },
      {
        image: "/images/card_infra.webp",
        scenario: "家庭助理",
        industry: "家庭",
        description: "智能家居控制、日程管理、购物提醒，成为家庭生活的智能助手，提升家庭生活便利性。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "产品型号", value: "咪伴" },
          { label: "整机重量", value: "约 3.5 kg" },
          { label: "外形尺寸", value: "约 250 × 200 × 350 mm" },
          { label: "防护等级", value: "IP20" },
        ],
      },
      {
        group: "交互能力",
        items: [
          { label: "显示屏", value: "7 寸高清触摸屏" },
          { label: "语音识别", value: "远场麦克风阵列，3 m 拾音" },
          { label: "情感识别", value: "面部表情 + 语音情感分析" },
          { label: "语言支持", value: "中文 / 英文" },
        ],
      },
      {
        group: "智能能力",
        items: [
          { label: "对话引擎", value: "大语言模型" },
          { label: "教育内容", value: "1000+ 儿童教育内容" },
          { label: "智能家居", value: "支持主流平台集成" },
          { label: "续航时间", value: "8 小时" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        name: "情感计算引擎",
        description: "面部表情 + 语音情感双模态识别，实时感知用户情绪，主动提供情感支持。",
        tag: "核心",
        image: "/images/card_agent.webp",
      },
      {
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
        name: "大语言模型对话",
        description: "多轮上下文理解，知识问答、故事讲述、情感倾听，持续 OTA 升级优化。",
        tag: "标配",
        image: "/images/card_model.webp",
      },
      {
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        name: "儿童教育内容库",
        description: "1000+ 儿童教育内容，互动故事、益智游戏与学习辅导，持续更新扩充。",
        tag: "可选",
        image: "/images/card_research.webp",
      },
    ],
  },
  {
    slug: "neme-pet",
    name: "Neme Pet",
    tagline: "仿生宠物机器人",
    label: "Neme Living",
    date: "Q4 2026",
    status: "in-development",
    image: CDN.card_infra,
    featured: false,
    seriesId: "neme-living",
    overview: "Neme Pet 是一款仿生宠物机器人，模拟真实宠物的行为与情感反应，为用户提供独特的情感陪伴体验。",
    features: [
      {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        title: "仿生行为模拟",
        description: "模拟真实宠物的行为模式，包括玩耍、撒娇、睡眠等自然行为，提供真实的宠物陪伴体验。",
        image: "/images/card_agent.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        title: "情感反馈系统",
        description: "通过触摸、声音与视觉识别感知主人情绪，做出相应的情感反馈，建立深度情感连接。",
        image: "/images/card_model.webp",
      },
      {
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        title: "自主移动探索",
        description: "自主在家庭环境中移动探索，避开障碍物，像真实宠物一样自由活动，增加互动趣味性。",
        image: "/images/card_research.webp",
      },
    ],
    useCases: [
      {
        image: "/images/card_agent.webp",
        scenario: "情感陪伴",
        industry: "家庭",
        description: "为独居人士、老人提供宠物般的情感陪伴，无需喂食与清洁，随时随地给予温暖陪伴。",
      },
      {
        image: "/images/card_model.webp",
        scenario: "儿童互动",
        industry: "家庭教育",
        description: "与儿童互动玩耍，培养爱心与责任感，提供安全有趣的宠物体验，无过敏风险。",
      },
    ],
    specs: [
      {
        group: "基本信息",
        items: [
          { label: "产品型号", value: "Neme Pet" },
          { label: "整机重量", value: "约 2 kg" },
          { label: "外形尺寸", value: "约 300 × 150 × 200 mm" },
          { label: "防护等级", value: "IP20" },
        ],
      },
      {
        group: "交互能力",
        items: [
          { label: "触觉传感", value: "全身触摸感知" },
          { label: "情感识别", value: "声音 + 视觉双模态" },
          { label: "续航时间", value: "6 小时" },
        ],
      },
    ],
    highlights: [],
    modules: [
      {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        name: "仿生行为引擎",
        description: "模拟真实宠物行为模式，玩耍、撒娇、睡眠等自然行为，持续学习进化。",
        tag: "核心",
        image: "/images/card_agent.webp",
      },
      {
        icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        name: "情感感知系统",
        description: "全身触摸感知 + 声音视觉识别，感知主人情绪，做出相应情感反馈。",
        tag: "标配",
        image: "/images/card_model.webp",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// RESEARCH
// ─────────────────────────────────────────────────────────────
// Body content lives in: client/src/content/research/{slug}.md

export const research = [
  {
    slug: "clawloops",
    title: "ClawLoops：面向 AI Agent 系统的工程化设计框架研究",
    label: "研究",
    date: "April 15, 2026",
    readTime: "18 分钟阅读",
    image: CDN.card_research,
    featured: true,
    summary:
      "随着大语言模型（LLM）驱动的智能体（Agent）系统逐渐从实验性应用走向实际落地，其工程化问题日益凸显。本文基于 ClawLoops 项目文档，分析一种通过契约驱动开发、状态驱动前端设计、BFF 编排模式以及容器化运行管理实现全流程规范化的 Agent 工程化设计框架。",
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
