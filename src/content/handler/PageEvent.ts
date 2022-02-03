import TranslatorPop from '@/public/widget/translator/TranslatorPop.vue';
import { createApp } from "vue";
import store from "@/store";

const selection = getSelection();

export async function firstMouseUp(e: MouseEvent){
    if(selection && selection.toString().trim().length>0){
        let reddwarfTranslateDiv = document.createElement("div");
        reddwarfTranslateDiv.id = "uniq-anchor-point";
        document.body.appendChild(reddwarfTranslateDiv);
        let props = {
            word: selection.toString().trim()
        };
        const app = createApp(TranslatorPop,props);
        app.use(store);
        debugger;
        let vm = app.mount("#uniq-anchor-point");
        document.body.appendChild(vm.$el)
    }
}
