// Auth.js
import React, { useEffect, useState } from "react";
import firebaseConfig from "./FirebaseConfig"; // Import the firebaseConfig.js file

const Auth = () => {
  const handleSignInWithGoogle = () => {
    const provider = new firebaseConfig.auth.GoogleAuthProvider();
    firebaseConfig
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Signed in with Google
        const user = result.user;
        console.log("Signed in with Google:", user);
      })
      .catch((error) => {
        // Handle sign-in error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Google Sign-in error:", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h2>Authentication</h2>
      <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Auth;
