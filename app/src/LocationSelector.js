import { useState, useEffect } from "react";


// Location selector component
function LocationSelector() {

    //state variables
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSeletedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");


    const [countryData, setCountryData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [cityData, setCityData] = useState([]);

    


    // useeffect to fetch the countries data
    useEffect(() => {
        fetch("https://crio-location-selector.onrender.com/countries")
        .then(data => data.json())
        .then(data => setCountryData(data))
        .catch(error => console.error("Error while fetching : ", error))
    }, [])
    //  console.log("country >> ", countryData)

    // useeffect to fetch the states data
    useEffect(() => {

        //if country is updated with valid value, clear selected state and city, and fetch respective states 
        if(selectedCountry) {

            console.log("selected country >>", selectedCountry);

            fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/states`)
            .then(data => data.json())
            .then((data) => {
               setStateData(data);
            })
            .catch(error => console.error("Error while fetching : ", error))
            setSeletedState("");
            setSelectedCity("");
        }

    }, [selectedCountry])
    // console.log("state >> ", stateData)
    


    // useeffect to fetch the cities data
    useEffect(() => {

        if (selectedCountry && selectedState){
            fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`)
            .then(data => data.json())
            .then(data => setCityData(data))
            .catch(error => {
                console.error("Error while fetching : ", error);
                setCityData([]);
            })
            setSelectedCity("");
        }

    }, [selectedCountry, selectedState])


    return (<div 
    style={{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
    }}
    >
        <h1>Select Location</h1>

        <div>
        <select 
        onChange={(e) => {
            setSelectedCountry(e.target.value);
        }}
        name="Countries"> 
            <option value="">Select Country</option>
            {
                countryData.map((country) => <option key={country} value={country} >{country}</option> )
            }
        </select>

        <select 
        onChange={(e) => {
            setSeletedState(e.target.value);
        }}
        name="States" disabled={selectedCountry==="" ? true : null} > 
            <option value="">Select State</option>
            {
                stateData.map((state) => <option key={state} value={state} >{state}</option>)
            }
        </select>

        <select 
        onChange={(e) => {
            setSelectedCity(e.target.value);
        }}
        name="Cities" disabled={(selectedState==="") ? true : null} > 
            <option value="">Select City</option>
            {
                cityData.map((city) => <option key={city} value={city} >{city}</option>)
            }
        </select>
        </div>

        {/* Conditional render */}
        {
            selectedCity && <h3>You selected <span style={{fontSize : "2rem"}}>{selectedCountry}</span>, <span style={{fontSize : "1.5rem", color : "grey"}} >{selectedState}</span>, <span style={{fontSize : "1rem", color : "grey"}} >{selectedCity}</span></h3>
        }

        

    </div>)
}

export default LocationSelector;