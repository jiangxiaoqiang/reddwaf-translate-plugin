<template>
  <div id="reddwarf-translate-app">
    <div id="translate-btn">
      <button type="button" class="translate-pop-button" @click="safeTranslate">
        <span class="reddwarf-btn-icon"></span>
      </button>
    </div>
    <div id="popper-container">
      <div id="translate-panel">
        <div class="header">
          <div class="left"></div>
          <div class="right">
            <button type="button" title="添加到收藏夹" @click="addGlossary">
              <span icon="star-empty">
                <svg data-icon="star-empty" width="14" height="14" viewBox="0 0 16 16"></svg>
              </span>
            </button>
            <button type="button" title="关闭" @click="closePopWindow">
              <span icon="cross">
                <svg data-icon="cross" width="18" height="18" viewBox="0 0 16 16">
                  <path d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z" fill-rule="evenodd"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="body">
          <div id="reddwarf-translate-result"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { 
  closePopupWindow, 
  doAddGlossary, 
  doTranslate, 
  hideTransButton, 
  setTranslateResultPosition 
} from "@/public/action/TransAction";
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
        hideTransButton();
        doTranslate(transWord.value.trim(),MessageType.SELECTION_TRANSLATE);
        setTranslateResultPosition(e);
      }
    };

    const closePopWindow = (e: MouseEvent) => {
      closePopupWindow();
    }

    const addGlossary = (e: MouseEvent) => {
      const transWord = computed(() => getters["Trans/getTransWord"])
      if (transWord && transWord.value && transWord.value.trim().length > 0) {
        doAddGlossary(transWord.value.trim(),MessageType.ADD_GLOSSARY);
      }
    }

    return {
      safeTranslate,
      closePopWindow,
      addGlossary
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

#popper-container {
  z-index: 9999999999;
  touch-action: none;
  transition-property: opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  background-color: #f5f8fa;
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


