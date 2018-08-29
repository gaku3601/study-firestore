import firebase from '@/firebase'
export default{
  namespaced: true,
  actions: {
    insertData ({ commit }) {
      firebase.collection('chatroom').doc('roomB').collection('message').add({
        message: 'stateから',
        timestamp: Date.now()
      }).then((docRef) => {
      }).catch((error) => {
        console.error('Error adding document: ', error)
      })
      return new Promise(resolve => {
        resolve('aaaa')
      })
    }
  }
}
