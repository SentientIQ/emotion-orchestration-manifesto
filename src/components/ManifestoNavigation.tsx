
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ManifestoNavigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  
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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  return (
    <div className={`fixed left-0 top-0 h-full bg-manifesto-darkPurple text-white transition-all duration-300 z-50 flex ${isCollapsed ? 'w-14' : 'w-64'}`}>
      <div className="flex flex-col w-full h-full">
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between border-b border-manifesto-lightPurple/20">
          {!isCollapsed && <span className="font-medium text-manifesto-purple">Manifesto Sections</span>}
          <button 
            onClick={toggleSidebar}
            className={`p-1 rounded-md hover:bg-manifesto-purple/20 ${isCollapsed ? 'mx-auto' : ''}`}
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        
        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto py-2">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full text-left px-4 py-3 hover:bg-manifesto-purple/20 transition-colors flex items-center whitespace-nowrap ${
                activeSection === section.id 
                  ? 'bg-manifesto-purple/30 text-manifesto-lightPurple font-medium border-r-4 border-manifesto-purple' 
                  : 'text-gray-300'
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              <div className="w-2 h-2 rounded-full bg-manifesto-purple mr-3"></div>
              {!isCollapsed && <span>{section.name}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManifestoNavigation;
