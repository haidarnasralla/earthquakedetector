import { useEffect, useState } from "react";

const Geolocation = ({setLatitude, setLongitude}) => {

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    })
}

export default Geolocation