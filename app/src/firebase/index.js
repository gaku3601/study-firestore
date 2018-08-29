import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config'
const firebaseApp = firebase.initializeApp(config)
const settings = {timestampsInSnapshots: true}

firebaseApp.firestore().settings(settings)
export default firebaseApp.firestore()
