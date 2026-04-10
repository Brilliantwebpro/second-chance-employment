const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-20 bg-gradient-to-b from-indigo-50 to-purple-100 relative overflow-hidden animate-fade-slide-up">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-accent-400/10 to-accent-orange-400/10" />
      <div className="absolute inset-0 bg-[url('/src/images/cropped-image-14.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-slide-up [animation-delay:0.2s]">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-accent-500 bg-clip-text text-transparent mb-6 opacity-0 md:animate-fade-slide-up [animation-delay:0.3s]">
          Building Skills for a Brighter Future
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-slide-up [animation-delay:0.5s]">
          Our NDIS learning hub helps young people develop life skills, independence and pathways into meaningful employment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-slide-up [animation-delay:0.7s]">
          <a
            href="#booking"
            className="bg-accent-orange-500 hover:bg-accent-orange-600 active:scale-95 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Book a Session
          </a>
          <a
            href="#programs"
            className="border-2 border-primary-600 hover:bg-primary-600 active:scale-95 text-primary-600 hover:text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-float blur-xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-r from-orange-400/30 to-teal-400/30 rounded-full animate-float [animation-delay:1s] blur-xl" />
      <div className="absolute top-1/2 right-10 w-48 h-48 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-full animate-float [animation-delay:2s] blur-xl md:w-64 md:h-64" />
    </section>
  );
};

export default Hero;

