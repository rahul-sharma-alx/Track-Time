import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (!user) {
        console.log('User is not logged in');
        
        window.location.href = 'login.html';
    }
});

document.getElementById('logout').addEventListener('click', async () => {
    console.log('user log outing..');
    
    const auth = getAuth();
    await signOut(auth);
    window.location.href = 'login.html'; // Redirect to login after logout
});
