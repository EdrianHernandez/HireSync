import React from 'react';

const JobSearchHero = ({ onSearch }) => {
  const [title, setTitle] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ title, location });
  };

  return (
    <div className="bg-white border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Find your next <span className="text-indigo-600">career move</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Browse through 50,000+ opportunities across top tech companies.
          </p>
        </div>

        <form onSubmit={handleSearch} className="search-bar max-w-4xl mx-auto flex flex-col md:flex-row gap-2 p-2 bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="w-full focus:outline-none text-gray-700 bg-transparent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              placeholder="City, state, or zip"
              className="w-full focus:outline-none text-gray-700 bg-transparent"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors md:w-auto w-full"
          >
            Find Jobs
          </button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span>Popular:</span>
          <button onClick={() => setTitle('Remote')} className="hover:text-indigo-600 underline">Remote</button>
          <button onClick={() => setTitle('Engineer')} className="hover:text-indigo-600 underline">Engineering</button>
          <button onClick={() => setTitle('Design')} className="hover:text-indigo-600 underline">Design</button>
          <button onClick={() => setTitle('Internship')} className="hover:text-indigo-600 underline">Internship</button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchHero;
