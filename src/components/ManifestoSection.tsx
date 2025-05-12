
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
    <section id={id} className={`manifesto-section ${bgColor}`}>
      <div className={fullWidth ? "w-full" : "container mx-auto"}>
        <h2 className="manifesto-title">{title}</h2>
        <div className="animate-fade-in">{children}</div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
};

export default ManifestoSection;
