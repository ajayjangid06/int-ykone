import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientList from "./components/ClientList";
import ClientForm from "./components/ClientForm";
import ClientDetail from "./components/ClientDetail";
import SearchClient from "./components/SearchClient";

function App() {
  return (
    <div className="container mt-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ClientList />} />
          <Route path="/clients/new" element={<ClientForm />} />
          <Route path="/clients/edit/:cin" element={<ClientForm />} />
          <Route path="/clients/:cin" element={<ClientDetail />} />
          <Route path="/search" element={<SearchClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
