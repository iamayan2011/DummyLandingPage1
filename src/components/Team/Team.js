import React from "react";
import team from "./team.png";
import "./Team.css";
import topright from "../../assets/banner/topright.png";

export default function Team() {
  return (
    <div className="parentteam" id='team'> 
      <div className="d-flex row">
        <div className="d-flex col-12 col-md-6 col-xl-4">
          <img src={team} alt="" className="teamcard" />
        </div>

        <div className="d-flex col-12 col-md-6 col-xl-4">
          <img src={team} alt="" className="teamcard" />
        </div>

        <div className="d-flex col-12 col-md-6 col-xl-4">
          <img src={team} alt="" className="teamcard" />
        </div>
      </div>

      <div>
        <div className="d-flex flex-row justify-content-center mt-4">
          <button className="btnbn" style={{ width: "auto" }}>
            VIEW ALL TEAM
          </button>
          <img
            src={topright}
            alt=""
            style={{ padding: "0px", width: "54px", height: "54px" }}
          />
        </div>
      </div>
    </div>
  );
}
