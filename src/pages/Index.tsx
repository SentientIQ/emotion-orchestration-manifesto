import React, { useEffect, useState } from 'react';
import ManifestoSection from '../components/ManifestoSection';
import ManifestoImage from '../components/ManifestoImage';
import ManifestoNavigation from '../components/ManifestoNavigation';

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  useEffect(() => {
    document.title = "SentientIQ Architecture Manifesto V2";
  }, []);

  return (
    <div className="flex">
      {/* Sidebar Menu */}
      <ManifestoNavigation />
      
      {/* Main Content */}
      <div className="manifesto-container bg-white ml-14 md:ml-64 w-full">
        {/* Title Page */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-manifesto-darkPurple to-black text-white p-6">
          <div className="text-center max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-manifesto-purple">
              SentientIQ Architecture Manifesto V2
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-manifesto-lightPurple">
              Emotionally Timed Orchestration at Agent Speed
            </h2>
            <div className="mt-12">
              <p className="text-lg">
                <a href="mailto:info@sentientiq.ai" className="text-manifesto-purple hover:text-manifesto-lightPurple transition-colors">
                  info@sentientiq.ai
                </a> | 
                <a href="https://sentientiq.ai" target="_blank" rel="noopener noreferrer" className="text-manifesto-purple hover:text-manifesto-lightPurple transition-colors ml-2">
                  sentientiq.ai
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Introduction */}
        <ManifestoSection id="introduction" title="Emotion at the Center">
          <p className="manifesto-body">
            SentientIQ isn't a theory. It's an operating system for marketing that moves with emotion, not after it. 
            This system isn't designed to automate — it's designed to think. Through live signal detection, 
            explainable decision-making, and orchestrated agent consensus, SentientIQ brings the future of 
            emotional timing to marketers in motion.
          </p>
        </ManifestoSection>

        {/* Section 2: System Architecture Overview */}
        <ManifestoSection 
          id="system-architecture" 
          title="12 Agents. 7 Layers. One Coordinated Intelligence."
          bgColor="bg-gray-50"
        >
          <p className="manifesto-body">
            SentientIQ is built on a 7-layer stack powered by 12 autonomous agents:
          </p>
          <ul className="manifesto-list">
            <li>Signal Collection</li>
            <li>Sentiment Detection</li>
            <li>Decision Intelligence</li>
            <li>Attribution</li>
            <li>Activation</li>
            <li>Orchestration</li>
            <li>Ecosystem Awareness</li>
          </ul>
          <p className="manifesto-body mt-4">
            Each layer processes live signals and feeds the next — all governed by a consensus-driven orchestration layer.
          </p>
          <ManifestoImage imageNumber="1.png" altText="System Architecture Diagram" />
        </ManifestoSection>

        {/* Section 3: Live Agent Status */}
        <ManifestoSection id="live-agent-status" title="The System Isn't Coming. It's Already Running.">
          <p className="manifesto-body">
            Agents are online. Signals are flowing. Decisions are being made — in production, in real time. 
            Key agent systems:
          </p>
          <ul className="manifesto-list">
            <li>Emotional volatility scoring</li>
            <li>Audience segmentation</li>
            <li>Attribution reweighting</li>
            <li>Budget reallocation</li>
          </ul>
          <ManifestoImage imageNumber="2.png" altText="Live Agent Status Dashboard" />
        </ManifestoSection>

        {/* Section 4: Explainable AI by Default */}
        <ManifestoSection 
          id="explainable-ai" 
          title="Every Decision. Justified. Auditable."
          bgColor="bg-gray-50"
        >
          <p className="manifesto-body">
            Every agent response includes:
          </p>
          <ul className="manifesto-list">
            <li>Confidence interval</li>
            <li>Supporting factors</li>
            <li>Decision rationale</li>
            <li>Alternatives considered</li>
            <li>Full audit trail</li>
          </ul>
          <div className="pull-quote">
            "Trust isn't a feature. It's a function of clarity."
          </div>
          <ManifestoImage imageNumber="3.png" altText="Explainable AI Interface" />
        </ManifestoSection>

        {/* Section 5: TV Attribution Reimagined */}
        <ManifestoSection id="tv-attribution" title="What the Spot Moved — Not Just What It Cost">
          <p className="manifesto-body">
            SentientIQ processes emotional readiness windows for each TV spot (3, 5, and 10 minutes post-airing). 
            Output includes:
          </p>
          <ul className="manifesto-list">
            <li>Emotional lift score</li>
            <li>Creative volatility index</li>
            <li>Attribution update</li>
            <li>Budget trigger recommendations</li>
          </ul>
          <ManifestoImage imageNumber="4.png" altText="TV Attribution Dashboard" />
        </ManifestoSection>

        {/* Section 6: Sentiment Forecasting + Volatility Engine */}
        <ManifestoSection 
          id="sentiment-forecasting" 
          title="Predictive Emotion. Not Just Retrospective Sentiment."
          bgColor="bg-gray-50"
        >
          <p className="manifesto-body">
            Using its Emotional Volatility Index (EVI), SentientIQ forecasts audience readiness 24–48 hours 
            ahead of time. This allows campaigns to act before the spike — not after it.
          </p>
          <ManifestoImage imageNumber="5.png" altText="Sentiment Forecasting Graph" />
        </ManifestoSection>

        {/* Section 7: Real-Time Sentiment Feed */}
        <ManifestoSection id="real-time-sentiment" title="The Pulse Behind the Platform">
          <p className="manifesto-body">
            The system digests and scores live social signals from X (Twitter) every 60 seconds. 
            It maps shifts in engagement to emotional patterns — triggering agent review when thresholds are crossed.
          </p>
          <ManifestoImage imageNumber="6.png" altText="Real-Time Sentiment Feed" />
        </ManifestoSection>

        {/* Section 8: Contextual Intelligence */}
        <ManifestoSection 
          id="contextual-intelligence" 
          title="Not All Signals Speak Clearly. We Listen Anyway."
          bgColor="bg-gray-50"
        >
          <p className="manifesto-body">
            Language is messy. Sarcasm and ambiguity are constant threats to accurate emotional scoring. 
            SentientIQ's contextual intelligence layer interprets subtle sentiment — correcting emotional misreads 
            before they cascade downstream.
          </p>
          <ManifestoImage imageNumber="7.png" altText="Contextual Intelligence Display" />
        </ManifestoSection>

        {/* Section 9: Attribution with Meaning */}
        <ManifestoSection id="attribution-meaning" title="Attribution That Reflects Readiness">
          <p className="manifesto-body">
            SentientIQ's Attribution Agent gives credit based on emotional influence — not just pathing or exposure. 
            Outputs include:
          </p>
          <ul className="manifesto-list">
            <li>Sentiment-weighted multi-touch attribution</li>
            <li>Creative + media impact map</li>
            <li>Forecasted conversion probability</li>
          </ul>
          <ManifestoImage imageNumber="8.png" altText="Attribution Dashboard" />
        </ManifestoSection>

        {/* Section 10: Session-Level Proof */}
        <ManifestoSection 
          id="session-level-proof" 
          title="From Signal to Sale. One Visitor at a Time."
          bgColor="bg-gray-50"
        >
          <p className="manifesto-body">
            Each visitor is tracked in real time — emotional lift, interaction, contribution to pipeline. 
            This is attribution with gravity. It connects the scroll to the sale.
          </p>
          <ManifestoImage imageNumber="9.png" altText="Session-Level Analytics" />
        </ManifestoSection>

        {/* Final Page: Call to Action */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-manifesto-darkPurple to-black text-white p-6">
          <div className="text-center max-w-4xl animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-manifesto-purple">Want to See It Think?</h2>
            <p className="text-xl mb-12">
              SentientIQ isn't a prototype. It's a fully operational marketing intelligence system —
              live, explainable, and agent-powered.<br />
              Let the platform show you what it sees.
            </p>
            <a 
              href="mailto:info@sentientiq.ai" 
              className="manifesto-cta inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
