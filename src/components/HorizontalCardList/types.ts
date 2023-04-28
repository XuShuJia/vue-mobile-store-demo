import type { PropType } from "vue";

export const CardItemProps = {
  size: {
    type: String as PropType<"default" | "wide" | "small">,
    default: "default",
    required: false
  }
};
