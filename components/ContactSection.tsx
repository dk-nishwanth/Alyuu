import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mwvrlkdz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 md:py-48 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-32 scroll-reveal">
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-emerald-800 mb-8 md:mb-10 block animate-fade-up">Connect With Me</span>
          <h2 className="text-4xl md:text-8xl serif leading-[0.95] animate-fade-up px-4 font-bold" style={{ animationDelay: '0.1s' }}>
            Let's Work<br /><span className="italic">Together</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-8 md:mt-12 max-w-2xl mx-auto font-light">
            Have a project in mind or want to collaborate? I'd love to hear from you. Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 md:space-y-12 scroll-reveal">
            <div className="animate-fade-up">
              <h3 className="text-2xl md:text-3xl serif font-bold mb-8 md:mb-10">Contact Info</h3>
              
              {/* Email */}
              <div className="flex gap-4 md:gap-6 mb-8 md:mb-10 group hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <Mail size={20} className="text-emerald-700" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Email</p>
                  <a href="mailto:alyushra96@gmail.com" className="text-sm md:text-base font-semibold text-black hover:text-emerald-700 transition-colors break-all">
                    alyushra96@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 md:gap-6 mb-8 md:mb-10 group hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <Phone size={20} className="text-emerald-700" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Phone</p>
                  <a href="tel:+916369548280" className="text-sm md:text-base font-semibold text-black hover:text-emerald-700 transition-colors">
                    +91 6369548280
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 md:gap-6 group hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <MapPin size={20} className="text-emerald-700" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Location</p>
                  <p className="text-sm md:text-base font-semibold text-black">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 md:pt-12 border-t border-gray-200 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-lg md:text-xl serif font-bold mb-6 md:mb-8">Follow Me</h4>
              <div className="flex gap-4 md:gap-6">
                <a 
                  href="https://www.linkedin.com/in/alyushra-a-79418224b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-50 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all duration-300 group"
                >
                  <Linkedin size={20} className="text-emerald-700 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.behance.net/alyushraa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-50 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all duration-300 group"
                >
                  <Github size={20} className="text-emerald-700 group-hover:text-white" />
                </a>
                <a 
                  href="mailto:alyushra96@gmail.com" 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-50 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all duration-300 group"
                >
                  <Mail size={20} className="text-emerald-700 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-emerald-50 to-white p-8 md:p-12 lg:p-16 rounded-2xl border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                {/* Name */}
                <div className="md:col-span-1">
                  <label className="block text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-700 mb-3 md:mb-4">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-sm md:text-base"
                  />
                </div>

                {/* Email */}
                <div className="md:col-span-1">
                  <label className="block text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-700 mb-3 md:mb-4">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-8 md:mb-10">
                <label className="block text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-700 mb-3 md:mb-4">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-sm md:text-base"
                />
              </div>

              {/* Message */}
              <div className="mb-8 md:mb-10">
                <label className="block text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-700 mb-3 md:mb-4">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all resize-none text-sm md:text-base"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-emerald-700 text-white rounded-full font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-emerald-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="mt-4 text-emerald-700 font-semibold text-sm md:text-base animate-fade-up">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600 font-semibold text-sm md:text-base animate-fade-up">
                  ✗ Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
