import React from 'react';
import { useCountUp } from 'react-countup'; 

const StatItem = ({ end, duration, label, suffix = "", separator = "," }) => {
  useCountUp({
    ref: label.replace(/\s+/g, ''), 
    end: end,
    duration: duration,
    separator: separator,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return (
    <div className="stat-item">
      <span className="stat-number">
        <span id={label.replace(/\s+/g, '')}>0</span>{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const LiveStats = () => {
  return (
    <div className="stats-container">
      <StatItem end={100} duration={2.5} label="Homes Connected" suffix="+" />
      
      <div className="stat-divider"></div>
      
      <StatItem end={1200} duration={3} label="Reports Resolved" suffix="+" />
      
      <div className="stat-divider"></div>
      
      <StatItem end={100} duration={2} label="Network Uptime" suffix="%" />
    </div>
  );
};

export default LiveStats;