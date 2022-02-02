import TranslatorPop from '@/public/widget/translator/TranslatorPop.vue';
import { createApp } from "vue";
import store from "@/store";

const selection = getSelection();

export async function firstMouseUp(e: MouseEvent){
    if(selection && selection.toString().trim().length>0){
        const app = createApp(TranslatorPop);
        app.use(store);
        let vm = app.mount("#app");
        document.querySelector('body')?.appendChild(vm.$el)
    }
}
