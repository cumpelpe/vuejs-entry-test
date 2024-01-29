<script setup lang="ts">
import { ref } from 'vue'
import MarkdownDisplay from '@/components/MarkdownDisplay.vue';
import ButtonInput from './ButtonInput.vue';

const edited_text = ref("# Hello there!");

const props = defineProps({
    preview: Boolean
});
const preview_ref = ref(props.preview)
console.log(preview_ref)
function togglePreview() {
    preview_ref.value = !preview_ref.value;
}

</script>


<template>
    <div class="pure-g">
        <div :class="[{ 'pure-u-1-2': preview_ref }, { 'pure-u-1-1': !preview_ref }]">
            <span>
                <ButtonInput @click="togglePreview">Toggle preview</ButtonInput>
            </span>
            <textarea v-model="edited_text"></textarea>
        </div>
        <div class="pure-u-1-2" v-show="preview_ref">
            <MarkdownDisplay :markdown="edited_text" />
        </div>
    </div>
</template>

<style scoped>
div {
    height: 100%;
}

div>div:nth-child(2) {
    padding-left: .5rem;
}

div>div:first-child {
    padding-right: .5rem;
    display: flex;
    flex-direction: column;
}

textarea {
    height: 100%;
    width: 100%;
    resize: none;
    background: none;
    border: 3px solid var(--color-background-dark);
}</style>