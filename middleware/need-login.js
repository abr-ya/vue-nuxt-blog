/* eslint-disable no-console */
export default function (context) {
  console.log('isLogin', context.store.getters.isLogin)
  if (!context.store.getters.isLogin) {
    console.log('Middleware: need-login - переадресация')
    // возможно, картинки слетают здесь!
    // if (process.client) { context.redirect('/admin/auth') }
    context.redirect('/admin/auth')
  } else {
    console.log('Middleware: need-login - пользователь уже авторизован')
  }
}
