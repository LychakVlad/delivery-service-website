import React, { useEffect, useState } from 'react';
import './Map.scss';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import SecondTitle from '../ui/titles/SecondTitle';
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import pickupPoints from './pickupPoints';
import MapMenu from './MapMenu';

const Map = () => {
  const [postOffices, setPostOffices] = useState(false);
  const [selfPickup, setSelfPickup] = useState(false);
  const [byCardOnReceipt, setByCardOnReceipt] = useState(false);
  const [byCashOnReceipt, setByCashOnReceipt] = useState(false);
  const [filteredMarkers, setFilteredMarkers] = useState(pickupPoints);
  const [mainCoords, setMainCoords] = useState({
    lat: 38.889,
    lon: -77.0569,
  });
  const [cityFind, setCityFind] = useState('');
  const [centralPosition, setCentralPosition] = useState([38.889, -77.0569]);

  useEffect(() => {
    let newMarkers = pickupPoints.filter((pickup) => {
      let showMarker = true;
      if (postOffices && pickup.type !== 'Post Office') {
        showMarker = false;
      }
      if (selfPickup && pickup.type !== 'Self-Pickup') {
        showMarker = false;
      }
      if (byCardOnReceipt && !pickup.payment.includes('Credit/Debit Card')) {
        showMarker = false;
      }
      if (byCashOnReceipt && !pickup.payment.includes('Cash')) {
        showMarker = false;
      }
      return showMarker;
    });
    setFilteredMarkers(newMarkers);
  }, [postOffices, selfPickup, byCardOnReceipt, byCashOnReceipt, mainCoords]);

  useEffect(() => {
    const mainCoordsArray = Object.values(mainCoords).map((coord) =>
      Number(coord)
    );
    setCentralPosition(mainCoordsArray);
  }, [mainCoords]);

  const customIcon = new Icon({
    iconUrl: require('../../assets/map-pin.png'),
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class='cluster-icon'>${cluster.getChildCount()}</div>`,
      className: 'custom-marker-cluster',
      iconSize: point(34, 34, true),
    });
  };

  function SetViewOnClick({ centralPosition }) {
    const map = useMap();
    map.setView(centralPosition, map.getZoom());

    return null;
  }

  return (
    <div className="map" data-testid="map-component">
      <div className="container">
        <SecondTitle title="It's convenient to be close by" />
        <MapMenu
          postOffices={postOffices}
          setPostOffices={setPostOffices}
          selfPickup={selfPickup}
          setSelfPickup={setSelfPickup}
          byCardOnReceipt={byCardOnReceipt}
          setByCardOnReceipt={setByCardOnReceipt}
          byCashOnReceipt={byCashOnReceipt}
          setByCashOnReceipt={setByCashOnReceipt}
          setMainCoords={setMainCoords}
          cityFind={cityFind}
          setCityFind={setCityFind}
        />
        <div className="map__wrapper">
          <MapContainer
            center={centralPosition}
            zoom={13}
            scrollWheelZoom={true}
            zoomControl={false}
          >
            <TileLayer
              attribution="Stadia Outdoors"
              url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
              lazy={true}
            />
            <MarkerClusterGroup
              chunkedLoading
              iconCreateFunction={createCustomClusterIcon}
            >
              {filteredMarkers.map((pickup) => (
                <Marker
                  key={Math.random()}
                  position={pickup.location}
                  icon={customIcon}
                >
                  <Popup>
                    <h4>{pickup.name}</h4>
                    <h4>{pickup.type}</h4>
                    <p>{pickup.address}</p>
                    <h4>Work schedule</h4>
                    <p>{pickup.hours}</p>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
            <SetViewOnClick centralPosition={centralPosition} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
