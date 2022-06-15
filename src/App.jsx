import React, { useState, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";

export const loggedIn = createContext(false, () => {});
export const info = createContext({}, () => {});
export const dataType = createContext("", () => {});

function App() {
  const logged = useState(false);
  const data = useState({});
  const dataT = useState("");

  return (
    <React.Fragment>
      <loggedIn.Provider value={logged}>
        <info.Provider value={data}>
          <dataType.Provider value={dataT}>
            <BrowserRouter>
              {logged[0] ? (
                <Routes>
                  <Route path="*" element={<HomeScreen />} />
                </Routes>
              ) : (
                <Routes>
                  <Route path="/*" element={<Login />} />
                </Routes>
              )}
            </BrowserRouter>
          </dataType.Provider>
        </info.Provider>
      </loggedIn.Provider>
    </React.Fragment>
  );
}

export default App;
