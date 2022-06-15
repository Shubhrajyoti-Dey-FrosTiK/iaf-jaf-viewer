import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button, Tabs, Tab } from "react-bootstrap";
import { loggedIn, info } from "../App";
import Block from "../components/blocks";
import axios from "axios";
import Info from "../components/Info";

function HomeScreen() {
  const [login, setLogin] = useContext(loggedIn);
  const [details, setDetails] = useContext(info);
  const [key, setKey] = useState("Internship");
  const [iafs, setIafs] = useState([]);
  const [jafs, setJafs] = useState([]);
  const [companyData, setCompanyData] = useState(undefined);

  const fetchData = async () => {
    const iafData = await axios.get(import.meta.env.VITE_FETCH_URL + "/iaf");
    setIafs(iafData.data.data);
    const jafData = await axios.get(import.meta.env.VITE_FETCH_URL + "/jaf");
    setJafs(jafData.data.data);
  };

  useEffect(() => {
    console.log("Hi");
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      <div style={{ margin: "auto" }}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "40px",
            marginBottom: "40px",
            fontWeight: "800",
          }}
        >
          IAF JAF IIT BHU
        </h1>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="Internship" title="Internship">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div
                style={{
                  maxHeight: "75vh",
                  overflow: "scroll",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                {iafs.map((iaf, index) => {
                  return <Block iaf key={`IAF_${index}`} data={iaf} />;
                })}
              </div>
              <div
                style={{
                  maxHeight: "75vh",
                  overflow: "scroll",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <Info data={details} type="Internship" />
              </div>
            </div>
          </Tab>
          <Tab eventKey="Job" title="Job">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div
                style={{
                  maxHeight: "75vh",
                  overflow: "scroll",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                {jafs.map((jaf, index) => {
                  return <Block jaf key={`JAF_${index}`} data={jaf} />;
                })}
              </div>
              <div
                style={{
                  maxHeight: "75vh",
                  overflow: "scroll",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  display: "flex",
                }}
              >
                <Info data={details} type="Job" />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default HomeScreen;
