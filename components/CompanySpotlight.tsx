
import React from 'react';
import { Company } from '../types';

interface CompanySpotlightProps {
  companies: Company[];
}

const CompanySpotlight: React.FC<CompanySpotlightProps> = ({ companies }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Company Spotlight</h2>
        <button className="text-indigo-600 text-xs font-semibold hover:underline">View all</button>
      </div>
      <div className="space-y-6">
        {companies.map((company) => (
          <div key={company.id} className="flex items-center gap-4 group cursor-pointer">
            <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-lg border border-gray-100 group-hover:scale-105 transition-transform" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{company.name}</h3>
              <p className="text-xs text-gray-500">{company.industry}</p>
              <div className="mt-1 flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`h-3 w-3 ${i < Math.floor(company.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] text-gray-400 font-medium">{company.rating}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-indigo-600 block">{company.openPositions}</span>
              <span className="text-[10px] text-gray-400 uppercase">Jobs</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          Want to reach 2M+ active tech seekers? List your company today.
        </p>
        <button className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-semibold hover:bg-black transition-colors">
          Post a Job for Free
        </button>
      </div>
    </div>
  );
};

export default CompanySpotlight;
