<script setup lang="ts">
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';
//@ts-expect-error
import { full as emoji } from 'markdown-it-emoji';
//@ts-expect-error
import superscript from 'markdown-it-sup';
//@ts-expect-error
import subscript from 'markdown-it-sub';
//@ts-expect-error
import footnote from 'markdown-it-footnote';
import katex from "@vscode/markdown-it-katex";
import { ref } from "vue";
const post = ref();

const props = defineProps({
    markdown: String
})

post.value = props.markdown;
</script>

<template>
        <vue-markdown-it :source="markdown" :options="{
            linkify: true,
            typographer: true
        }" :plugins="[emoji, subscript, superscript, footnote, katex]" />
</template>

<style scoped>
</style>