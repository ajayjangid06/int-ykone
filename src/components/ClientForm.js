import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createClient,
  getClient,
  updateClient,
} from "../services/clientService";
import { validateFields } from "../utils/helper";

const ClientForm = () => {
  const [client, setClient] = useState({
    name: "",
    email: "",
    cin: "",
    pin: "",
  });
  const { cin } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (cin) {
      loadClient();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cin]);

  const loadClient = async () => {
    const data = await getClient(cin);
    setClient(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFields(client.cin, client.pin, client.email)) {
      if (cin) {
        await updateClient(cin, client).then(() => {
          navigate("/");
        });
      } else {
        await createClient(client).then(() => {
          navigate("/");
        });
      }
    }
  };

  return (
    <div>
      <h2>{cin ? "Edit Client" : "Add Client"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={client.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={client.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label>CIN</label>
          <input
            type="text"
            className="form-control"
            name="cin"
            minLength={21}
            maxLength={21}
            disabled={cin}
            value={client.cin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label>PIN</label>
          <input
            type="text"
            className="form-control"
            name="pin"
            minLength={6}
            maxLength={6}
            value={client.pin}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
