function WhatsAppButton() {
  const whatsappNumber = "919392663590"; // 🔴 CHANGE THIS

  const message = "Hello, I’m interested in your services.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </a>
  );
}

export default WhatsAppButton;
