<template>
    <header class="main-header fixed top-0 left-0 full-width">
        <div class="container container_md full-height flex wrap y-center">
            <div class="full-width flex wrap x-space-between">
                <div class="item-a flex y-items-center">
                    <router-link to="/">
                        <BaseLogo />
                    </router-link>
                    <BaseMainNavigation />
                </div>
                <div class="item-b">
                    <BaseSearch />
                </div>
            </div> 
        </div>
    </header>
</template>
<script>
import BaseMainNavigation from '@/components/share-tools/BaseMainNavigation.vue'
import BaseSearch from '@/components/share-tools/BaseSearch.vue'
import BaseLogo from '@/components/share-tools/BaseLogo.vue'
export default {
    name:'BaseHeader',
    setup() {
        
    },
    components:{
        BaseMainNavigation,
        BaseSearch,
        BaseLogo
    }
}
</script>