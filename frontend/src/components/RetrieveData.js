import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = "https://makemyplanapp2.onrender.com/";

export default function RetrieveData(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${baseURL}`).then((response) => {
            setData(response.data);
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseURL}${id}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    return (
        <div>
            <h2>Retrieve Data</h2>
            <div className="row">
                {data.map((item) => (
                    <div className="col-md-4 mb-4" key={item._id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">
                                    Email: {item.email}
                                    <br />
                                    Destination: {item.destination}
                                    <br />
                                    Travelers: {item.travelers}
                                    <br />
                                    Budget: {item.budget}
                                </p>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

