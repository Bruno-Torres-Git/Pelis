<template>
    <BaseHeader />
    <BaseMain />
    <BaseFooter />
</template>
<script>
import BaseHeader from '@/components/layout/BaseHeader.vue'
import BaseMain from '@/components/layout/BaseMain.vue'
import BaseFooter from '@/components/layout/BaseFooter.vue'
export default {
    name:'BaseLayout',
    setup() {
        
    },
    components:{
        BaseHeader,
        BaseMain,
        BaseFooter
    }
}
</script>