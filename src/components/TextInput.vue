<script setup lang="ts">
const model = defineModel()


withDefaults(defineProps<{
    id?: string,
    label?: string,
    placeholder?: string,
}>(), {
    id: '',
    label: '',
    placeholder: '',
})
</script>

<template>
    <div>
        <label class="input">
            <span class="input_field">
                <input class="" type="text" :id="id" placeholder=" " v-model="model" />
            </span>
            <span class="input_label">{{ label }}</span>
        </label>
    </div>
</template>

<style scoped>
/* https://codepen.io/meodai/pen/rNedxBa modified */

div {
    margin-top: 2rem;
    padding: 0;
}

.input {
    --color-light: var(--color-light-shade);
    --color-dark: var(--color-dark);
    --color-signal: var(--color-highlight);

    --color-background: var(--color-light);
    --color-text: var(--color-dark);
    --color-accent: var(--color-signal);

    --size-bezel: .45rem;
    --size-radius: 0px;
    font-size: calc(.6rem + .4vw);
    margin-top: 3rem;
    position: relative;
}

.input_label{
    position: absolute;
    left: 1em;
    top: -1rem;
    background: var(--color-background);
    transition: transform 120ms ease-in;
}
@supports (-moz-appearance:none) {
    .input_label {
        position: absolute;
        left: 0;
        top: -2px;
        padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * .5);
        margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * .5);
        white-space: nowrap;
        background: var(--color-background);
        transition: transform 120ms ease-in;
        font-weight: bold;
        line-height: 1.2;
        z-index: 2;
    }
}

.input_field {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 3px solid currentColor;
    padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
    color: currentColor;
    background: transparent;
    border-radius: var(--size-radius);
}

.input_field:has(input:focus) {
    color: var(--color-main);
    border-color: var(--color-main);
}

.input_field:has(input:focus)+.input_label {
    transform: translate(0.15rem, -55%) scale(0.8);
    color: var(--color-main);
    border-color: var(--color-main);
}


input,
input:focus {
    position: relative;
    border: var(--color-background);
    background-color: var(--color-background);
    width: 100%;
    height: 100%;
    outline: none;
    z-index: 3;
}
</style>