import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { HomePage } from "./pages/HomePage";
import { DetailsPage } from "./pages/DetailsPage";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
