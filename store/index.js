import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return axios.get(`${process.env.BACK}/posts.json`)
          .then((res) => {
            const postArray = []
            for (const key in res.data) {
              postArray.push({ id: key, ...res.data[key] })
            }
            vuexContext.commit('setPosts', postArray)
          })
          .catch(e => context.error(e))
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
