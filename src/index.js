import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// Your web app's Firebase configuration
 
const firebaseConfig = {
  apiKey: "AIzaSyCfGwxFazzTTYi0uG7DctDGUpTHjxL1Iqo",
  authDomain: "test-88283.firebaseapp.com",
  projectId: "test-88283",
  storageBucket: "test-88283.appspot.com",
  messagingSenderId: "91555136670",
  appId: "1:91555136670:web:1266b626b3455faaf0678f"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 const db = getFirestore()


 const colRef = collection(db, 'signUp')

 getDocs(colRef)
 .then((snapshot) => {
  //  console.log(snapshot.docs)
   let signUp = []
   snapshot.docs.forEach((doc) => {
      signUp.push({ ...doc.data(), id: doc.id })
    })
  console.log(signUp)
 })
 .catch(err => {
   console.log(err.message)
  })

  const addRegistrationForm = document.querySelector('.add')
  addRegistrationForm.addEventListener('submit' , (e) => {
      e.preventDefault()
   
      addDoc(colRef, {
          fname: addRegistrationForm.fname.value,
          lname: addRegistrationForm.lname.value,
          email: addRegistrationForm.email.value,
          password: addRegistrationForm.password.value,
          number: addRegistrationForm.number.value,
          country: addRegistrationForm.country.value,

        })
        .then(() => {
           addRegistrationForm.reset()
          })
        })
 
        const deleteRegistrationForm = document.querySelector('.delete')
        deleteRegistrationForm.addEventListener('submit' , (e) => {
           e.preventDefault()
         
           const docRef = doc(db ,'signUp', deleteRegistrationForm.id.value)
         
           deleteDoc(docRef)
           .then(() => {
               deleteRegistrationForm.reset()
             })
            })


// const firebaseConfigOne = {
//   apiKey: "AIzaSyDeEBz5gRVtbVCvxx1WvcLMjaKsQRLtqxs",
//   authDomain: "form-validation-c89fa.firebaseapp.com",
//   projectId: "form-validation-c89fa",
//   storageBucket: "form-validation-c89fa.appspot.com",
//   messagingSenderId: "174442886598",
//   appId: "1:174442886598:web:fd1bc10c97f405e1be2ec7"
// };

// initializeApp(firebaseConfigOne);
// const tb = getFirestore()


// console.log(colRef);
// const colRefOne = collection(tb, 'signIn')

//  getDocs(colRefOne)
//  .then((snapshot) => {
//    let signIn = []
//    snapshot.docs.forEach((doc) => {
//     signIn.push({ ...doc.data(), id: doc.id })
//     })
//   console.log(signIn)
//  })
//  .catch(err => {
//    console.log(err.message)
//   })


  
        
          // const addLoginForm = document.querySelector('.addlog')
          // addLoginForm.addEventListener('submit' , (e) => {
          // e.preventDefault()
       
          // addDoc(colRefOne, {
          //     emailLogin: addLoginForm.emailLogin.value,
          //     passwordLogin: addLoginForm.passwordLogin.value,
   
          //   })
          //   .then(() => {
          //      addLoginForm.reset()
          //     })
          //   })

        

                       
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
