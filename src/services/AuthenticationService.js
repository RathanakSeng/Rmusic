import {auth} from 'firebase'

export default {
  register (credentails) {
    return auth().createUserWithEmailAndPassword(credentails.email, credentails.password)
  },
  signIn (credentails) {
    return auth().signInWithEmailAndPassword(credentails.email, credentails.password)
  },
  signOut () {
    return auth().signOut()
  }
}
