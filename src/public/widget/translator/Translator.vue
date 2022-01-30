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
            <div class="__button__ __btn-translate__" @click="safeTranslate">
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
import type { MessageBase } from "@/model/message/MessageBase";
import { MessageType } from "../../../model/message/MessageType";

export default defineComponent({
  setup() {
    const title = process.env.APP_NAME;

    const safeTranslate = () => {
      let transMe= MessageType[MessageType.TRANSLATE];
      let mb : MessageBase = {
        type: transMe,
        data: "data"
      };
      chrome.runtime.sendMessage(mb,function(response){
        debugger
        alert(response);
      });
    }

    return {
      title,
      safeTranslate
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

%transition-all {
  transition: all .2s;
}

%clear-fix {
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}

%base-line-height {
  $h: 25px;
  height: $h;
  min-height: $h;
  max-height: $h;
  line-height: $h;
}

@mixin apply-to-icon {
  [class^="st-icon-"], [class*=" st-icon-"] {
    @content
  }
}

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
  
  @include apply-to-icon {
    color: $baseFontColor;
    cursor: pointer;

    &:not(.st-icon-down-dir), &:not(.st-icon-down-dir)::before {
      @extend %transition-all;
    }

    &:hover {
      color: $baseFontHoverColor;
    }
  }


 > .__st-box__ {
    width: 250px;
    background-color: $baseBackgroundColor;
    border: 1px solid $baseBackgroundColor;

    .__action-list__, select, textarea {
      border: 0;
      border-radius: 0;
      padding: 0;
    }

    select, .__action-list__ {
      width: 45%;
    }

    select, .__action-list__ {
      @extend %base-line-height;
    }

    // header
    > st-header {
      @extend %clear-fix;
      cursor: move;
      padding: 8px 0;

      .st-icon-pin::before, .st-icon-down-open::before {
        transform: translateY(0) rotate(0deg);
      }
      .__pinned__.st-icon-pin::before {
        transform: rotate(-45deg);
      }

      .__open__.st-icon-down-open::before {
        transform: translateY(2px) rotate(-180deg);
      }

      .st-icon-cog, .st-icon-down-open {
        float: right;
      }

      .st-icon-down-open {
        font-size: 20px !important;
        position: relative;
        bottom: 1px;
      }

      @include apply-to-icon {
        font-size: 22px;
      }
    }

    > .__query-form__ {

      > st-div {
        margin-bottom: 5px;
        @extend %clear-fix;

        > * {
          float: left;
        }

        .__exchange__ {
          @extend %base-line-height;
          width: 10%;
          text-align: center;
        }
      }

      textarea {
        display: block;
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        padding: 2px;
      }

      .__action-list__ {
        margin-left: 10%;
        text-align: center;

        .st-icon-down-dir {
          color: #000;
          position: absolute;
          right: 0;
          top: 2px;
        }

        .__btn-translate__:hover .st-icon-down-dir {
          color: #fff;
        }

        &:hover .__button__ {
          outline: 1px solid #a5a69e;
        }

        .__btn-translate__ {
          position: relative;
        }

        .__button__ {
          @extend %base-line-height;
          text-align: center;
          cursor: pointer;
          background-color: #fff;
          color: #000;
          -webkit-user-select: none;
          user-select: none;

          &:hover {
            background-color: #a5a69e;
            color: #fff;
          }
        }

        &:hover .__expand__ {
          display: block;
        }

        .__expand__ {
          @extend %clear-fix;
          display: none;

          st-div {
            width: 50%;
            float: left;
          }
        }
      }
    }

    > .__translate-result__ {
      color: #000;
      padding: 10px;
      background-color: $baseFontColor;

      .__phonetic__ {
        margin-bottom: 10px;

        st-span:first-child {
          margin-right: 5px;
        }
      }

      .__copy-and-read__ > st-span, .__retry__ {
        display: inline-block;
        margin-right: 10px;
        cursor: pointer;
        color: #12813e;
      }

      .__copy-and-read__ > st-span {
        @extend %transition-all;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        opacity: 0;
      }

      &:hover .__copy-and-read__ > st-span {
        opacity: 1;
      }
    }

    // footer
    > st-footer {
      padding: 5px 10px;
      text-align: right;

      &, & a {
        color: $baseFontColor;
      }
      a {
        @extend %transition-all;
        text-decoration: none;
      }
      a:hover {
        color: $baseFontHoverColor;
      }
    }
  }

  > .__st-btn__ {
    $w: 20px;
    width: $w;
    height: $w;
    line-height: $w;
    color: $baseFontColor;
    text-align: center;
    cursor: pointer;
    background-color: $baseBackgroundColor;
  }



}
</style>

