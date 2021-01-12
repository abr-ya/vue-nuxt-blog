/* eslint-disable no-console */
export default function (context) {
  console.log('isUserInLS?')
  if (process.client) {
    console.log('клиент - проверим LS')
    context.store.dispatch('initAuth')
  } else {
    console.log('сервер...')
  }
}
