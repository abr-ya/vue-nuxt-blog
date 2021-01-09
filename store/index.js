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
      },
      addPost (state, newPost) {
        state.loadedPosts.push(newPost)
      },
      editPost (state, editedPost) {
        const postId = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postId] = editedPost
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
      },
      addPost (vuexContext, newPost) {
        const datedPost = { ...newPost, date: new Date() }
        return axios.post(`${process.env.BACK}/posts.json`, datedPost)
          .then((res) => {
            // eslint-disable-next-line no-console
            console.log(res) // убедимся, что всё хорошо
            vuexContext.commit('addPost', { id: res.data.name, ...datedPost }) // добавим в store
          })
          // eslint-disable-next-line no-console
          .catch(error => console.log(error))
      },
      editPost (vuexContext, editedPost) {
        return axios.put(`${process.env.BACK}/posts/${editedPost.id}.json`, editedPost)
          // eslint-disable-next-line no-console
          .then((res) => {
            // eslint-disable-next-line no-console
            console.log(res) // убедимся, что всё хорошо
            vuexContext.commit('editPost', editedPost) // добавим в store
          })
          // eslint-disable-next-line no-console
          .catch(error => console.log(error))
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
