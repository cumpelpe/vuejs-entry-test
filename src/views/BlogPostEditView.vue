<script setup lang="ts">
import { ref } from 'vue'
import ButtonInput from '@/components/ButtonInput.vue';
import { RouterLink } from 'vue-router';
import BlogPostEditForm from '@/components/BlogPostEditForm.vue';

import { blogPostsStore } from '@/stores/blog_post';
import { useRoute } from 'vue-router';

const router = useRoute();

const posts = blogPostsStore();
let post = posts.blog_posts.find((post) => post.id == Number.parseInt(router.params.id));

// post is always defined
const edited_post = ref({
    // @ts-ignore
    title_text: post.title_text,
    // @ts-ignore
    title_image_path: post.title_image_path,
    // @ts-ignore
    description: post.description,
    // @ts-ignore
    content: post.content
})

function save_post_changes() {
    posts.update_post(Number.parseInt(router.params.id), edited_post.value.title_text, edited_post.value.title_image_path, edited_post.value.description, edited_post.value.content);
}

</script>


<template>
    <div class="pure-g">
        <div class="pure-u-1-1 buttons">
            <ButtonInput @click="save_post_changes">Save Changes</ButtonInput>
            <RouterLink :to="'/posts/' + $route.params.id">
                <ButtonInput>View Post</ButtonInput>
            </RouterLink>
        </div>
    </div>
    <BlogPostEditForm v-model="edited_post" />
</template>

<style scoped>
img {
    max-width: 100%;
    margin: auto;
    display: block;
    max-height: 30vh;
}

.buttons {
    display: flex;
}
</style>