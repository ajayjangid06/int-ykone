import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getClients, deleteClient } from "../services/clientService";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const data = await getClients();
    setClients(data);
  };

  const handleDelete = async (cin) => {
    await deleteClient(cin);
    loadClients();
  };

  return (
    <div>
      <h2>Clients</h2>
      <Link to="/clients/new" className="btn btn-primary mb-3 me-3">
        Add Client
      </Link>
      <Link to="/search" className="btn btn-secondary mb-3">
        Search Clients
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>CIN</th>
            <th>PIN</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients?.map((client, i) => (
            <tr key={"client" + client.cin}>
              <td>{i + 1}</td>
              <td>
                <Link to={`/clients/${client.cin}`}>{client.name}</Link>
              </td>
              <td>{client.cin}</td>
              <td>{client.pin}</td>
              <td>{client.email}</td>
              <td>
                <div className="d-flex">
                  <Link
                    to={`/clients/edit/${client.cin}`}
                    className="btn btn-sm btn-warning me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(client.cin)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
