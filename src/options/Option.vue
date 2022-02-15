<template>
  <div id="app">
    <div id="wrap">
      <ul class="nav nav-tabs">
        <li>
          <input
            :value="props"
            placeholder="username"
            v-on:input="updateValue($event.target.value)"
          />
          <input
            :value="props"
            placeholder="password"
            v-on:input="updatePasswordValue($event.target.value)"
          />
          <button @click="Login">Get</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import LocalStorage from "js-wheel/dist/src/utils/data/LocalStorage";

export default defineComponent({
  props: {
    modelValue: String,
  },
  setup() {
    const { getters, dispatch } = useStore();

    function updateValue(value: any) {
      dispatch("Login/setUsername", value);
    }

    function updatePasswordValue(value: any) {
      dispatch("Login/setPassword", value);
    }

    const Login = () => {
      let username = computed(() => getters["Login/getUsername"]);
      let password = computed(() => getters["Login/getPassword"]);
      LocalStorage.setLocalStorage("username", username.value);
      LocalStorage.setLocalStorage("password", password.value);
    };

    return {
      Login,
      updateValue,
      updatePasswordValue,
    };
  },
});
</script>