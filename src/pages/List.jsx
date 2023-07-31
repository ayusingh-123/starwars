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
import Fetchname from "../components/Fetchname";
function List(props) {
  const [films, setFilms] = useState([]);
  const [send, setSend] = useState(false);
  const [dong, setDong] = useState(null);
  const [loading, setLoading] = useState(true);

  const clickOnImage = (id) => {
    setSend(!send);
    setDong(id);
    console.log(id);
  };

  useEffect(() => {
    // Fetch data when the component mounts
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
  }, [props.value]);

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
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Director</th>
                  <th>Release Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {films.map((item, index) => (
                  <tr key={index} onClick={() => clickOnImage(item)}>
                    <td style={{ display: "flex", justifyContent: "left" }}>
                      <PiFilmReelLight size={22} /> &nbsp;
                      {item.title}
                    </td>
                    <td>{item.director}</td>
                    <td>{item.release_date}</td>
                    <td>
                      <BsThreeDotsVertical />
                    </td>
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "people":
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Birthdate</th>
                  <th>Species</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {films.map((item, index) => (
                  <tr key={index} onClick={() => clickOnImage(item)}>
                    <td style={{ display: "flex", justifyContent: "left" }}>
                      <TbUsers size={22} /> &nbsp;
                      {item.name}
                    </td>
                    <td>{item.birth_year}</td>
                    <td>
                      {<Fetchname url={item.species} target={props.value} />}
                    </td>

                    <td>
                      <BsThreeDotsVertical />
                    </td>
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        break;
      case "planets":
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Climate</th>
                  <th>Gravity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {films.map((item, index) => (
                  <tr key={index} onClick={() => clickOnImage(item)}>
                    <td style={{ display: "flex", justifyContent: "left" }}>
                      <PiPlanetBold size={22} /> &nbsp;
                      {item.name}
                    </td>
                    <td>{item.climate}</td>
                    <td>{item.gravity}</td>
                    <td>
                      <BsThreeDotsVertical />
                    </td>
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        break;
      case "species":
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Homeworld</th>
                  <th>Lifespan</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {films.map((item, index) => (
                  <tr key={index} onClick={() => clickOnImage(item)}>
                    <td style={{ display: "flex", justifyContent: "left" }}>
                      <PiAlien size={22} /> &nbsp;
                      {item.name}
                    </td>
                    <td>
                      {<Fetchname url={item.homeworld} target={props.value} />}
                    </td>
                    <td>{item.average_lifespan}</td>
                    <td>
                      <BsThreeDotsVertical />
                    </td>
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        break;
      case "starships":
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Rating</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {films.map((item, index) => (
                  <tr key={index} onClick={() => clickOnImage(item)}>
                    <td style={{ display: "flex", justifyContent: "left" }}>
                      <PiRocketLaunch size={22} /> &nbsp;
                      {item.name}
                    </td>
                    <td>{item.model}</td>
                    <td>{item.hyperdrive_rating}</td>
                    <td>
                      <BsThreeDotsVertical />
                    </td>
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        break;
      case "vehicles":
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Model</th>
                  <th>TopSpeed</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {films.map((item, index) => (
                  <tr key={index} onClick={() => clickOnImage(item)}>
                    <td style={{ display: "flex", justifyContent: "left" }}>
                      <PiCarProfile size={22} /> &nbsp;
                      {item.name}
                    </td>
                    <td>{item.model}</td>
                    <td>{item.max_atmosphering_speed}</td>
                    <td>
                      <BsThreeDotsVertical />
                    </td>
                    {send ? <Slidebar dong={[dong]} /> : ""}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        break;
      default:
        return <div>Invalid category</div>;
    }
  };

  return <div>{renderTable()}</div>;
}

export default List;
