/* eslint-disable no-console */
export default function (context) {
  console.log('Need Login Middleware')
  if (!context.store.getters.isLogin) {
    console.log('Need Login Middleware - переадресация')
    context.redirect('/admin/auth')
  } else {
    console.log('Need Login Middleware - пользователь уже авторизован')
  }
}
