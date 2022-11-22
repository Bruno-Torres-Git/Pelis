import { defineStore } from 'pinia'
import { apiKey } from '@/enviroments/enviroment'
export const useFilmsStore = defineStore({
    id:'filmStore',
    state(){
        return {
            films:[],
            page:1,
            totalPages:null,
            searchFilms:[]
        }
    },
    actions:{
        async setFilms(){
            await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${this.page}`)
            .then( resp => resp.json())
            .then( data => {
                this.films = data.results;
                this.totalPages = data.total_pages;
                console.log(data.results)
            })
            .catch(error => {
                console.log(error);
            });
        },
        setByName(movie){
            this.searchFilms = this.films.filter(film => film.original_title.toLowerCase().includes(movie.toLowerCase()));
        }
    },
    getters:{
        getMoreVoted(){
            let average = this.films.filter(film => {
                return film.vote_average >= 7;
            })
            //let sorted = average.sort((a, b) => b.vote_average - a.vote_average);
            let sorted = average.sort((a, b) => a.vote_average < b.vote_average ? 1 : -1)
            return sorted; 
        },
        getByName(){
            return this.searchFilms.length ? this.searchFilms : this.films;
        },
        getCoverRand(){
            if(this.films.length){
                let index = Math.floor(Math.random() * this.films.length);
                return `https://image.tmdb.org//t/p/original/${this.films[index].poster_path}`
            }
        }
    }
})