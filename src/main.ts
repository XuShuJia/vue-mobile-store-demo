import "normalize.css";
import "./styles/reset.less";
import "./styles/common.less";
import "vant/lib/index.css";
import { createApp } from "vue";
import routes from "./routes";
import App from "./App.vue";

createApp(App)
  .use(routes)
  .mount(document.getElementById("app") as HTMLDivElement);

// 禁用safari双指缩放页面
document.body.addEventListener("gesturestart", function (event) {
  event.preventDefault();
});

// 匹配系统亮度模式
// if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//   document.body.setAttribute("data-theme", "dark");
// } else {
//   document.body.setAttribute("data-theme", "light");
// }
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", (e) => {
//     if (e.matches) {
//       document.body.setAttribute("data-theme", "dark");
//     } else {
//       document.body.setAttribute("data-theme", "light");
//     }
//   });
