import React from 'react';
import './ComplaintcardStyle.css';
import { CheckCircle, RefreshCcw, AlertCircle } from 'lucide-react';

const complaintData = [
  {
    title: 'Room & Infrastructure Issues',
    description: 'Broken chairs, damaged classrooms, elevator malfunctions.',
    raised: 5,
    updated: 3,
    completed: 2,
  },
  {
    title: 'Electrical & Power Issues',
    description: 'Frequent power outages, non-functional lights, faulty charging points, or AC/fan malfunctions.',
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
    description: 'Weak or no WiFi in hostel rooms, slow speed, or connectivity issues in common areas.',
    raised: 4,
    updated: 2,
    completed: 1,
  },
  {
    title: 'Security & Safety Concerns',
    description: 'CCTV not working, broken locks, unauthorized entry, or security personnel issues.',
    raised: 3,
    updated: 1,
    completed: 2,
  },
  {
    title: 'Mess & Food Complaints',
    description: 'Unhygienic food, lack of variety, quality issues, or improper meal timings.',
    raised: 3,
    updated: 1,
    completed: 2,
  }
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
