import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  PiFilmReelLight,
  PiPlanetBold,
  PiAlien,
  PiRocketLaunch,
  PiCarProfile,
} from "react-icons/pi";
import { TbUsers } from "react-icons/tb";
import "../styles/films.css";
import Slidebar from "./Slidebar";
import Loader from "../components/Loader";
import Dropmenu from "../components/Dropmenu";

function Filmgrid(props) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true); // Track the loading status
  const [imageUrl, setImageUrl] = useState("");
  const [send, setSend] = useState(false);
  const [dong, setDong] = useState(null);
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState("");

  const clickOnImage = (id) => {
    setSend(!send);
    setDong(id);
    console.log(id);
  };

  const handleDrop = (index) => {
    setOpen(!open);
    setVal(index);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/${props.value}/`)
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error too
      });
  }, []);

  // Show the loader if loading is true
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const renderTable = () => {
    switch (props.value) {
      case "films":
        return (
          <div className="film-grid">
            {films.map((item, index) => (
              <div key={item.episode_id} className="film-item">
                <div class="mdl-grid">
                  <div class="mdl-card__media">
                    <img
                      src="https://wallpapercave.com/wp/wp6886279.jpg"
                      alt=""
                    />
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </div>

                  <div class="box123">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <PiFilmReelLight size={22} /> &emsp;
                      <div>{item.title}</div>
                    </div>

                    <div className="opt">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
    
              </div>
            ))}
          </div>
        );
      case "people":
        return (
          <div className="film-grid">
            {films.map((item, index) => (
              <div className="film-item">
                <div class="mdl-grid">
                  <div class="mdl-card__media">
                    <img
                      onClick={() => clickOnImage(item)}
                      src="https://picsum.photos/seed/picsum/600/300"
                      alt=""
                    />
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </div>

                  <div class="box123">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TbUsers size={22} /> &emsp;
                      <div>{item.name}</div>
                    </div>

                    <div className="opt">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case "planets":
        return (
          <div className="film-grid">
            {films.map((item, index) => (
              <div className="film-item">
                <div class="mdl-grid">
                  <div class="mdl-card__media">
                    <img
                      onClick={() => clickOnImage(item)}
                      src="https://wallpapercave.com/wp/wp6886279.jpg"
                      alt=""
                    />
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </div>

                  <div class="box123">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <PiPlanetBold size={22} /> &emsp;
                      <div>{item.name}</div>
                    </div>

                    <div className="opt">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case "species":
        return (
          <div className="film-grid">
            {films.map((item, index) => (
              <div className="film-item">
                <div class="mdl-grid">
                  <div class="mdl-card__media">
                    <img
                      onClick={() => clickOnImage(item)}
                      src="https://wallpapercave.com/wp/wp6886279.jpg"
                      alt=""
                    />
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </div>

                  <div class="box123">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <PiAlien size={22} /> &emsp;
                      <div>{item.name}</div>
                    </div>

                    <div className="opt">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case "starships":
        return (
          <div className="film-grid">
            {films.map((item, index) => (
              <div className="film-item">
                <div class="mdl-grid">
                  <div class="mdl-card__media">
                    <img
                      onClick={() => clickOnImage(item)}
                      src="https://wallpapercave.com/wp/wp6886279.jpg"
                      alt=""
                    />
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </div>

                  <div class="box123">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <PiRocketLaunch size={22} /> &emsp;
                      <div>{item.name}</div>
                    </div>

                    <div className="opt">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      case "vehicles":
        return (
          <div className="film-grid">
            {films.map((item, index) => (
              <div className="film-item">
                <div class="mdl-grid">
                  <div class="mdl-card__media">
                    <img
                      onClick={() => clickOnImage(item)}
                      src="https://wallpapercave.com/wp/wp6886279.jpg"
                      alt=""
                    />
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </div>

                  <div class="box123">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <PiCarProfile size={22} /> &emsp;
                      <div>{item.name}</div>
                    </div>

                    <div className="opt">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      default:
        return <div>Invalid category</div>;
    }
  };
  return <div>{renderTable()}</div>;
}

export default Filmgrid;
