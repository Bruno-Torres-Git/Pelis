import { defineStore } from 'pinia'
export const useDbStore = defineStore({
    id:'dbStore',
    state(){
        return {
            navPopulars:null,
            browserLang:null,
        }
    },
    actions:{
        isPopular(n){
            return n ? this.navPopulars = true : this.navPopulars = false;
        }
    },

    getters:{
        getLang(){
           return this.browserLang.substring(0, 2);
        }
    }
})