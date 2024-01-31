<script setup lang="ts">
import { ref } from 'vue'
import ButtonInput from '@/components/ButtonInput.vue';
import BlogPostEditForm from '@/components/BlogPostEditForm.vue';

import { blogPostsStore } from '@/stores/blog_post';

const posts = blogPostsStore();
const edited_post = ref({
    title_text: "",
    title_image_path: "",
    description: "",
    content: ""
})

function create_post() {
    posts.create_post(edited_post.value.title_text, edited_post.value.title_image_path, edited_post.value.description, edited_post.value.content);
}
</script>


<template>
    <div class="pure-g">
        <div class="pure-u-1-1 buttons">
            <ButtonInput @click="create_post">Create Post</ButtonInput>
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