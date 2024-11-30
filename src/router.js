// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/LoginComponent.vue';
import Registration from './components/RegistrationComponent.vue'; 


const routes = [
  { path: 
 '/login', component: Login },
  { path: '/register', component: Registration },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;