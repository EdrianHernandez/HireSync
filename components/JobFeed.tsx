
import React from 'react';
import { Job } from '../types';
import { getAIJobInsight } from '../services/geminiService';

interface JobFeedProps {
  jobs: Job[];
}

const JobFeed: React.FC<JobFeedProps> = ({ jobs }) => {
  const [insightLoading, setInsightLoading] = React.useState<string | null>(null);
  const [activeInsight, setActiveInsight] = React.useState<{ id: string; text: string } | null>(null);

  const handleAIInsight = async (job: Job) => {
    if (activeInsight?.id === job.id) {
      setActiveInsight(null);
      return;
    }
    
    setInsightLoading(job.id);
    const insight = await getAIJobInsight(job);
    setActiveInsight({ id: job.id, text: insight });
    setInsightLoading(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-900">Recommended for you</h2>
        <span className="text-sm text-gray-500">{jobs.length} jobs found</span>
      </div>

      {jobs.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">No jobs found matching your criteria.</p>
        </div>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="job-listing group bg-white p-5 rounded-lg border border-gray-200 job-card-shadow transition-all duration-200">
            <div className="flex items-start gap-4">
              <img src={job.companyLogo} alt={job.company} className="w-12 h-12 rounded bg-gray-100 object-cover" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-indigo-600 font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{job.salary}</span>
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-500 gap-4">
                  <span className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {job.postedDate}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className={`tag-pill px-2 py-1 rounded text-xs font-semibold ${
                    job.type === 'Remote' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {job.type}
                  </span>
                  {job.tags.map(tag => (
                    <span key={tag} className="tag-pill px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-indigo-700">
                    Quick Apply
                  </button>
                  <button 
                    onClick={() => handleAIInsight(job)}
                    className="flex items-center gap-1 border border-indigo-200 text-indigo-700 px-4 py-2 rounded font-semibold text-sm hover:bg-indigo-50 transition-colors"
                  >
                    <svg className={`h-4 w-4 ${insightLoading === job.id ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {insightLoading === job.id ? 'Analyzing...' : 'AI Career Insight'}
                  </button>
                </div>

                {activeInsight?.id === job.id && (
                  <div className="mt-4 p-4 bg-indigo-50 border border-indigo-100 rounded-lg animate-fade-in">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-indigo-600 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">AI COACH</span>
                        <p className="text-xs font-semibold text-indigo-900">Growth Analysis</p>
                    </div>
                    <p className="text-sm text-indigo-800 leading-relaxed italic">
                      "{activeInsight.text}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobFeed;
