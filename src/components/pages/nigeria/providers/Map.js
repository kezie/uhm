import React, { useMemo, useCallback, useEffect, useRef, useState } from "react";
import { GoogleMap, Marker, MarkerF, useLoadScript } from "@react-google-maps/api";
import { setKey, fromAddress } from "react-geocode";
import Places from "./places";
import { uhms_providers } from "./Data";
import './style.css'
import icon from '../../../../images/logo.png'
import { state } from "./states";
import { Link } from "react-router-dom";

const Map = () => {
  const providers = uhms_providers.dataroot.uhms_providers;

  const [selected, setSelected] = useState();
  const [markers, setMarkers] = useState([]);
  const [filteredProvider, setFilteredProvider] = useState(providers);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedState, setSelectedState] = useState("");


  setKey("AIzaSyAOTw943JRw0CePJ15vhxPxsJzVBUKERBk");

  const mapRef = useRef();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCdgDJ1e4fsDqu1jxDXhrWVuUYnX-TtXIA",
  });

  const center = useMemo(() => ({ lat: 9.0765, lng: 7.3986 }), []);
  const options = useMemo(() => ({}), []);

  const onLoad = useCallback((map) => (mapRef.current = map), []);


  const filterByCategory = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedCategory) {
      return filteredData;
    }
  
    const filteredProvider = filteredData.filter(
      (provider) => provider.Category.indexOf(selectedCategory) !== -1
    );
    return filteredProvider;
  };

  const filterByHospital = (event) => {
    // Name search query
    const query = event.target.value;

    // Get all employees
    var updatedList = [...providers];

    // Filter employee names by search query
    updatedList = updatedList.filter((provider) => {
      return provider.Health_Care_Provider.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    // Trigger render with updated values
    setFilteredProvider(updatedList);
    
  };

  const filterByState = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedState) {
      return filteredData;
    }
  
    const filteredProvider = filteredData.filter(
      (provider) => provider.State.indexOf(selectedState) !== -1
    );
    return filteredProvider;
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };


  useEffect(() => {
    var filteredData = filterByCategory(providers);
    filteredData = filterByState(filteredData);
    setFilteredProvider(filteredData);
  }, 
  [selectedCategory, selectedState]);


  useEffect(() => {
    const fetchGeocode = async () => {
      const newMarkers = [];

      for (const add of providers) {
        try {
          const { results } = await fromAddress(`${add.Address}`);
          const { lat, lng } = results[0]?.geometry.location;
          const address = { lat, lng };

          if ("status" !== "ZERO_RESULTS") {
            newMarkers.push({
              h_address:add.Address,
              position: address,
              name: add.Health_Care_Provider, // You can use other properties from your data
            });
          }
        } catch (error) {
          console.error(error);
        }
      }

      setMarkers(newMarkers);
    };

    fetchGeocode();
  }, [providers]);

  return (
    <div className="">
      {!isLoaded ? (
        <h4 className="p-3">Loading...</h4>
      ) : (
        <div className="row">
          <div className="col-lg-3 bg-dark">
            <div className="container pt-4">
                <input placeholder="Search hospital..." onChange={filterByHospital}/>
            </div>
            <div className="container pt-3">
              {selected ? (
                <>
                  <h1 className="text-light" style={{fontSize:12}}>{selected.name}</h1>
                  <p>{selected.h_address}</p>
                </>) : ''
              }
              <div className="brand-filter">
                <div>Filter by Category :</div>
                <select
                  id="brand-input"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">All</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>

              <div>Filter by State</div>
              <div id="year-options" onClick={handleStateChange}>
                <select
                    id="brand-input"
                    value={selectedState}
                    onChange={handleStateChange}
                  >
                    <option value="">All</option>
                    {
                      state.map((st)=>(
                        <option value={st}>{st}</option>
                      ))
                    }
                  </select>
              </div>

              {
                filteredProvider.map((provider)=>(
                  <Link onClick={()=>setSelected({name:provider.name, h_address: provider.Address})}>{provider.Health_Care_Provider}</Link>
                ))
              }
              
            </div>
          </div>
          <div className="col-lg-9">
            <GoogleMap
              googleMapsApiKey="AIzaSyCdgDJ1e4fsDqu1jxDXhrWVuUYnX-TtXIA"
              mapContainerClassName="map-container"
              center={center}
              zoom={7}
              options={options}
              onLoad={onLoad}
              style={{height:100, width:100}}
            >
              {markers.map((marker, index) => (
                <MarkerF
                  key={index}
                  position={marker.position}
                  title={marker.name}
                  icon={{
                    url:icon,
                    scaledSize: new window.google.maps.Size(40, 40),
                  }}
                  onMouseOver={() => {
                    console.log(`Hovered over ${marker.name} ${marker.h_address}`);
                  }}
                  onClick={()=>{
                    setSelected({name:marker.name, h_address: marker.h_address})
                    mapRef.current?.panTo(marker.position)
                  }}
                />
              ))}
            </GoogleMap>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
