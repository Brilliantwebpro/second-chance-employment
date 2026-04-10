import { UserCheck, Heart, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Program Director',
      icon: UserCheck,
      desc: '15+ years NDIS experience. Passionate about youth employment pathways.',
    },
    {
      name: 'Mike Chen',
      role: 'Activities Coordinator',
      icon: Heart,
      desc: 'Creative facilitator. Former youth worker with gaming & art expertise.',
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Employment Coach',
      icon: Star,
      desc: 'Career specialist helping young people transition to meaningful work.',
    },
  ];

  return (
    <section id="team" className="py-24 px-4 md:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/src/images/cropped-image-14.jpg')] opacity-2 blur-lg brightness-150 z-[-1]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Our Passionate Team
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Small, dedicated team with years of NDIS and youth development experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 border border-white/50 hover:border-orange-200 hover:rotate-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/10 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-6xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                <member.icon size={64} className="text-orange-500 group-hover:text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center relative z-10 group-hover:text-orange-600">
                {member.name}
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-4 text-center relative z-10">
                {member.role}
              </p>
              <p className="text-gray-600 leading-relaxed relative z-10 text-center">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

