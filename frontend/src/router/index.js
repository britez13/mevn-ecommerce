import {createRouter, createWebHistory} from "vue-router"
import DefualtLayout from "../components/DefaultLayout.vue"
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import Cart from "../components/Cart.vue"
import Category from "../components/Category.vue"

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
      {
        path: "/cart",
        name: "cart",
        component: Cart,
      },
      {
        path: "/category/:categoryName",
        name: "category",
        component: Category,
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