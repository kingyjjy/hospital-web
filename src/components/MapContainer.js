import React, {useEffect, useState} from 'react'
const { kakao } = window;

const MapContainer = () => {
  
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커 표시될 위치
    const markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

    // 마커 표시
    const marker = new kakao.maps.Marker({
      position:markerPosition
    });

    marker.setMap(map);
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </>
  );
}

export default MapContainer