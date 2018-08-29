import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config'
const firebaseApp = firebase.initializeApp(config)
const settings = {timestampsInSnapshots: true}

export default class Firestore {
  static install = (Vue, options) => {
    Object.defineProperty(Vue.prototype, '$firebase', {
      get () { return this.$root._firebase }
    })
    Vue.mixin({
      beforeCreate () {
        if (this.$options.firebase) {
          firebaseApp.firestore().settings(settings)
          this._firebase = firebaseApp.firestore()
        }
      }
    })
  }
}
