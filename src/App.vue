<template>
  <BaseLayout />
</template>
<script>
import BaseLayout from '@/components/layout/BaseLayout.vue'
import {useFilmsStore} from '@/stores/filmsStore'
import {useDbStore} from '@/stores/dbStore'
import { onMounted } from 'vue'
export default {
  setup() {
    const films = useFilmsStore();
    const store = useDbStore();
    films.setFilms();
    onMounted(()=>{
      return store.browserLang = navigator.language || navigator.userLanguage;
    })
    return {
      films,
    }
  },
  components:{
    BaseLayout
  }
}
</script>
<style lang="scss">
  @import '@/assets/css/normalize.min.css';
  @import '@/assets/css/styles.scss';
</style>
