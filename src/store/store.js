import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        movies: ''
    },
    mutations: {
        showmovies(state, msg) {
            state.movies = msg;
        }
    }
})

export default store