
import React from 'react';

interface ManifestoSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bgColor?: string;
  fullWidth?: boolean;
}

const ManifestoSection = ({ 
  id, 
  title, 
  children, 
  bgColor = "bg-white", 
  fullWidth = false 
}: ManifestoSectionProps) => {
  return (
    <section id={id} className={`manifesto-section py-16 ${bgColor} scroll-mt-16`}>
      <div className={fullWidth ? "w-full px-6" : "container mx-auto px-6"}>
        <h2 className="manifesto-title text-3xl md:text-4xl font-bold mb-8 text-manifesto-darkPurple">{title}</h2>
        <div className="animate-fade-in">{children}</div>
      </div>
      <div className="section-divider border-b border-gray-200 mt-16"></div>
    </section>
  );
};

export default ManifestoSection;
