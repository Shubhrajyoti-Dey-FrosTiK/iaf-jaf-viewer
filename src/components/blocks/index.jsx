import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataType, info } from "../../App";

function Block({ data, iaf, jaf }) {
  let navigate = useNavigate();
  const [contextInfo, setContextInfo] = useContext(info);
  const [contextDataType, setContextDataType] = useContext(dataType);

  function handleClick(event) {
    event.preventDefault();
    setContextInfo(data);
    if (iaf) setContextDataType("IAF");
    if (jaf) setContextDataType("JAF");
    console.log(data);
  }

  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        marginTop: "20px",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      <div>
        <p style={{ margin: "0px" }}>
          <b>Company Name :</b>{" "}
        </p>
        <p style={{ margin: "0px" }}>{data.data["Name of the company"]}</p>
      </div>
      <div>
        <p style={{ margin: "0px" }}>
          <b>Timestamp :</b>{" "}
        </p>
        <p style={{ margin: "0px" }}>{data.createdAt}</p>
      </div>
    </div>
  );
}

export default Block;
