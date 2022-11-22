<template>
    <template v-if="store.navPopulars">
        <h2>Las más votadas</h2>
        <ul class="bg-black white flex relative">
            <li v-for="(film, index) in films.getMoreVoted" :key="index">
                {{film.original_title}} - average: {{film.vote_average}}
            </li>
        </ul>
        <BaseCarousel />
    </template>
    <ul class="grid grid_4 relative white" v-else>
        <li class="item card" v-for="(film, index) in films.getByName" :key="index">
            <div class="card-cover">
                 <BaseCover :imgUrl="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" :overlay="false"/>
            </div>
            {{index}}-{{film.original_title}}
        </li>
    </ul>
</template>
<script>
import {useFilmsStore} from '@/stores/filmsStore'
import {useDbStore} from '@/stores/dbStore'
import BaseCover from '@/components/share-tools/BaseCover.vue'
import BaseCarousel from '@/components/share-tools/BaseCarousel.vue'
import { reactive, toRefs } from 'vue'
export default {
    name:'BaseListFilms',
    setup(){
        const films = useFilmsStore();
        const store = useDbStore();
        const dataFilms = reactive({
        });
        return {
            ...toRefs(dataFilms),
            films,
            store
        }
    },
    components:{
        BaseCover,
        BaseCarousel
    }
}
</script>