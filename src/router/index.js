import { createRouter, createWebHistory } from 'vue-router'
import TasksView from "@/views/TasksView.vue";
import CreateView from "@/views/CreateView.vue";
import TaskDetails from "@/views/TaskDetails.vue";

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'active-link',

  routes: [
    {path: '/', component: TasksView},
    {path: '/create', component: CreateView},
    {path: '/tasks/:id', component: TaskDetails}
  ]
})