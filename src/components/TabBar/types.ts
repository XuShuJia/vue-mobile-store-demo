import type { TPageName } from "@/pages/PageLoader/types";

export const TabBarProps = {};

export interface ITabBarState {
  list: TTabBarList;
  active: string;
}

export interface ITabBarItem {
  id: TPageName;
  path: string;
  title: string;
  icon: string;
  activeIcon: string;
}

export type TTabBarList = ITabBarItem[];

export interface ITabBarExpose {
  getTabBarHeight: () => number;
  switchTab: (id: string) => void;
}
