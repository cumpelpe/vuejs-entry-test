<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'


const is_toggled = ref(false);

function toggle_menu() {
    is_toggled.value = !is_toggled.value;
}
function untoggle_menu(){
    is_toggled.value = false;
}
</script>


<template>
    <nav>
        <div @click="toggle_menu"><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
        <div @click="untoggle_menu" v-if="is_toggled">
            <RouterLink to="/"><span>Home</span></RouterLink>
        </div>
        <div @click="untoggle_menu" v-if="is_toggled">
            <RouterLink to="/create-post"><span>Create post</span></RouterLink>
        </div>
        <div @click="untoggle_menu" v-if="is_toggled">
            <RouterLink to="/"><span>Home</span></RouterLink>
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: block;
    background-color: var(--color-background-dark);
    top: 0;
}

div,
span {
    display: block;
    width: 100%;
    color: var(--color-text-light);
}

div {
    padding: 1em;
}

span {
    font-size: x-large;
}

div:hover {
    background-color: var(--color-background-highlight);
    transition: .3s;
}
</style>