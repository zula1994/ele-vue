<template>
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
