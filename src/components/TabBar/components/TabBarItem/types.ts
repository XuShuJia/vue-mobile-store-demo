export const TabBarItemProps = {
  id: {
    type: String,
    default: "",
    required: true
  },
  title: {
    type: String,
    default: "",
    required: true
  },
  active: {
    type: Boolean,
    default: false,
    required: false
  }
};
