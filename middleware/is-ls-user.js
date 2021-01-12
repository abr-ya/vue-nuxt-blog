/* eslint-disable no-console */
export default function (context) {
  console.log('middleware is-user-login')
  if (process.client) {
    console.log(new Date(), 'клиент - проверим LS')
  } else {
    console.log(new Date(), 'сервер - проверим cookies')
  }
  // и не забыть передать реквест
  // если не проверять, будет падать на фронте!
  // console.log('headers', context.ssrContext ? context.ssrContext.req.headers : null)
  context.store.dispatch('initAuth', context.ssrContext ? context.ssrContext.req.headers : null)
}
