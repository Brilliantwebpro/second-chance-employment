const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative before:absolute before:inset-0 before:bg-[url('/src/images/istockphoto-1445675248-170667a.jpg')] before:bg-cover before:bg-center before:opacity-10 before:z-[-1]">
        <div className="animate-fade-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Starting July 2025
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're a small passionate team launching an NDIS-focused learning hub. Our structured sessions help young people build essential life skills, gain independence, and discover pathways to meaningful employment through fun, engaging activities.
          </p>
        </div>
        <div className="animate-fade-in-right">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-12 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-primary-700 mb-4">What we offer</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• Hands-on learning activities</li>
              <li>• Small group sessions</li>
              <li>• Skilled facilitators</li>
              <li>• NDIS approved</li>
              <li>• Employment pathways</li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left { animation: fade-in-left 1s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 1s ease-out; }
      `}</style>
    </section>
  );
};

export default About;

