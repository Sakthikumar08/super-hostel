import React, { useState } from "react";
import axios from "axios";
import "./LaundryStyle.css";

const Laundry = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    year: "",
    noOfDresses: "",
    date: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/laundry", formData);
      alert("Laundry details submitted successfully!");
      setFormData({ name: "", department: "", year: "", noOfDresses: "", date: "", image: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit laundry details.");
    }
  };

  return (
    <div className="laundry-container">
      <h2 className="laundry-title">Laundry Form</h2>
      <form className="laundry-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="form-input"
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />

        <input
          className="form-input"
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />

        <input
          className="form-input"
          type="number"
          name="noOfDresses"
          placeholder="No of Dresses"
          value={formData.noOfDresses}
          onChange={handleChange}
          required
        />

        <input
          className="form-input"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          className="form-input"
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <button className="submit-button" type="submit">Submit</button>
      </form>

      {formData.image && (
        <div className="image-preview">
          <h3 className="preview-title">Image Preview:</h3>
          <img className="preview-image" src={formData.image} alt="Preview" width="100" />
        </div>
      )}
    </div>
  );
};

export default Laundry;
