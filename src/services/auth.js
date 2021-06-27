import firebase from "../config/firebase-config"

const githubAuth = (provider) => {
    try {
        const result = firebase.auth().signInWithPopup(provider)
        return result
    } catch (error) {
        console.log(error)   
    }
}

export default githubAuth