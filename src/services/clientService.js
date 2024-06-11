import axios from "axios";

const API_URL = "http://localhost:4000/api/clients";

export const getClients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getClient = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const createClient = async (client) => {
  try {
    const response = await axios.post(API_URL, client);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateClient = async (id, client) => {
  try {
    const response = await axios.post(`${API_URL}/${id}`, client);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteClient = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const searchClients = async (term) => {
  try {
    const response = await axios.get(`${API_URL}Search?q=${term}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  if (error.response) {
    console.error("Server Error:", error.response.data);
    alert(`Error: ${error.response.data.message || error.response.statusText}`);
  } else if (error.request) {
    console.error("Network Error:", error.request);
    alert("Network error.");
  } else {
    console.error("Error:", error.message);
    alert(`Error: ${error.message}`);
  }
};
