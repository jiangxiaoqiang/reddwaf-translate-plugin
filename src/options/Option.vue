<template>
  <div id="app">
    <div id="wrap">
      <ul class="nav nav-tabs">
        <li>
          <input 
          :value="props" 
          placeholder="username" 
          v-on:input="updateValue($event.target.value)"/>
          <input v-model="password" placeholder="password" />
          <button @click="getUpdateValue">Get</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props:{
   modelValue: String
  },
  setup(props,ctx) {
    function updateValue(value: any) {
      ctx.emit('update:modelValue', value)
    }

    const getUpdateValue = () => {
      const { modelValue } = toRefs(props)
      debugger
      alert(modelValue.value);
    };

    return {
      getUpdateValue,
      updateValue,
    };
  },
});
</script>