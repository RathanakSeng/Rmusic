import auth from '../services/AuthenticationService'
import user from '../services/UserService'
export default {
  register (credentails) {
    return auth.register(credentails).then(
      res => {
        return user.store({
          id: res.user.uid,
          username: credentails.username
        }).then(
          res => {
            return user.getUser(res.key).then(
              res => {
                const obj = res.val()
                for (let key in obj) {
                  return obj[key]
                }
              }
            )
          }
        )
      }
    )
  },
  signIn (credentails) {
    return auth.signIn(credentails).then(
      res => {
        return user.getUserById(res.user.uid).then(
          res => {
            const obj = res.val()
            for (let key in obj) {
              return obj[key]
            }
          }
        )
      }
    )
  },
  signOut () {
    return auth.signOut()
  }
}
