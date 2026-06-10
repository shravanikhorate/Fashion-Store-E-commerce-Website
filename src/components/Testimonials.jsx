function Testimonials() {
  const reviews = [
    {
      name: "Shravani",
      text: "Amazing quality and trendy outfits!",
    },

    {
      name: "Riya",
      text: "Best fashion website experience ever.",
    },

    {
      name: "Aarav",
      text: "Loved the collection and design.",
    },
  ];

  return (
    <div
      style={{
        padding: "50px",
        background: "#f5f5f5",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Customer Reviews
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {reviews.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;