<template>
  <div id="__selection-translator__">
    <div class="__st-box__">
      <header>
        <span class="st-icon-pin" title="固定"></span>
      </header>
      <div class="__query-form__">
        <div>
          <textarea placeholder="输入要翻译的句子或单词"></textarea>
        </div>
        <div>
          <select>
            <option value="">自动判断</option>
            <option></option>
          </select>
          <div class="__exchange__">
            <span class="st-icon-exchange"></span>
          </div>
          <select>
            <option value="">自动选择</option>
            <option></option>
          </select>
        </div>
        <div>
          <select>
            <option value="YouDao">有道翻译</option>
            <option value="BaiDu">百度翻译</option>
            <option value="Google">谷歌翻译</option>
            <option value="GoogleCN">谷歌翻译（国内）</option>
            <option value="Reddwarf">红矮星翻译</option>
          </select>
          <div class="__action-list__">
            <div class="__button__ __btn-translate__">
              翻译
              <span class="st-icon-down-dir"></span>
            </div>
            <div class="__expand__">
              <div class="__button__">朗读</div>
              <div class="__button__">复制</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const title = process.env.APP_NAME;
    return {
      title,
    };
  },
  components: {
    //Options,
  },
});
</script>

<style lang="scss">
@charset "utf-8";

$baseBackgroundColor: #32cd74;
$baseFontColor: #fff;
$baseFontHoverColor: #9a6a16;

#__selection-translator__ {
  &,
  & * {
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1.4;
    text-align: left;
  }

  header,
  div,
  footer,
  ul,
  li {
    display: block;
  }

  span {
    display: inline;
  }

  textarea {
    color: #000;
    background-color: #fff;
    height: 46px;
    min-height: 46px;
  }
}
</style>

