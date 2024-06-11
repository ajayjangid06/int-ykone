import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getClient } from "../services/clientService";

const ClientDetail = () => {
  const { cin } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    loadClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cin]);

  const loadClient = async () => {
    const data = await getClient(cin);
    setClient(data);
  };

  if (!client) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Client Detail</h2>
      <p>
        <strong>Name:</strong> {client.name}
      </p>
      <p>
        <strong>Email:</strong> {client.email}
      </p>
      <p>
        <strong>CIN:</strong> {client.cin}
      </p>
      <p>
        <strong>PIN:</strong> {client.pin}
      </p>
      <Link to="/" className="btn btn-secondary">
        Back
      </Link>
    </div>
  );
};

export default ClientDetail;
