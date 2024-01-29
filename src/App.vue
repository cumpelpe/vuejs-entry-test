<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="pure-g container">
    <div class="pure-u-1-5">
      <Navbar />
    </div>
    <div class="pure-u-4-5">
      <div class="content">
      <RouterView />
    </div>
    </div>
  </div>
</template>

<style scoped>
.content{
  width: 95%;
  margin: 1% auto;
}
</style>
