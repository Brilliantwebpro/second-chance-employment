import { useState } from 'react';
import { programs } from '../data.js';
import { Calendar, User, Mail, Clock } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    activity: '',
    time: '',
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const times = [
    '10:00 AM – 12:00 PM',
    '12:00 PM – 2:00 PM',
    '2:00 PM – 4:00 PM',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo alert
    alert(`✅ Booking confirmed!\n\nActivity: ${formData.activity}\nTime: ${formData.time}\nName: ${formData.name}\nEmail: ${formData.email}\n\nWe'll email you confirmation!`);
    setFormData({ activity: '', time: '', name: '', email: '' });
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 px-4 md:px-8 bg-gradient-to-b from-emerald-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-8 animate-bounce">✅</div>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-6">
            Booking Sent!
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Thank you! We'll send you a confirmation email shortly with all details.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-12 py-6 rounded-3xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Book Another Session
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 px-4 md:px-8 bg-gradient-to-b from-emerald-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Pick your activity and reserve a spot in our upcoming sessions
          </p>
        </div>
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-white/50 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <Calendar className="absolute left-4 top-4 h-6 w-6 text-primary-500" />
                <select
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-6 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-4 focus:ring-primary-200/50 transition-all duration-300 text-lg bg-gradient-to-r from-gray-50 to-white hover:shadow-md"
                  required
                >
                  <option value="">Select Activity</option>
                  {programs.map((p, i) => (
                    <option key={i} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Clock className="absolute left-4 top-4 h-6 w-6 text-accent-orange-500" />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-6 border-2 border-gray-200 rounded-2xl focus:border-accent-orange-500 focus:ring-4 focus:ring-accent-orange-200/50 transition-all duration-300 text-lg bg-gradient-to-r from-gray-50 to-white hover:shadow-md"
                  required
                >
                  <option value="">Select Time</option>
                  {times.map((time, i) => (
                    <option key={i} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <User className="absolute left-4 top-4 h-6 w-6 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full pl-12 pr-4 py-6 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-4 focus:ring-primary-200/50 transition-all duration-300 text-lg bg-gradient-to-r from-gray-50 to-white hover:shadow-md"
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-4 h-6 w-6 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-6 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-4 focus:ring-primary-200/50 transition-all duration-300 text-lg bg-gradient-to-r from-gray-50 to-white hover:shadow-md"
                  required
                />
              </div>
            </div>
            <div className="text-center pt-8">
              <button
                type="submit"
                className="group bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 hover:from-emerald-600 hover:via-blue-600 hover:to-purple-700 text-white px-16 py-8 rounded-3xl text-2xl font-bold shadow-2xl hover:shadow-3xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden w-full max-w-2xl mx-auto"
              >
                <span className="relative z-10">Reserve Your Spot Now!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 skew-x-12 -skew-y-3 group-hover:animate-pulse" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;

