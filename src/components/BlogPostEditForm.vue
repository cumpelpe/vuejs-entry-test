<script setup lang="ts">
import { type ModelRef } from 'vue'
import MarkdownEditor from "@/components/MarkdownEditor.vue"
import TextInput from '@/components/TextInput.vue';

import { type BlogPost } from '@/stores/blog_post';



const post: ModelRef<BlogPost> = defineModel();

</script>


<template>
    <div class="pure-g">
        <div class="pure-u-xl-4-24 pure-u-1">
            <TextInput v-model="post.title_text" id="post_name" placeholder="Post title" label="Post title" />
            <TextInput v-model="post.title_image_path" id="image_path" placeholder="Post image path"
                label="Post image path" />
        </div>
        <div class="pure-u-xl-10-24 pure-u-1">
            <img :src="post.title_image_path" />
        </div>
        <div class="pure-u-xl-10-24 pure-u-1">
            <MarkdownEditor v-model="post.description" :preview="false" label="Short Description" />
        </div>
        <div class="pure-u-1-1 editor">
            <MarkdownEditor v-model="post.content" :preview="true" label="Post content" />
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

.buttons {
    display: flex;
}
</style>