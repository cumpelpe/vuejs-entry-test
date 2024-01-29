<script setup lang="ts">

const props = defineProps<{ text: string }>();

let t = props.text[0];

</script>

<template>
    <h1>
        <span>
            {{ text }}
            <span class="after">{{ t }}</span>
        </span>
    </h1>
</template>

<style scoped>
span {
    position: relative;
    letter-spacing: 2px;
    text-decoration: none;
    color: var(--color-dark);
    text-align: left;
    left: 3px;
}

span.after {
    color: rgba(0, 0, 0, 0);
    letter-spacing: 2px;
    left: -3px;
    top: 0;
    bottom: 0;
    position: absolute;
    border: 2px solid rgba(0, 0, 0, 0.6);
}

span:hover>.after {
    border: 2px solid var(--color-main);
}
</style>