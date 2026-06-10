function ProductGrid() {
  const products = [
    {
      name: "Black Hoodie",
      price: "$40",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1887&auto=format&fit=crop",
    },

    {
      name: "White Shoes",
      price: "$60",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1770&auto=format&fit=crop",
    },

    {
      name: "Stylish Jacket",
      price: "$80",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1887&auto=format&fit=crop",
    },
  ];

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ textAlign: "center" }}>
        Trending Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src={item.image}
              alt=""
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>

              <button
                style={{
                  padding: "10px 20px",
                  background: "black",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;