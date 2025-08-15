import React, { useState, useTransition } from "react";
import { useTranslation } from "react-i18next";

function Waitlist() {
  const {t} = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email } = formData;

    // Basic validation
    if (!name.trim() || !email.trim()) {
      setError("Please fill in both name and email.");
      return;
    }

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appE4Zp5qd5mFgNPy/vvf_waitlist",
        {
          method : "POST",
          headers : {
            Authorization: 'Bearer patER9IB8nZu8qgcf.093d1d88142d3f4e2aa51256ec34a1a7c28cc06632973cc71a068934e7230a47',
            "Content-Type" : "application/json",
          },
          body : JSON.stringify({
            records : [
              {
                fields : {
                  "name" : formData.name,
                  "email" : formData.email
                }
              },
            ],
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      setSubmitted(true);
    } catch (error){
      console.error(error);
      alert("Submitssion Failed, Please Contact Admin"); 
    }
    // Simulate API call or backend submission here
    // For now just show success message
  };

  if (submitted) {
    return (
      <div className="bg-green-50 py-16 text-center px-4">
        <h2 className="mt-4 text-lg text-gray-600" >Thank you for joining the waitlist, {formData.name}!</h2>
        <p>We will notify you via email at {formData.email}.</p>
      </div>
    );
  }

  return (
    <form className="bg-green-50 py-16 text-center px-4" onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2 className="mt-4 text-lg text-gray-600" >{t("vvf_waitlist_form_label")}</h2>

      <label htmlFor="name" style={{ display: "block", marginBottom: 4 }}>
        {t("vvf_waitlist_form_name")}
      </label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name / नाम"
        style={{ width: "100%", padding: 8, marginBottom: 12 }}
      />

      <label htmlFor="email" style={{ display: "block", marginBottom: 4 }}>
        {t("vvf_waitlist_form_email")}
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email / ईमेल"
        style={{ width: "100%", padding: 8, marginBottom: 12 }}
      />

      {error && (
        <div style={{ color: "red", marginBottom: 12 }}>{error}</div>
      )}

      <button className="px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50" type="submit" style={{ padding: "10px 20px" }}>
        {t("vvf_CTA_waitlist_button")}
      </button>
    </form>
  );
}

export default Waitlist;
