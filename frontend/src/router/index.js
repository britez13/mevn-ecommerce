import {createRouter, createWebHistory} from "vue-router"
import DefualtLayout from "../components/DefaultLayout.vue"
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    component: DefualtLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
    ],
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router