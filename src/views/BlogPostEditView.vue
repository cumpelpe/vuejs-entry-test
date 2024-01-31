<script setup lang="ts">
import { ref } from 'vue'
import MarkdownEditor from "@/components/MarkdownEditor.vue"
import TextInput from '@/components/TextInput.vue';
import ButtonInput from '@/components/ButtonInput.vue';
import { RouterLink } from 'vue-router';

import { blogPostsStore } from '@/stores/blog_post';
import { useRoute } from 'vue-router';

const router = useRoute();

// const post = ref();

const posts = blogPostsStore();
let post = posts.blog_posts.find((post) => post.id == Number.parseInt(router.params.id));
const is_create = ref(false);
if (post == undefined) {
    is_create.value = true;
    post = {
        id: -1,
        title_text: "",
        title_image_path: "",
        description: "",
        content: "",
    }
}

const post_name = ref(post.title_text);
const post_image_path = ref(post.title_image_path);
const post_description = ref(post.description);
const post_content = ref(post.content);

function save_post_changes() {
    posts.update_post(Number.parseInt(router.params.id), post_name.value, post_image_path.value, post_description.value, post_content.value);
}

function create_post() {
    posts.create_post(post_name.value, post_image_path.value, post_description.value, post_content.value);
}
</script>


<template>
    <div class="pure-g">
        <div class="pure-u-1-1 buttons">
            <ButtonInput v-if="!is_create" @click="save_post_changes">Save Changes</ButtonInput>
            <ButtonInput v-else @click="create_post">Create Post</ButtonInput>
            <RouterLink v-if="!is_create" :to="'/posts/' + $route.params.id"><ButtonInput>View Post</ButtonInput></RouterLink>
        </div>
        <div class="pure-u-xl-4-24 pure-u-1">
            <TextInput v-model="post_name" id="post_name" placeholder="Post title" label="Post title" />
            <TextInput v-model="post_image_path" id="image_path" placeholder="Post image path" label="Post image path" />
        </div>
        <div class="pure-u-xl-10-24 pure-u-1">
            <img :src="post_image_path" />
        </div>
        <div class="pure-u-xl-10-24 pure-u-1">
            <MarkdownEditor v-model="post_description" :preview="false" label="Short Description" />
        </div>
        <div class="pure-u-1-1 editor">
            <MarkdownEditor v-model="post_content" :preview="true" label="Post content" />
        </div>
    </div>
</template>

<style scoped>
img {
    max-width: 100%;
    margin: auto;
    display: block;
    max-height: 30vh;
}
.buttons{
    display: flex;
}
</style>