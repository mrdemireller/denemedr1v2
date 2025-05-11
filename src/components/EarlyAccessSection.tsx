import React from 'react';
import Button from './Button';

const EarlyAccessSection: React.FC = () => {
  return (
    <section 
      id="early-access" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div 
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Want early access?</h2>
          <p className="text-lg text-gray-600">Fill out the form below.</p>
        </div>

        <div 
          className="bg-white rounded-xl shadow-xl p-8 md:p-10"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                How many solar panels do you manage?
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              ></textarea>
            </div>

            <div className="pt-4">
              <Button 
                primary 
                type="submit"
                className="w-full md:w-auto text-center"
              >
                Apply for Early Access
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;