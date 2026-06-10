function HeroSection() {
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>
        New Fashion Collection
      </h1>

      <p style={{ fontSize: "22px" }}>
        Discover trendy outfits for everyone
      </p>

      <button
        style={{
          padding: "12px 25px",
          background: "black",
          color: "white",
          border: "none",
          marginTop: "20px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default HeroSection