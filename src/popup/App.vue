<template>
<div id="app">
  <translator></translator>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Translator from '@/public/widget/translator/Translator.vue'
export default defineComponent({
  setup() {
    const title = process.env.APP_NAME
    return {
      title
    }
  },
  components: {
    "translator":Translator,
  }
})
</script>

<style lang="scss" scoped>

</style>