import React, { useEffect, useRef, useState } from "react";
import { uhms_providers } from "./Data";
import icon from '../../../../images/marker.png'
import { state } from "./states";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { Popup as  Pop } from 'reactjs-popup'


const Map = () => {
  const providers = uhms_providers.dataroot.uhms_providers;
  const [filteredProvider, setFilteredProvider] = useState(providers);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const mapRef = useRef(null);

  const panToMarker = (lat, lng)=>{
    mapRef.current.flyTo([lat,lng], 12)
  }

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

    // Get all providers
    var updatedList = [...providers];

    // Filter provider by search query
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

  const customIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="">
      <div className="row">
        <div className="col-lg-3 bg-dark" style={{height:'100vh', overflow:'scroll'}}>
          <div className="container pt-3">
            <div className="pt-4">
              <input className="form-control" placeholder="Search hospital..." onChange={filterByHospital}/>
            </div>
            <div className="brand-filter pt-2">
              <div className="text-light">Filter by Category :</div>
              <select
                id="brand-input"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="form-control"
              >
                <option value="">All</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>

            <div className="pt-2 text-light">Filter by State : </div>
            <div onClick={handleStateChange}>
              <select
                  value={selectedState}
                  onChange={handleStateChange}
                  className="form-control mb-4"
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
              filteredProvider.length > 0 ? (filteredProvider.map((provider)=>(
                  <Pop
                    trigger={
                      <p type="button" className="button" style={{color:'#ebeee6', cursor:'pointer'}}>
                        <span onClick={() => panToMarker(provider.lat, provider.lng)}>
                          {provider.Health_Care_Provider}
                        </span>
                      </p>
                    }
                    
                    position={['right center']}
                  >
                    <div className="p-3" style={{backgroundColor:'#ebeee6'}}>
                      <h1 style={{fontSize:14}}>
                        {provider.Health_Care_Provider}
                      </h1>
                      <p style={{color:'#8cbd53'}}>
                        {provider.State} State, Category: {provider.Category}
                      </p>
                      <Link style={{color:'#8cbd53'}} to= {`https://www.google.com/maps/dir/?api=1&destination=${provider.lat},${provider.lng}`} target="_blank">Get Direction</Link>
                    </div>
                  </Pop>
              ))): 'No Providers found'
            }
          </div>
        </div>
        <div className="col-lg-9">
        <MapContainer
          center={[9.0765, 7.3986]}
          zoom={7}
          style={{ width: '100%', height: '100vh' }}
          scrollWheelZoom = {false}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {providers.map((provider) => (
            <Marker
              key={provider.id}
              position={[provider.lat, provider.lng]}
              icon={customIcon}
              eventHandlers={{
                click: () => panToMarker(provider.lat, provider.lng),
              }}
            >
              <Popup>
                <h1 style={{fontSize:14}}>
                  {provider.Health_Care_Provider}
                </h1>
                <p>
                  {provider.State} State, Category: {provider.Category}
                </p>
                <Link to= {`https://www.google.com/maps/dir/?api=1&destination=${provider.lat},${provider.lng}`} target="_blank">Get Direction</Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
