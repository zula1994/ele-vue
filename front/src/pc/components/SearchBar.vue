<template>
  <div class="search-bar">
    <div class="search-area">
      <div class="search-located">
        <a href="javascript:;">{{ defCity }}</a>
      </div>
      <div class="search-input">
        <input type="text" placeholder="请输入你的收货地址（写字楼，小区，街道或者学校）">
      </div>
      <div class="located-area">
        <div class="located-city">
          请选择你所在的城市
          <div class="located-step pull-right">
            <span class="highlight">选城市</span> > 定位置 > 叫外卖
          </div>
        </div>
        <div class="located-guess">
          <div class="located-current">
            <span class="highlight">猜你在</span>
            <button type="button" class="btn btn-located">{{ defCity }}</button>
          </div>
          <div class="located-search">
            <input type="text" placeholder="请输入城市">
          </div>
        </div>
        <div class="located-all">
          <city-group v-for="cityOption in cityOptions" :key="getCaptain(cityOption)" :option="cityOption"></city-group>
        </div>
      </div>
    </div>
    <div class="search-button">
      <button type="button" class="btn btn-search">搜索</button>
    </div>
  </div>
</template>

<script>
import Mixins from '_M/index';
import CityGroup from '_C/CityGroup';

export default {
  mixins: [Mixins.cityOptions, Mixins.common],
  data() {
    return {
      defCity: '上海'
    }
  },
  components: {
    'city-group': CityGroup
  }
}
</script>
