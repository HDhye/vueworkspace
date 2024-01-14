<template>
  <div class="leftContainer">
    <div id="cityNameBox">
        <div class="cityName">
            <p>San Fransisco</p>
            <p>Jan 28, 2023</p>
        </div>
    </div>
    <div id="contentsBox">
        <div class="buttonBox">
            <div class="buttonBackground">
                <button class="forecast">Forecast</button>
                <button class="airquality">Air Quality</button>
            </div>
        </div>
        <div class="weatherBox">
            <div class="weatherDegree">
                <p>10&deg;</p>
            </div>
            <div class="weatherIcon">
                <img src="~/assets/images/03d.png" alt="logo"/>
            </div>
            <div class="weatherData">
                <div v-for="Temporary in temporaryData" :key="Temporary.title" class="detailData">
                    <p>{{ Temporary.title }}</p>
                    <p>{{ Temporary.value }}</p>
                </div>
            </div>
        </div>
    </div>
    <div id="todayWeather">
        <div class="textBox">
            <p>시간대별 날씨 정보</p>
            <p>이번주 날씨 보기</p>
        </div>
        <div class="timelyWeatherBox">
            <div class="timelyWeather">
                <div class="icon">
                    <img src="" alt="" />
                </div>
                <div class="data">
                    <p class="time">2pm</p>
                    <p class="currentDegree">32&deg;</p>
                </div>
                <div>
                    <img src="/" alt="" />
                    <p class="fall"></p>
                </div>
            </div>
        </div>
    </div>
    <nav>
        <i class="fas fa-home"></i>
        <i class="fas fa-search-location"></i>
        <i class="fas fa-chart-line"></i>
        <i class="fas fa-cog"></i>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            
        }
    },
    
    computed: {
        // 상세 날씨 데이터를 받아주는 데이터 할당
        temporaryData() {
            return [
                {
                    title: '습도',
                    value: 0 + '%',
                },
                {
                    title: '풍속',
                    value: 0 + 'm/s',
                },
                {
                    title: '체감온도',
                    value: 0 + '도',
                },
            ];
        },
    },
    created() {
        
    },
    

}
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';
@import '~/scss/mainview.scss';

</style>