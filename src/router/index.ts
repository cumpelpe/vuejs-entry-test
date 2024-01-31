import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import BlogPostEditView from '@/views/BlogPostEditView.vue'
import BlogPostListView from '@/views/BlogPostListView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { blogPostsStore } from '@/stores/blog_post'
import BlogPostCreateView from '@/views/BlogPostCreateView.vue'

function check_blog_post_exists(to: RouteLocationNormalized) {
  const posts = blogPostsStore();
  // @ts-ignore
  if (!posts.post_exists(Number.parseInt(to.params.id)))
    return { name: 'not_found' }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'not_found', component: NotFoundView },
    {
      path: '/',
      name: 'home',
      component: BlogPostListView
    },
    {
      path: "/create-post",
      name: "create_post",
      component: BlogPostCreateView,
    },
    {
      path: '/posts/:id',
      name: 'read_post',
      component: () => import('../views/BlogPostReadView.vue'),
      beforeEnter: [check_blog_post_exists],
    },
    {
      path: '/posts/:id/edit',
      name: 'edit_post',
      component: BlogPostEditView,
      beforeEnter: [check_blog_post_exists],
    }
  ]
})

export default router
