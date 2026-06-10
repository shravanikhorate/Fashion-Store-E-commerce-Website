function About() {
  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <div style={styles.hero}>
        <h1>About Fashion Store 🛍️</h1>
        <p>Trendy | Stylish | Affordable Fashion for Everyone</p>
      </div>

      {/* IMAGE SECTION */}
      <div style={styles.imageBox}>
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322"
          alt="fashion"
          style={styles.image}
        />
      </div>

      {/* CONTENT SECTION */}
      <div style={styles.content}>
        <h2>Who We Are</h2>
        <p>
          Fashion Store is a modern online clothing brand offering stylish,
          high-quality fashion products for men, women, and kids at affordable prices.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to make fashion simple, trendy, and accessible for everyone.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Premium Quality Products</li>
          <li>✔ Affordable Prices</li>
          <li>✔ Latest Fashion Trends</li>
          <li>✔ Fast Service</li>
        </ul>
      </div>

    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  hero: {
    background: "linear-gradient(to right, #111, #444)",
    color: "white",
    padding: "40px",
    borderRadius: "10px",
  },
  imageBox: {
    marginTop: "20px",
  },
  image: {
    width: "90%",
    borderRadius: "15px",
  },
  content: {
    textAlign: "left",
    maxWidth: "700px",
    margin: "auto",
    marginTop: "20px",
    lineHeight: "1.6",
  },
};

export default About;