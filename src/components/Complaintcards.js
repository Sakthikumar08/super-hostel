import React from 'react';
import './ComplaintcardStyle.css';
import { CheckCircle, RefreshCcw, AlertCircle } from 'lucide-react';

const complaintData = [
  {
    title: 'Faulty Infrastructure',
    description: 'Broken chairs, damaged classrooms, elevator malfunctions.',
    raised: 5,
    updated: 3,
    completed: 2,
  },
  {
    title: 'Electrical Issues',
    description: 'Power failures, non-functional lights, AC/heater problems.',
    raised: 7,
    updated: 4,
    completed: 3,
  },
  {
    title: 'Water & Sanitation Problems',
    description: 'Leaking pipes, unclean washrooms, poor drainage.',
    raised: 6,
    updated: 2,
    completed: 4,
  },
  {
    title: 'Internet & Network Connectivity',
    description: 'Slow or non-functional WiFi in classrooms and hostels.',
    raised: 4,
    updated: 2,
    completed: 1,
  },
  {
    title: 'Security Concerns',
    description: 'Malfunctioning CCTV, broken doors, or unauthorized access.',
    raised: 3,
    updated: 1,
    completed: 2,
  },
];

const ComplaintCards = () => {
  return (
    <div className="complaint-container">
      {complaintData.map((item, index) => (
        <div key={index} className="complaint-card">
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <div className="status-info">
            <div className="status-badge raised">
              <AlertCircle size={16} />
              <span>Raised: {item.raised}</span>
            </div>
            <div className="status-badge updated">
              <RefreshCcw size={16} />
              <span>Updated: {item.updated}</span>
            </div>
            <div className="status-badge completed">
              <CheckCircle size={16} />
              <span>Completed: {item.completed}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComplaintCards;
