import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import BlogPostEditViewVue from '@/views/BlogPostEditView.vue'
import BlogPostListViewVue from '@/views/BlogPostListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogPostListViewVue
    },
    {
      path: "/create-post",
      name: "create_post",
      component: BlogPostEditViewVue
    }
  ]
})

export default router
