<template>
    <nav class="main-navigation">
        <button @click="menu()" class="button white button-icon material-symbols-outlined">
          {{iconName}}
        </button>
        <Transition>
        <ul v-if="isShow" class="nav">
            <li>
                <router-link to="/">Inicio</router-link> 
            </li>
             <li>
                <a href="#" role="button">Género</a>
            </li>
             <li>
                <a href="#" @click.prevent="store.isPopular(true)" role="button">Populares</a>
            </li>
            <li>
                <a href="#" role="button">Lenguaje: {{store.getLang}}</a>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
        </Transition> 
    </nav>
</template>
<script>
import { useDbStore } from '@/stores/dbStore'
import { reactive, toRefs, computed } from 'vue';
export default {
    name:'BaseMainNavigation',
    props:{
        //isFooter: false
    },
    setup() {
        const store = useDbStore();
        const dataNav = reactive({
            isShow: false,
            iconName:computed(()=>{
                return dataNav.isShow ? 'close' : 'menu' 
            }),
           /* navStatus:computed(()=>{
                return dataNav.isShow ? 'nav_show' : 'nav_hide' 
            })*/
        });
        function menu(){
            dataNav.isShow = !dataNav.isShow;
        }
        return {
           ...toRefs(dataNav),
           menu,
           store
        }
    },
}
</script>
