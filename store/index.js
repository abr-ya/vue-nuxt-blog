/* eslint-disable no-console */
import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

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
      },
      clearToken (state) {
        state.token = null
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
            console.log(res) // убедимся, что всё хорошо
            vuexContext.commit('addPost', { id: res.data.name, ...datedPost }) // добавим в store
          })
          .catch(error => console.log(error))
      },
      editPost (vuexContext, editedPost) {
        return axios.put(
          `${process.env.BACK}posts/${editedPost.id}.json?auth=${vuexContext.state.token}`,
          editedPost
        )
          .then((res) => {
            console.log(res) // убедимся, что всё хорошо
            vuexContext.commit('editPost', editedPost) // добавим в store
          })
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
            console.log(!authData.isLogin ? 'SignUp' : 'SignIn')
            console.log(res)
            vuexContext.commit('setToken', res.idToken)
            localStorage.setItem('token', res.idToken)
            Cookie.set('token', res.idToken)
            const liveToS = Math.floor(new Date() / 1000) + +res.expiresIn
            console.log(liveToS)
            localStorage.setItem('tokenLiveTo', liveToS)
            Cookie.set('tokenLiveTo', liveToS)
            // vuexContext.dispatch('setLogoutTimer', res.expiresIn)
          })
          .catch((e) => { console.log(e) })
      },
      // setLogoutTimer (vuexContext, time) {
      //   console.log(`токен будет очищен через ${time} секунд`)
      //   setTimeout(() => {
      //     vuexContext.commit('clearToken')
      //   }, time * 1000)
      // },
      // на сервер - из кук, на клиенте - из LS
      initAuth (vueContext, headers) {
        let token = ''
        let liveTime
        if (headers) {
          if (headers.cookie) {
            const cooks = headers.cookie.split(';').map(c => (c.trim()))
            // console.log('cooks:', cooks)
            const token = cooks.find(c => c.startsWith('token=')).split('=')[1]
            const tokenLiveToCo = cooks.find(c => c.startsWith('tokenLiveTo=')).split('=')[1]
            liveTime = tokenLiveToCo - Math.floor(new Date() / 1000)
            console.log('token:', token)
            console.log('взяли токен из куки, ему жить секунд: ', liveTime)
          }
        } else {
          token = localStorage.getItem('token')
          const tokenLiveTo = +localStorage.getItem('tokenLiveTo')
          liveTime = tokenLiveTo - Math.floor(new Date() / 1000)
          console.log('взяли токен из LS, ему жить секунд: ', liveTime)
        }
        if (liveTime > 0 && token) {
          // vueContext.dispatch('setLogoutTimer', liveTime)
          vueContext.commit('setToken', token)
        } else {
          vueContext.commit('clearToken')
        }
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      },
      isLogin (state) {
        return state.token != null
      }
    }
  })
}

export default createStore
