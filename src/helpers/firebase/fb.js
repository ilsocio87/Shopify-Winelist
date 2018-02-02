import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: ""
})

//add state 

export function isLoggedIn() {
  return firebase.auth().currentUser()
    .then(()=> user)
}

export function auth(email, pw) {
  return firebase.auth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout() {
  return firebase.auth().signOut()
}

export function login(email, pw) {
  return firebase.auth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword(email) {
  return firebase.auth().sendPasswordResetEmail(email)
}

export function saveUser(user) {
  return firebase.ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}