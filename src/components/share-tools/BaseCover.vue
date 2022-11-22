<template>
    <div class="cover" :class="[isFullViewport]">
        <img loading="lazy" :src="props.imgUrl" alt="" />
        <div v-if="props.overlay" class="overlay" ></div>
    </div>
</template>
<script>
import { reactive, toRefs, computed } from 'vue';
export default {
    name:'BaseCover',
    props:{
        fullViewport:{
            type:Boolean,
            default:false
        },
        overlay:{
            type:Boolean,
            default:true
        },
        imgUrl:{
           type: String,
        }
    },
    setup(props) {
        const cover = reactive({
            isFullViewport: computed(()=>{
                return props.fullViewport ? 'full-width vh-100' : 'full-width full-height';
            }) 
        });
        return {
            ...toRefs(cover),
            props,
        }
    },
}
</script>