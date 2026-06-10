function Shop() {
  const products = [
    {
      name: "Classic White Shirt",
      price: "₹799",
      img: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    },
    {
      name: "Blue Denim Jeans",
      price: "₹1299",
      img: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    },
    {
      name: "Stylish Sneakers",
      price: "₹1999",
      img: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    },
    {
      name: "Black Hoodie",
      price: "₹999",
      img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
    },
  ];

  return (
    <div style={styles.container}>

      <h1>🛍️ Fashion Shop</h1>
      <p>Trendy Clothing Collection</p>

      <div style={styles.grid}>
        {products.map((item, i) => (
          <div key={i} style={styles.card}>
            <img src={item.img} alt={item.name} style={styles.img} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button style={styles.btn}>Buy Now</button>
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    width: "200px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    background: "white",
  },
  img: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  btn: {
    background: "black",
    color: "white",
    padding: "8px 12px",
    border: "none",
    marginTop: "5px",
    cursor: "pointer",
  },
};

export default Shop;