import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    service: "General Enquiry",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const whatsappNumber = "919392663590"; // your WhatsApp number
  const emailAddress = "studiolaunchnow@gmail.com"; // your email

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic spam / quality check
    if (form.message.length < 10) {
      alert("Please enter a more detailed message.");
      return;
    }

    setLoading(true);

    try {
      // IMPORTANT: form-urlencoded (NO JSON, NO headers)
      const params = new URLSearchParams(form);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzq6YOI6IatoWgwhbV7LRQdr541DBAYmbabA4V6geuG6OmbGJ-3CMS0KwzTCpQzd9wx/exec",
        {
          method: "POST",
          body: params,
        }
      );

      if (!res.ok) throw new Error("Request failed");

      setSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
      console.error(err);
    }

    setLoading(false);
  };

  const openWhatsApp = () => {
    const text = `Hello, my name is ${form.name}.
Email: ${form.email}

Message:
${form.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const sendEmail = () => {
    const subject = "Website Enquiry";
    const body = `Name: ${form.name}
Email: ${form.email}
Service: ${form.service}

Message:
${form.message}`;

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>

      {!submitted ? (
        <>
          <p>Tell us about your business and we’ll respond quickly.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </>
      ) : (
        <>
          <p className="submitted-message">
            ✅ Thanks! How would you like to continue?
          </p>

          <div className="contact-actions">
            <button onClick={openWhatsApp}>
              Continue on WhatsApp
            </button>

            <button className="email-btn" onClick={sendEmail}>
              Continue via Email
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Contact;
