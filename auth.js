// Code Snippet: Firebase Authentication with Email/Password, Google, GitHub, and Facebook
// Description: This code snippet demonstrates how to implement Firebase Authentication with Email/Password, Google, GitHub, and Facebook in a web application using JavaScript.
    // ✅ Initialize Firebase
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
    import { 
        getAuth, 
        signInWithEmailAndPassword, 
        createUserWithEmailAndPassword, 
        signInWithPopup, 
        GoogleAuthProvider, 
        GithubAuthProvider, 
        FacebookAuthProvider 
    } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

    const firebaseConfig = {
        apiKey: "AIzaSyBSmA6GbO0yFSzx4WlOUNbzgSq9HvDrx48",
        authDomain: "time-management-f9a62.firebaseapp.com",
        projectId: "time-management-f9a62",
        storageBucket: "time-management-f9a62.firebasestorage.app",
        messagingSenderId: "102201778852",
        appId: "1:102201778852:web:89f7d19eec85d50b57bc31",
        measurementId: "G-6YL0RXGR9G"
    };

    // ✅ Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // ✅ Handle Login
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;
        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert(`Welcome back, ${userCredential.user.email}`);
            console.log(userCredential.user);
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    });

    // ✅ Handle Registration
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const fullName = e.target.querySelector('input[type="text"]').value;
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            alert(`Account created for ${fullName}`);
            console.log(userCredential.user);
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    });

    // ✅ Google Login
    document.querySelector('.fab.fa-google').addEventListener('click', async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            alert(`Welcome, ${result.user.displayName}`);
            console.log(result.user);
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    });

    // ✅ GitHub Login
    document.querySelector('.fab.fa-github').addEventListener('click', async () => {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            alert(`Welcome, ${result.user.displayName}`);
            console.log(result.user);
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    });

    // ✅ Facebook Login
    document.querySelector('.fab.fa-facebook-f').addEventListener('click', async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            alert(`Welcome, ${result.user.displayName}`);
            console.log(result.user);
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    });
