import Vuex from 'vuex'

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
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line nuxt/no-timing-in-fetch-data
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              { id: '1', title: 'First Post', preText: 'Prev text first post', thumb: 'https://picsum.photos/seed/003/400' },
              { id: '2', title: 'Second Post', preText: 'Prev text second post', thumb: 'https://picsum.photos/seed/002/400' },
              { id: '3', title: 'Third Post', preText: 'Prev text third post', thumb: 'https://picsum.photos/seed/001/400' }
            ])
            resolve()
          }, 1000)
        })
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
