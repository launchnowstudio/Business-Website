function Services() {
  const whatsappNumber = "919392663590"; // 🔴 CHANGE THIS

  const openWhatsApp = (service) => {
    const text = `Hello, I’m interested in your ${service} service.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>

      <div className="services-grid">
        <div className="service-card">
          <h3>Website Design</h3>
          <p>Clean and modern website designs tailored to your business.</p>
          <button onClick={() => openWhatsApp("Website Design")}>
            Enquire on WhatsApp
          </button>
        </div>

        <div className="service-card">
          <h3>Mobile Friendly Websites</h3>
          <p>Your website will look great on all devices.</p>
          <button onClick={() => openWhatsApp("Website Design")}>
            Enquire on WhatsApp
          </button>
        </div>

        <div className="service-card">
          <h3>Website Maintenance</h3>
          <p>We keep your website updated and secure.</p>
          <button onClick={() => openWhatsApp("Website Design")}>
            Enquire on WhatsApp
          </button>
        </div>
      </div>
          </section>
  );
}

export default Services;
