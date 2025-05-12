
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ManifestoNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const sections = [
    { id: 'introduction', name: 'Introduction' },
    { id: 'system-architecture', name: 'System Architecture' },
    { id: 'live-agent-status', name: 'Live Agent Status' },
    { id: 'explainable-ai', name: 'Explainable AI' },
    { id: 'tv-attribution', name: 'TV Attribution' },
    { id: 'sentiment-forecasting', name: 'Sentiment Forecasting' },
    { id: 'real-time-sentiment', name: 'Real-Time Sentiment' },
    { id: 'contextual-intelligence', name: 'Contextual Intelligence' },
    { id: 'attribution-meaning', name: 'Attribution with Meaning' },
    { id: 'session-level-proof', name: 'Session-Level Proof' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleSectionClick = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="fixed top-4 right-4 z-50">
      <button 
        className="flex items-center gap-2 bg-manifesto-purple text-white px-4 py-2 rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Sections</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-xl overflow-hidden z-50 animate-fade-in">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                activeSection === section.id ? 'bg-manifesto-lightPurple/20 text-manifesto-purple font-medium' : ''
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManifestoNavigation;
