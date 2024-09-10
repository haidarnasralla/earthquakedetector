import { useEffect, useState } from "react";

const Result = ({latitude, longitude, radius}) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    setIsLoading(true)

    fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${latitude}&longitude=${longitude}&maxradiuskm=${radius}`
    )
      .then((result) => {
        return result.json();
      })
      .then(({ features }) => {
        setIsLoading(false)
        setResult(features);
        console.log(features)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [latitude, longitude, radius]);

  if (isLoading){
    return <p>loading...</p>
  }

  const isEarthquakeHappening = result.length > 0;

  return <>{isEarthquakeHappening ? <p>yes! omfg get off the internet</p> : <p>no</p>}</>;
};

export default Result;

// blank https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude={latitude}&longitude={longitude}&maxradius=0.5
// true https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=22.473&longitude=121.843&maxradius=0.5
// false https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=51.5074&longitude=-0.1278&maxradius=0.5
