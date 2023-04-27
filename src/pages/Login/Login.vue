<script lang="ts" setup>
import styles from "./style.module.less";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Button, showFailToast } from "vant";

const router = useRouter();
const state = reactive({
  account: "test",
  password: "123456",
  loading: false
});
const handleClickLoginButton = () => {
  if (state.loading) return;
  if (state.account.trim() === "" || !state.account) {
    showFailToast("请输入账号");
    return;
  }
  if (state.password.trim() === "" || !state.password) {
    showFailToast("请输入密码");
    return;
  }
  state.loading = true;
  setTimeout(() => {
    router.replace("/home");
  }, 1000);
};
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.title">
      <div :class="styles['title-main']">
        <p>Welcome To</p>
        <p>The Store Demo!</p>
      </div>
      <div :class="styles['title-sub']">
        vue3+pinia+vue-router+ts+less+vant
      </div>
    </div>
    <div :class="styles['login-form']">
      <div :class="styles['form-item']">
        <div :class="styles['item-label']">账号</div>
        <div :class="styles['item-content']">
          <input type="text" placeholder="" v-model="state.account" />
        </div>
      </div>
      <div :class="styles['form-item']">
        <div :class="styles['item-label']">密码</div>
        <div :class="styles['item-content']">
          <input
            type="password"
            placeholder=""
            v-model="state.password"
          />
        </div>
      </div>
      <div :class="[styles['form-item'], styles['buttons']]">
        <Button
          type="primary"
          :loading="state.loading"
          @click="handleClickLoginButton"
        >
          登录
        </Button>
      </div>
    </div>
  </div>
</template>
