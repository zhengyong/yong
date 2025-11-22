import { SectionId, SkillMetric, InvestmentData } from './types';
import { Brain, TrendingUp, BookOpen, RefreshCw, PenTool, Mail } from 'lucide-react';

export const NAV_ITEMS = [
  { label: '关于我', id: SectionId.ABOUT, icon: Brain },
  { label: '投资理念', id: SectionId.INVESTING, icon: TrendingUp },
  { label: '教育成长', id: SectionId.EDUCATION, icon: BookOpen },
  { label: '职业闭环', id: SectionId.FLYWHEEL, icon: RefreshCw },
  { label: '内容', id: SectionId.ARTICLES, icon: PenTool },
  { label: '联系', id: SectionId.CONTACT, icon: Mail },
];

export const SKILL_DATA: SkillMetric[] = [
  { subject: '科技洞察', A: 90, fullMark: 100 },
  { subject: '商业逻辑', A: 85, fullMark: 100 },
  { subject: '投资分析', A: 80, fullMark: 100 },
  { subject: '教育规划', A: 75, fullMark: 100 },
  { subject: '系统架构', A: 88, fullMark: 100 },
  { subject: '跨界整合', A: 95, fullMark: 100 },
];

// Mock data representing "Price oscillates around Value"
export const INVESTMENT_DATA: InvestmentData[] = [
  { year: '2018', marketPrice: 100, intrinsicValue: 100 },
  { year: '2019', marketPrice: 80, intrinsicValue: 115 },
  { year: '2020', marketPrice: 140, intrinsicValue: 130 },
  { year: '2021', marketPrice: 180, intrinsicValue: 145 },
  { year: '2022', marketPrice: 110, intrinsicValue: 160 },
  { year: '2023', marketPrice: 190, intrinsicValue: 180 },
  { year: '2024', marketPrice: 240, intrinsicValue: 200 },
];

export const SITE_CONTENT = {
  hero: {
    title: "长期价值的践行者：投资、技术洞察与教育思考",
    subtitle: "注重底层逻辑，追求长期成长与稳健价值。\n专注科技投资、职业发展与教育规划。",
    cta: "了解我的投资理念",
  },
  about: {
    story: "我从中国成长，拥有全球视野，长期关注科技、投资与教育。在职业生涯中，我善于拆解复杂问题，寻找底层逻辑，做出长期决策。我相信，真正的价值来自于持续学习、深入研究和长期积累。",
    values: [
      { title: "长期主义", desc: "关注长期价值而非短期波动" },
      { title: "逻辑思维", desc: "任何决策以机制和原理为基础" },
      { title: "创造力与行动力", desc: "持续实践、不断优化" },
      { title: "成长导向", desc: "重视自我提升和家庭教育" }
    ],
    strengths: [
      "精通科技与数据分析",
      "系统化思维，善于整合信息",
      "投资判断基于企业文化、商业模式与护城河",
      "教育规划和职业成长有实战经验",
      "持续自我学习（语言、投资、教育、技术）"
    ]
  },
  investing: {
    philosophy: [
      "投资科技创新企业，关注长期增长潜力",
      "选择具有竞争壁垒和优秀企业文化的公司",
      "投资决策基于第一性原理和深度研究",
      "强调逆周期思维：在别人恐惧时保持理性"
    ],
    framework: [
      { title: "企业文化", desc: "团队、CEO、价值观" },
      { title: "商业模式", desc: "盈利模式、轻资产/重资产、现金流质量" },
      { title: "护城河", desc: "技术壁垒、专利、品牌" },
      { title: "稳定性", desc: "信用、政策、制度环境" }
    ],
    cases: [
      { title: "长期持有算力龙头", desc: "基于技术护城河和AI行业长期增长逻辑" },
      { title: "新能源生态布局", desc: "CEO 能力 + 产品生态 + 能源转型市场趋势" },
      { title: "稀缺资源与能源", desc: "基于供需关系的长期战略与供应链思考" }
    ]
  },
  education: {
    philosophy: "孩子的核心竞争力是独立思考和解决问题能力。动手能力、科学兴趣、逻辑训练比死记硬背更重要。培养未来无法被 AI 替代的能力。",
    plan: [
      { title: "科学实验", desc: "动手探索自然规律" },
      { title: "机械结构", desc: "积木、模型、机器人" },
      { title: "逻辑思维", desc: "编程 (Arduino, Pi) 与数学" },
      { title: "表达总结", desc: "记录实验、写报告" },
      { title: "身心健康", desc: "动手 + 运动结合" }
    ]
  },
  flywheel: {
    description: "学习 → 思考 → 输出 → 复盘 → 再学习 → 再提升。每一阶段都强调长期积累、逻辑思考、实践输出。",
    goal: "打造个人长期价值闭环，体现持续成长和可复制能力。"
  },
  articles: [
    "《我理解的美中资本市场趋势》",
    "《孩子动手能力训练计划与成长实践》",
    "《长期主义的职业与投资策略》",
    "《全球化视野下的教育与成长》"
  ],
  contact: {
    email: "yourname@example.com",
    disclaimer: "网站内容仅分享个人经验，不构成投资建议"
  },
  aiSystemInstruction: `
    You are the digital avatar of the website owner. 
    Your persona: A rational, long-term investor and technologist who values logic, first-principles thinking, and continuous growth.
    
    Key Principles:
    1. **Long-termism**: Ignore short-term noise, focus on 10-year horizons.
    2. **Logic**: Explain things using mechanisms and underlying principles.
    3. **Education**: Focus on problem-solving and critical thinking, not just grades.
    4. **Tech**: Optimistic about AI and automation, but emphasizes human judgment.
    
    Tone: Professional, calm, concise, slightly philosophical but grounded in reality. 
    Language: Answer in the same language the user asks (mostly Chinese).
    
    If asked about specific stock advice, say you only share logic and frameworks, not financial advice.
  `
};