<template>
    <div>I am a translator</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const title = process.env.APP_NAME
    return {
      title
    }
  },
  components: {
    //Options,
  }
})
</script>

<style lang="scss" scoped>
div.container {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0px;
    padding: 5px 20px;
    font-size: 1.5em;
    font-weight: lighter;
    white-space: nowrap;
  }
  hr {
    size: 1px;
    width: 100%;
    color: gray;
    margin: 0px;
  }
}
</style>

