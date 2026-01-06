
import React, { useState, useMemo } from 'react';
import { MOCK_JOBS, MOCK_COMPANIES } from './constants';
import { SearchFilters } from './types';
import JobSearchHero from './components/JobSearchHero';
import JobFeed from './components/JobFeed';
import CompanySpotlight from './components/CompanySpotlight';
import NewsletterSignup from './components/NewsletterSignup';

const App: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({ title: '', location: '' });

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => {
      const matchTitle = job.title.toLowerCase().includes(filters.title.toLowerCase()) || 
                         job.company.toLowerCase().includes(filters.title.toLowerCase());
      const matchLocation = job.location.toLowerCase().includes(filters.location.toLowerCase());
      return matchTitle && matchLocation;
    });
  }, [filters]);

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="bg-indigo-600 p-1.5 rounded-lg">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <span className="text-2xl font-black tracking-tight text-gray-900">HireSync</span>
              </div>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Find Jobs</a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Company Reviews</a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Salaries</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">Sign in</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">Post a Job</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <JobSearchHero onSearch={handleSearch} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feed (Left Column) */}
          <div className="lg:col-span-2">
            <JobFeed jobs={filteredJobs} />
          </div>

          {/* Sidebar (Right Column) */}
          <div className="hidden lg:block lg:col-span-1">
            <CompanySpotlight companies={MOCK_COMPANIES} />
          </div>
        </div>
      </main>

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Job Seekers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Browse Jobs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Job Alerts</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Career Advice</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Employers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Post a Job</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Hiring Solutions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Safety tips</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2024 HireSync Inc. All rights reserved.</p>
            <div className="flex space-x-6">
               <a href="#" className="text-gray-400 hover:text-indigo-600">Twitter</a>
               <a href="#" className="text-gray-400 hover:text-indigo-600">LinkedIn</a>
               <a href="#" className="text-gray-400 hover:text-indigo-600">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
