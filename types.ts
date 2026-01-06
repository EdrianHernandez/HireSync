
export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  postedDate: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  tags: string[];
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  openPositions: number;
  rating: number;
}

export interface SearchFilters {
  title: string;
  location: string;
}
