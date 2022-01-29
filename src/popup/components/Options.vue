<template lang="pug">
.container
  .title Options
  button(@click='onOpenOptions') Open
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    
  }
})
</script>

<style lang="scss" scoped>
div.container {
  display: flex;
  flex-direction: column;
  div.title {
    font-size: 1em;
    font-weight: lighter;
    padding: 5px 20px;
    margin: 0px;
  }
  button {
    margin: 5px;
  }
}
</style>