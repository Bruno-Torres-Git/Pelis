<template>
    <div class="input-wrap relative flex x-space-between" :class="{'input-wrap_open':isOpen}">
        <button @click="searchIsOpen()" class="button button_icon white material-symbols-outlined">
            search
        </button>
        <input type="search" 
        v-model="searchVal" 
        @keyup="films.setByName(searchVal)" 
        @focus="store.isPopular(false)"/>
        <button
         v-if="showClearBtn"
         @click="clearSearch()" 
         class="button button_icon white material-symbols-outlined">
            close
        </button>
    </div>
</template>
<script>
import {useFilmsStore} from '@/stores/filmsStore'
import {useDbStore} from '@/stores/dbStore'
import { reactive, toRefs, computed } from 'vue';
export default {
    name:'BaseSearch',
    setup() {
        const films = useFilmsStore();
        const store = useDbStore();
        const dataSearch = reactive({
            searchVal:'',
            isOpen:false,
            showClearBtn:computed(()=>{
                return dataSearch.searchVal.length ? true : false 
            })
        });
        function clearSearch(){
            dataSearch.searchVal = ''
        }
        function searchIsOpen(){
            dataSearch.isOpen = !dataSearch.isOpen
        }
        return {
            ...toRefs(dataSearch),
            clearSearch,
            searchIsOpen,
            films,
            store
        }
    },
}
</script>