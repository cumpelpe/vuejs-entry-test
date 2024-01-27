<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>


<template>
    <nav>
        <div>
            <RouterLink to="/"><span>Home</span></RouterLink>
        </div>
        <div>
            <RouterLink to="/create-post"><span>Create post</span></RouterLink>
        </div>
        <div>
            <RouterLink to="/"><span>Home</span></RouterLink>
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: block;
    background-color: var(--color-background-dark);
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
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