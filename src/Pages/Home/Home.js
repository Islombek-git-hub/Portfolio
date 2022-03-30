import { useSelector } from "react-redux";
import { BsFileEarmarkArrowDownFill } from "react-icons/bs";
import "./Home.css";
import NavLinks from "../../components/Navlinks/NavLinks";
import img from "./Islombek.webp";
const Home = () => {
  const lightValue = useSelector((state) => state.light);
  return (
    <div className={`home ${lightValue ? "day" : "night"}`}>
      <div className="container">
        <div className="img-box">
          <img className="home-img" src={img} alt="Islombek" />
        </div>
        <div className="home-text">
          <h3>Assalomu Alaykum, bu men</h3>
          <h1>
            <span className={!lightValue ? "day" : "night"}>Islombek</span>
            Oribjonov
          </h1>
          <p>front-end dasturchisi</p>
          <a href="./Oribjonov Islombek.pdf">
            <div
              className={`resume ${lightValue ? "resume-day" : "resume-night"}`}
            >
              <span>Rezyume</span>
              <span>
                <BsFileEarmarkArrowDownFill />
              </span>
            </div>
          </a>
        </div>
      </div>
      <NavLinks />
    </div>
  );
};

export default Home;
