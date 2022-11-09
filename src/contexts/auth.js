
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from "firebase/auth"


//  const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };
const config = {
  apiKey: "AIzaSyCLZTl-uSiBoT65SPHR7XWTixnMRtYgQv4",
  authDomain: "masterminds-9786b.firebaseapp.com",
  projectId: "masterminds-9786b",
  storageBucket: "masterminds-9786b.appspot.com",
  messagingSenderId: "651708189533",
  appId: "1:651708189533:web:c35688e35b055069c576b4",
  measurementId: "G-G805F4B5HZ"
};
 
// Initialize Firebase
export const app = firebase.initializeApp(config);
export const auth = getAuth(app)

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in, by setting result to false
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      console.log(authResult.user)
      var user = authResult.user;
      return false;
    },
  },
};

// export const validateToken = () => {
//     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//       console.log(idToken)
//       fetch('https://masterminds-9786b.web.app/api/v1/validate-token', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           token: idToken
//         }),
//       } ).then((response) => response.json())
//       .then((data) => {
//         console.log('Success:', data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//     }).catch(function(error) {
//       // Handle error
//     });
//   }