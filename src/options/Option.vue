<template>
  <div id="app">
    <div>dsfwfwfwfw</div>
    <div id="wrap">
      <ul class="nav nav-tabs">
        <li>
          <a>设置</a>
        </li>
        <li>
          <a>关于</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Translator from "@/public/widget/translator/Translator.vue";
export default defineComponent({
  setup() {
    const title = process.env.APP_NAME;
    return {
      title,
    };
  },
  components: {
    translator: Translator,
  },
});
</script>

<style lang="scss" scoped>
</style>