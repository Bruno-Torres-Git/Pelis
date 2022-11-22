<template>
  <section class="home-intro full-width full-height" >
    <BaseCover :fullViewport="true" :imgUrl="films.getCoverRand"/>
    <article class="container container_md">
      <BaseModal>
        <template #modal-header>
          <h3 class="margin-bottom-10">
            Modal Title
          </h3>
        </template>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor <strong>sit amet consectetur adipisicing</strong> elit.</p>
        <template #modal-footer>
          <p><small>lorem isupm</small></p>
        </template>
      </BaseModal>
      <BaseListFilms />
    </article>
  </section>
</template>
<script>
import BaseListFilms from '@/components/share-tools/BaseListFilms.vue'
import BaseCover from '@/components/share-tools/BaseCover.vue'
import BaseModal from '@/components/share-tools/BaseModal.vue'
import { useFilmsStore } from '@/stores/filmsStore'
export default {
  name: 'HomeView',
  setup(){
    const films = useFilmsStore();
    return {
      films
    }
  },
  components:{
    BaseListFilms,
    BaseCover,
    BaseModal
  }
}
</script>
