
import React, { useState, useEffect, useRef } from 'react';
import { Artwork, CuratorInsight } from '../types';
import { getCuratorInsight } from '../services/gemini';
import { Sparkles, Loader2, Maximize2 } from 'lucide-react';

interface Props {
  artwork: Artwork;
}

const ArtworkCard: React.FC<Props> = ({ artwork }) => {
  const [insight, setInsight] = useState<CuratorInsight | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleGetInsight = async () => {
    if (insight) {
      setInsight(null);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    try {
      const data = await getCuratorInsight(artwork.title, artwork.description);
      setInsight(data);
    } catch (err) {
      console.error("Insight error:", err);
      setError("Unable to generate insights at the moment. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-white p-8 md:p-12 mb-24 last:mb-0 transition-all duration-700 border border-gray-50 shadow-sm hover:shadow-xl scroll-reveal ${isVisible ? 'active' : ''}`}
    >
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 relative overflow-hidden bg-gray-200 aspect-[4/3] image-hover-lift">
          <img 
            src={artwork.imageUrl} 
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <button className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 size={16} />
          </button>
        </div>

        <div className="md:col-span-5 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block animate-fade-up">{artwork.year}</span>
            <h2 className="text-4xl md:text-5xl serif mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>{artwork.title}</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 max-w-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p>{artwork.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Methodology</p>
                <p>{artwork.medium}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Target Scope</p>
                <p>{artwork.dimensions}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={handleGetInsight}
              disabled={isLoading}
              className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all disabled:opacity-50 hover:shadow-lg hover:scale-105"
            >
              {isLoading ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
              {insight ? "Close Research Report" : "Explore AI Research Insights"}
            </button>
            {process.env.GEMINI_API_KEY === 'PLACEHOLDER_API_KEY' && (
              <p className="text-xs text-gray-500 mt-2 italic">
              </p>
            )}
          </div>
        </div>
      </div>

      {insight && (
        <div className="mt-12 p-12 bg-[#fdfbf7] border border-gray-100 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl serif font-bold mb-6 flex items-center gap-2 text-emerald-900">
                Deep Analysis
              </h3>
              <p className="text-base leading-relaxed text-gray-700 mb-10 italic border-l-2 border-emerald-600 pl-6">"{insight.analysis}"</p>
              
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Historical & Philosophical Root</h4>
              <p className="text-sm leading-relaxed text-gray-600">{insight.historicalContext}</p>
            </div>
            
            <div className="bg-white p-8 border border-gray-100">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-8">Critical Outcomes</h4>
              <ul className="space-y-6">
                {insight.keyDetails.map((detail, idx) => (
                  <li key={idx} className="flex gap-6 text-sm text-gray-700 border-b border-gray-100 pb-6 last:border-0">
                    <span className="text-xs font-black serif text-emerald-600 opacity-40">0{idx + 1}</span>
                    <span className="font-medium">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {error && <p className="mt-4 text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default ArtworkCard;
