<template>
  <div class="home">
    <div class="map">
      <div class="container with-map">
        <div class="map-logo">
          <img :src="require('_A/images/map-logo-center.png')">
        </div>
        <search-bar></search-bar>
      </div>
    </div>
    <div class="download">
      <div class="container text-center">
        <div class="app-area">
          <div class="app-qc">
            <img :src="require('_A/images/appqc.png')">
            <span>扫码下载APP</span>
          </div>
          <div class="app-cast">
            <p class="mt-30">新用户首次下单</p>
            <h3>最高立减20元</h3>
            <p>立即下载APP, 享受更多优惠吧！</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-nav">
      <div class="container text-center">
        <router-link to="/open">我要开店</router-link>
        <router-link to="/support/about">联系我们</router-link>
        <router-link to="/support/agreement">服务条款和协议</router-link>
        <router-link to="/jobs">加入我们</router-link>
        <router-link to="/express">蜂鸟配送</router-link>
      </div>
    </div>
    <copyright></copyright>
  </div>
</template>

<script>
import SearchBar from '_C/SearchBar';
import Copyright from '_C/Copyright';

export default {
  components: {
    'search-bar': SearchBar,
    'copyright': Copyright
  }
}
</script>
