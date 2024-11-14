import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

	const [user, setUser] = useState(null)

	const name = 'potato alu mia'

	const createUser = (email, password) =>{
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signInUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const signOutUser = () =>{
		return signOut(auth);
	}

	useEffect(() =>{
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log('current user', currentUser);
			setUser(currentUser);
		})

		return () =>{
			unsubscribe();
		}

	}, [])

	// onAuthStateChanged(auth, currentUser => {
	// 	if(currentUser){
	// 		console.log('currently logged user', currentUser);
	// 		setUser(currentUser);
	// 	}
	// 	else{
	// 		console.log('no user logged in');
	// 		setUser(null);
	// 	}
	// })

	const authInfo = {
		name,
		user,
		createUser,
		signInUser,
		signOutUser
	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;


/***
 * 1. create context with null as default
 * 2. create provider
 * 3. set a value with something (authInfo)
 * 4. [ attention please]
 * 5. use the authProvider in the main.jsx 
 * 6. access the children inside the authProvider in the main.jsx 
 */