export default{
  namespaced: true,
  actions: {
    testa ({ commit }) {
      return new Promise(resolve => {
        resolve('aaaa')
      })
    }
  }
}
