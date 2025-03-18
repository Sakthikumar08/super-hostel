import React from "react";
import { PieChart, Pie, Tooltip, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import "./AnalyticsStyle.css";

const pieData = [
  { name: "IT", complaints: 10 },
  { name: "HR", complaints: 5 },
  { name: "Finance", complaints: 7 },
  { name: "Admin", complaints: 3 },
  { name: "Support", complaints: 8 },
];

const barData = [
  { department: "Electrical", complaints: 12 },
  { department: "Pumping", complaints: 8 },
  { department: "HVAC", complaints: 15 },
  { department: "Maintenance", complaints: 10 },
  { department: "Security", complaints: 5 },
];

const updatedData = [
  { department: "Electrical", updated: 5 },
  { department: "Pumping", updated: 4 },
  { department: "HVAC", updated: 10 },
  { department: "Maintenance", updated: 7 },
  { department: "Security", updated: 3 },
];

const completedData = [
  { department: "Electrical", completed: 7 },
  { department: "Pumping", completed: 4 },
  { department: "HVAC", completed: 5 },
  { department: "Maintenance", completed: 3 },
  { department: "Security", completed: 2 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h2>Analytics</h2>
      <p>Analytics data will be displayed here.</p>
      <div className="piechart-container">
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="complaints"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="barchart-container">
        <h3>Complaints by Department</h3>
        <BarChart width={500} height={300} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="complaints" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="barchart-container">
        <h3>Updated Complaints</h3>
        <BarChart width={500} height={300} data={updatedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="updated" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="barchart-container">
        <h3>Completed Complaints</h3>
        <BarChart width={500} height={300} data={completedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="completed" fill="#ff7300" />
        </BarChart>
      </div>
    </div>
  );
};

export default Analytics;