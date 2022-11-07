import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });

const Login=()=>{
    const [formInput,setFormInput]  = useState({
        username:"",
        password:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault();

    }

    const handleChange=(e)=>{
        setFormInput({
            ...formInput,[e.target.name]:e.target.value
        })
        console.log(formInput,"This is the form input")
    }

    return <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChange} placeholder="Enter the username" value={formInput.username}/>    
        <input type="password" name="password" onChange={handleChange} placeholder="Enter the password" value={formInput.password}/>
        <button type="submit">Submit</button>
    </form></>
}

export default Login