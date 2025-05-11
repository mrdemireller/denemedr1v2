import React from 'react';
import { Zap, TrendingUp, DollarSign, Shield } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="mb-4 text-blue-500">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Why Choose Our Drone Solution?
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Our innovative drone technology revolutionizes solar panel cleaning
            with unmatched efficiency and cost-effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Zap size={32} />} 
            title="11x Cheaper" 
            description="Our automated drone system significantly reduces cleaning costs compared to manual labor."
          />
          <FeatureCard 
            icon={<TrendingUp size={32} />} 
            title="Improved Efficiency" 
            description="Clean panels generate up to 7% more energy, maximizing your solar investment."
          />
          <FeatureCard 
            icon={<DollarSign size={32} />} 
            title="ROI Maximizer" 
            description="Increase your solar ROI with regular, cost-effective cleaning schedules."
          />
          <FeatureCard 
            icon={<Shield size={32} />} 
            title="Safe & Reliable" 
            description="Eliminate human risk with autonomous drones designed for precision cleaning."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;