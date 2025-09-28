import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Calendar, Users, ChevronLeft, ChevronRight, Leaf, Flower } from 'lucide-react';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    meal: '',
    dietary: '',
    message: ''
  });

  const weddingDate = new Date('2025-06-15T16:00:00');
  
  const galleryImages = [
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your RSVP! We can\'t wait to celebrate with you.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(107, 124, 50, 0.3), rgba(139, 69, 19, 0.3)), url('https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-sage-600 opacity-20">
          <Leaf size={40} />
        </div>
        <div className="absolute bottom-20 right-20 text-sage-600 opacity-20">
          <Flower size={35} />
        </div>
        <div className="absolute top-1/3 right-10 text-sage-600 opacity-20">
          <Leaf size={30} />
        </div>
        <div className="absolute bottom-1/3 left-20 text-sage-600 opacity-20">
          <Flower size={25} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-sage-200">
            <Heart className="mx-auto mb-6 text-rose-500" size={48} />
            <h1 className="font-dancing text-5xl md:text-7xl lg:text-8xl text-warm-brown mb-4 leading-tight">
              Sarah & Michael
            </h1>
            <div className="w-32 h-0.5 bg-sage-500 mx-auto mb-6"></div>
            <p className="font-playfair text-xl md:text-2xl text-sage-700 mb-8 italic">
              Together with our families, we invite you to celebrate our love
            </p>
            <div className="flex items-center justify-center gap-3 mb-8 text-warm-brown">
              <Calendar size={24} />
              <span className="font-playfair text-xl md:text-2xl font-semibold">June 15, 2025</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sage-600">
              <MapPin size={20} />
              <span className="font-playfair text-lg">Riverside Gardens, Napa Valley</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 bg-gradient-to-r from-sage-50 to-amber-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-dancing text-4xl md:text-5xl text-warm-brown mb-12">Counting Down to Forever</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-sage-200">
                <div className="font-playfair text-3xl md:text-4xl font-bold text-sage-700 mb-2">
                  {item.value}
                </div>
                <div className="font-playfair text-sage-500 uppercase text-sm tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Story Timeline */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 transform rotate-12"><Leaf size={60} /></div>
          <div className="absolute bottom-32 right-32 transform -rotate-12"><Flower size={50} /></div>
          <div className="absolute top-1/2 left-1/4 transform rotate-45"><Leaf size={40} /></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-dancing text-4xl md:text-5xl text-warm-brown text-center mb-16">Our Love Story</h2>
          <div className="max-w-4xl mx-auto">
            {[
              { year: '2019', title: 'First Meeting', description: 'We met at a coffee shop on a rainy Tuesday morning. Sarah was reading her favorite book, and Michael couldn\'t help but start a conversation about it.' },
              { year: '2020', title: 'First Date', description: 'Our first official date was a hiking trip to the mountains. We spent hours talking and watching the sunset, knowing this was something special.' },
              { year: '2022', title: 'Moving In', description: 'We decided to take the next step and move in together. Our little apartment became our sanctuary filled with love, laughter, and countless memories.' },
              { year: '2024', title: 'The Proposal', description: 'Michael proposed during our anniversary trip to Paris, right by the Seine River at golden hour. Of course, Sarah said yes through happy tears!' }
            ].map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="inline-block bg-sage-100 rounded-full px-6 py-3 border-2 border-sage-300">
                    <span className="font-playfair text-xl font-semibold text-sage-700">{event.year}</span>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8 text-center md:text-left">
                  <h3 className="font-dancing text-2xl md:text-3xl text-warm-brown mb-3">{event.title}</h3>
                  <p className="font-playfair text-sage-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gradient-to-b from-sage-50 to-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="font-dancing text-4xl md:text-5xl text-warm-brown text-center mb-12">Our Journey Together</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={galleryImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full h-64 md:h-96 object-cover transition-all duration-500"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-sage-600 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-sage-600 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? 'bg-sage-600 scale-125' : 'bg-sage-300 hover:bg-sage-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-dancing text-4xl md:text-5xl text-warm-brown text-center mb-12">Venue Location</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-sage-50 rounded-2xl p-6 md:p-8 border border-sage-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="font-dancing text-2xl md:text-3xl text-sage-700 mb-3">Riverside Gardens</h3>
                <p className="font-playfair text-sage-600 mb-2">1234 Vineyard Lane, Napa Valley, CA 94558</p>
                <p className="font-playfair text-sage-500 text-sm">Ceremony begins at 4:00 PM, Reception to follow</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50404.682571329926!2d-122.31207065!3d38.3012914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80849c3e4b7b1019%3A0x1b5c1b7b7b1b7b1b!2sNapa%2C%20CA!5e0!3m2!1sen!2sus!4v1643723200000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-16 bg-gradient-to-t from-sage-50 to-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="font-dancing text-4xl md:text-5xl text-warm-brown text-center mb-12">RSVP</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-sage-200">
            <p className="font-playfair text-sage-600 text-center mb-8">
              Your presence is the greatest gift we could ask for. Please let us know if you can join us for our special day.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-playfair text-sage-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent font-playfair"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block font-playfair text-sage-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent font-playfair"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-playfair text-sage-700 font-semibold mb-2">Will you be attending? *</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      required
                      onChange={handleInputChange}
                      className="mr-2 text-sage-600 focus:ring-sage-500"
                    />
                    <span className="font-playfair text-sage-600">Yes, I'll be there!</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      required
                      onChange={handleInputChange}
                      className="mr-2 text-sage-600 focus:ring-sage-500"
                    />
                    <span className="font-playfair text-sage-600">Sadly, I can't make it</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-playfair text-sage-700 font-semibold mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent font-playfair"
                  >
                    <option value="1">Just me</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                  </select>
                </div>
                <div>
                  <label className="block font-playfair text-sage-700 font-semibold mb-2">Meal Preference</label>
                  <select
                    name="meal"
                    value={formData.meal}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent font-playfair"
                  >
                    <option value="">Select meal preference</option>
                    <option value="chicken">Herb-Roasted Chicken</option>
                    <option value="salmon">Grilled Salmon</option>
                    <option value="vegetarian">Vegetarian Option</option>
                    <option value="vegan">Vegan Option</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-playfair text-sage-700 font-semibold mb-2">Dietary Restrictions</label>
                <input
                  type="text"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent font-playfair"
                  placeholder="Any allergies or dietary needs?"
                />
              </div>

              <div>
                <label className="block font-playfair text-sage-700 font-semibold mb-2">Special Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent font-playfair resize-none"
                  placeholder="Share your wishes for the happy couple..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sage-600 hover:bg-sage-700 text-white font-playfair font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send RSVP with Love
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-brown text-amber-50 py-8">
        <div className="container mx-auto px-6 text-center">
          <Heart className="mx-auto mb-4 text-rose-300" size={32} />
          <p className="font-dancing text-2xl mb-2">Sarah & Michael</p>
          <p className="font-playfair text-amber-100">June 15, 2025 • Riverside Gardens, Napa Valley</p>
          <p className="font-playfair text-amber-200 text-sm mt-4">
            "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
