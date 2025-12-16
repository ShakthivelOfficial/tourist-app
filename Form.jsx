import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        destination: "",
        date: "",
        people: 1,
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        alert("Tour booked successfully!");
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4" style={{ fontFamily: "Poppins", textTransform: "uppercase" }}>
                Book Your Tour
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input
                        type="text"
                        className="form-control"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="people" className="form-label">Number of People</label>
                    <input
                        type={"number"}
                        min={"1"}
                       value={formData.people}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Form;
