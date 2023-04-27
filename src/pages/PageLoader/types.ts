import type { defineAsyncComponent } from "vue";

export type TPageName =
  | "home"
  | "user"
  | "shopping-cart"
  | "commodity-category";

export interface IPageMapInfo {
  id: TPageName;
  load: () => Promise<void>;
  component: ReturnType<typeof defineAsyncComponent> | null;
}

export type IPageMap = {
  [pageName in TPageName]: IPageMapInfo;
};

export interface IPageLoaderPageItem {
  id: TPageName;
  name: TPageName;
  loaded: boolean;
}

export interface IPageLoaderState {
  pages: IPageLoaderPageItem[];
  show: TPageName;
}
