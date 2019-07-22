import {database} from 'firebase'

export default {
  store (credential) {
    return database().ref('userInfo').push(credential)
  },
  getUser (key) {
    return database().ref().child('userInfo').orderByKey().equalTo(key).once('value')
  },
  getUserById (id) {
    return database().ref().child('userInfo').orderByChild('id').equalTo(id).once('value')
  }
}
