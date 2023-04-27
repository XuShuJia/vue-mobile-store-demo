import { type TTabBarList } from "./types";

export const TabBarItems: TTabBarList = [
  {
    id: "home",
    path: "/home",
    title: "首页",
    icon: "wap-home-o",
    activeIcon: "wap-home"
  },
  {
    id: "commodity-category",
    path: "/commodity-category",
    title: "分类",
    icon: "shop-o",
    activeIcon: "shop"
  },
  // {
  //   id: "search",
  //   path: "",
  //   title: "搜索",
  //   icon: "search",
  //   activeIcon: "search"
  // },
  {
    id: "shopping-cart",
    path: "/shopping-cart",
    title: "购物车",
    icon: "cart-o",
    activeIcon: "cart"
  },
  {
    id: "user",
    path: "/user",
    title: "我的",
    icon: "manager-o",
    activeIcon: "manager"
  }
];
