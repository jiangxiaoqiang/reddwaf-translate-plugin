<template>
<div id="app"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//import Options from './components/Options.vue'
import Translator from '../public/widget/translator/Translator.vue'
export default defineComponent({
  setup() {
    const title = process.env.APP_NAME
    return {
      title
    }
  },
  components: {
    Translator,
  }
})
</script>

<style lang="scss" scoped>

</style>