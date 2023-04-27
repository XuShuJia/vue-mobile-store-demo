import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw
} from "vue-router";

const Login = () => import("@/pages/Login");
const PageLoader = () => import("@/pages/PageLoader");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/home",
    component: PageLoader
  },
  {
    path: "/login",
    component: PageLoader
  },
  {
    path: "/user",
    component: PageLoader
  },
  {
    path: "/shopping-cart",
    component: PageLoader
  },
  {
    path: "/commodity-category",
    component: PageLoader
  }
];

export default createRouter({
  routes,
  history: createWebHashHistory()
});
