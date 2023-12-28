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
                <img src="" alt="MainLogo"/>
            </div>
            <div class="weatherData">
                <div>
                    <p></p>
                    <p></p>
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
export default {

}
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';
@import '~/scss/mainview.scss';

</style>