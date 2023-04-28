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
    // component: Login,
    redirect: "/home"
  },
  {
    path: "/home",
    component: PageLoader
  },
  {
    name: "login",
    path: "/login",
    component: Login
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

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

router.beforeEach((to, from) => {
  console.log({
    to: to.path,
    from: from.path
  });
  // return {name:"login"}
});

export default router;
