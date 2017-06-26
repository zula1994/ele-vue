<template>
  <div class="page">
    <home></home>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '_V/Home';

export default {
  components: {
    home: Home
  }
}
</script>
