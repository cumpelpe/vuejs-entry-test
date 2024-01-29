<script setup lang="ts">
withDefaults(defineProps<{
    id?: string,
}>(), {
    id: '',
})

</script>

<template>
    <button :id="id">
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    all: unset;
    font-weight: bold;
    display: block;
    border: 3px solid var(--color-dark);
    padding: 4px;
    font-size: large;
}

button:hover {
    border-color: var(--color-main);
    color: var(--color-main);
    cursor: pointer;
}
</style>
