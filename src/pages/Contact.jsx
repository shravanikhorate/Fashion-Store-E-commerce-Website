function Contact() {
  return (
    <div style={styles.container}>

      <h1>📞 Contact Us</h1>
      <p>We are always here to help you</p>

      <div style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea}></textarea>

        <button style={styles.btn}>Send Message</button>
      </div>

    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "auto",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    padding: "10px",
    height: "100px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  btn: {
    background: "black",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  },
};

export default Contact;