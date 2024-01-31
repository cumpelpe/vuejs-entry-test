<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { Transition } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="pure-g container">
    <div class="pure-u-1-5">
      <Navbar />
    </div>
    <div class="pure-u-4-5">
      <div class="content">
        <RouterView v-slot="{ Component, route }">
          <!-- Use a custom transition or fallback to `fade` -->
          <Transition :name="route.meta.transition || 'slide-fade'">
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 95%;
  margin: 1% auto;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
