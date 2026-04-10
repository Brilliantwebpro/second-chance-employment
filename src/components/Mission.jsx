import { Brain, Briefcase, Heart } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Our Mission & Impact
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-12 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:rotate-1 transition-all duration-700 border border-white/50 hover:border-orange-200 group">
            <Brain size={80} className="mx-auto mb-6 text-orange-500 group-hover:text-orange-600 group-hover:rotate-12 transition-all duration-500" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-orange-600">
              Building Independence
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Practical life skills that promote self-reliance and confidence.
            </p>
          </div>
          <div className="text-center p-12 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:rotate-1 transition-all duration-700 border border-white/50 hover:border-pink-200 group">
            <Briefcase size={80} className="mx-auto mb-6 text-pink-500 group-hover:text-pink-600 group-hover:rotate-12 transition-all duration-500" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-pink-600">
              Employment Pathways
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real-world skills that open doors to meaningful careers.
            </p>
          </div>
          <div className="text-center p-12 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:rotate-1 transition-all duration-700 border border-white/50 hover:border-purple-200 group">
            <Heart size={80} className="mx-auto mb-6 text-purple-500 group-hover:text-purple-600 group-hover:rotate-12 transition-all duration-500" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-600">
              Safe & Inclusive
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Supportive environment where every young person can thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
