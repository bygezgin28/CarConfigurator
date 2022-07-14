import { createRouter, createWebHistory } from 'vue-router'
import ModelsView       from '../views/ModelsView.vue'
import ColorsView       from '../views/ColorsView.vue'
import AccessoriesView  from '../views/AccessoriesView.vue'
import SummaryView      from '../views/SummaryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ModelsView
    },
    {
      path: '/models',
      name: 'models',
      component: ModelsView
    },
    {
      path: '/colors',
      name: 'colors',
      component: ColorsView
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: AccessoriesView
    },
    {
      path: '/summary',
      name: 'summary',
      component: SummaryView
    }
  ]
})

export default router
