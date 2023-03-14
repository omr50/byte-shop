import { namedQuery } from 'firebase/firestore';
import React, { useState } from 'react';
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

import { signInWithGoogle, createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils';

const defaultFormFields = {
  email: '',
  password: ''
}

const LogIn = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
//   console.log(formFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

const handleSubmit = async (event) => {
    event.preventDefault();

    // have to check if the user exists and if
    // the credentials are correct.
    try{
        const {user} = await signInAuthUserWithEmailAndPassword(email, password);
        resetFormFields();
    } catch(error) {
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found')
            alert('Wrong Email or Password.')
        else
            alert("Server Error during Log In.")
    }

}

  const handleChange = (e) => {
    // using the name parameter on the 
    // forms we can destructure that from
    // the event and use that to update
    // the  formFields.
    const {name, value}= e.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
        <h5>Log In</h5>
    <Form onSubmit={handleSubmit} style={{display:'inline-block'}}>
        <div>
      <Form.Group controlId="formBasicEmail" style={{margin:'15px'}}>
        <Form.Control 
          required
          type="email" 
          placeholder="Enter email" 
          value={email} 
          style={{maxWidth:'300px'}}
          name='email'
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" style={{margin:'15px'}}>
        <Form.Control 
          required
          type="password" 
          placeholder="Password" 
          value={password} 
          style={{maxWidth:'300px'}}
          name='password'
          onChange={handleChange}
        />
        
      </Form.Group>

      <Button variant="primary" type="submit" style={{marginTop:'20px', width:'90%'}}>
        Sign In
      </Button>
      <p style={{marginTop:'20px', marginBottom:'0px'}}>Or</p>
      </div>
      <Button onClick={signInWithGoogle} variant="light" style={{marginTop:'20px', backgroundColor:'lightgray', width:'90%', textAlign:'left'}}>
    <svg style={{marginRight:'10px', marginLeft:'0px'}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
    Sign In with Google
    </Button>
    </Form>
    </div>
  );
}


export default LogIn;