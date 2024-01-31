import { createRouter, createWebHistory } from 'vue-router'
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
      component: BlogPostEditViewVue,
    },
    {
      path: '/posts/:id',
      name: 'read_post',
      component: ()=> import('../views/BlogPostReadView.vue'),
    },
      {
        path: '/posts/:id/edit',
        name: 'edit_post',
        component: BlogPostEditViewVue,
      }
  ]
})

export default router
