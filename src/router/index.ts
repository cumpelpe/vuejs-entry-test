import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import BlogPostEditViewVue from '@/views/BlogPostEditView.vue'
import BlogPostListViewVue from '@/views/BlogPostListView.vue'
import BlogPostReadViewVue from '@/views/BlogPostReadView.vue'

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
      component: BlogPostEditViewVue,
      meta: { transition: 'rev-slide-fade' },
    },
    {
      path: '/posts/:id',
      name: 'read_post',
      component: ()=> import('../views/BlogPostReadView.vue'),
      meta: { transition: 'rev-slide-fade' },
    }
  ]
})

export default router
