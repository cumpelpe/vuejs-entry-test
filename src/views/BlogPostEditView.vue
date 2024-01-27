<script setup lang="ts">
import { ref } from 'vue'
import MarkdownEditor from "@/components/MarkdownEditor.vue"

const post_name = ref("# Hello there!");
const image_path = ref("");

</script>


<template>
    <div class="pure-g">
        <div class="pure-u-1-1">
            <input type="text" name="" id="" v-model="post_name">
            <input type="text" name="" id="" v-model="image_path">
        </div>
        <div class="pure-u-3-5">
            <MarkdownEditor />
        </div>
        <div class="pure-u-1-1">
            <MarkdownEditor preview="true" />
        </div>
    </div>
</template>

<style scoped></style>