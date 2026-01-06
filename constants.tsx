
import { Job, Company } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: 'TechFlow Systems',
    companyLogo: 'https://picsum.photos/id/1/100/100',
    location: 'San Francisco, CA (Remote)',
    salary: '$140k - $190k',
    postedDate: '2 days ago',
    type: 'Remote',
    description: 'We are looking for a React expert to lead our dashboard modernization team.',
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'CreativePulse',
    companyLogo: 'https://picsum.photos/id/2/100/100',
    location: 'New York, NY',
    salary: '$110k - $150k',
    postedDate: '5 hours ago',
    type: 'Full-time',
    description: 'Join our award-winning design agency to craft next-gen mobile experiences.',
    tags: ['Figma', 'UI/UX', 'Prototyping']
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'NeuralNet AI',
    companyLogo: 'https://picsum.photos/id/3/100/100',
    location: 'Austin, TX',
    salary: '$130k - $175k',
    postedDate: '1 week ago',
    type: 'Full-time',
    description: 'Help us train large-scale language models for enterprise customers.',
    tags: ['Python', 'PyTorch', 'Machine Learning']
  },
  {
    id: '4',
    title: 'Backend Developer (Node.js)',
    company: 'StreamLine Corp',
    companyLogo: 'https://picsum.photos/id/4/100/100',
    location: 'London, UK',
    salary: '£70k - £95k',
    postedDate: '1 day ago',
    type: 'Contract',
    description: 'High-traffic video streaming platform seeking scaling experts.',
    tags: ['Node.js', 'Redis', 'Kubernetes']
  },
  {
    id: '5',
    title: 'Marketing Manager',
    company: 'GrowthHackers',
    companyLogo: 'https://picsum.photos/id/5/100/100',
    location: 'Remote',
    salary: '$90k - $120k',
    postedDate: '3 days ago',
    type: 'Remote',
    description: 'Lead our global user acquisition strategy across paid and organic channels.',
    tags: ['Growth', 'SEO', 'PPC']
  }
];

export const MOCK_COMPANIES: Company[] = [
  {
    id: 'c1',
    name: 'Google',
    logo: 'https://picsum.photos/id/10/100/100',
    industry: 'Technology',
    openPositions: 450,
    rating: 4.8
  },
  {
    id: 'c2',
    name: 'Amazon',
    logo: 'https://picsum.photos/id/11/100/100',
    industry: 'E-commerce',
    openPositions: 1200,
    rating: 4.5
  },
  {
    id: 'c3',
    name: 'Netflix',
    logo: 'https://picsum.photos/id/12/100/100',
    industry: 'Entertainment',
    openPositions: 85,
    rating: 4.9
  },
  {
    id: 'c4',
    name: 'Meta',
    logo: 'https://picsum.photos/id/13/100/100',
    industry: 'Social Media',
    openPositions: 320,
    rating: 4.4
  }
];
