/* eslint-disable no-console */
// тестовый мидлвейр, который показывает кол-во постов в Store
export default function (context) {
  console.log('Posts test', context.store.getters.loadedPosts.length)
}
