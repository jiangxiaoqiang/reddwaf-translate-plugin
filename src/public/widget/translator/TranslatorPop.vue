<template>
    <div id="reddwarf-translate-app">I am a pop1</div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
    props:{
        word: String
    },
    setup(props) {
        alert(props.word);

        
        
    },
})
</script>

<style scoped>


</style>
