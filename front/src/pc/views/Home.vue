<template>
  <div class="home">
    <div class="map">
      <div class="container with-map">
        <div class="map-logo">
          <img :src="require('_A/images/map-logo-center.png')">
        </div>
        <div class="search-bar">
          <div class="search-area">
            <div class="search-located">
              <a href="javascript:;">{{ defCity }}</a>
            </div>
            <div class="search-input">
              <input type="text" placeholder="请输入你的收货地址（写字楼，小区，街道或者学校）">
            </div>
          </div>
          <div class="search-button">
            <button type="button" class="btn btn-search">搜索</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container text-center">
        <div class="app-area">
          <div class="app-qc">
            <img :src="require('_A/images/appqc.png')">
            <span>扫码下载APP</span>
          </div>
          <div class="app-cast">
            <p>新用户首次下单</p>
            <h3>最高立减20元</h3>
            <p>立即下载APP, 享受更多优惠吧！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defCity: '上海'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
