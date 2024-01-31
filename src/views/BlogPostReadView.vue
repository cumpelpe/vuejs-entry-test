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
import TitleText from '@/components/TitleText.vue';

import { blogPostsStore } from '@/stores/blog_post';
import { useRoute } from 'vue-router';

const route = useRoute();

// const post = ref();

const posts = blogPostsStore();
const post = posts.blog_posts.find((post) => post.id == Number.parseInt(route.params.id));


</script>

<template>
    <div>
        <RouterLink :to="'/posts/' + $route.params.id + '/edit'">Edit Post</RouterLink>
        <TitleText :text="post['title_text']" />
        <img :src="post['title_image_path']">
        <vue-markdown-it :source="post['content']" :options="{
            linkify: true,
            typographer: true
        }" :plugins="[emoji, subscript, superscript, footnote, katex]" />
    </div>
</template>

<style scoped>
div {
    width: 100%;
}
</style>