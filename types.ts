export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  INVESTING = 'investing',
  EDUCATION = 'education',
  FLYWHEEL = 'flywheel',
  ARTICLES = 'articles',
  CONTACT = 'contact'
}

export interface NavItem {
  label: string;
  id: SectionId;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface SkillMetric {
  subject: string;
  A: number;
  fullMark: number;
}

export interface InvestmentData {
  year: string;
  marketPrice: number;
  intrinsicValue: number;
}