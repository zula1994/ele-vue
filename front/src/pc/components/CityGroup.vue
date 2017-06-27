<template lang="html">
  <div class="city-group">
    <div class="city-captain"><span class="highlight">{{ city.captain }}</span></div>
    <ul class="city-items">
      <li v-for="city in city.option" :key="city.id"><label>{{ city.name }}</label></li>
    </ul>
  </div>
</template>

<script>
import Mixins from '_M/index';

export default {
  mixins: [Mixins.common],
  props: {
    option: Object
  },
  data() {
    return {
      city: {
        captain: this.getCaptain(this.option),
        option: this.option[this.getCaptain(this.option)]
      }
    }
  }
}
</script>
