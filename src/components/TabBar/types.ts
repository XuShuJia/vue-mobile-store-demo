export const TabBarProps = {};

export interface ITabBarState {
  list: TTabBarList;
  active: string;
}

export interface ITabBarItem {
  id: string;
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
