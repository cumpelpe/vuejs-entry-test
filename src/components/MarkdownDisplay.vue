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
    <div>
        <vue-markdown-it :source="markdown" :options="{
            linkify: true,
            typographer: true
        }" :plugins="[emoji, subscript, superscript, footnote, katex]" />
    </div>
</template>

<style scoped>
div{
    overflow-wrap: anywhere;
    /* word-break: break-all; */
}

</style>

<style>
pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
img{
    max-width: 100%;
}
</style>