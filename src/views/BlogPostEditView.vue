<script setup lang="ts">
import { ref } from 'vue'
import MarkdownEditor from "@/components/MarkdownEditor.vue"
import TextInput from '@/components/TextInput.vue';

const post_name = ref("Hello there!");
const image_path = ref("https://picsum.photos/600/300");

</script>


<template>
    <div class="pure-g">
        <div class="pure-u-4-24">
            <TextInput v-model="post_name" id="post_name" placeholder="Post title" label="Post title" />
            <TextInput v-model="image_path" id="image_path" placeholder="Post image path" label="Post image path" />
        </div>
        <div class="pure-u-10-24">
            <img :src="image_path" />
        </div>
        <div class="pure-u-10-24">
            <MarkdownEditor :preview="false" label="Short Description" />
        </div>
        <div class="pure-u-1-1 editor">
            <MarkdownEditor :preview="true" label="Post content" />
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
</style>