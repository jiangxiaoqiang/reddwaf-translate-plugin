<template>
  <div id="reddwarf-translate-app">
    <div id="translate-btn">
      <button type="button" class="translate-pop-button" @click="safeTranslate">
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

<script lang="ts">
import { doTranslate } from "@/public/action/TransAction";
import { MessageType } from "@/model/message/MessageType";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    word: String,
  },
  setup(props) {
    const { getters, dispatch } = useStore();

    if(props.word&&props.word.trim().length>0) {
      dispatch("Trans/setTransword", props.word.trim());
    }

    const safeTranslate = (e: MouseEvent) => {
      const transWord = computed(() => getters["Trans/getTransWord"])
      if (transWord && transWord.value && transWord.value.trim().length > 0) {
        doTranslate(transWord.value.trim(),MessageType.SELECTION_TRANSLATE);
        setTranslateResultPosition(e);
      }
    };

    const setTranslateResultPosition = (e:MouseEvent) => {
      let translateBtn = document.getElementById("translate-panel");
      if(translateBtn){
        translateBtn.style.visibility="hidden";
        translateBtn.style.width ="140px";  
        translateBtn.style.backgroundColor="transparent";
        translateBtn.style.height="150px";
        translateBtn.style.transform="translate("+e.clientX+ "px,"+ e.clientY+"px)";
      }
    }

    return {
      safeTranslate
    };
  }
});
</script>

<style lang="scss">

#translate-panel{
  position: absolute;
  z-index: 9999999999;
  left: 0;
  top: 0;
}

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
  background-image: url('chrome-extension://__MSG_@@extension_id__/resource/image/lo.jpg');
  background-color: transparent;

}

.translate-pop-button{
  width: 28px;
  height: 28px;
  background:transparent;
  background-image: url('chrome-extension://__MSG_@@extension_id__/resource/image/lo.jpg');
  background-color:transparent;
}

</style>
