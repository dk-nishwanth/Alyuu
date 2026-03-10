import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtworkCard from './components/ArtworkCard';
import LoadingScreen from './components/LoadingScreen';
import ContactSection from './components/ContactSection';
import { ZoomParallax } from './components/ui/zoom-parallax';
import { ARTWORKS, CORE_VALUES, CONGLOMERATES } from './constants';
import { CheckCircle2, Mail, Phone, ExternalLink, ArrowRight, Globe } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time - 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-800 selection:text-white bg-[#fdfbf7]">
      <LoadingScreen isLoading={isLoading} onLoadingComplete={() => setIsLoading(false)} />
      <Navbar />
      
      <main>
        {/* Grand Launch Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* About Me Section */}
        <section id="about" className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-24 border-t border-emerald-900/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-16 bg-white p-6 md:p-16 lg:p-24 shadow-xl relative -mt-12 md:-mt-24 z-40 scroll-reveal rounded-xl md:rounded-2xl">
            <div className="max-w-2xl scroll-reveal-left w-full">
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-emerald-800 mb-6 md:mb-8 block">About Me</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl serif leading-[0.95] mb-8 md:mb-12 font-bold">Creative<br />Professional</h2>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                I'm a passionate designer and developer specializing in UI/UX design, frontend development, and emerging technologies. Currently pursuing my Bachelor's in Computer Science and Engineering at K S Rangasamy College of Technology, with a focus on creating innovative digital experiences.
              </p>
            </div>
            <a 
              href="https://www.behance.net/alyushraa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 md:p-12 aspect-square bg-emerald-950 text-white hover:bg-emerald-900 transition-all duration-500 rounded-full scroll-reveal-right animate-glow-pulse w-full md:w-auto max-w-xs md:max-w-none flex-shrink-0"
            >
              <Globe size={32} className="mb-4 md:mb-6 group-hover:rotate-12 transition-transform" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">View My Work</span>
              <span className="text-xl md:text-2xl serif italic whitespace-nowrap">Behance</span>
              <ArrowRight size={20} className="mt-4 md:mt-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </section>

        {/* Education Section with Zoom Parallax */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-40">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-start">
            <div className="animate-fade-up scroll-reveal">
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-emerald-800 mb-8 block">Education</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl serif leading-[0.95] mb-12 md:mb-16 font-bold">K S Rangasamy<br />College</h2>
              <div className="space-y-8 md:space-y-10 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                <p className="text-base md:text-lg">
                  Bachelor of Computer Science and Engineering
                </p>
                <p className="text-base md:text-lg">
                  Expected Graduation: May 2026
                </p>
                <p className="text-sm md:text-base text-gray-500">
                  Tiruchengode, Tamil Nadu
                </p>
              </div>
            </div>
            
            <div className="lg:pt-16 space-y-8 md:space-y-12 animate-fade-up scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 p-8 md:p-12 bg-white border border-emerald-50 shadow-lg hover:shadow-xl transition-all duration-500 image-hover-lift rounded-xl">
                <div className="w-24 md:w-28 h-24 md:h-28 rounded-full overflow-hidden border-2 border-emerald-900/10 flex-shrink-0">
                  <img src="/alyu pic.jpeg" alt="Alyushra" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-900 mb-2">Designer & Developer</p>
                  <p className="text-xl md:text-2xl serif italic font-semibold">Alyushra A</p>
                  <p className="text-[10px] uppercase text-gray-400 font-bold tracking-[0.2em] mt-3">Creative Professional</p>
                </div>
              </div>
              <div className="p-8 md:p-12 border-l-4 border-emerald-900 bg-white shadow-lg hover:shadow-xl transition-all duration-500 scroll-reveal rounded-xl">
                <h3 className="text-2xl md:text-3xl serif italic mb-6 text-emerald-950 font-semibold">Passion for Innovation</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Combining design thinking with technical expertise to create impactful digital experiences. Specialized in UI/UX design, frontend development, and emerging technologies like AR/VR and AI.
                </p>
              </div>
            </div>
          </div>

          {/* Zoom Parallax Gallery */}
          <div className="mt-24 md:mt-40">
            <h3 className="text-3xl md:text-6xl serif mb-12 md:mb-16 text-center px-4 font-bold">My Creative Journey</h3>
            <ZoomParallax
              images={[
                {
                  src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80&fit=crop&crop=center',
                  alt: 'UI/UX Design',
                },
                {
                  src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&fit=crop&crop=center',
                  alt: 'Web Development',
                },
                {
                  src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80&fit=crop&crop=center',
                  alt: 'Product Design',
                },
                {
                  src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&fit=crop&crop=center',
                  alt: 'Development / Innovation',
                },
                {
                  src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&fit=crop&crop=center',
                  alt: 'Creative Work',
                },
                {
                  src: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&q=80&fit=crop&crop=center',
                  alt: 'Innovation / Tech',
                },
                {
                  src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=80&fit=crop&crop=center',
                  alt: 'Design Systems',
                },
              ]}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-32">
          <div className="flex flex-col items-center mb-20 md:mb-40 text-center scroll-reveal">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-emerald-800 mb-8 md:mb-10 animate-fade-up">Featured Work</span>
            <h2 className="text-4xl md:text-8xl serif leading-[0.95] animate-fade-up px-4 font-bold" style={{ animationDelay: '0.1s' }}>Projects &<br /><span className="italic">Experience</span></h2>
          </div>
          <div className="space-y-20 md:space-y-40">
            {ARTWORKS.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-24 md:py-48 px-4 md:px-8 bg-[#1a1a1a] text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 md:gap-32">
              <div className="animate-fade-up scroll-reveal">
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-emerald-400 mb-10 md:mb-12 block">Technical Skills</span>
                <h2 className="text-5xl md:text-8xl serif italic mb-16 md:mb-20 leading-tight font-bold">Programming</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-12">
                  {[
                    "Python",
                    "JavaScript",
                    "HTML/CSS",
                    "SQL",
                    "Java",
                    "C"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start border-t border-white/10 pt-8 md:pt-10 group hover:border-emerald-500/50 transition-colors">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-black tracking-widest uppercase leading-relaxed text-gray-400 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:pt-20 animate-fade-up scroll-reveal" style={{ animationDelay: '0.2s' }}>
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-emerald-400 mb-10 md:mb-12 block text-left lg:text-right">Design & Tools</span>
                <h2 className="text-5xl md:text-8xl serif italic mb-16 md:mb-20 leading-tight text-left lg:text-right font-bold">Creative Suite</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-12">
                  {[
                    "Figma",
                    "Unreal Engine 5",
                    "AutoCAD",
                    "Canva",
                    "VS Code",
                    "Behance"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start border-t border-white/10 pt-8 md:pt-10 group justify-start lg:justify-end text-left lg:text-right hover:border-emerald-500/50 transition-colors">
                      <span className="text-xs font-black tracking-widest uppercase leading-relaxed text-gray-400 group-hover:text-white transition-colors order-2 lg:order-1">{item}</span>
                      <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0 group-hover:scale-125 transition-transform order-1 lg:order-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-40 px-4 md:px-8 bg-white border-b border-emerald-900/5">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-16 md:gap-24">
            {CORE_VALUES.map((val, idx) => (
              <div key={val.id} className="flex flex-col items-center text-center group scroll-reveal hover:scale-105 transition-transform duration-500" style={{ animationDelay: `${idx * 0.1}s` }}>
                <span className="text-6xl md:text-8xl serif italic font-black text-emerald-900/5 mb-8 md:mb-10 group-hover:text-emerald-900/10 transition-colors">{val.id}</span>
                <h4 className="text-2xl md:text-3xl serif italic mb-6 md:mb-8 font-semibold">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-24 md:py-48 px-4 md:px-8 bg-[#0a201a] text-white relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto relative z-10 text-center scroll-reveal">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-emerald-400 mb-10 md:mb-12 block animate-fade-up">Achievements</span>
            <p className="text-3xl md:text-8xl serif leading-tight mb-16 md:mb-24 max-w-6xl mx-auto italic opacity-90 animate-fade-up px-4 font-semibold" style={{ animationDelay: '0.1s' }}>
              "Gold Medal in Maths Olympiad • District Level Hockey Player • Class Representative • National Symposium Coordinator"
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-32 opacity-40 grayscale contrast-150 hover:opacity-60 hover:grayscale-0 transition-all duration-500">
               {["DaKshaa T25", "Rangutsav", "MSME Hackathon", "Tech Events", "Workshops"].map((p, i) => (
                 <span key={i} className="text-xs md:text-sm font-black uppercase tracking-[0.5em] hover:opacity-100 transition-opacity cursor-default">{p}</span>
               ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800/20 blur-[150px] -z-10 rounded-full animate-float"></div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 md:py-24 px-4 md:px-12 bg-white scroll-reveal">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">
            <div className="text-center md:text-left scroll-reveal-left">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Technologies</span>
              <h5 className="text-xl md:text-2xl serif italic mt-3 font-semibold">Tech Stack</h5>
            </div>
            <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-32">
              {CONGLOMERATES.map((c, idx) => (
                <div key={c.name} className="flex flex-col items-center group cursor-pointer scroll-reveal hover:scale-110 transition-transform duration-500" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <span className="text-2xl md:text-3xl font-black tracking-[0.3em] uppercase opacity-20 group-hover:opacity-100 group-hover:text-emerald-900 transition-all">{c.logo}</span>
                  <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-gray-400 mt-3">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 md:py-48 px-4 md:px-8 bg-emerald-950 text-white text-center relative overflow-hidden scroll-reveal">
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-emerald-400 mb-8 md:mb-10 block animate-fade-up">Get In Touch</span>
            <h2 className="text-5xl md:text-[8rem] serif italic mb-16 md:mb-20 leading-none animate-fade-up px-4 font-bold" style={{ animationDelay: '0.1s' }}>Let's Connect</h2>
            <div className="flex flex-col items-center gap-10 md:gap-12 animate-fade-up px-4" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-wrap justify-center">
                <a href="https://www.behance.net/alyushraa" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 md:gap-8 px-8 md:px-16 py-4 md:py-8 bg-white text-emerald-950 rounded-full font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all shadow-2xl hover:shadow-emerald-500/50 hover:scale-110">
                  Behance
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/alyushra-a-79418224b" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 md:gap-8 px-8 md:px-16 py-4 md:py-8 bg-white text-emerald-950 rounded-full font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all shadow-2xl hover:shadow-emerald-500/50 hover:scale-110">
                  LinkedIn
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
              <p className="text-emerald-100/50 text-xs md:text-sm uppercase tracking-[0.3em]">Portfolio 2025</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800/20 blur-[150px] -z-10 rounded-full animate-float"></div>
        </section>

        {/* Contact Section with Form */}
        <ContactSection />

        {/* Footer */}
        <footer className="py-16 md:py-24 px-4 md:px-12 bg-white border-t border-emerald-900/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-24 mb-16 md:mb-24">
              <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-8 md:space-y-12">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-[28px] font-black tracking-[0.3em] uppercase">ALYUSHRA</span>
                  <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-[0.1em] mt-2">Designer & Developer Portfolio</span>
                </div>
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <Mail size={14} className="text-emerald-800 flex-shrink-0" />
                    <a href="mailto:alyushra96@gmail.com" className="text-xs md:text-sm font-bold border-b border-black break-all hover:opacity-60 transition-opacity">alyushra96@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <Phone size={14} className="text-emerald-800 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-bold">+91 6369548280</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Links</h5>
                <ul className="space-y-3 md:space-y-4">
                  <li><a href="#home" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600 transition-colors">Home</a></li>
                  <li><a href="#projects" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600 transition-colors">Projects</a></li>
                  <li><a href="#skills" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600 transition-colors">Skills</a></li>
                  <li><a href="#about" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600 transition-colors">About</a></li>
                  <li><a href="#contact" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600 transition-colors text-emerald-900 border-b border-emerald-900">Contact</a></li>
                </ul>
              </div>

              <div className="space-y-6 md:space-y-8">
                <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Connect</h5>
                <ul className="space-y-3 md:space-y-4">
                  <li><a href="https://www.behance.net/alyushraa" target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-emerald-600 transition-colors">Behance <ExternalLink size={10}/></a></li>
                  <li><a href="https://www.linkedin.com/in/alyushra-a-79418224b" target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-emerald-600 transition-colors">LinkedIn <ExternalLink size={10}/></a></li>
                  <li><a href="mailto:alyushra96@gmail.com" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600 transition-colors">Email</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-12 border-t border-gray-100 gap-4 md:gap-8 text-center md:text-left">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">© 2026 Alyushra A - Designer & Developer</span>
              <div className="flex items-center gap-4">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-emerald-900 italic">Creating Digital Excellence</span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
    </div>
  );
}

export default App;
