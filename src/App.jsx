import { useState } from "react";
import Header from "./Header";
import Result from "./Result";
// import Search from "./Search";
import Geolocation from "./Geolocation";
import Radius from "./Radius";

const App = () => {

  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const [radius, setRadius] = useState(1)

  return (
    <>
      <Header />
      <Geolocation setLatitude={setLatitude} setLongitude={setLongitude}/>
      <Radius setRadius={setRadius}/>
      {/* <Search /> */}
      <Result latitude={latitude} longitude={longitude} radius={radius}/>
    </>
  );
};

export default App;
