/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Utensils, 
  ShoppingBag, 
  CheckCircle2, 
  Star, 
  MessageSquare, 
  ChevronRight,
  Menu as MenuIcon,
  X,
  Coffee,
  Leaf,
  Accessibility,
  Car,
  CreditCard,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PHOTOS = {
  hero: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer69hhdGiTbRlqq7n9Xxz70TiWRl0xFTyjLuKgd9iU4sMktjaK12Ot2w9LUGtEsnLt5hDc68OOOFMU_v3tu2YD2J0oDuURiDDlfGyqRm0BuQ8l8Wi53Xq4AjJ5LaxsdTiYImP0aVHO4a_Mf=w800-h600-k-no",
  food: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqjXY2-V4TVSdce9QrZ2AvyYO7fK3SHflz-ebrRQUMShPvZVx157c6o2i_QlP2rtpLjUeeNlL_6P_fl1HY_r5GRKS20uR3kKvXRnRwFmvj1BGu3m_ZLuYudvBNRBwdoWyKx3ujHq-Maa8o=w600-h800-k-no",
  vibe: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer1qsOzhJhjHe2YKQHpn4MicExB1vNw8_hcBdqLp0a4xEM8TXLLMsIdhyMvQPwg9IRtNdvEiXQxdy9_YyQxJJEvc92pqsdW3nkcXF7hV4BXAQInMUdqN5o_6d-PbHcxPG0TfeFE=w800-h600-k-no"
};

const REVIEWS = [
  {
    name: "Mohamed Al Maazmi",
    tag: "Local Guide • 673 reviews",
    text: "Chicken stew, lentils, vegetables, and tandoor bread — Amazing! 👍🏼😋",
    rating: 5,
    scores: { food: 5, service: 5, atmosphere: 5 }
  },
  {
    name: "Hozeifa Taiyabali",
    tag: "Local Guide",
    text: "Pocket friendly… Fast Service… Amazing Taste… Porrota Super Fresh",
    rating: 5,
    scores: { food: 5, service: 5, atmosphere: 5 }
  },
  {
    name: "Elizabeth",
    tag: "Local Guide",
    text: "Chicken stew, lentils, vegetables, and tandoor bread — Amazing! 👍🏼😋 Very quiet, great for 2",
    rating: 5,
    scores: { food: 5, service: 5, atmosphere: 5 }
  },
  {
    name: "Sahil Ali",
    tag: "Local Guide",
    text: "People from the sun continent are gonna love it… Great staff and quality food",
    rating: 5,
    type: "Dine-in, Breakfast"
  }
];

