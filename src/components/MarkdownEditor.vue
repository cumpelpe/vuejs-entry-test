<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MarkdownDisplay from '@/components/MarkdownDisplay.vue';
import ButtonInput from './ButtonInput.vue';
import TitleText from './TitleText.vue';

const edited_text = defineModel();

const props = defineProps({
    preview: Boolean,
    label: String
});
const preview_ref = ref(props.preview)
console.log(preview_ref)
function togglePreview() {
    preview_ref.value = !preview_ref.value;
}
const edit_content_area = ref();
let min_edit_content_area_height = ref(30);

function update_content_area_height() {
    if (edit_content_area.value != null) {
        min_edit_content_area_height.value = Math.max(edit_content_area.value.scrollHeight, 30);
    }
}
onMounted(()=>{
    update_content_area_height();
})

</script>


<template>
    <div class="pure-g">
        <div :class="[{ 'pure-u-1-2': preview_ref }, { 'pure-u-1-1': !preview_ref }]">
            <span>
                <TitleText :text="label" />
            </span>
            <span>
                <ButtonInput @click="togglePreview">Toggle preview</ButtonInput>
            </span>
            <textarea @input="update_content_area_height" :style="{ 'height': min_edit_content_area_height + 'px' }"
                ref="edit_content_area" v-model="edited_text"></textarea>
        </div>
        <div class="pure-u-1-2" v-show="preview_ref">
            <MarkdownDisplay :markdown="edited_text" />
        </div>
    </div>
</template>

<style scoped>
div {
    height: 100%;
}

div>div:nth-child(2) {
    padding-left: .5rem;
}

div>div:first-child {
    padding-right: .5rem;
    display: flex;
    flex-direction: column;
}

textarea {
    height: 100%;
    min-height: 64px;
    width: 100%;
    resize: none;
    background: none;
    border: 3px solid var(--color-background-dark);
}
</style>