import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";

function Book() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{ fontFamily: "Poppins", textTransform: "uppercase" }}
        >
          Book Your Tour
        </h2>

        <div className="row g-4">
          {[ 
            { title: "Gateway of India", image: img1 },
            { title: "Red Fort", image: img2 },
            { title: "Taj Mahal", image: img3 },
          ].map((place, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm h-100 border-0">
                <img
                  src={place.image}
                  className="card-img-top"
                  alt={place.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{place.title}</h5>
                  <p className="card-text text-muted">
                    Discover the beauty and history of this iconic destination.
                  </p>
                  <button className="btn btn-dark px-4">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Book;
