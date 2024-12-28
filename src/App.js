import React, { useEffect, useState } from "react";
import issueImg5 from "./assets/backstagetalks_cover_issue_5.png";
import issueImg1 from "./assets/backstagetalks_cover2016_n.png";
import issueImg2 from "./assets/backstagetalks_cover2017.png";
import issueImg3 from "./assets/backstagetalks_cover_issue_3.png";
import issueImg4 from "./assets/backstagetalks_cover_issue_4.png";
import issueImg6 from "./assets/backstagetalks_cover_issue_6.png";
import issueImg7 from "./assets/backstagetalks_cover_issue_7.png";
import issueImg8 from "./assets/backstagetalks_cover_issue_8.png";

import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("cyan");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    document.querySelectorAll(".panel").forEach((panel) => {
      const panelTop = panel.offsetTop;
      const panelHeight = panel.offsetHeight;
  
      if (
        scrollPosition >= panelTop &&
        scrollPosition < panelTop + panelHeight
      ) {
        const color = panel.getAttribute("data-color");
        const id = panel.getAttribute("id");
        setBackgroundColor(color);
  
        if (id && window.location.hash !== `#${id}`) {
          window.history.replaceState(null, "", `#${id}`);
        }        
      }
    });
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`App color-${backgroundColor}`}>
      <span className="panelTitle" data-color="cyan">
        BACKSTAGE TALKS
      </span>
      <div className="panel" data-color="cyan" id="issue5">
        <div>
          <img src={issueImg5} alt="issue" className="imgCard" />
        </div>
      </div>
      <div className="panel" data-color="blue" id="issue2">
        <div>
          <img src={issueImg2} alt="issue" className="imgCard" />
        </div>
      </div>
      <div className="panel" data-color="yellow" id="issue3">
        <div>
          <img src={issueImg3} alt="issue" className="imgCard" />
        </div>
      </div>
      <div className="panel" data-color="orange" id="issue4">
        <div>
          <img src={issueImg4} alt="issue" className="imgCard" />
        </div>
      </div>
      <div className="panel" data-color="red" id="issue1">
        <div>
          <img src={issueImg1} alt="issue" className="imgCard" />
        </div>
      </div>
      
      <div className="panel" data-color="white" id="issue6">
        <div>
          <img src={issueImg6} alt="issue" className="imgCard" />
        </div>
      </div>
      <div className="panel" data-color="pink" id="issue7">
        <div>
          <img src={issueImg7} alt="issue" className="imgCard" />
        </div>
      </div>
      <div className="panel" data-color="cream" id="issue8">
        <div>
          <img src={issueImg8} alt="issue" className="imgCard" />
        </div>
      </div>
    </div>
  );
}

export default App;
