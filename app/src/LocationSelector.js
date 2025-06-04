import { useState, useEffect } from "react";


// Location selector component
function LocationSelector() {

    //state variables
    const [selected, setSelected] = useState({
      country : ""  ,
      state : "",
      city : ""
    })

    const [locationData, setLocationData] = useState({
        countries : [],
        states : [],
        cities : []
    })


    // useeffect to fetch the countries data
    useEffect(() => {
        fetch("https://crio-location-selector.onrender.com/countries")
        .then(data => data.json())
        .then(data => setLocationData({
            ...locationData,
            countries : data,
        }))
        .catch(error => console.error("Error while fetching : ", error))
    }, [])

    console.log("Countries >> ", locationData)


    return (<div>
        <h1>Select Location</h1>
        <select name="Countries"> 
            <option value="">Select Countries</option>
        </select>
    </div>)
}

export default LocationSelector;