<script setup lang="ts">
import { blogPostsStore } from "@/stores/blog_post"
import MarkdownDisplay from "@/components/MarkdownDisplay.vue";
import TitleText from "@/components/TitleText.vue";
import { RouterLink } from "vue-router";

const blog_posts_store = blogPostsStore();
</script>

<template>
    <div class="posts">
        <RouterLink :to="'/posts/' + post['id']" :key="post['id']" v-for="post in blog_posts_store.blog_posts">
            <div class="blog-post pure-g" >
                <div class="pure-u-2-5">
                    <TitleText :text="post['title_text']" />
                    <img :src="post['title_image_path']" alt="">
                </div>
                <div class="pure-u-3-5">
                    <MarkdownDisplay :markdown="post['description']" />
                </div>
            </div>
        </RouterLink>
    </div>
</template>



<style scoped>
.posts {
    --border-size: 16px;
}

.blog-post {
    margin: 1em 0;
    border-top: var(--border-size) solid var(--color-main);
    border-right: var(--border-size) solid var(--color-main);
}

.blog-post:nth-child(2n) {
    border-right: none;

    border-top: var(--border-size) solid var(--color-dark);
    border-left: var(--border-size) solid var(--color-dark);
    background-color: var(--color-background-soft);
}
</style>