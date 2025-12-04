import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.target);

    // FormSubmit API (NO REDIRECT)
    await fetch("https://formsubmit.co/ajax/muhaiminislam05@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setSuccess(true);
        e.target.reset(); // clear form
      })
      .catch(() => {
        alert("Something went wrong. Try again!");
      });

    setLoading(false);
  };

  return (
    <div id="contact" className="max-w-3xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center"
      >
        Get in touch
      </motion.h1>

      <p className="mt-4 text-center text-slate-600 text-lg">
        Have a question or project idea? Send us a message — we reply within 24 hours.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <div>
          <label className="text-sm text-slate-600">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 border rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="text-sm text-slate-600">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 border rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="text-sm text-slate-600">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full mt-1 border rounded-lg px-4 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full py-3 bg-accent text-white font-semibold rounded-lg shadow transition cursor-pointer ${
            loading ? "opacity-70" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-600 font-medium text-center mt-3">
            Message sent successfully!
          </p>
        )}
      </motion.form>
    </div>
  );
}
