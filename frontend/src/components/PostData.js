import React, { useState } from "react";
import axios from "axios";

const baseURL = "https://makemyplanapp2.onrender.com/";

export default function PostData() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [travelers, setTravelers] = useState("");
    const [budget, setBudget] = useState("");
    const [destination, setDestination] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post(baseURL, {
                name,
                email,
                travelers: parseInt(travelers),
                budget: parseInt(budget),
                destination,
            })
            .then((response) => {
                alert('Data submitted successfully')
                setName("");
                setEmail("");
                setTravelers("");
                setBudget("");
                setDestination("");
            })
            .catch((error) => {
                console.error("Error submitting data:", error);
            });
    };

    return (
        <form>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputName3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputName3" value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputTravel3" className="col-sm-2 col-form-label">No. of travelers</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" id="inputTravel3" value={travelers}
                        onChange={(e) => setTravelers(e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputBudget3" className="col-sm-2 col-form-label">Budget Per Person</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" id="inputBudget3" value={budget}
                        onChange={(e) => setBudget(e.target.value)} />
                </div>
            </div>
            <select
                className="form-select"
                id="inputDestination3"
                aria-label="Floating label select example"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            >
                <option defaultValue={"none"}>Destination</option>
                <option value="india">India</option>
                <option value="africa">Africa</option>
                <option value="europe">Europe</option>
                <option value="america">America</option>
            </select>
            <button
                type="submit"
                className="btn btn-primary my-3"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </form>
    );
}
