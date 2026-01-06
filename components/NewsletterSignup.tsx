
import React from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <section className="bg-indigo-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Don't miss your next big break</h2>
        <p className="text-indigo-200 mb-8 text-lg">
          Join 50,000+ professionals getting weekly job alerts and career tips.
        </p>
        
        {status === 'success' ? (
          <div className="bg-green-500 text-white p-4 rounded-lg animate-bounce inline-block">
            Awesome! Check your inbox for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              className="flex-1 px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </form>
        )}
        
        <p className="mt-4 text-xs text-indigo-400">
          We care about your data. Read our <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
