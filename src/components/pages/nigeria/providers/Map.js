import React, { useMemo, useCallback, useEffect, useRef, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { setKey, fromAddress } from "react-geocode";
import { uhms_providers } from "./Data";
import icon from '../../../../images/marker.png'
import { state } from "./states";
import { Link } from "react-router-dom";
import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css'
import { Button } from "react-bootstrap";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import {Icon} from 'leaflet'
import L from 'leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";


const Map = () => {
  const providers = uhms_providers.dataroot.uhms_providers;

  const [selected, setSelected] = useState();
  const [markers, setMarkers] = useState([]);
  const [filteredProvider, setFilteredProvider] = useState(providers);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const mapRef = useRef();

  const center = useMemo(() => ({ lat: 9.0765, lng: 7.3986 }), []);
  const options = useMemo(() => ({}), []);


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

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map', {
        center: [9.0765, 7.3986],
        zoom: 7,
        scrollWheelZoom: false, // Disable scroll wheel zoom
      });
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
  
      mapRef.current = map;
    }
  
    const geocodeAddress = async (address, callback) => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
        const data = await response.json();
  
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          callback([lat, lon]);
        }
      } catch (error) {
        console.error('Error fetching geocoding data', error);
      }
    };
  
    const customIcon = new L.Icon({
      iconUrl: icon,
      iconSize: [32, 32], // size of the icon
      iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
    });
    
  
    const uhmsProviders = providers
  
    uhmsProviders.forEach(provider => {
      geocodeAddress(provider.Address, (latlng) => {
        const marker = L.marker(latlng, { icon: customIcon }).addTo(mapRef.current);
        marker.bindPopup(`<b>${provider.Health_Care_Provider}</b><br>${provider.Address}`).openPopup();
      });
    });
  }, []);

  return (
    <div className="">
      <div className="row">
        <div className="col-lg-3 bg-dark" style={{height:'100vh', overflow:'scroll'}}>
          <div className="container pt-3">
            {selected ? (
              <div className="bg-light p-4" style={{position:"fixed", zIndex:1000, borderRadius:20, border:'2px solid #8cbd53'}}>
                <h1 className="" style={{fontSize:14}}><i className="fa fa-hospital"></i> PROVIDER: {selected.name}</h1>
                <h5 style={{fontSize:14}}> <i className="fa fa-map pt-2"></i> ADDRESS: {selected.h_address}</h5>
                <p> Category: {selected.category}</p> 
                <p> State: {selected.state}</p>
              </div>) : ''
            }
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
            <div id="year-options" onClick={handleStateChange}>
              <select
                  id="brand-input"
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
              filteredProvider.map((provider)=>(
                
                <Link onClick={()=>
                  setSelected({
                    name:provider.Health_Care_Provider, 
                    h_address: provider.Address, 
                    category:provider.Category,
                    state:provider.State
                  })
                }>{provider.Health_Care_Provider}</Link>
                
              ))
            }
          </div>
        </div>
        <div className="col-lg-9">
          <div id="map" style={{ height: '100vh' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Map;
