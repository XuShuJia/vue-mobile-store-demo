import { createRouter,createWebHashHistory,type RouteRecordRaw } from "vue-router";

const Home = () => import("@/pages/Home");
const User = () => import("@/pages/User");
const Login = () => import("@/pages/Login");
const ShoppingCart = () => import("@/pages/ShoppingCart");
const CommodityCategory = () => import("@/pages/CommodityCategory")

const routes:RouteRecordRaw[] = [
  {
    path:"/",
    component:Login,
  },
  {
    path:"/home",
    component:Home,
  },
  {
    path:"/login",
    component:Login,
  },
  {
    path:"/user",
    component:User,
  },
  {
    path:"/shopping-cart",
    component:ShoppingCart,
  },
  {
    path:"/commodity-category",
    component:CommodityCategory,
  },
]

export default createRouter({
  routes,
  history:createWebHashHistory()
})
