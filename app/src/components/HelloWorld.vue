<template>
  <div class="hello">
    firebase検証
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    this.$firebase.collection('chatroom').doc('roomB').collection('message').add({
      message: 'abababaiiaaaa',
      timestamp: Date.now()
    }).then((docRef) => {
    }).catch((error) => {
      console.error('Error adding document: ', error)
    })
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
