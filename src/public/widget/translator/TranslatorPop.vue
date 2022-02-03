<template>
  <div id="reddwarf-translate-app">I am a prop
    <div id="translate-btn">
      <button type="button" class="translate-pop-button">
        <span class="reddwarf-btn-icon"></span>
      </button>
    </div>
    <div id="pop-container">
      <div id="translate-panel">
        <div class="header"></div>
        <div class="body"></div>
      </div>
    </div>
  </div>
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

<style lang="scss" scoped>

#translate-btn {
    //display: none;
    position: absolute;
    z-index: 9999999999;
    left: 0;
    top: 0;
}

#translate-btn .reddwarf-btn-icon{
  width: 18px;
  height: 28px;
  background-image: url('chrome-extension://__MSG_@@extension_id__/resource/image/logo.png');
  background-color: #000000;

}

.translate-pop-button{
  width: 28px;
  height: 28px;
  background:transparent;
  background-image: url('chrome-extension://__MSG_@@extension_id__/resource/image/logo.png');
  background-color: #000000;
}

</style>
