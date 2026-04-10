import { testimonials } from '../data.js';

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white relative before:absolute before:inset-0 before:bg-[url('/src/images/cropped-image-14.jpg')] before:bg-cover before:bg-right-bottom before:opacity-2 before:blur-sm before:z-[-1]">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Participants Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from our learning hub
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border border-white/50 hover:border-primary-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5" />
              <p className="text-gray-700 text-lg italic mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="font-bold text-xl text-primary-600 relative z-10">
                — {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

