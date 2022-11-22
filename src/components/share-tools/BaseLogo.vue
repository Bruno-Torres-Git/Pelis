<template>
    <img class="logo" :src="logo" alt="" width="100">
</template>
<script>
import {reactive, toRefs} from 'vue'
export default {
    name:'BaseLogo',
    props:{
        logoUrl:{
            type: String,
        },
        
    },
    setup(props) {
        const dataLogo = reactive({
            logo:require('../../assets/images/logo.svg')
        });
        return {
            ...toRefs(dataLogo),
            props
        }
    },
}
</script>