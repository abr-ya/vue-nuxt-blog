import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },
      setToken (state, token) {
        state.token = token
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return axios.get(`${process.env.BACK}posts.json`)
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
        return axios.post(
          `${process.env.BACK}posts.json?auth=${vuexContext.state.token}`,
          datedPost
        )
          .then((res) => {
            // eslint-disable-next-line no-console
            console.log(res) // убедимся, что всё хорошо
            vuexContext.commit('addPost', { id: res.data.name, ...datedPost }) // добавим в store
          })
          // eslint-disable-next-line no-console
          .catch(error => console.log(error))
      },
      editPost (vuexContext, editedPost) {
        return axios.put(
          `${process.env.BACK}posts/${editedPost.id}.json?auth=${vuexContext.state.token}`,
          editedPost
        )
          .then((res) => {
            // eslint-disable-next-line no-console
            console.log(res) // убедимся, что всё хорошо
            vuexContext.commit('editPost', editedPost) // добавим в store
          })
          // eslint-disable-next-line no-console
          .catch(error => console.log(error))
      },
      authUser (vuexContext, authData) {
        let signUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API}`
        if (!authData.isLogin) {
          signUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.API}`
        }
        // SignUP or SignIn
        return this.$axios.$post(signUrl,
          {
            email: authData.mail,
            password: authData.pass,
            returnSecureToken: true
          })
          .then((res) => {
            // eslint-disable-next-line no-console
            console.log(!authData.isLogin ? 'SignUp' : 'SignIn')
            // eslint-disable-next-line no-console
            console.log(res)
            vuexContext.commit('setToken', res.idToken)
          })
          // eslint-disable-next-line no-console
          .catch((e) => { console.log(e) })
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
