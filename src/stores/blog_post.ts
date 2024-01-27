import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

class BlogPost {
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _title_text: string;
    public get title_text(): string {
        return this._title_text;
    }
    public set title_text(value: string) {
        this._title_text = value;
    }
    private _title_image_path: string;
    public get title_image_path(): string {
        return this._title_image_path;
    }
    public set title_image_path(value: string) {
        this._title_image_path = value;
    }
    private _description: string;
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    private _content: string;
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }

    public constructor(
        id: number,
        title_text: string,
        title_image_path: string,
        description: string,
        content: string) {
        this._id = id;
        this._title_text = title_text;
        this._title_image_path = title_image_path;
        this._description = description;
        this._content = content;
    }
}

export const blogPostsStore = defineStore('blog_posts', () => {
    const blog_posts: Ref<Array<BlogPost>> = ref([]);

    return { blog_posts }
})
