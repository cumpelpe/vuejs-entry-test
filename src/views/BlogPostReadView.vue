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
import { useRoute, useRouter } from 'vue-router';
import ButtonInput from '@/components/ButtonInput.vue';

const route = useRoute();
const router = useRouter();

const posts = blogPostsStore();
const post = posts.blog_posts.find((post) => post.id == Number.parseInt(route.params.id));

function delete_post() {
    posts.delete_post(route.params.id);

    router.push({ name: "home" });
}

</script>

<template>
    <div>
        <div class="buttons">
            <RouterLink :to="'/posts/' + $route.params.id + '/edit'">
                <ButtonInput>Edit Post</ButtonInput>
            </RouterLink>
            <ButtonInput @click="delete_post">Delete Post</ButtonInput>
        </div>
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

.buttons {
    display: flex;
}
img{
    max-width: 100%;
}
</style>