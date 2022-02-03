<template>
  <div id="reddwarf-translate-app">I am a pop1</div>
</template>

<script>
import { doTranslate } from "@/public/action/TransAction";
import { MessageType } from "@/model/message/MessageType";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    word: String,
  },
  setup(props) {
    if (props && props.word && props.word.trim().length > 0) {
      
    }
  },
});
</script>

<style scoped></style>
