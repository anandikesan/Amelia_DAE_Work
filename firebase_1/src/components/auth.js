import {auth} from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, {useState} from "react";


function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    console.log(auth?.currentUser?.email)

async function signUp(){
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    }
    catch(err) {
        alert(err)
    }
};
async function signIn(){
    try {
        await signInWithEmailAndPassword(auth, email, password)
    }
    catch(err) {
        alert(err)
        };
    }
async function logout() {
    try{
        await signOut(auth);
    } catch(err) {
        console.error(err);
    }
}
   
    return(
        <div>
          <input placeholder="Username.." onChange={(e) => setEmail(e.target.value)}></input>
          <input placeholder="Password.." onChange={(e) => setPassword(e.target.value)}></input>

          <button onClick={signUp}>Create Account</button>
          <button onClick={signIn}>Sign In</button>
          <button onClick={logout}>Sign Out</button>
        </div>
    )
}


export default Auth;
