<template>

    <carousel :items-to-show="3.5" :breakpoints="breakpoints">
        <slide v-for="(film, index) in films.getByName" :key="index">
            <img :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" />
        </slide>
        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import {useFilmsStore} from '@/stores/filmsStore';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { reactive, toRefs } from 'vue'
export default {
    name:'BaseCarousel',
    setup() {
        const films = useFilmsStore();
        const dataCarousel = reactive({
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            breakpoints: {
                // 320px and up
                320: {
                    itemsToShow: 2.5,
                    snapAlign: 'center',
                },
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    snapAlign: 'center',
                },
            },
        })
        return {
            ...toRefs(dataCarousel),
            films
        }
    },
    components:{
        Carousel,
        Slide,
        Pagination,
        Navigation
    }
}
</script>
<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>