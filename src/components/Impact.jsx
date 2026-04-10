import { Users, Activity, Clock } from 'lucide-react';

const Impact = () => {
  const stats = [
    { label: 'Young People Supported', value: '50+', icon: Users },
    { label: 'Programs Offered', value: '6+', icon: Activity },
    { label: 'Sessions Weekly', value: '12+', icon: Clock },
  ];

  return (
    <section id="impact" className="py-24 px-4 md:px-8 bg-gradient-to-r from-teal-50 to-emerald-50 relative">
      <div className="absolute inset-0 bg-[url('/src/images/istockphoto-1445675248-170667a.jpg')] opacity-3 blur-md brightness-125 z-[-1]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Making Real Impact
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Transforming lives through skills development
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center p-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-700 relative overflow-hidden border border-white/60">
              <div className="absolute inset-0 bg-gradient-to-b from-teal-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-5xl mb-6 mx-auto group-hover:scale-125 transition-transform duration-500">
                <stat.icon size={64} className="text-teal-500 group-hover:text-teal-600 mx-auto" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-4 group-hover:text-teal-600">
                {stat.value}
              </div>
              <p className="text-xl text-gray-700 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;

