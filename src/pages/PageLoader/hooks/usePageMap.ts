import { defineAsyncComponent } from "vue";
import type { IPageMap } from "../types";

export default () => {
  const PageMap: IPageMap = {
    home: {
      id: "home",
      load() {
        return new Promise<void>((resolve) => {
          this.component = defineAsyncComponent(async () => {
            const component = await import("@/pages/Home");
            resolve();
            return component;
          });
        });
      },
      component: null
    },
    user: {
      id: "user",
      load() {
        return new Promise<void>((resolve) => {
          this.component = defineAsyncComponent(async () => {
            const component = await import("@/pages/User");
            resolve();
            return component;
          });
        });
      },
      component: null
    },
    "shopping-cart": {
      id: "shopping-cart",
      load() {
        return new Promise<void>((resolve) => {
          this.component = defineAsyncComponent(async () => {
            const component = await import("@/pages/ShoppingCart");
            resolve();
            return component;
          });
        });
      },
      component: null
    },
    "commodity-category": {
      id: "commodity-category",
      load() {
        return new Promise<void>((resolve) => {
          this.component = defineAsyncComponent(async () => {
            const component = await import(
              "@/pages/CommodityCategory"
            );
            resolve();
            return component;
          });
        });
      },
      component: null
    }
  };

  return {
    PageMap
  };
};
