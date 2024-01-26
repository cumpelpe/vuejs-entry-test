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

post.value = ''
</script>

<template>
    <div>
        <vue-markdown-it :source="post" :options="{
            linkify: true,
            typographer: true
        }" :plugins="[emoji, subscript, superscript, footnote, katex]" />
    </div>
</template>

<style scoped>
div {
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
}
</style>