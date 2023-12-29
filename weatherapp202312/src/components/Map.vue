<template>
  <div id="mapContainer">
    <div id="map"></div>

  </div>
</template>

<script>
import MapPositions from '../assets/map-positions.json';

export default {
  
  mounted() {
    const API_KEY = 'df8219ee03e79ddc71f97179771bde53';

    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      // global kakao
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${API_KEY}`;
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
          center: new kakao.maps.LatLng(37.5683, 126.9778), // 지도의 중심좌표
          level: 13, // 지도의 확대 레벨
        };

      const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      // 마커를 표시할 위치와 title 객체 배열입니다
      const positions = MapPositions.map((pos) => ({
        latlng: new kakao.maps.LatLng(...pos.latlng),
        cityName: pos.cityName,
      }));

    // 마커를 생성합니다
      positions.forEach(pos => {
        const marker = new kakao.maps.Marker({
          position: pos.latlng, // 마커를 표시할 위치
          title : pos.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        });
        
        // 마커를 지도에 표시합니다.
        marker.setMap(map)
      })
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

#mapContainer {
  @include center;
  width: 100%;
  height: 35%;

  #map {
    width: 80%;
    height: 90%;
    border-radius: 10px;
  }
}
</style>