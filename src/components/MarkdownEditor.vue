<script setup lang="ts">
import { ref } from 'vue'
import MarkdownDisplay from '@/components/MarkdownDisplay.vue';

const edited_text = ref("# Hello there!");

const props = defineProps({
    preview: Boolean
});

</script>


<template>
    <div class="pure-g">
        <div :class="[{'pure-u-1-2': preview}, {'pure-u-1-1': !preview}]">
            <textarea v-model="edited_text"></textarea>
        </div>
        <div class="pure-u-1-2" v-show="preview">
            <MarkdownDisplay :markdown="edited_text" />
        </div>
    </div>
</template>

<style scoped>
div{
    height: 100%;
}

textarea{
    height: 100%;
    width: 100%;
    resize: none;
    background: none;
    border: none;
}
</style>