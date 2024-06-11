import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchClients } from "../services/clientService";

const SearchClient = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await searchClients(term);
    setResults(data);
  };

  return (
    <div>
      <h2>Search Clients</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            minLength={3}
            placeholder="Search by id, name, CIN, email"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2 me-2">
          Search
        </button>
        <button
          type="secondary"
          className="btn btn-secondary mt-2"
          onClick={() => navigate("/")}
        >
          Go to home
        </button>
      </form>
      {results.length > 0 && (
        <table className="table table-bordered mt-2">
          <thead>
            <tr>
              <th>Sr</th>
              <th>Name</th>
              <th>CIN</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results?.map(({ _source: client }, i) => {
              return (
                <tr key={"clientResults" + client.cin}>
                  <td>{i + 1}</td>
                  <td>
                    <Link to={`/clients/${client.cin}`}>{client.name}</Link>
                  </td>
                  <td>{client.cin}</td>
                  <td>{client.email}</td>
                  <td>
                    <div className="d-flex">
                      <Link
                        to={`/clients/edit/${client.cin}`}
                        className="btn btn-sm btn-warning me-2"
                      >
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchClient;
