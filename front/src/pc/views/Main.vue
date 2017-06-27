<template>
  <div class="wrapper">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <u-footer></u-footer>
  </div>
</template>

<script>
import Navbar from '_C/Navbar';
import Footer from '_C/Footer';

export default {
  components: {
    'nav-bar': Navbar,
    'u-footer': Footer
  }
}
</script>
