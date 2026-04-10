import { programs } from '../data.js';
import { Gamepad2, Palette, Puzzle, Sword, Hammer, Sprout } from 'lucide-react';

const lucideIcons = {
  Gamepad2,
  Palette,
  Puzzle,
  Sword,
  Hammer,
  Sprout,
};

const Programs = () => {
  const IconComponent = (iconName) => {
    const Component = lucideIcons[iconName];
    return Component ? <Component size={64} className="text-primary-600 group-hover:text-primary-500 group-hover:rotate-12 transition-all duration-500" /> : null;
  };

  return (
    <section id="programs" className="py-24 px-4 md:px-8 bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:w-48 before:h-48 before:bg-[url('/src/images/maxresdefault.jpg')] before:bg-cover before:bg-center before:rounded-2xl before:shadow-2xl before:-z-10 before:rotate-6 before:opacity-60">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Fun Activities That Build Skills
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-md">
            Our hands-on programs develop real-world skills in a supportive, youth-friendly environment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-3xl hover:-translate-y-6 transition-all duration-700 hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-200 cursor-pointer border border-white/50 hover:border-purple-200 hover:rotate-1"
            >
              <div className="text-5xl mb-6 mx-auto group-hover:scale-110">
                {IconComponent(program.icon)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-all duration-300 text-center">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {program.description}
              </p>
            </div>
          ))}
          <div className="col-span-full text-center py-16 border-2 border-dashed border-purple-300 rounded-3xl hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-3xl font-bold text-purple-600 mb-4">More coming soon!</h3>
            <p className="text-xl text-gray-600">Exciting new programs in development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
