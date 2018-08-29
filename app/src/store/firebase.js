import firebase from '@/firebase'
export default{
  namespaced: true,
  state: {
    chat: []
  },
  actions: {
    insertData ({ commit }, { text }) {
      firebase.collection('chatroom').doc('roomB').collection('message').add({
        message: text,
        timestamp: Date.now()
      }).then((docRef) => {
      }).catch((error) => {
        console.error('Error adding document: ', error)
      })
      return new Promise(resolve => {
        resolve('aaaa')
      })
    },
    fetch ({ commit, state }) {
      firebase.collection('chatroom').doc('roomB').collection('message').orderBy('timestamp', 'asc').onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          const payload = {
            id: change.doc.id,
            message: change.doc.data().message,
            timestamp: change.doc.data().timestamp
          }
          commit('setChat', payload)
        })
      })
    }
  },
  mutations: {
    setChat (state, payload) {
      state.chat.push(payload)
    }
  }
}
