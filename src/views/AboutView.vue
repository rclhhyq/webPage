<template>
  <div class="container">
    <starRotateVue></starRotateVue>
    <frostedScreenVue></frostedScreenVue>
    <slideShowVue></slideShowVue>
    <parallaxScrollVue></parallaxScrollVue>
  </div>
</template>

<script>
import starRotateVue from '@/components/starRotate.vue'
import frostedScreenVue from '@/components/frostedScreen.vue'
import slideShowVue from '@/components/slideShow.vue'
import parallaxScrollVue from '@/components/parallaxScroll.vue'
export default {
  name: 'aboutView',
  components: {
    starRotateVue,
    frostedScreenVue,
    slideShowVue,
    parallaxScrollVue
  }
}
</script>

<style scope>
</style>
