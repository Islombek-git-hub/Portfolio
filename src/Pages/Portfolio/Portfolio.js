import React from "react";
import { useSelector } from "react-redux";
import NavLinks from "../../components/Navlinks/NavLinks";
import portfolios from "./Portfolio.json";

import "./Portfolio.css";
const Portfolio = () => {
  const lightValue = useSelector((state) => state.light);
  return (
    <div className={`portfolio ${lightValue ? "day" : "night"}`}>
      <div className="container">
        <h1 className="title">Portfolio</h1>
        {/* <ul className="ul_portfolio">
          <li>
            <button>all</button>
          </li>
          <li>
            <button>JavaScript</button>
          </li>
          <li>
            <button>JQuery</button>
          </li>
          <li>
            <button>React js</button>
          </li>
          <li>
            <button>Next js</button>
          </li>
        </ul> */}
        <div className="box_portfolio">
          {portfolios.map((a, i) => {
            return (
              <div key={i + 1111} className="card_portfolio_site">
                <div className="card_img_ps">
                  <img src={a.img} alt={a.site_name} />
                </div>
                <div className="hover_ps">
                  <a href={a.url}>{a.site_name}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <NavLinks />
    </div>
  );
};

export default Portfolio;
