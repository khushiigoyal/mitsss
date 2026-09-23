export interface NavItem {
  id: string;
  label: string;
  href?: string;
  badge?: string;
  isRed?: boolean;
  children?: {
    title: string;
    description?: string;
    href?: string;
  }[];
}

export interface RecruitmentNotice {
  id: string;
  title: string;
  category: 'Faculty' | 'Administrative' | 'Technical';
  deadline: string;
  referenceNo: string;
  payScale: string;
  positions: string[];
  eligibility: string;
  qualifications: string[];
  department?: string[];
  pdfUrl?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Examination' | 'Recruitment' | 'Research' | 'Conference';
  isNew?: boolean;
  link?: string;
}

export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  highlightQuote?: {
    text: string;
    author: string;
  };
}

export interface QuickLinkItem {
  id: string;
  name: string;
  description: string;
  category: 'Academics' | 'Services' | 'Portals' | 'Support';
  icon: string;
  externalUrl?: string;
}