const FEATURES = [
  { icon: Utensils, text: "Halal Food" },
  { icon: ShoppingBag, text: "Dine-in & Takeaway" },
  { icon: Clock, text: "Breakfast / Lunch / Dinner" },
  { icon: Coffee, text: "Great Tea Selection" },
  { icon: Leaf, text: "Vegan & Vegetarian Options" },
  { icon: Accessibility, text: "Wheelchair Accessible" },
  { icon: Car, text: "Free Parking" },
  { icon: CreditCard, text: "NFC / Card / Cash Payments" },
  { icon: Users, text: "Walk-ins Welcome" },
  { icon: MessageSquare, text: "Tourist Friendly" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Grocery', id: 'grocery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`font-bold text-xl md:text-2xl tracking-tight ${scrolled ? 'text-desert-ink' : 'text-white'}`}>
              White Sands
            </span>
            <span className={`arabic text-sm font-medium ${scrolled ? 'text-desert-gold' : 'text-desert-sand'}`}>
              مطعم وبقالة الرمال البيضاء
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                className={`text-sm font-medium hover:text-desert-gold transition-colors ${scrolled ? 'text-desert-ink' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+971553308791"
              className="bg-desert-gold hover:bg-desert-gold/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-desert-ink"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className={scrolled ? 'text-desert-ink' : 'text-white'} /> : <MenuIcon className={scrolled ? 'text-desert-ink' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-desert-ink border-b border-desert-sand/30 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:+971553308791"
                className="bg-desert-gold text-white text-center py-3 rounded-xl font-bold"
              >
                Call +971 55 330 8791
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={PHOTOS.hero} 
            alt="White Sands Exterior" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              White Sands <span className="block md:inline">Restaurant & Grocery</span>
            </h1>
            <h2 className="arabic text-2xl md:text-4xl text-desert-sand mb-8 font-medium">
              مطعم وبقالة الرمال البيضاء
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Authentic Flavors in the Heart of the Desert. A beloved halal eatery serving travelers and locals near the Empty Quarter.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+971553308791"
                className="w-full sm:w-auto bg-desert-gold hover:bg-desert-gold/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <Phone size={20} />
                Call Us
              </a>
              <a 
                href="https://maps.app.goo.gl/m5GUzGVdmP9ER5iU7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-desert-ink px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-desert-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              A Community Gem on <span className="text-desert-teal">Hameem Road</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in the UAE desert near the Empty Quarter, White Sands has been a welcoming oasis for travelers, campers, and locals for years. We pride ourselves on serving authentic South Asian and Middle Eastern comfort food that is affordable, fast, and 100% halal.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're stopping for a quick breakfast platter, a hearty lunch, or a late-night snack, our warm hospitality and fresh flavors remain constant in the vast desert landscape.
            </p>
            <div className="flex items-center gap-4 p-4 bg-desert-sand/20 rounded-2xl border border-desert-sand/30">
              <div className="bg-desert-gold p-3 rounded-xl text-white">
                <Star fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-xl">3.6 ⭐ Rating</p>
                <p className="text-sm text-gray-500">Based on 188 Google Reviews</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={PHOTOS.vibe} 
                alt="Atmosphere at White Sands" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-desert-gold font-bold text-2xl">Halal Certified</p>
              <p className="text-gray-500">Freshly Prepared Daily</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="bg-desert-ink text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Menu Highlights</h2>
            <p className="text-desert-sand/70 text-lg max-w-2xl mx-auto">
              Savor our most-loved dishes, crafted with traditional recipes and the freshest ingredients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 space-y-6">
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={PHOTOS.food} 
                  alt="Delicious Food" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <p className="text-2xl font-bold">Signature Flavors</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4 text-desert-gold">Price Range</h3>
                <p className="text-3xl font-bold">AED 1 – 50</p>
                <p className="text-white/50 text-sm mt-2">Affordable comfort for everyone</p>
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Chicken Stew", desc: "Slow-cooked, tender chicken in aromatic spices." },
                { title: "Lentils (Daal)", desc: "Creamy, tempered lentils with garlic and cumin." },
                { title: "Tandoor Bread (Porrota)", desc: "Super fresh, flaky, and golden-brown." },
                { title: "Vegetables", desc: "Seasonal mix prepared with traditional masalas." },
                { title: "Breakfast Platters", desc: "Hearty start with eggs, beans, and fresh bread." },
                { title: "Tea Selection", desc: "Our famous Karak tea and specialty brews." },
                { title: "Small Plates", desc: "Quick bites and traditional appetizers." },
                { title: "Vegan & Vegetarian", desc: "Diverse plant-based options available." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <h4 className="text-xl font-bold mb-2 text-desert-sand">{item.title}</h4>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grocery Section */}
      <section id="grocery" className="section-padding bg-desert-sand/10">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="bg-desert-teal/10 text-desert-teal w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <ShoppingBag size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Attached Grocery Shop</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Need more than just a meal? Our attached grocery store is stocked with quick essentials, snacks, beverages, and travel necessities. Perfect for campers and long-distance travelers passing through Hameem Road.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {['Snacks & Drinks', 'Travel Essentials', 'Fresh Dairy', 'Quick Bites'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 font-medium text-gray-700">
                  <CheckCircle2 className="text-desert-gold" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-desert-ink rounded-3xl p-10 text-white text-center">
              <p className="text-desert-sand uppercase tracking-widest text-sm mb-2">Grocery Prices</p>
              <p className="text-6xl font-bold mb-4">AED 1-50</p>
              <p className="text-white/50">Everything you need at pocket-friendly prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Features & Amenities</h2>
          <p className="text-gray-500 text-lg">Everything we offer to make your visit comfortable.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl border border-desert-sand/20 hover:border-desert-gold transition-colors group">
              <div className="bg-desert-cream p-4 rounded-xl mb-4 group-hover:bg-desert-gold group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <span className="font-semibold text-sm text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-desert-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Guests Say</h2>
              <p className="text-gray-500 text-lg">Real feedback from our Google Maps community.</p>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-desert-sand/20">
              <div className="flex text-desert-gold">
                {[1, 2, 3, 4].map(i => <Star key={i} size={20} fill="currentColor" />)}
                <Star size={20} className="text-desert-sand" fill="currentColor" />
              </div>
              <span className="font-bold text-xl">3.6 / 5</span>
              <span className="text-gray-400 text-sm">188 Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-desert-sand/10 flex flex-col h-full"
              >
                <div className="flex text-desert-gold mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 flex-grow">"{review.text}"</p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <p className="font-bold text-desert-ink">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.tag}</p>
                  {review.scores && (
                    <div className="flex gap-2 mt-2">
                      <span className="text-[10px] bg-desert-cream px-2 py-0.5 rounded text-desert-gold font-bold">Food: {review.scores.food}</span>
                      <span className="text-[10px] bg-desert-cream px-2 py-0.5 rounded text-desert-gold font-bold">Service: {review.scores.service}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://maps.app.goo.gl/m5GUzGVdmP9ER5iU7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-desert-gold font-bold flex items-center justify-center gap-2 hover:underline"
            >
              Read all reviews on Google Maps <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Clock className="mx-auto text-desert-gold mb-4" size={48} />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Opening Hours</h2>
            <p className="text-gray-500">Open every day, including Eid holidays.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-desert-sand/20">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-desert-ink text-white">
                  <th className="p-6 font-bold">Day</th>
                  <th className="p-6 font-bold">Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-desert-sand/10">
                {['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((day) => (
                  <tr key={day} className="hover:bg-desert-cream/50 transition-colors">
                    <td className="p-6 font-medium text-gray-700">{day}</td>
                    <td className="p-6 text-desert-ink font-bold">5:00 AM – 10:30 PM</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-6 bg-desert-sand/10 text-center">
              <p className="text-sm text-gray-500 italic">
                * Hours may differ on public holidays and Eid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="section-padding bg-desert-ink text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Visit Us Today</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-desert-gold p-4 rounded-2xl">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-desert-sand uppercase tracking-widest text-sm mb-1">Our Location</p>
                  <p className="text-xl font-medium leading-relaxed">
                    Restaurant Sahil, Hameem Road,<br />
                    Abu Dhabi, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-desert-teal p-4 rounded-2xl">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-desert-sand uppercase tracking-widest text-sm mb-1">Call Us</p>
                  <a href="tel:+971553308791" className="text-3xl font-bold hover:text-desert-gold transition-colors">
                    +971 55 330 8791
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href="https://wa.me/971553308791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <MessageSquare size={20} />
                  WhatsApp Us
                </a>
                <a 
                  href="https://maps.app.goo.gl/m5GUzGVdmP9ER5iU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-desert-ink px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <MapPin size={20} />
                  Open Maps
                </a>
              </div>
            </div>
          </div>

          <div className="h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl relative">
            {/* Placeholder for Map - In a real app, use Google Maps Embed */}
            <div className="absolute inset-0 bg-desert-sand/20 flex items-center justify-center flex-col p-12 text-center">
              <MapPin size={64} className="text-desert-gold mb-4" />
              <p className="text-2xl font-bold mb-4">Find us on Hameem Road</p>
              <p className="text-white/60 mb-8">We are located conveniently for desert travelers and locals alike.</p>
              <a 
                href="https://maps.app.goo.gl/m5GUzGVdmP9ER5iU7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-desert-gold text-white px-8 py-3 rounded-full font-bold"
              >
                View on Google Maps
              </a>
            </div>
            {/* Real embed would go here */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.74123456789!2d54.321!3d23.456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e66123456789%3A0x123456789abcdef!2sWhite%20Sands%20Restaurant%20%26%20Grocery!5e0!3m2!1sen!2sae!4v1234567890123" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
              className="opacity-20 grayscale"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-desert-sand/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-desert-ink">White Sands</h3>
              <p className="arabic text-desert-gold font-medium">مطعم وبقالة الرمال البيضاء</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} className="text-gray-500 hover:text-desert-gold font-medium transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4 text-sm text-gray-400">
            <p>© 2025 White Sands Restaurant & Grocery. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-desert-gold">Privacy Policy</a>
              <a href="#" className="hover:text-desert-gold">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/971553308791"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare size={32} />
      </a>
    </div>
  );
}
