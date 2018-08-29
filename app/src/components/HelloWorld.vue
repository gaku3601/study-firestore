<template>
  <div class="hello">
    firebase検証
    <input type="text" v-model="input" />
    <button @click="doSend">書き込み</button>
    <div v-for="(v, i) in chat" :key="i">
      {{v}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input: '',
      chat: []
    }
  },
  created: function () {
    this.$firebase.collection('chatroom').doc('roomB').collection('message').orderBy('timestamp', 'asc').onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        const payload = {
          id: change.doc.id,
          message: change.doc.data().message,
          timestamp: change.doc.data().timestamp
        }
        this.chat.push(payload)
      })
    })
  },
  methods: {
    doSend: function () {
      this.$firebase.collection('chatroom').doc('roomB').collection('message').add({
        message: this.input,
        timestamp: Date.now()
      }).then((docRef) => {
      }).catch((error) => {
        console.error('Error adding document: ', error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
