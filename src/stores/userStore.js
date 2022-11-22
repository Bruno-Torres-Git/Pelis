import { fb, auth } from "@/firebase.js"
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'userStore',
    state(){
        return {
            user:null
        }
    },
    actions:{
        setUser(){
            return new Promise((resolve, reject)=>{
                const unsubscribe = auth.onAuthStateChanged(
                    user => {
                        unsubscribe();
                        resolve(user);
                    },
                    ()=> {
                        reject();
                    }
                )
            })
        },

        async setGoogleLogin(){
            const provider = new fb.auth.GoogleAuthProvider();
            await auth.signInWithPopup(provider);
            this.user = auth.currentUser;
        },

        async setLoginM(email, password){
            await auth.signInWithEmailAndPassword(email, password);
            this.user = auth.currentUser;
        },

        async setRegister( name, email, password){
            await auth.createUserWithEmailAndPassword(email, password);
            const user = auth.currentUser;
            await user.updateProfile({
              displayName: name
            });
            this.user = user;
        },

        async setLogout() {
            await auth.signOut();
            this.user = null;
        },
    
        async setResetPass(email) {
            await auth.sendPasswordResetEmail(email);
        },

        setCheckAuth() {
            auth.onAuthStateChanged((user)=>{
              user ? this.user = user : this.user = null;
            })
        }
    
    },
});



