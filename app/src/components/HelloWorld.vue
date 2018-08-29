<template>
  <div class="hello">
    firebase検証
    <input type="text" v-model="input" />
    <button @click="insert">データを作成</button>
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
      chat: this.$store.state.firebase.chat,
      input: ''
    }
  },
  created: function () {
    this.$store.dispatch('firebase/fetch')
  },
  methods: {
    insert: function () {
      this.$store.dispatch('firebase/insertData', {text: this.input})
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
