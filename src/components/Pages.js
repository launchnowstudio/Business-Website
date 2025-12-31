function Pages() {
  return (
    <section className="pages-section">
      <h2>Pages Included in Your Website</h2>

      <div className="pages-grid">
        <div className="page-card">
          <h3>Home Page</h3>
          <p>First impression that introduces your business and converts visitors.</p>
        </div>

        <div className="page-card">
          <h3>About Page</h3>
          <p>Build trust by sharing your story, values, and experience.</p>
        </div>

        <div className="page-card">
          <h3>Services Page</h3>
          <p>Clearly explain what you offer in a way customers understand.</p>
        </div>

        <div className="page-card">
          <h3>Contact Page</h3>
          <p>Make it easy for customers to reach you quickly.</p>
        </div>

        <div className="page-card">
          <h3>Optional Page</h3>
          <p>Gallery, pricing, booking, or anything your business needs.</p>
        </div>
      </div>
    </section>
  );
}

export default Pages;
