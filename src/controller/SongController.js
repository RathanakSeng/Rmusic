import {database} from 'firebase'

export default {
  store (data) {
    return database().ref('songs').push(data)
  },
  read () {
    return database().ref('songs').once('value')
  }
}
