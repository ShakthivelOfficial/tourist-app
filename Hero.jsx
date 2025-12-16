import img from "./assets/hero.jpeg";

function Hero() {
  return (
    <div
      className="container-fluid p-0"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
   
      <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: "4rem",
              fontFamily: "Poppins",
              textTransform: "uppercase",
              maxWidth: "800px",
              margin: "0 auto 1.5rem",
              color: "#fff",
            }}
          >
            Welcome to our tour site
          </h1>

          <p
            className="lead"
            style={{
              maxWidth: "700px",
              margin: "0 auto 2rem",
              color: "#e5e5e5",
            }}
          >
            Explore the world with us. Discover new places, cultures, and
            adventures. Your journey starts here!
          </p>

          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary btn-lg px-4">
              Explore Tours
            </button>
            <button className="btn btn-outline-light btn-lg px-4">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
