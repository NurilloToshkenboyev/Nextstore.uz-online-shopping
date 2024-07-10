import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout/main-layout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
