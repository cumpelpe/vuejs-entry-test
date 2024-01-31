import { ref, type Ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import posts_lorem_ipsum from "@/stores/blog_posts"

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
    let id_counter = 9;
    const blog_posts: Ref<Array<BlogPost>> = ref([]); //maybe better expose only getter?
    function load_posts() {
        const posts = posts_lorem_ipsum;
        blog_posts.value = Array.from(posts['posts']).map(e => new BlogPost(e['id'], e['title'], e['img'], e['desc'], e['content']));
    }

    function create_post(
        title_text: string,
        title_image_path: string,
        description: string,
        content: string
    ) {
        blog_posts.value.push(
            new BlogPost(
                id_counter++,
                title_text,
                title_image_path,
                description,
                content
            )
        );
    }

    function update_post(
        id: number,
        title_text: string,
        title_image_path: string,
        description: string,
        content: string
    ) {
        const post_to_update_i = blog_posts.value.findIndex((post) => post.id == id);
        const post_to_update = blog_posts.value[post_to_update_i];

        if (post_to_update == null) return;

        post_to_update.title_text = title_text;
        post_to_update.title_image_path = title_image_path;
        post_to_update.description = description;
        post_to_update.content = content;

        blog_posts.value[post_to_update_i] = post_to_update;

        //some kind of API call
    }

    load_posts();
    return { blog_posts, create_post, load_posts, update_post }
})
